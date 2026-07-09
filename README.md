# Stories of Britannica

A Twine narrative game project built in **Twine** using the **Harlowe** story format.

This repository is used to track the exported game, stylesheet, JavaScript, notes, and working files for the project.

## Project Status

This project is currently in active development.

The main goals of this repository are:

* Keep a safe backup of the current Twine export.
* Track CSS and JavaScript changes with Git.
* Make UI systems easier to edit and test.
* Document the workflow for future contributors.

## Source of Truth

Twine is the main source of truth for:

* Passages
* Story text
* Harlowe macros
* Links
* Variables
* Route logic
* Passage structure

VS Code is used for:

* CSS editing
* JavaScript editing
* Notes
* Documentation
* Git/GitHub workflow

The exported HTML file should not usually be edited directly.

## Recommended Workflow

1. Open the project in Twine.
2. Edit passage content inside Twine.
3. Edit CSS or JavaScript in VS Code.
4. Copy the updated CSS into `Twine → Story → Stylesheet`.
5. Copy the updated JavaScript into `Twine → Story → JavaScript`.
6. Test the game with `Play`.
7. Export the updated HTML using `Build → Publish to File`.
8. Save the export into the `exports/` folder.
9. Commit and push changes to GitHub.

## Repository Structure

```text
stories-of-britannica/
  README.md
  exports/
    Stories of Britannica.html

  styles/
    current-style.css
    parts/
      00-foundation/
      10-passage-components/
      20-menus/
      30-battle/
      40-overlays/
      50-spellblade-loadout/
      90-utilities/

  scripts/
    current-script.js

  notes/
    workflow.md

  assets/
    audio/
```

## Important Files

### `exports/Stories of Britannica.html`

The exported playable Twine story.

This file is generated from Twine using:

```text
Build → Publish to File
```

Do not treat this file as the main editing surface unless making a small emergency fix.

### `styles/current-style.css`

The full stylesheet copied from:

```text
Twine → Story → Stylesheet
```

This is the CSS file that should be pasted back into Twine after edits.

### `styles/parts/`

Optional smaller CSS files used for easier editing.

These files are for organization only. Twine does not automatically read them.

When editing a CSS part file manually:

1. Make the change in the relevant part file.
2. Copy that updated section into `styles/current-style.css`.
3. Copy all of `styles/current-style.css`.
4. Paste it into `Twine → Story → Stylesheet`.
5. Test in Twine.

### `scripts/current-script.js`

The full JavaScript copied from:

```text
Twine → Story → JavaScript
```

This is the JavaScript file that should be pasted back into Twine after edits.

## CSS Editing Notes

The stylesheet contains several custom UI systems, including:

* Main menu
* Choice rows
* Narrative boxes
* Save/checkpoint UI
* Pause menu
* Memory log
* Journal overlay
* Battle UI
* Spellblade loadout UI
* Tester jump menu

When making CSS changes, work in small pieces.

Recommended order:

1. Change one selector or one small section.
2. Paste the full updated stylesheet into Twine.
3. Test immediately.
4. Export the HTML after confirming it works.
5. Commit the change.

Avoid large visual rewrites in one commit.

## Journal UI Notes

The journal system includes selectors such as:

```text
.journal-menu
.journal-toggle
.journal-panel
.journal-window
.journal-book
.journal-page-card
.journal-page-content
.journal-sketch
.journal-page-nav
.journal-page-turn
```

For journal redesign work:

* Use CSS first for positioning, sizing, layout, and visual styling.
* Edit Twine passages only if the journal structure itself needs to change.
* Avoid JavaScript unless adding advanced behavior such as animated page turns.

Recommended journal redesign phases:

1. Center the journal panel.
2. Make the outer panel feel like a book container.
3. Restyle the inner window as an open book.
4. Improve parchment page styling.
5. Improve page controls.
6. Later, consider passage markup changes for true text wrapping.
7. Only after that, consider JavaScript for page-turn animation.

## Git Workflow

Before starting a change:

```text
git status
```

Create a feature branch:

```text
git checkout -b feature-name
```

After testing a change:

```text
git add .
git commit -m "Describe the change"
git push
```

Use small, clear commit messages, such as:

```text
Center journal panel
Restyle journal as open book
Update main menu spacing
Improve choice row styling
```

## Safety Rules

* Do not edit the exported HTML directly unless necessary.
* Do not make large CSS and JavaScript changes in the same commit.
* Do not change passage logic while also redesigning UI.
* Test in Twine after every meaningful change.
* Export a fresh HTML file after testing.
* Commit only after confirming the game still opens and plays.

## Current Development Focus

Current UI work is focused on improving the journal interface.

The first milestone is to make the journal open centered on the screen.

The next milestone is to make the journal look more like an open book while keeping the existing journal content and behavior intact.
