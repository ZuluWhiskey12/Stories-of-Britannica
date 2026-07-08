/* Stories of Britannica memory log: session-only, no Harlowe save variables. */
(function () {
	"use strict";

	var KEY = "sobi.memoryLog.v1";
	var LIMIT = 40;
	var lastPassageSignature = "";
	var passageTimer = 0;
	var statGainTimer = 0;
	var lastStatValues = {};
	var statGainAudios = {};
	var skipNextStatGainCheck = false;
	var statGainSounds = {
		Spark: "assets/audio/spark-se-flow-1.mp3",
		Research: "assets/audio/research-se-flow-1.mp3",
		Weapon: "assets/audio/weapon-se-flow-1.mp3",
		Fusion: "assets/audio/fusion-se-flow-1.mp3",
		Oath: "assets/audio/oath-se-flow-1.mp3",
		Forbidden: "assets/audio/forbidden-se-flow-1.mp3"
	};

	function clean(text) {
		return String(text || "").replace(/\s+/g, " ").trim();
	}

	function escapeHtml(text) {
		return String(text || "")
			.replace(/&/g, "&")
			.replace(/</g, "<")
			.replace(/>/g, ">")
			.replace(/"/g, '"')
			.replace(/'/g, "'");
	}

	function loadEntries() {
		try {
			var parsed = JSON.parse(sessionStorage.getItem(KEY) || "[]");
			return Array.isArray(parsed) ? parsed : [];
		} catch (error) {
			return [];
		}
	}

	function saveEntries(entries) {
		try {
			sessionStorage.setItem(KEY, JSON.stringify(entries.slice(-LIMIT)));
		} catch (error) {
			/* If storage is blocked, the log simply becomes temporary. */
		}
	}

	function entryTime() {
		try {
			return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
		} catch (error) {
			return "";
		}
	}

	function ensureStatGainAudio(statName) {
		if (!statGainSounds[statName] || typeof Audio === "undefined") {
			return null;
		}
		if (statGainAudios[statName]) {
			return statGainAudios[statName];
		}
		var audio = new Audio(statGainSounds[statName]);
		audio.preload = "auto";
		audio.volume = 0.62;
		statGainAudios[statName] = audio;
		return audio;
	}

	function armStatGainAudio() {
		Object.keys(statGainSounds).forEach(function (statName) {
			var audio = ensureStatGainAudio(statName);
			if (!audio || audio.sobiArmed === true) {
				return;
			}
			audio.sobiArmed = true;
			try {
				var volume = audio.volume;
				audio.volume = 0;
				var playAttempt = audio.play();
				if (playAttempt && typeof playAttempt.then === "function") {
					playAttempt.then(function () {
						audio.pause();
						audio.currentTime = 0;
						audio.volume = volume;
					}).catch(function () {
						audio.volume = volume;
					});
				} else {
					audio.pause();
					audio.currentTime = 0;
					audio.volume = volume;
				}
			} catch (error) {
				audio.volume = 0.62;
			}
		});
	}

	function playStatGainAudio(statName, delay) {
		var audio = ensureStatGainAudio(statName);
		if (!audio) {
			return;
		}
		window.setTimeout(function () {
			try {
				audio.pause();
				audio.currentTime = 0;
				audio.volume = 0.62;
				var playAttempt = audio.play();
				if (playAttempt && typeof playAttempt.catch === "function") {
					playAttempt.catch(function () {
						/* Browser audio permissions can block sound until the next player click. */
					});
				}
			} catch (error) {
				/* A failed sound should never interrupt the passage. */
			}
		}, delay || 0);
	}

	function currentStatValues() {
		var passage = visiblePassage();
		var statlines = passage ? Array.prototype.slice.call(passage.querySelectorAll(".statline")) : [];
		if (!statlines.length) {
			statlines = Array.prototype.slice.call(document.querySelectorAll(".statline"));
		}
		for (var i = statlines.length - 1; i >= 0; i -= 1) {
			var text = clean(statlines[i].textContent);
			if (!/\bSpark:\s*-?\d+/i.test(text)) {
				continue;
			}
			return Object.keys(statGainSounds).reduce(function (values, statName) {
				var match = text.match(new RegExp("\\b" + statName + ":\\s*(-?\\d+)", "i"));
				if (match) {
					values[statName] = Number(match[1]);
				}
				return values;
			}, {});
		}
		return {};
	}

	function checkStatGains() {
		var stats = currentStatValues();
		var statNames = Object.keys(statGainSounds);
		if (!statNames.some(function (statName) { return typeof stats[statName] === "number" && !Number.isNaN(stats[statName]); })) {
			return;
		}
		if (skipNextStatGainCheck) {
			lastStatValues = stats;
			skipNextStatGainCheck = false;
			return;
		}
		statNames.filter(function (statName) {
			return typeof stats[statName] === "number" &&
				typeof lastStatValues[statName] === "number" &&
				stats[statName] > lastStatValues[statName];
		}).forEach(function (statName, index) {
			playStatGainAudio(statName, index * 110);
		});
		lastStatValues = stats;
	}

	function isStateRestoreClick(target) {
		var link = target.closest("tw-link,.enchantment-link,a");
		var text = link ? clean(link.textContent) : "";
		if (target.closest(".tester-jump-list")) {
			return true;
		}
		if (target.closest(".quick-load-button")) {
			return true;
		}
		return /^Load\b/i.test(text) && !!target.closest(".checkpoint-load-grid,.pause-checkpoint-grid,.checkpoint-slots,.save-menu");
	}

	function addEntry(entry) {
		if (!entry || !entry.text) {
			return;
		}
		var entries = loadEntries();
		entries.push(Object.assign({
			id: String(Date.now()) + "-" + Math.random().toString(16).slice(2),
			time: entryTime()
		}, entry));
		saveEntries(entries);
		renderLog();
	}

	function ensureOverlay() {
		var existing = document.querySelector(".memory-log-overlay");
		if (existing) {
			return existing;
		}
		var overlay = document.createElement("div");
		overlay.className = "memory-log-overlay";
		overlay.setAttribute("aria-hidden", "true");
		overlay.innerHTML =
			'<div class="memory-log-panel" role="dialog" aria-modal="true" aria-labelledby="memory-log-title">' +
				'<div class="memory-log-head">' +
					'<div class="memory-log-title" id="memory-log-title">Memory Log</div>' +
					'<div class="memory-log-actions">' +
						'<button type="button" class="memory-log-clear">Clear</button>' +
						'<button type="button" class="memory-log-close">Close</button>' +
					'</div>' +
				'</div>' +
				'<div class="memory-log-scroll" aria-live="polite"></div>' +
			'</div>';
		document.body.appendChild(overlay);
		return overlay;
	}

	function renderLog() {
		var overlay = ensureOverlay();
		var list = overlay.querySelector(".memory-log-scroll");
		if (!list) {
			return;
		}
		var entries = loadEntries().slice().reverse();
		if (!entries.length) {
			list.innerHTML = '<div class="memory-log-empty">Recent passages, choices, and stat gains will appear here during this play session.</div>';
			return;
		}
		list.innerHTML = entries.map(function (entry) {
			var kind = entry.kind || entry.type || "passage";
			var cssKind = clean(kind).toLowerCase().replace(/[^a-z0-9-]/g, "");
			var label = entry.type === "choice" ? "Choice" : "Passage";
			var title = entry.title ? '<span class="memory-log-titleline">' + escapeHtml(entry.title) + '</span>' : "";
			var gain = entry.gain ? '<div class="memory-log-gain">' + escapeHtml(entry.gain) + '</div>' : "";
			return '<div class="memory-log-entry ' + escapeHtml(entry.type || "passage") + ' ' + escapeHtml(cssKind) + '">' +
				'<div class="memory-log-meta"><span class="memory-log-kind">' + escapeHtml(kind) + '</span><span>' + escapeHtml(label) + '</span><span>' + escapeHtml(entry.time || "") + '</span></div>' +
				(title ? '<div class="memory-log-body"><strong>' + title + '</strong></div>' : "") +
				'<div class="memory-log-body">' + escapeHtml(entry.text) + '</div>' +
				gain +
			'</div>';
		}).join("");
	}

	function openLog() {
		var overlay = ensureOverlay();
		renderLog();
		overlay.classList.add("is-open");
		overlay.setAttribute("aria-hidden", "false");
	}

	function closeLog() {
		var overlay = document.querySelector(".memory-log-overlay");
		if (!overlay) {
			return;
		}
		overlay.classList.remove("is-open");
		overlay.setAttribute("aria-hidden", "true");
	}

	function choiceKind(source) {
		if (!source) {
			return "common";
		}
		if (source.closest(".choice-row-romance")) {
			return "romance";
		}
		if (source.closest(".choice-row-jerk,.command-jerk")) {
			return "nerve";
		}
		if (source.closest(".choice-row-eldritch,.command-eldritch")) {
			return "eldritch";
		}
		if (source.closest(".choice-row-unclaimed,.command-unclaimed")) {
			return "unclaimed";
		}
		if (source.closest(".command-body,.command-group")) {
			return "command";
		}
		return "common";
	}

	function recordChoice(event) {
		var target = event.target;
		if (!(target instanceof Element)) {
			return;
		}
		if (target.closest(".pause-actions,.save-menu,.memory-log-overlay,.main-menu-screen,.checkpoint-load-grid")) {
			return;
		}
		var link = target.closest("tw-link,.enchantment-link,a");
		if (!link) {
			return;
		}
		var source = link.closest(".choice-row,.command-jerk,.command-eldritch,.command-unclaimed,.command-body");
		if (!source || source.closest(".choice-row-locked")) {
			return;
		}
		var text = clean(link.textContent).slice(0, 240);
		if (!text) {
			return;
		}
		addEntry({
			type: "choice",
			kind: choiceKind(source),
			title: "Selected",
			text: text
		});
	}

	function visiblePassage() {
		var passages = Array.prototype.slice.call(document.querySelectorAll("tw-passage"));
		for (var i = passages.length - 1; i >= 0; i -= 1) {
			if (passages[i].offsetParent !== null || passages[i].getClientRects().length) {
				return passages[i];
			}
		}
		return passages[passages.length - 1] || null;
	}

	function passageTextFrom(passage) {
		var clone = passage.cloneNode(true);
		clone.querySelectorAll(".statline,.pause-actions,.save-menu,.choice-list,.command-group,.memory-log-overlay,.main-menu-screen,.main-menu-buttons,.main-menu-warning,.checkpoint-load-grid,.checkpoint-slots,.checkpoint-nav,tw-sidebar").forEach(function (node) {
			node.remove();
		});
		var boxes = Array.prototype.slice.call(clone.querySelectorAll(".narrative-box,.battle-text"))
			.map(function (node) { return clean(node.textContent); })
			.filter(Boolean);
		if (boxes.length) {
			return boxes.join("\n\n");
		}
		return clean(clone.textContent);
	}

	function recordPassage() {
		var passage = visiblePassage();
		if (!passage) {
			return;
		}
		if (passage.querySelector(".main-menu-screen,.checkpoint-load-grid")) {
			return;
		}
		var menuTitle = clean((passage.querySelector(".menu-page-title") || {}).textContent);
		if (/^(Route Notes|Settings|Credits|Load Checkpoint)$/i.test(menuTitle)) {
			return;
		}
		var text = passageTextFrom(passage);
		if (!text || text.length < 16) {
			return;
		}
		text = text.slice(0, 900);
		var title = menuTitle || text.slice(0, 72);
		var gainNode = passage.querySelector(".gain-notice");
		var gain = gainNode ? clean(gainNode.textContent) : "";
		var signature = title + "|" + text.slice(0, 280) + "|" + gain;
		if (signature === lastPassageSignature) {
			return;
		}
		lastPassageSignature = signature;
		addEntry({
			type: "passage",
			kind: "passage",
			title: title,
			text: text,
			gain: gain
		});
	}

	function schedulePassageRecord() {
		window.clearTimeout(passageTimer);
		passageTimer = window.setTimeout(recordPassage, 120);
		window.clearTimeout(statGainTimer);
		statGainTimer = window.setTimeout(checkStatGains, 130);
	}

	function init() {
		ensureOverlay();
		renderLog();
		document.addEventListener("click", function (event) {
			var target = event.target;
			if (!(target instanceof Element)) {
				return;
			}
			armStatGainAudio();
			if (isStateRestoreClick(target)) {
				skipNextStatGainCheck = true;
			}
			if (target.closest(".memory-log-button")) {
				event.preventDefault();
				event.stopPropagation();
				openLog();
				return;
			}
			if (target.closest(".memory-log-close")) {
				event.preventDefault();
				closeLog();
				return;
			}
			if (target.closest(".memory-log-clear")) {
				event.preventDefault();
				saveEntries([]);
				renderLog();
				return;
			}
			if (target.classList.contains("memory-log-overlay")) {
				closeLog();
				return;
			}
			recordChoice(event);
		}, true);
		document.addEventListener("keydown", function (event) {
			if (event.key === "Escape") {
				closeLog();
			}
		});
		var startObserver = function () {
			var story = document.querySelector("tw-story");
			if (!story) {
				window.setTimeout(startObserver, 80);
				return;
			}
			var observer = new MutationObserver(schedulePassageRecord);
			observer.observe(story, { childList: true, subtree: true });
			schedulePassageRecord();
		};
		startObserver();
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
}());
