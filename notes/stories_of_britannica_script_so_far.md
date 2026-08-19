# Stories of Britannica - Script So Far

Source: `Stories of Britannica.html`
Exported: 2026-08-18 10:31
Total Twine passages found: 867
Story-facing passages included: 807

## Contributor Brief

This markdown is for peer writers who want to contribute optional interludes without breaking the current Twine structure. It is mechanically extracted from the current HTML build, then filtered to remove most UI, loadout, journal, menu, checkpoint, and tester passages.

When proposing an interlude, include:

- **Placement:** the existing passage it branches from and the existing passage it returns to.
- **Purpose:** what character moment, mystery, route flavor, or mechanic the interlude adds.
- **Route/Stat Requirements:** any DCs, route locks, trust thresholds, romance/jerk/eldritch/unclaimed needs, or battle prerequisites.
- **Rewards:** any stat changes, route points, journal unlocks, battle statuses, or hidden flags.
- **Passage Chain:** proposed passage names in order, with choices and return point clearly marked.
- **Tone Notes:** what Pela should feel in the scene and which existing character relationship the interlude should deepen.

Keep interludes compatible with the current style: short-to-medium passages, choices that change tone or information, visible skill checks when needed, and a clear return to the main route. Avoid rewriting major plot facts unless the change is explicitly approved.

## Route / Style Tags

- `romance`: 9 passages
- `jerk`: 12 passages
- `eldritch`: 17 passages
- `unclaimed`: 15 passages
- `odelyn-route`: 12 passages
- `ardenfelt`: 21 passages

Common visual route language already in the game:

- Common choices: gold containers.
- Romance choices: red containers; trust-gated, flirty/supportive tone.
- Nerve/Jerk choices: orange containers; Nerve-spending, sharp tone, often useful but socially dangerous.
- Eldritch choices: cyan containers; Oath-gated and only available if the early Eldritch path was committed to.
- Unclaimed choices: silver/white containers; rare Self route, often resisting ownership or naming.
- Ardenfelt POV passages: purple-toned containers.

## Interlude Proposal Template

```markdown
### Interlude Title
- Branches from: Existing Passage Name
- Returns to: Existing Passage Name
- Route/stat requirements: None / Trust 8 / DC Spark 12 / etc.
- Rewards or flags: +1 Trust, journal unlock, battle status, route point, etc.
- Intended tone: dark, intimate, comedic relief, dread, recovery, mystery, etc.

#### Passage: New Passage Name 1
Narrative text here.

Choices:
- Choice text -> New Passage Name 2
- Choice text -> Existing Return Passage
```

## Passage Script

### 1. Start
Twine position: `100,100`

Stories of Britannica
Pela Dianthus: A Heart Hungers Torrindale University rises in white towers and old stone, a city of lecture halls, wards, and polished cruelty. Pela Dianthus knows every shortcut between dormitory and classroom. She knows which stairs echo, which windows reflect her pink skin too clearly, and which corridors fill with students who whisper the word demon like it is a diagnosis. Today Professor Ardenfelt is teaching elemental affinity. Pela has waited months for this lesson.

Choices:
- Remember where Pela came from -> Memory of Brittanica Ultima

### 2. Corridor Before Class
Twine position: `300,100`

The corridor is crowded enough that Pela has to turn sideways to pass. Students in pressed uniforms laugh around her as if the sound itself has been trained to avoid her. Her books are heavy. Her parents' last letter is folded between the pages of Advanced Elemental Forms, where she can feel it but not see it. How does Pela cross the hall?

Choices:
- Hold the books tight and keep her head down. -> Books To Chest
- Meet the stares for once. -> Meet The Stares
- Count the warding runes along the ceiling. -> Count The Runes

### 3. Books To Chest
Twine position: `500,20`

Pela folds herself small around her books. There is a technique to vanishing while still taking up space: no sudden movements, no eye contact, no sound that could become a reason. It does not work.

Choices:
- Someone crashes into her -> The Collision

### 4. Meet The Stares
Twine position: `500,120`

Pela looks up. One student glances away first. Another smirks because looking away would admit she had been caught. Pela's ears flatten, but she does not lower her eyes. The victory lasts three breaths.

Choices:
- Someone crashes into her -> The Collision

### 5. Count The Runes
Twine position: `500,220`

Blue-white runes crawl along the ceiling beams, each one part of the university's old protection web. Pela names them silently: binding, quieting, heat dampening, pressure dispersal. The theory steadies her. The hallway does not.

Choices:
- Someone crashes into her -> The Collision

### 6. The Collision
Twine position: `700,100`

A shoulder slams into Pela. Her books scatter. Her knees hit stone. "Keep crying, weak little half-demon," the student says, already walking away. "Maybe go back to whatever dark cave you came from." No one helps. Someone laughs into their sleeve. Pela gathers her notes page by page, the ink blurring where her hand shakes.

Choices:
- Swallow the words and hurry on. -> Outside Ardenfelt
- Whisper that she belongs here. -> Outside Ardenfelt

### 7. Outside Ardenfelt
Twine position: `900,100`

Professor Ardenfelt's classroom waits at the end of the hall. Pela can hear chalk. She can hear the pause before a lecture begins, the clean silence that means she is late enough to be noticed. Her hand hovers over the door.

Choices:
- Enter the room -> Ardenfelt Arrival

### 8. Ardenfelt Arrival
Twine position: `1100,100`

Ardenfelt turns as soon as she enters. "Late again," he says. "And without an excuse this time, I assume." The class goes very still. Pela sees empty seats, full seats, every possible path between them, and no version where she is not watched. Where does she sit?

Choices:
- Take the nearest back seat. -> Back Seat
- Sit near the front where she can see the board. -> Front Seat
- Apologize before sitting. -> Soft Apology

### 9. Back Seat
Twine position: `1300,20`

The back seat feels safer until Pela realizes safety and distance are not the same thing. From here, every whisper reaches her after passing through someone else's smile. Ardenfelt taps the chalkboard.

Choices:
- Study the chart -> Elemental Chart

### 10. Front Seat
Twine position: `1300,120`

The front seat makes her spine prickle. It also gives her a perfect view of the elemental lattice. If she is going to be hated, she might as well learn. Ardenfelt taps the chalkboard.

Choices:
- Study the chart -> Elemental Chart

### 11. Soft Apology
Twine position: `1300,220`

"I'm sorry," Pela says. "Spare me the rehearsed humility," Ardenfelt replies. "Sit." The apology lands nowhere. Pela sits anyway.

Choices:
- Study the chart -> Elemental Chart

### 12. Elemental Chart
Twine position: `1500,100`

Fire branches into heat, combustion, light, ash. But one branch does not behave. It forks toward lightning, pressure, and plasma, a brilliant mistake in the logic of the board. Spark. Pela's pen stops moving. Something in her recognizes the shape. Ardenfelt notices her expression.

Choices:
- Hide the discovery. -> Hide Spark
- Ask what Spark magic means. -> Ask About Spark
- Memorize every line of the branch. -> Study Spark

### 13. Hide Spark
Twine position: `1700,20`

Pela lowers her eyes and copies the board until the letters become armor. Ardenfelt leans close enough for her to smell bitter tea on his breath. "Good. Excitement is dangerous when attached to someone like you." She hates that she understands his meaning.

Choices:
- Wait for the bell -> After Class Warning

### 14. Ask About Spark
Twine position: `1700,120`

"Professor," Pela says, and the word feels too loud. "What happens if an affinity skips fire and presents as Spark?" Ardenfelt's mouth thins. "Then the student has found a rare road and no discipline to walk it. Spark can become lightning, electricity, plasma. It can also become a public disaster." He lowers his voice. "Do not advertise this, Miss Dianthus."

Choices:
- Wait for the bell -> After Class Warning

### 15. Study Spark
Twine position: `1700,220`

Pela sketches the branch into the margin of her notes: spark as pressure, spark as heat, spark as impossible fire that never becomes flame. The theory is elegant. It makes room for her failure. Maybe she has not been broken. Maybe she has been reaching sideways.

Choices:
- Wait for the bell -> After Class Warning

### 16. After Class Warning
Twine position: `1900,100`

The bell releases everyone except Pela. Ardenfelt catches her by the shoulder and points to a notebook left on the chair. "It is one thing to arrive late. It is another to leave your belongings behind as if the world exists to clean up after you." Pela recognizes the notebook. It is hers. Of course it is.

Choices:
- Apologize and take it. -> Walk To Dorm
- Ask him not to touch her. -> Ardenfelt Grip
- Say nothing. -> Walk To Dorm

### 17. Ardenfelt Grip
Twine position: `2100,20`

Ardenfelt's grip tightens for one heartbeat before he lets go. "Then give me fewer reasons to correct you." Pela takes the notebook. Her shoulder aches, but the words stay spoken.

Choices:
- Return to the dormitory -> Walk To Dorm

### 18. Walk To Dorm
Twine position: `2100,120`

The dormitory corridor is quieter. Quieter is not kinder, but it gives Pela space to breathe. She thinks of her parents. Their letters always say they are proud. They never ask why she writes back so little about friends. The thought sits in her chest like a sealed bottle.

Choices:
- Reach her room -> Pela's Room

### 19. Pela's Room
Twine position: `2300,120`

Pela's room is small, clean, and too silent. Her desk is covered in careful notes. Her bed is tucked tight enough to satisfy inspection. A cracked mirror above the washbasin reflects her ears before her face. She has one evening before tomorrow humiliates her again. What does she do with the Spark theory?

Choices:
- Practice until something answers. -> Dorm Mirror
- Write the theory out properly. -> First Spark Notes
- Read her parents' letter first. -> Parents Letter

### 20. Parents Letter
Twine position: `2500,20`

The letter smells faintly of clove paper from Brittanica Ultima. Her mother writes that the world is hard on unusual girls before it learns to need them. Her father writes that patience is a blade too, if held correctly. Pela presses the paper to her chest until the ache settles.

Choices:
- Try the Spark theory -> First Spark Practice

### 21. First Spark Notes
Twine position: `2500,120`

Pela fills three pages. Spark is not fire. Spark begins as pressure in the palm. Spark resists fear but answers focus. The last line is less certain, but she writes it anyway.

Choices:
- Test the notes -> First Spark Practice

### 22. First Spark Practice
Twine position: `2700,120`

At first, nothing happens. Pela whispers the incantation. Then she thinks it. Then she stops trying to make fire and imagines the little branching mark from the chalkboard. A tiny white spark appears above her palm. It flickers. It is weak. It is not enough to make anyone regret anything. It is real.

Choices:
- Laugh before she can stop herself. -> Spark In Hand
- Cry quietly. -> Spark In Hand
- Measure how long it lasts. -> Spark In Hand

### 23. Spark In Hand
Twine position: `2900,120`

The spark dies after seven breaths. Pela tries to imagine telling someone. Ardenfelt would reduce it to a warning. The students would call it demonic. Her parents are too far away to see the light. For one moment, the victory has nowhere to go. Then someone knocks.

Choices:
- Ask who is there -> Knock At Door

### 24. Knock At Door
Twine position: `3100,120`

"Pela?" a man calls through the door. "I have a delivery. Personal." Pela does not know the voice. "From Rogier Dianthus," he adds. "Your uncle." That name changes the room.

Choices:
- Open the door. -> The Messenger
- Ask him to leave it outside. -> The Messenger
- Demand proof. -> Messenger Proof

### 25. Night Before Bochord
Twine position: `17500,120`

That night, Pela sits alone with four impossible truths. She is a Spark Mage. The Patron Saint of the Feast has marked her soul. Gareth and Odelyn may become friends, allies, or disasters. Professor Vayne believes Pela can become something more than the Academy's favorite target. [From nowhere, the vanished idol whispers: "Bring me where old things bargain." [For the first time in years, Pela knows people who might notice if she disappears.] [When she opens her hand, a clean white spark answers without hesitation.]

Choices:
- Listen to the whisper (DC Oath: 4) -> Oath Whisper
- Begin Chapter 4: Visit Gareth before leaving -> Infirmary Door
- Begin Chapter 4: Go straight to the Bochord -> Autumn Walk

### 26. Messenger Proof
Twine position: `3300,220`

The messenger recites a childhood phrase Uncle Rogier used in letters: "A locked box is only rude if it wants to be opened." Pela's stomach drops. Rogier would say that. She opens the door.

Choices:
- Take the package -> The Messenger

### 27. The Messenger
Twine position: `3500,120`

The man offers a sealed letter and a plain wooden box. "He said never lose it. He also said be careful." "Who are you?" "Only a messenger, young lady." He bows. Pela blinks, and he is gone. The corridor beyond him is empty.

Choices:
- Read the letter -> Rogier Letter

### 28. Rogier Letter
Twine position: `3700,120`

My Dearest Pela, If you are reading this, I have failed to keep you safe. The Idol is no longer safe with me. The contents of this package may save your life someday or doom you to ruin. Guard it well. Never reveal it. The rules forbid me from explaining more. Always remember that your family loves you. -Uncle Rogier The word Idol seems heavier than the rest of the ink.

Choices:
- Open the box now. -> Open The Box
- Read the letter again for hidden meaning. -> Second Reading
- Hide the box and sleep. -> Sleepless Box

### 29. Second Reading
Twine position: `3900,20`

Pela searches for a code, a warning in the line breaks, a family trick. There is only fear. Rogier's fear for her. The box waits on her lap, patient as a trap.

Choices:
- Open it -> Open The Box

### 30. Sleepless Box
Twine position: `3900,220`

Pela hides the box beneath her bed. For an hour, she listens to the university settle. Pipes click. Wind taps the window. Somewhere a student laughs with friends who know to knock before entering. The box feels louder than all of it. At midnight, Pela kneels beside the bed and pulls it free.

Choices:
- Open it -> Open The Box

### 31. Open The Box
Twine position: `4100,120`

The latch lifts too easily. Inside rests a small metal idol: a warped jester coiled around a dead tree. Its face is a joke told at a funeral. Its eyes shine with a wet, hateful amusement. Pela knows the symbol from family warnings. The Patron Saint of the Feast.

Choices:
- Touch the idol -> Oath Pulse

### 32. The Idol Wakes
Twine position: `4300,120`

The room exhales. Darkness slips across the floor like spilled ink. The lamp dims. Pela tries to put the idol down, but her fingers will not open. "It has been an age since a mortal dared to look upon me thus." The jester's grin widens.

Choices:
- Endure the voice -> Feast Realm

### 33. Feast Realm
Twine position: `4500,120`

The dorm vanishes. Pela stands in absolute black. Her breath freezes into glittering shards, but her tears remain warm on her cheeks. The Saint is everywhere and also in front of her, wooden-pale, horned, smiling with a mouth that does not respect the limits of a face. "Welcome, Pela. Welcome to my realm."

Choices:
- Try to speak -> Saint Questions

### 34. Saint Questions
Twine position: `4700,120`

No sound leaves Pela's mouth. "Silence, child. You are not in peril. Compose yourself. We have little time, and my patience is a thin thing." The Saint bends close. "What do you crave most? Power? Respect? Love? Revenge?" The answer is dangerous because it is true.

Choices:
- Admit she wants love, but not ownership -> Unclaimed Love Answer
- Tell the Saint to ask a better question (DC Nerve: 5, Spend: 2 Nerve) -> Jerk Saint Better Question
- Ask for power. -> Power Answer
- Lie and ask only to learn magic. -> Lie Answer
- Admit she wants to be loved. -> Love Answer

### 35. Power Answer
Twine position: `4900,20`

"Power," Pela whispers in the only place her voice still exists. The Saint tilts his head. "A useful lie. Not entirely false, but not the root." A knife appears in his hand, bright as moonlight on teeth.

Choices:
- Face the truth -> The True Desire

### 36. Lie Answer
Twine position: `4900,120`

"I want to learn magic." The Saint laughs so hard the void shakes. "Do not toy with me, child." A knife touches Pela's cheek, cold enough to burn.

Choices:
- Face the truth -> The True Desire

### 37. Love Answer
Twine position: `4900,220`

"I want..." Pela's throat tightens around the confession. "I want to be loved." The void goes still. For a moment, the Saint looks almost delighted.

Choices:
- Hear the price -> The True Desire

### 38. The True Desire
Twine position: `5100,120`

"There it is." The Saint strokes her cheek with the knife as gently as a blessing. "Adored. Cherished. Villainized. My gifts are never clean, Pela Dianthus. They are feasts, and feasts require hunger." He takes her hand.

Choices:
- Bleed for the oath -> Blood Oath

### 39. Blood Oath
Twine position: `5300,120`

The blade pricks her finger. The pain is small. The mark it leaves is not. Pela feels the oath write itself under her skin, into her breath, along the hidden place where magic waits to be shaped. "Welcome to the Feasting Guild."

Choices:
- Return to the room -> After The Oath
- Smile with the mark (DC Oath: 1) -> Eldritch Blood Smile

### 40. After The Oath
Twine position: `5500,120`

The dorm snaps back. The idol is gone. A single drop of blood stains the sheet. A grinning jester mark burns near Pela's shoulder, vivid and impossible. She reaches for it, and the room tilts. The last thing she sees is the ceiling rushing away.

Choices:
- Catch the Saint's afterimage -> Saint Afterimage

### 41. Morning After
Twine position: `5700,120`

Sunlight makes the night look theatrical and untrue. Pela checks her shoulder. The mark is gone. Her finger aches. The blood on the sheet remains. Then she sees the clock. She is late for Ardenfelt again.

Choices:
- Search for missing minutes -> Missing Minutes

### 42. Second Ardenfelt Arrival
Twine position: `5900,120`

The entire class turns when Pela enters. Ardenfelt's anger is quieter than yesterday. That makes it worse. "Pathetic. Weak. Useless. I have told you countless times to get your act together." Pela's eyes sting. He casts Bubble of Silence around her mouth before the first sob can escape.

Choices:
- Sit through the lesson -> Silent Bubble

### 43. Silent Bubble
Twine position: `6100,120`

The bubble steals every sound Pela tries to make. Ardenfelt orders the class to practice elemental summoning. Wind curls over one desk. Crystal forms over another. Poison-green vapor spins in a glassy sphere. Pela stares at her sheet. She knows the theory. Her mouth cannot shape the incantation, and fear keeps her mind from holding it.

Choices:
- Remember what magic is for -> Spell Purpose

### 44. Class Challenge
Twine position: `6300,120`

Ardenfelt dispels the silence. "What is the matter? Are you scared?" "I cannot do it," Pela says. "I do not know the spell." "Then perhaps you do not belong here." He turns away, and the dismissal opens something raw inside her.

Choices:
- Recall the Spark branch (DC Research: 2) -> Spark Formula
- Cast from anger (DC Spark: 3) -> Spark Bolt First
- Try anyway -> Spark Fizzle
- Stay silent -> Public Shame

### 45. Spark Fizzle
Twine position: `6500,220`

Pela reaches for the spark and finds panic first. A thin crackle jumps between two fingers, bright enough for the nearest student to gasp, then dies. Ardenfelt looks unimpressed. "Almost is not mastery." But Pela felt it. Almost is not nothing.

Choices:
- Hear the rumor forming -> Campus Rumor

### 46. Public Shame
Twine position: `6500,340`

Pela lowers her head. The moment passes. The class continues. Her notes blur until she cannot tell spellwork from ink. The spark inside her does not disappear. It waits, angry and alive.

Choices:
- Hear the rumor forming -> Campus Rumor

### 47. Spark Bolt First
Twine position: `6500,120`

"You're wrong," Pela shouts. The words shock her almost as much as the spark bolt that leaps from her hand. It hits Ardenfelt's back and scorches his coat. The class forgets how to breathe.

Choices:
- Prove it again -> Spark Bolt Again

### 48. Spark Bolt Again
Twine position: `6700,120`

Ardenfelt turns slowly in a menacing fashion. "Again." Pela thinks of the hallway floor, the laughter, the Saint's realm, the way everyone keeps deciding she should be smaller. Light bursts from her palms and knocks Ardenfelt to the ground. He stares intently. He rises, dusting himself off. "It seems that you have found what you are suited to study. You are a Spark Mage, Miss Dianthus."

Choices:
- Let the words settle -> Spark Mage Named

### 49. Spark Mage Named
Twine position: `6900,120`

Spark Mage. The title does not make the room kinder. It does not erase the names they called her. But it gives her failure a different shape. Not empty. Untaught. Ardenfelt dismisses the class early, ordering everyone to research spell projection.

Choices:
- Hear the rumor forming -> Campus Rumor

### 50. Gareth Notices
Twine position: `7100,120`

"Hey, wait!" The copper-haired boy from the back rows jogs after her. He is too confident for someone who watched her nearly combust a professor. "That was incredible," he says. "You're Pela, right?" She has seen him staring all week.

Choices:
- Ask why he has been watching her. -> Gareth Explains
- Tell him to leave her alone. -> Gareth Pushes
- Thank him carefully. -> Gareth Explains

### 51. Gareth Pushes
Twine position: `7300,20`

"Fair," he says, holding up both hands. "But I am not here to mock you." That is exactly what someone would say before mocking her. Still, he stays at a respectful distance.

Choices:
- Hear him out -> Gareth Explains

### 52. Gareth Explains
Twine position: `7300,120`

His name is Gareth. He is blunt enough to be irritating and sincere enough to be dangerous. He compliments her ears, her eyes, her hair, and somehow seems surprised when that does not make her trust him instantly. Then his smile fades. "The Nhal of Athea may be watching this academy. They hunt what Athea's Sovereigne will not publicly touch."

Choices:
- Ask why he cares -> Gareth Secret
- Tell Gareth compliments are not a strategy (DC Nerve: 6, Spend: 2 Nerve) -> Jerk Gareth Compliments

### 53. Gareth Secret
Twine position: `7500,120`

"Because my mother is a naga," Gareth says. Pela blinks. He looks away first. "They hate me too. Less loudly, maybe. But enough." For the first time, Pela hears loneliness in his confidence.

Choices:
- Hear the proposal -> Partners Offer

### 54. Partners Offer
Twine position: `7700,120`

"We should stick together," Gareth says. "Not friends, if that is too much. Allies." He offers his hand. Pela wants to believe him. Wanting is not the same as wisdom.

Choices:
- Ask what he is afraid of (DC Trust: 1) -> Gareth Vulnerable
- Take his hand. -> Library Decision
- Say she will think about it. -> Library Decision
- Refuse for now. -> Library Decision

### 55. Library Decision
Twine position: `7900,120`

Gareth lets the answer stand. Pela heads for the library with two questions pulling at her. The Nhal may be a real threat. The Patron Saint of the Feast is already inside her life. She chooses the danger no one else can see.

Choices:
- Enter the library -> Library Atrium

### 56. Library Atrium
Twine position: `8100,120`

The Torrindale Library of Magic and Myth is built into living stone. Two colossal statues flank the entrance: a wise old mage with hidden laughter in his eyes, and a sorceress with hands outstretched as if holding the building together by will. Inside, shelves climb into shadow. A magical fresco maps the true night sky overhead, its constellations moving slowly even in daylight.

Choices:
- Find the theology section -> Theology Shelves

### 57. Theology Shelves
Twine position: `8300,120`

The theology section is small. Brittanicans prefer histories of human effort, treatises on mana control, and records of wars won by discipline. Gods make poor footnotes in a culture that wants to believe it built itself alone. Pela finds the book anyway. The Patron Saint of the Feast: Lord of the Masquerade.

Choices:
- Open the book -> Unreadable Book

### 58. Unreadable Book
Twine position: `8500,120`

The letters crawl into an ancient tongue as soon as Pela begins to read. "Damn," she whispers, closing the book harder than she means to. "Interested in the Feast?" a girl asks behind her. Pela nearly falls out of the chair.

Choices:
- Force one sentence to stay still (DC Research: 3) -> Feast Marginalia
- Notice the shelf's shadow -> Library Shadow

### 59. Odelyn Introduction
Twine position: `8700,120`

The girl introduces herself as Odelyn. She speaks as if dangerous information is a normal library conversation. The Feast feeds on loneliness, she says. His blessings are double-edged. Some chosen people survive. Some become meals. "My family knows what bargains cost," Odelyn adds. "We made one with the Hat Man. We still pay."

Choices:
- Ask about her family's curse. -> Odelyn Curse
- Ask whether the Saint can be resisted. -> Odelyn Warning
- Hide how personal this feels. -> Odelyn Warning

### 60. Odelyn Curse
Twine position: `8900,20`

Odelyn's voice softens. "When my family dies, their souls do not rest. Some become spirits controlled by powers above us. Ancestors can command them, but command is not freedom." She says this with practiced calm, the kind that has been rehearsed over old pain. Pela thinks of a mark that vanished from her shoulder.

Choices:
- The bell rings -> Odelyn Warning

### 61. Odelyn Warning
Twine position: `8900,120`

"If the Patron Saint chose someone," Odelyn says, "that person would need to learn the rules quickly. His gifts can help. They can also hollow you out." The university bell rings. Odelyn smiles as if the conversation has not just rearranged Pela's insides. "Come to Spellblade tonight. Professor Vayne is the best."

Choices:
- Leave the library -> Eveline Hallway

### 62. Eveline Hallway
Twine position: `9100,120`

Pela is still thinking about souls when Eveline steps into her path. "Watch where you are going, freak." Eveline's friends gather behind her in a crescent. It is a small audience, which makes it worse. "Apologize," Eveline says. "Properly. On your knees."

Choices:
- Refuse. -> Vayne Saves Pela
- Start to kneel. -> Vayne Saves Pela
- Look past Eveline for help. -> Vayne Saves Pela

### 63. Vayne Saves Pela
Twine position: `9300,125`

A slow clap echoes through the hallway. Professor Vayne stands nearby, sword across her back, golden eyes bright with open contempt. "That is enough." Eveline withers under the attention and flees with her friends. Vayne gives Pela a small smile. "Class, Miss Dianthus. Do not let fools make you late twice."

Choices:
- Feel Vayne watching -> Vayne Watches Earlier

### 64. Belladonna Class
Twine position: `9500,120`

Pela also could not stay and chat. Professor Belladonna's class was beginning shortly, and she had no intention of getting on his bad side. She hurried toward the classroom, but found herself struggling to catch up with her classmates. She was running late, and the class was already full.

Choices:
- Slip into the full classroom -> Belladonna Late Door

### 65. Negative Theory
Twine position: `12300,120`

"Miss Pela," Professor Belladonna began, "I would like you to explain to the class why negative forces work like this?" Pela scrambled to her feet. Her body still remembered floating. Her mind was trying to turn that memory into language before the room could laugh at her.

Choices:
- Explain the pull plainly. -> Belladonna Pull Plain
- Name the caster as the center of force (DC Research: 3) -> Belladonna Pull Research
- Describe how the magic felt in her body (DC Spark: 4) -> Belladonna Pull Spark Sense
- Admit she is not completely sure. -> Belladonna Honest Confusion

### 66. Negative Burst Challenge
Twine position: `14100,120`

He turned and faced the class. "I am going to cast a Negative Burst on Miss Pela. I want all of you to observe how she reacts, and tell me what her response should be. Remember, this is a practical exercise, and I expect all of you to participate." He raised his arms. Suddenly, the air around them grew heavy, and the room became silent. All eyes were fixed upon the two of them. Pela stopped to think about what the spell name she had to use... or maybe it was the technique name.

Choices:
- Calculate the counter-force (DC Research: 4) -> Calculated Shield
- Ground it through Spark (DC Spark: 5) -> Spark Grounding
- Shape the force into a shield (DC Research + Nerve: 7) -> Shield Success
- Let the Saint answer with hunger (DC Oath: 3) -> Belladonna Feast Shield
- Force the burst backward (DC Spark + Nerve: 9) -> Belladonna Overpower Burst
- Brace and guess -> Shield Bruise

### 67. Shield Bruise
Twine position: `14300,580`

"Shield." Pela heard the explosion. The force of the blast sent her flying backward. She hit the wall and fell to the ground. Everything went black for a moment. When she regained consciousness, she was lying on the floor.

Choices:
- Hear the class react -> Belladonna Erika Answer

### 68. Shield Success
Twine position: `14300,120`

Pela took a deep breath and focused on how it felt when Negative Bolt hit her. The energy surrounding her. The pressure building up. Her body tensed, and it was like standing in the middle of a hurricane, yet being completely calm. She closed her eyes, and a single word came to her lips. "Shield." The burst hammers into her defense and throws her backward, but she stays conscious.

Choices:
- Hear the class react -> Belladonna Erika Answer

### 69. Spellblade Waiting Room
Twine position: `15500,120`

Pela leaves Professor Belladonna's class and leaves to go to Spellblade. The Spellblade classroom has a waiting room, which feels excessive until the far door opens. Beyond it waits a warded battle stage. Odelyn waves Pela over. "You came!" There is warmth in the words. Pela does not know what to do with it.

Choices:
- Enter the battle stage -> Duel Begins
- Tell Odelyn she sounds happy to see her (DC Trust: 8) -> Romance Odelyn You Came

### 70. Duel Begins
Twine position: `15700,120`

"First match," Professor Vayne announces. "Odelyn versus Gareth." Gareth smiles and waves at Pela as if being seen in a combat exam is normal. Odelyn summons a dark spear that crackles with heat. Gareth draws a jasmine-bright sword. The wards hum.

Choices:
- Watch the duel -> Duel Momentum

### 71. Duel Momentum
Twine position: `15900,120`

Gareth moves first: fast, clean strikes meant to test rather than wound. Odelyn parries all of them. Her spearwork is a dance with no wasted motion. Wind slams Gareth backward, and the stage trembles under the impact. Pela forgets, briefly, to be afraid.

Choices:
- The fight escalates -> Phoenix Flame

### 72. Phoenix Flame
Twine position: `16100,120`

Gareth rises wrapped in white flame. "The Phoenix of Gisborne rises twice!" His second blade forms from fire. For several exchanges, he pushes Odelyn back. Sparks and wind shear across the wards. Then he smiles too sharply. "With a borrowed power of your own, Cursed One."

Choices:
- Odelyn answers -> Cursed Spirits

### 73. Cursed Spirits
Twine position: `16300,120`

Odelyn's face goes cold. Black spirits gather around her spear. The air becomes heavy with old grief and violent obedience. Pela understands, suddenly, that Gareth has stepped on a wound he does not know how to survive.

Choices:
- Flicker the duel ward (DC Spark + Nerve: 9) -> Ward Flicker
- Shout a warning. -> Spirit Warning
- Study the forbidden spell. -> Spirit Analysis
- Reach for Spark in panic. -> Spark Interference

### 74. Vayne Intervenes Duel
Twine position: `16500,120`

Professor Vayne appears between them. The spirits crash into her and burst apart in black smoke. When the smoke clears, Vayne is still standing. "Enough." Odelyn is sent to the Dean. Gareth is sent to the infirmary. Pela is asked to follow.

Choices:
- Look after Gareth first. -> Gareth Infirmary Glance
- Look after Odelyn first. -> Odelyn Dean Walk
- Follow Vayne immediately. -> Vayne Private Talk

### 75. Vayne Private Talk
Twine position: `16700,120`

In a quiet room beside the stage, Vayne studies Pela as if reading a spell written in a language she likes. "Tell me who you are." Pela says she is half human and half demon because that is the answer people always demand. Vayne shakes her head. "That is what you are. I asked who." Pela thinks of theory, loneliness, her parents' letters, the spark, the vanished mark, Gareth's offered hand, Odelyn's curse. "I am someone who understands magic better than I can use it," she says. "I am tired of being treated like that means I am nothing." Vayne's smile is small and real. "You see magic literally, don't you?" Vayne asks. Pela admits it. "Then perhaps the problem is not your talent. Perhaps you have been taught as if you are human in every magical respect. Demon-kind perceive and channel differently." The idea lands in Pela like a door opening. "Tomorrow," Vayne says, "go to the Bochord of Arcane Artifacts. He will be in central Torrindale for one day only. Find a grimoire, a focus, anything that remembers demon-kind. I will reimburse the cost." There is a catch. "Enroll in my Spellblade class."

Choices:
- Accept eagerly. -> Night Before Bochord
- Ask what danger waits there. -> Night Before Bochord
- Accept, but keep the idol secret. -> Night Before Bochord

### 76. Memory of Brittanica Ultima
Twine position: `100,320`

Before Torrindale, Pela remembers Brittanica Ultima as rooftops washed in rain and market bells ringing through narrow streets. Her father would walk on the outside of the road, between Pela and anyone staring too long. Her mother would pretend not to notice the stares at all, which was its own kind of courage. Pela learned early that love could exist in a room even when the world outside argued against it.

Choices:
- Remember home at night -> Family Kitchen

### 77. Family Kitchen
Twine position: `300,320`

At home, the kitchen was warm enough to fog the windows. Her mother taught her demon folktales while cutting fruit into moons. Her father corrected old magical diagrams with jam still on his thumb. When Pela asked why people looked afraid of her, her mother said, "Because some people mistake what they do not understand for a warning."

Choices:
- Ask about demons. -> Demon Blood Lesson
- Ask if she will ever belong anywhere. -> Belonging Lesson

### 78. Demon Blood Lesson
Twine position: `500,260`

Her mother told her demon-kind were not one thing. Some saw magic as color. Some tasted it. Some heard it like music under the skin. Human books flattened all of that into superstition because human books preferred clean categories. "If your magic feels strange," her mother said, "do not assume it is wrong."

Choices:
- The acceptance letter arrives -> Torrindale Letter

### 79. Belonging Lesson
Twine position: `500,380`

Her father answered carefully. "Belonging is not always given. Sometimes you build it in hostile ground and dare the world to call it a weed." Pela laughed because he looked embarrassed by his own poetry. Years later, at Torrindale, she would understand it was not poetry. It was instruction.

Choices:
- The acceptance letter arrives -> Torrindale Letter

### 80. Torrindale Letter
Twine position: `700,320`

The acceptance letter arrived with a crimson seal and language so formal it felt like a spell. Torrindale University. Prestige. Opportunity. A future large enough to repay every sacrifice her parents had made. Pela smiled until her cheeks hurt. That night, she heard her parents whispering after they thought she slept.

Choices:
- Listen at the doorway -> Parents Whisper

### 81. Parents Whisper
Twine position: `900,320`

"They will be cruel," her mother said. "She is brilliant," her father replied. "Those are not opposites." Pela stood barefoot in the hall, holding her breath. It was the first time she understood that her parents' pride and their fear could live in the same sentence.

Choices:
- Arrive at Torrindale -> First Day At Torrindale

### 82. First Day At Torrindale
Twine position: `1100,320`

Torrindale looked impossibly clean on the first day. The towers shone. The lawns were cut into perfect geometric obedience. Students moved in clusters that already knew their own shapes. Pela carried one trunk, two letters, and the foolish hope that talent would be enough.

Choices:
- The first week passes -> First Week Montage

### 83. First Week Montage
Twine position: `1300,320`

The first week taught her the rules. Do not correct a professor unless invited. Do not accept food from smiling classmates. Do not let anyone see how long a word can hurt after it is spoken. By the time the elemental affinity lesson arrives, Pela has learned how to survive a day. She has not learned how to want one.

Choices:
- Step into the morning corridor -> Corridor Before Class

### 84. Dream Under Feast
Twine position: `5700,320`

Pela dreams of a banquet hall without guests. Every chair is pulled out. Every plate is empty. At the head of the table sits the Patron Saint's idol, small enough to fit in her palm and large enough to darken the room. Someone is humming behind her.

Choices:
- Walk between the empty chairs -> Feast Hall Dream

### 85. Feast Hall Dream
Twine position: `5900,320`

The plates are polished black. In each one, Pela sees a different version of herself: admired, feared, adored, hunted, laughing with people whose faces blur whenever she tries to know them. The humming becomes words. "A gift is not a mercy. A hunger is not a sin."

Choices:
- Wake before the song ends -> Morning After

### 86. Missing Minutes
Twine position: `5900,500`

Pela tries to reconstruct the morning. She remembers waking. She remembers the blood. She remembers checking her shoulder. Then nothing for nearly twenty minutes. Her notes are open on the desk. In the margin, written in her own hand, is a sentence she does not remember writing: The feast begins when the lonely call it kindness.

Choices:
- Read the sentence like an invitation (DC Oath: 3) -> Eldritch Marginal Smile
- Tear the note out. -> Run Late Again
- Keep it for study. -> Run Late Again

### 87. Run Late Again
Twine position: `6100,500`

The university bell rings. Whatever happened to the missing minutes, Pela cannot solve it from her room. She grabs her books and runs.

Choices:
- Arrive late again -> Second Ardenfelt Arrival

### 88. Spark Formula
Twine position: `6500,20`

Pela does not cast immediately. She remembers the branching chart: pressure first, heat second, light last. Spark is not anger. Anger is only the hand knocking at the door. Ardenfelt turns away. Pela begins with pressure.

Choices:
- Release a controlled bolt -> Controlled Spark Bolt
- Force it before it is ready -> Spark Backlash

### 89. Controlled Spark Bolt
Twine position: `6700,20`

The bolt leaves her hand cleanly. It snaps across the classroom and bursts against Ardenfelt's coat in a ring of white light. Smoke rises. No desks burn. No student screams. The control frightens Pela more than the power. Ardenfelt looks back at her with a new expression.

Choices:
- Make him name it -> Spark Mage Named

### 90. Spark Backlash
Twine position: `6700,240`

The theory is right. Pela's hands are not. The spark jumps too early, biting her palm before lashing toward Ardenfelt. It still strikes his coat, but her fingers go numb. Pain teaches quickly. Not kindly, but quickly.

Choices:
- Prove it again -> Spark Bolt Again

### 91. Calculated Shield
Twine position: `14300,20`

Pela counts the pull before it reaches her. Negative force gathers inward. So she gives it an inward curve of her own, matching the angle rather than meeting it head-on. The impact still sends her skidding back, but she remains standing. Belladonna's eyebrows lift. "A calculated shield. Crude, but intelligent."

Choices:
- Hear the class react -> Belladonna Erika Answer

### 92. Spark Grounding
Twine position: `14300,220`

Pela panics, then turns the panic into a circuit. Spark crawls down her arms and into the floor as the Negative Burst hits. The two forces snarl together, throwing white veins across the tiles. She falls to one knee instead of crashing into the wall. Belladonna stares. "That was not the assigned method. It was, however, alive."

Choices:
- Hear the class react -> Belladonna Erika Answer

### 93. Spirit Warning
Twine position: `16500,300`

"Gareth, move!" Pela's voice cracks across the stage. Gareth's eyes flick toward her, and that half-second is enough for fear to reach him before the spirits do. He raises his blades too late, but not blindly.

Choices:
- Vayne steps in -> Vayne Intervenes Duel

### 94. Spirit Analysis
Twine position: `16500,420`

Pela watches the spirits instead of the spear. They are not simply darkness. They move like commands forced into dead mouths, each spirit dragged along a thread of Odelyn's will. The spell is powerful because it is cruel to everyone involved.

Choices:
- Vayne steps in -> Vayne Intervenes Duel

### 95. Spark Interference
Twine position: `16500,540`

Pela reaches for Spark before she knows what she plans to do. A white crackle leaps from her fingers and dies against the duel ward. The barrier shivers. For an instant, the black spirits turn their eyeless faces toward her. Pela feels the Saint's attention stir somewhere deep inside her oath.

Choices:
- Vayne steps in -> Vayne Intervenes Duel

### 96. Library Shadow
Twine position: `8500,320`

A shadow passes over the theology shelves without any student to cast it. For a moment the book on the Feast opens by itself, pages fluttering toward a woodcut of a smiling saint seated above a table of sleeping faces. Then the library is normal again.

Choices:
- Turn around -> Odelyn Introduction
- Smile at the woodcut (DC Oath: 5) -> Eldritch Woodcut Smile

### 97. Dorm Mirror
Twine position: `2300,320`

Before practicing, Pela catches herself in the cracked mirror. Black hair. Pink skin. Eyes too tired for someone her age. Ears that give away fear even when her mouth refuses to. She touches the glass. "You are not a mistake," she tells the reflection. The reflection is half a heartbeat late in answering.

Choices:
- Try the Spark theory -> First Spark Practice

### 98. Campus Rumor
Twine position: `7100,320`

Before Gareth reaches her, Pela hears the first rumor forming. "Did you see his coat?" "Demon fire." "No, lightning." "No, worse. She smiled after." Pela had not smiled. She wonders how many versions of her already exist in mouths she will never control.

Choices:
- Gareth catches up -> Gareth Notices

### 99. Oath Pulse
Twine position: `4100,320`

The idol is cold until Pela notices her own pulse. Then it beats with her. Not in rhythm. In answer. The room seems to lean closer, waiting to learn whether she is brave, foolish, or merely lonely enough.

Choices:
- Touch the idol -> The Idol Wakes

### 100. Saint Afterimage
Twine position: `5500,320`

As Pela falls, she sees the Saint reflected in the window. He is not in the room. He is behind her. He is inside the reflection. He is smiling like someone who has just remembered an old joke.

Choices:
- Fall into a black dream -> Dream Under Feast
- Smile back at the reflection (DC Oath: 2) -> Eldritch Reflection Smile

### 101. Lunch Alone
Twine position: `10100,500`

Lunch tastes like paper. Students keep glancing at Pela, then looking away when she notices. Admiration and fear have similar shapes from a distance. She writes three words in her notebook: Spark. Feast. Survive.

Choices:
- After lunch, Spellblade -> Spellblade Waiting Room

### 102. Vayne Watches Earlier
Twine position: `9300,320`

After Eveline leaves, Vayne does not immediately move on. Her gaze lingers on Pela's hands, then on the way the air near Pela's fingers faintly brightens. "Interesting," Vayne murmurs. It is not comfort. It is attention. Somehow, that is almost as startling.

Choices:
- Go to Belladonna's room -> Belladonna Class

### 103. Gareth Infirmary Glance
Twine position: `16700,320`

As Gareth is led away, he looks back at Pela. His grin is gone. Without it, he looks younger, embarrassed, and genuinely afraid. Pela realizes his confidence is not armor because it is strong. It is armor because it is loud.

Choices:
- Go with Vayne -> Vayne Private Talk
- Smile at him like he is allowed to come back alive (DC Trust: 8) -> Romance Gareth Look Back

### 104. Odelyn Dean Walk
Twine position: `16700,440`

Odelyn walks toward the Dean's office with her spear dismissed and her shoulders rigid. For a second, she glances at Pela. Shame crosses her face so quickly it could be mistaken for anger. Pela understands the difference.

Choices:
- Go with Vayne -> Vayne Private Talk

### 105. Spell Purpose
Twine position: `6300,320`

A memory of her mother's kitchen returns without permission. Magic does not begin in the hand, her mother had said. It begins in the reason. Pela looks at Ardenfelt's back and realizes she does not want to hurt him as much as she wants him to be wrong.

Choices:
- Choose how to prove it -> Class Challenge

### 106. Gareth Vulnerable
Twine position: `7900,320`

"What are you afraid of?" Pela asks. Gareth's grin twitches like it wants to become a joke and cannot find the strength. "That I waited too long to stop pretending I was fine alone," he says. Then, softer, "And that you are smarter than me, so you will notice." Pela does notice. She also notices that he gave her the truth when mockery would have been easier.

Choices:
- Head for the library -> Library Decision
- Tell him she noticed because she was looking (DC Trust: 8) -> Romance Gareth Notices

### 107. Feast Marginalia
Twine position: `8500,500`

Pela pins one sentence in place with a scholar's stubbornness. The Feast does not begin at the table. It begins in the room where no one answers when the hungry soul calls. The words smear into old ink. In the margin, a tiny jester has been drawn beside a dead tree. Its face turns toward her while the page lies flat. "Interested in the Feast?" a girl asks behind her.

Choices:
- Notice the shelf's shadow -> Library Shadow

### 108. Ward Flicker
Twine position: `16500,660`

Pela throws Spark into the ward instead of through it. The barrier flickers white. It does not break, but it bends the spirit spell's path by a handspan. Gareth sees the shift and raises his blades before terror fully takes him. Professor Vayne still has to step in. But when she does, her eyes cut briefly to Pela.

Choices:
- Vayne steps in -> Vayne Intervenes Duel

### 109. Oath Whisper
Twine position: `17700,320`

Pela listens. The whisper is not a sound. It is a flavor at the back of her throat: sugar burned black, laughter held too long, hunger dressed as celebration. "Do not fear the bargain house, little spark. Fear what recognizes you there." The warning feels almost helpful. That is what makes it frightening.

Choices:
- Begin Chapter 4: Visit Gareth before leaving -> Infirmary Door
- Begin Chapter 4: Go straight to the Bochord -> Autumn Walk
- Ask what recognizes her (DC Oath: 7) -> Eldritch Recognized Whisper

### 110. Infirmary Door
Twine position: `17900,120`

Before Pela can face the Bochord, one worry keeps pulling her off course. Gareth. The infirmary corridor is quiet enough that her footsteps sound like interruptions. She pauses outside the door, hand half-raised, unsure whether concern will look foolish after only one strange day of almost-friendship.

Choices:
- Knock softly (DC Trust: 4) -> Gareth By Window
- Enter anyway -> Gareth By Window
- Leave him to rest -> Autumn Walk

### 111. Gareth By Window
Twine position: `18100,120`

Gareth sits on a bed near the window, golden light softening the bruises along his jaw. The usual grin is gone. Without it, he looks less like a boy trying to win the room and more like someone realizing the room can hit back. "Pela," he says, surprised. Warmth follows the surprise before he can hide it. "I didn't expect you."

Choices:
- Tell him she wanted to make sure he was okay. -> Gareth Softens
- Tell him Odelyn nearly killed him. -> Gareth Bruised Pride
- Ask if he regrets provoking her. -> Gareth Bruised Pride

### 112. Gareth Softens
Twine position: `18300,20`

"I'll live," Gareth says. "Odelyn is... quite the opponent." "You held your own," Pela says. His gaze softens at the compliment. "That means a lot, coming from you." For a few seconds, silence does not feel empty. It feels like something choosing whether to become trust.

Choices:
- Let the silence breathe -> Together Echo

### 113. Gareth Bruised Pride
Twine position: `18300,220`

Gareth winces, then tries to turn it into a laugh. "Yes, well. I may have discovered a limit to my charm." "You called her cursed." The laugh dies properly this time. "I know," he says. "I thought I was being clever. I was being cruel." That admission costs him something. Pela can see it.

Choices:
- Let the silence breathe -> Together Echo

### 114. Together Echo
Twine position: `18500,120`

Pela starts to leave. Gareth reaches out, his fingers brushing hers before either of them knows what to do with the contact. "Don't be a stranger, okay? We're... we're in this together." "Together," Pela echoes. The word follows her out of the infirmary, small and warm against the cold knot of the Bochord waiting ahead.

Choices:
- Leave for Torrindale proper -> Autumn Walk

### 115. Autumn Walk
Twine position: `18700,120`

Autumn has reached Torrindale proper. Leaves burn yellow and red along the road from the Academy, and for once the air feels clean enough to mistake for mercy. Pela passes mages with familiars, merchants calling prices, and students who stare only long enough to decide whether she matters. A burly man knocks her shoulder. "Watch where you're going, kid."

Choices:
- Apologize and keep moving. -> Torrindale Commerce
- Correct him: she is not a kid. -> Torrindale Commerce
- Mark the route back in her memory. -> Torrindale Commerce

### 116. Torrindale Commerce
Twine position: `18900,120`

Torrindale thrives on commerce. Stalls crowd the streets with charms, sealed ink, bottle-lamps, cheap luck amulets, and knives that promise they are ceremonial. Pela catches fragments of bargaining and prayer, both spoken in the same urgent tone. At the center of the city waits a circular stone building with a domed roof and stained-glass windows. The sign reads: The Bochord of Arcane Artifacts.

Choices:
- Approach the doors -> Bochord Exterior

### 117. Bochord Exterior
Twine position: `19100,120`

The double doors are heavy, dark, and carved with symbols that refuse to repeat when Pela looks away and back. Before she can push them open, a hand touches her shoulder. "You're here for the Arcane Artifacts too, aren't you?" Pela turns. Odelyn.

Choices:
- Speak with Odelyn -> Odelyn At Bochord

### 118. Odelyn At Bochord
Twine position: `19300,120`

Odelyn explains the Bochord with the calm of someone describing a cliff edge. It cannot be found in the same place twice. It moves outside and inside. It keeps ancient artifacts, refuses refunds, and takes no responsibility for injury, death, curses, hauntings, possession, soul-displacement, or "other unusual inconvenience." "Professor Vayne sent me," Odelyn admits. "I'm here to make sure you don't do something stupid."

Choices:
- Tell Odelyn she sounds like a warning label (DC Nerve: 7, Spend: 2 Nerve) -> Jerk Odelyn Warning Label
- Thank her honestly. -> Enter Bochord
- Insist she can handle herself. -> Enter Bochord
- Ask what counts as a stupid artifact. -> Enter Bochord

### 119. Enter Bochord
Twine position: `19500,120`

The Bochord smells of old leather, dust, and magic that has had too many centuries to think. Torches gutter without wind. Shelves stretch into amber dark. Somewhere far below, stone grinds against stone, slow as a sleeping giant turning over. "Don't stray too far," Odelyn says. The building creaks as if amused.

Choices:
- Search the first hall -> Artifact Table

### 120. Artifact Table
Twine position: `19700,120`

A table displays small artifacts beneath curling labels. A cracked bell that rings only for liars. A green glass eye that blinks when Pela blinks. A silver ring marked with the Pink Rose of Brittanica wrapped in ivy: the sigil of House Cinn, tied by rumor to fate. The label reads: Beware, for this is not a ring to wear, but a ring to use.

Choices:
- Read the smaller script (DC Research: 6) -> Cinn Ring Warning
- The floor begins to move -> Bochord Shifts

### 121. Cinn Ring Warning
Twine position: `19900,20`

The smaller script appears only when Pela stops trying to force it. Use opens a road. Wearing becomes a road. Odelyn whistles softly. "House Cinn artifacts always sound like poetry until someone bleeds." Pela puts the ring down very carefully.

Choices:
- The floor begins to move -> Bochord Shifts

### 122. Bochord Shifts
Twine position: `19900,120`

A rumble passes through the building. The floor tiles slide like pieces of a giant puzzle. Shelves fold into walls. Doorways become corners. Corners become stairs. Then the floor opens beneath Odelyn.

Choices:
- Grab Odelyn's hand (DC Trust + Nerve: 7) -> Almost Catch Odelyn
- Anchor Odelyn with both hands (DC Trust + Nerve: 9) -> Unclaimed Anchor Odelyn
- Reach anyway -> Odelyn Falls

### 123. Almost Catch Odelyn
Twine position: `20100,20`

Pela catches Odelyn's fingers. For one impossible second, she holds. Then the building pulls harder than flesh can answer. Odelyn slips away into the dark below, eyes wide not with accusation, but warning. "Don't trust the rooms!" The floor closes.

Choices:
- Call her name -> Alone Library

### 124. Odelyn Falls
Twine position: `20100,220`

Pela lunges, but her hand catches only cold air. Odelyn drops through the opening. The floor closes before her scream can finish becoming a name. "Odelyn!" The Bochord shifts again and throws Pela into a wall. The world flashes white.

Choices:
- Wake alone -> Alone Library

### 125. Alone Library
Twine position: `20300,120`

Pela wakes in a vast library. Shelves stretch beyond sight, packed with books that should have been burned, sealed, or forgotten. The air hums with spells that do not want witnesses. Titles catch her eye: The Citadel of Light Incidents. Dishonorable Jeff's Path to Darkness. The Disaster of Seriphina. An Elder God Returning. Knowledge of a thing gives it power. Every professor says that. None of them say what to do when the knowledge calls your name.

Choices:
- Choose what to do -> Forbidden Shelves

### 126. Forbidden Shelves
Twine position: `20500,120`

Pela's hand hovers over The Disaster of Seriphina. The book feels warm.

Choices:
- Study the warning signs first (DC Research: 7) -> Seriphina Caution
- Notice the Feast reacting (DC Oath: 5) -> Feast Reacts To Book
- Take The Disaster of Seriphina -> Spiral Stair

### 127. Seriphina Caution
Twine position: `20700,20`

Pela finds three ward marks burned into the shelf. Containment. Memory hazard. Narrative breach. The third mark makes her teeth ache. Whatever the book contains, it does not merely tell a story. It makes one.

Choices:
- Take the book anyway -> Spiral Stair

### 128. Feast Reacts To Book
Twine position: `20700,220`

The vanished idol laughs somewhere behind Pela's ribs. "Another hunger. How crowded your soul becomes." For the first time, the Saint sounds less amused than interested.

Choices:
- Take the book anyway -> Spiral Stair

### 129. Spiral Stair
Twine position: `20900,120`

The floor reveals a spiral stair. Pela ascends with The Disaster of Seriphina pressed against her chest. The air grows colder. At the top, music seeps through a single door: a sad melody, beautiful enough to feel like a mistake. She opens the door.

Choices:
- Enter the Room of Stories -> Room of Stories

### 130. Room of Stories
Twine position: `21100,120`

The room is circular, lined with tapestries, and centered around a silver mirror. Pela's reflection appears first: blue eyes, raven hair, pink skin, beauty sharpened by exhaustion. Then the mirror changes. She stands on the shore of a lake. A dark figure walks toward her with a stern face, piercing eyes, and a smile too perfect to be kind.

Choices:
- Listen to the figure -> Lake Figure

### 131. Lake Figure
Twine position: `21300,120`

"Hello, child," the figure says. He offers history, order, peace, secrets, a future where old wrongs can be corrected by someone brave enough to read what was buried. He holds out The Disaster of Seriphina. "You can understand the true power of the gods." Pela's soul tightens around the Saint's oath.

Choices:
- Ask what the Room of Stories is (DC Research: 8) -> Room Theory
- Refuse the offer. -> Figure Presses
- Ask if he can break the Saint's hold. -> Figure Tempts Freedom

### 132. Figure Presses
Twine position: `21500,20`

"Then why take the book?" the figure asks. Pela has no clean answer. Curiosity. Fear. Hunger. The awful hope that forbidden knowledge might be kinder than public education. "I am not ready," she says. "You could be."

Choices:
- The lake breaks -> Forbidden Revealed

### 133. Figure Tempts Freedom
Twine position: `21500,120`

"What if I taught you to break the Saint's hold?" The possibility is intoxicating. Freedom from the Feast. Freedom from the mark that vanished but did not leave. Freedom from every bargain made while terrified. "I can't trust you," Pela says. "No," the figure replies. "But you can need me."

Choices:
- The lake breaks -> Forbidden Revealed

### 134. Room Theory
Twine position: `21500,240`

Pela studies the lake, the mirror-light, the book in the figure's hand. "This room is not showing history," she says. "It is using story as a binding medium." The figure's perfect smile widens. "Good. You are less disappointing than most."

Choices:
- The lake breaks -> Forbidden Revealed

### 135. Forbidden Revealed
Twine position: `21700,120`

Odelyn's voice calls from the dark. Pela turns, and Odelyn melts into the floor like candle wax. The figure rises from the puddle she leaves behind. "I am trapped within the Bochord. My enemies call me The Forbidden. Take me to Torrindale Academy, and we can learn together." Pela backs away. The figure's smile does not move. "Refuse, and I keep you in the Room of Stories forever. I will make new paths in your mind until your mind is mine."

Choices:
- Answer the Forbidden One -> Forbidden Bargain
- Tell the Forbidden One he is losing the argument by being dramatic (DC Nerve: 8, Spend: 2 Nerve) -> Jerk Forbidden Drama

### 136. Forbidden Bargain
Twine position: `21900,120`

"If I take you," Pela says, "you promise to teach me?" "I would assure it. I would assure you. I would not lie." There is always a catch. Pela knows that now. The Forbidden One wants freedom after she becomes a proper mage.

Choices:
- Demand terms before swearing (DC Nerve + Research: 11) -> Sharper Curse Terms
- Swear the curse -> Curse Pact

### 137. Sharper Curse Terms
Twine position: `22100,20`

"Define proper mage," Pela says. For the first time, the Forbidden One pauses. "One who can shape magic without begging a book to feel for her." "Then you teach. You do not command." The smile returns. "A student with teeth. Very well."

Choices:
- Swear the curse -> Curse Pact

### 138. Curse Pact
Twine position: `22100,120`

The Forbidden One holds out The Disaster of Seriphina. "Do you swear that you will free me, and in exchange I will teach you magic and give you knowledge others would kill for?" Pela takes the book. "I swear." The world shatters like glass.

Choices:
- Wake before the broken mirror -> Broken Mirror

### 139. Broken Mirror
Twine position: `22300,120`

Pela stands before the broken silver mirror. The book has vanished. Shards litter the floor. The Bochord begins to shift again, but this time the movement is inside her memories. The library folds. The fall folds. Odelyn's scream folds. Pela feels the day being rewritten while she is still living it.

Choices:
- Lose the room -> Outside Bochord Again

### 140. Outside Bochord Again
Twine position: `22500,120`

Pela is outside the Bochord, hand raised to open the door. Odelyn stands beside her. "Pela, are you okay? You look a little lost." "We were already in there," Pela says. Odelyn's face changes slowly. "We were?" Pela looks down. In her hands is a cursed grimoire.

Choices:
- Show Odelyn the grimoire -> Grimoire Reveal

### 141. Grimoire Reveal
Twine position: `22700,120`

"It contains the secret of demon-kind's magic," Pela says. Odelyn's surprise becomes delight. "That's amazing. I'm so proud of you!" Pela tries to smile. Her hands are trembling. This is the second time she has made a deal with a mysterious and evil creature.

Choices:
- Leave before the building moves again -> Sunset Return

### 142. Sunset Return
Twine position: `22900,120`

Sunset turns Torrindale orange and gold. Pela barely sees it. The grimoire is heavy in her hands, though it is not large enough to explain the weight. "Odelyn," she asks quietly, "am I going to die?" Odelyn stops walking.

Choices:
- Hear Odelyn's answer -> Odelyn Reassures Pela

### 143. Odelyn Reassures Pela
Twine position: `23100,120`

Odelyn places a hand on Pela's shoulder. "Of course not. You're a good student. You'll do fine. And besides, you have me to help you." The hug is gentle. Pela returns it because refusing comfort feels more dangerous than accepting it. "I don't remember what happened in there like you do," Odelyn says. "But I feel something is different. Good or bad, I don't know. Whatever happens, I'll be here." "I hope you're right," Pela whispers. "About what?" "About not dying."

Choices:
- Return to the dorm -> Dorm With Grimoire

### 144. Dorm With Grimoire
Twine position: `23300,120`

Moonlight catches the grimoire on Pela's desk. Its symbols do not resemble any script she knows. That does not stop them from being understood. The page shows two figures: a person and a monster, nearly identical except for the eyes and smiles. Odelyn yawns by the door. "Don't take too long. First Spellblade class tomorrow."

Choices:
- Promise not to stay up late -> Odelyn Leaves Study
- Ask Odelyn to stay a little longer -> Study With Odelyn

### 145. Study With Odelyn
Twine position: `23500,20`

Odelyn stays for another few minutes, pretending not to be exhausted. They study the first page together. Odelyn cannot read it. Pela cannot read it either, but understanding crawls under the letters like something alive beneath skin. "That is unsettling," Odelyn says. "Yes," Pela replies. "It is." Eventually, Odelyn leaves.

Choices:
- Read alone -> Forbidden Voice

### 146. Odelyn Leaves Study
Twine position: `23500,120`

"I won't," Pela says too late for Odelyn to hear. The door shuts. The grimoire waits.

Choices:
- Read alone -> Forbidden Voice

### 147. Forbidden Voice
Twine position: `23700,120`

"You understand, don't you?" the Forbidden One asks from nowhere and everywhere near the page. Pela grips the desk. "Who are you really?" "I am the Forbidden One. I am helping because you can bring about a new age. Magic hidden by the chosen can be learned by all." Rage rises too fast in Pela's chest. "Just tell me how to use the damn book."

Choices:
- Feel the book answer -> Book Emotional Infection

### 148. Book Emotional Infection
Twine position: `23900,120`

"Use the book?" The Forbidden One sounds amused. "The book is using you. It has infected your emotional state." The rage drains away. Pela is calm. Too calm. The sudden absence of fear feels like losing a limb she had been balancing on. "There," he says. "An example."

Choices:
- Reject the emotional tampering (DC Nerve: 7) -> Reject Emotional Tamper
- Keep the lesson. Refuse the leash. -> Unclaimed Book Lesson
- Begin the lesson -> Awe Lesson

### 149. Reject Emotional Tamper
Twine position: `24100,20`

Pela digs her nails into her palm until pain gives her something private. "Do not touch my feelings without permission." The Forbidden One is silent long enough for the room to creak. "Good. Control begins with noticing the hand on the leash."

Choices:
- Begin the lesson -> Awe Lesson

### 150. Awe Lesson
Twine position: `24100,120`

The Forbidden One asks Pela to remember Odelyn's spear. Not envy, he says. Awe. Demon-kind shape magic through powerful emotion. Human incantations ask the world to move. Demon-kind make the world feel why it must. Pela closes her eyes and remembers the spear's heat, its worn darkness, its impossible presence.

Choices:
- Try to form a weapon -> Outline Spear

### 151. Outline Spear
Twine position: `24300,120`

A faint outline appears before Pela. Barely visible. Barely real. It is almost nothing. "Good," the Forbidden One says. Pela glares at the empty outline. "That is generous." "It is honest."

Choices:
- Use the grimoire as focus -> Book Amplifies Awe

### 152. Book Amplifies Awe
Twine position: `24500,120`

The grimoire opens beneath her hands. It does not give her power. It gives her too much feeling. Awe becomes obsession. Every detail of Odelyn's spear becomes beautiful enough to hurt. The room fills with the smell of burning metal. Crackle. Crackle. Crackle.

Choices:
- Shape it as a Spark Mage -> Spark Spear Born

### 153. Spark Spear Born
Twine position: `24700,120`

A spear forms in the air. Not Odelyn's. Pela's. Pale blue metal. Silver-white tip. Crimson handle. A pink sash at the end. Electricity hums through it like a held note. "Wow," Pela whispers. "Impressive," the Forbidden One says. "I am very pleased. However, I will be taking that from you."

Choices:
- Lose the spear -> Forbidden Takes Spear

### 154. Forbidden Takes Spear
Twine position: `24900,120`

The spear disintegrates. "Now that you know how it feels, you cannot have the book again until you master the magic and the emotions that go with it." "That's not fair." "Neither is talent without control." Pela folds her arms. "You're a jerk." "Perhaps. I am also the best teacher you will ever have."

Choices:
- Prepare for Spellblade over the weekend -> Weekend Day One

### 155. Two Days Later
Twine position: `25100,120`

The weekend leaves its ache in Pela's hands. The Forbidden One stays inside her life but never fully visible. The first day of Spellblade class arrives. Her classmates watch her enter: some curious, some waiting for a mistake, some already building rumors around the shape of her.

Choices:
- Enter Spellblade class -> First Spellblade Class

### 156. First Spellblade Class
Twine position: `25300,120`

Odelyn touches Pela's shoulder. "You made it. How are you feeling?" "Overwhelmed." "Your first battle is against another new student. Lorne. Self-proclaimed Dark Mage. He says he uses Impact magic." Pela tries to look calm.

Choices:
- Meet Lorne -> Lorne Arrives

### 157. Lorne Arrives
Twine position: `25500,120`

Lorne arrives in a long black robe, pale, angular, and cold-eyed. "Who is the other student?" he asks. "Pela," Professor Vayne says. "Your opponent for induction." Vayne writes the rules on a conjured blackboard: melee focus, no flying, no projectiles, no spells outside melee. Pela is a Spark Mage. Lorne chooses Impact.

Choices:
- Take positions -> Duel With Lorne Begins
- Let the Feast smile at Lorne first (DC Oath: 8) -> Eldritch Lorne Mark
- Tell Lorne his robe is doing more fighting than he is (DC Nerve: 9, Spend: 2 Nerve) -> Jerk Lorne Robe

### 158. Duel With Lorne Begins
Twine position: `25700,120`

Induction Duel Pela $pelaHP / 42 Lorne $lorneHP / 72 "Fight!" Pela moves first with a low sweep. Lorne jumps back, then launches forward with silver light around his fist. She dodges and kicks him in the back. He turns slowly, not embarrassed yet. Just awake.

Choices:
- Choose Pela's opening move -> Lorne Battle Menu

### 159. Battle Low Sweep
Twine position: `25900,20`

Pela keeps the fight mundane for one more breath. She ducks under Lorne's glowing fist and sweeps his ankle. It is not glorious, but it makes him stumble and buys her space. "Still hiding from magic?" Lorne spits.

Choices:
- Lorne acts -> Battle Lorne Turn

### 160. Battle Failed Summon
Twine position: `25900,120`

Pela forces the spear shape before awe can settle. The weapon appears as a jagged outline, then collapses into sparks that bite her palms. Lorne sees the failure and surges forward, driving a short impact jab into her guard.

Choices:
- Pela falls -> Lorne Game Over
- Recover -> Lorne Battle Menu

### 161. Battle Braced Hit
Twine position: `26100,20`

Pela chooses pain she can survive. She braces herself before Lorne moves. Her shoulders square. Her knees bend. She makes herself a locked door and prays the hinges know their work.

Choices:
- Lorne acts -> Battle Lorne Turn

### 162. Battle Focused Dodge
Twine position: `26100,220`

Pela focuses before fear gets to her. Lorne's shoulder turns before his feet detonate. The warning is tiny, but enough. She lets the first answer be movement instead of panic.

Choices:
- Lorne acts -> Battle Lorne Turn

### 163. Battle Pressure Spark
Twine position: `26300,120`

Pela compresses Spark into a short-range burst. No fireball. No dramatic arc. Just pressure, heat, and white current detonating against Lorne's guard at arm's length. He staggers back with smoke curling from his sleeve.

Choices:
- Lorne acts -> Battle Lorne Turn

### 164. Battle Taunt
Twine position: `26500,120`

"You call yourself a Dark Mage," Pela says, "but you move like someone who only learned one trick." Lorne's expression sharpens into anger. It works. Maybe too well.

Choices:
- Lorne acts -> Battle Lorne Turn

### 165. Battle Overload Prep
Twine position: `26700,120`

Pela tries to gather too much current at once. The stage lights flicker. Her teeth ache. Lorne hesitates, then punches through the edge of the charge before it becomes a real spell. The backlash hurts, but the gathered current remains.

Choices:
- Pela falls -> Lorne Game Over
- Keep fighting -> Lorne Battle Menu

### 166. Battle Clean Strike
Twine position: `26900,20`

Lightning obeys cleanly. It bites into Lorne's impact aura and cracks the silver light apart before the spell can reach his fist. The class goes quiet in the way people go quiet around a blade.

Choices:
- Check the result -> Battle Lorne Turn

### 167. Battle Perfect Fusion
Twine position: `26900,120`

Pela stacks Impact Shield over Lightning Strike at the beginning of the cast. For once, the magic does not feel like an accident. It locks together, shield shaping the bolt, bolt charging the shield. Vayne leans forward.

Choices:
- Check the result -> Battle Lorne Turn

### 168. Battle Wild Fusion
Twine position: `26900,240`

Pela fuses the spells late. Too late. The magic works, but the backlash snaps through her arms and leaves her fingers numb. Lorne takes the hit, and Pela takes the lesson.

Choices:
- Pela falls -> Lorne Game Over
- Check the result -> Battle Lorne Turn

### 169. Lorne Defeated
Twine position: `27100,120`

Lorne hits the floor, stunned. "I told you," Pela says, breathless. "I'm a Spark Mage." Vayne cuts in before pride can become cruelty. "Enough. Pela wins. Lorne, infirmary." "You got lucky," Lorne mutters. Odelyn folds her arms. "No. You got outmatched."

Choices:
- Review the new battle preparation system -> Loadout Feature Unlocked

### 170. Spell Fusion Lesson
Twine position: `27300,120`

Vayne turns the duel into a lesson before the room can finish deciding what rumor to make of it. "Spell Fusion combines the magical energy of two or more spells. Pela used it when she combined Lightning Strike and Impact Shield." "I did?" Pela asks. "You did. Risky. Brilliant. Almost foolish." Vayne explains that prepared fusion reduces misfire risk. Last-second fusion can explode if control fails.

Choices:
- Receive the assignment -> Fusion Assignment

### 171. Fusion Assignment
Twine position: `27500,120`

"For next class," Vayne says, "prepare a Spell Fusion combination and be ready to demonstrate it." Odelyn practically vibrates with excitement. Pela looks at the blackboard, then at her hands. She has a grimoire, a forbidden teacher, a Saint in her soul, and one successful instinct she is not sure she can repeat.

Choices:
- Morning practice -> Fusion Practice Morning

### 172. Fusion Practice Morning
Twine position: `27700,120`

The next morning, Pela and Odelyn sit with their Spell Fusion assignments. A congratulatory note from Gareth rests nearby. Pela stares at her blank page. "I'm not sure what to do." Odelyn smiles. "We'll figure it out." The Forbidden One whispers: "Let the emotions flow through you."

Choices:
- Refuse the whisper and breathe (DC Nerve: 8) -> Practice Without Crutch
- Break under pressure -> Practice Breakdown

### 173. Practice Without Crutch
Twine position: `27900,20`

Pela shuts her eyes and refuses both the book and the whisper. Awe. Frustration. Triumph. She names each feeling without letting it own her. The page is still blank, but the panic loosens.

Choices:
- Let Odelyn help -> Odelyn Comforts Practice

### 174. Practice Breakdown
Twine position: `27900,120`

"Gosh dammit!" Pela slams the book shut. A shockwave rattles the room. "I'm not good enough without getting overly emotional. I'll never be a real Spellblade duelist like this." Odelyn does not flinch away.

Choices:
- Let Odelyn help -> Odelyn Comforts Practice

### 175. Odelyn Comforts Practice
Twine position: `28100,120`

"If emotions are your crutch," Odelyn says, "then remember them and use them to guide you. I have faith in you." "Really?" "Of course." Pela wipes her eyes and opens the book again. Awe. Frustration. Triumph. These feelings are her strength, not her weakness.

Choices:
- Let her faith stand beside her, not above her (DC Trust: 6) -> Unclaimed Odelyn Faith
- End chapter five -> Chapter Five End
- Tell her the faith sounds better in her voice (DC Trust: 8) -> Romance Odelyn Faith

### 176. Chapter Five End
Twine position: `28300,120`

Chapters four and five end here. Pela has taken the grimoire, bound herself to the Forbidden One, created her first Spark spear, won her induction duel against Lorne, and learned that Spell Fusion may be the key to surviving as a Spellblade. Next hook: Gareth knocks on Pela's door.

Choices:
- Continue to Chapter 6 hook -> Chapter Six Hook
- Play again -> Start

### 177. Chapter Six Hook
Twine position: `28500,120`

Chapter 6: The Unseen Someone knocks on Pela's door. "Who is it?" "It's me, Gareth. Can I come in?" This is where the next chapter begins.

Choices:
- Begin Chapter 6 -> Ch6 The Unseen 01
- Return to chapter five ending -> Chapter Five End

### 179. Battle Summon Spear
Twine position: `25900,420`

Pela reaches for awe instead of panic. The spear forms in her hands with a snap of a gold-blue-white current. Lorne lunges into the light and takes the shaft across his ribs before he can stop himself. "You're not supposed to be able to do that," he snarls.

Choices:
- Lorne acts -> Battle Lorne Turn

### 180. Battle Spear Rush
Twine position: `26100,420`

Pela drives forward. The spear hums through a fast combination: butt to wrist, blade to shoulder, a shower of sparks as Lorne blocks with compressed impact force. He gives ground. Not much. Enough. The spear has taught her the distance now. Low Sweep will not be the same next time.

Choices:
- Lorne acts -> Battle Lorne Turn

### 181. Battle Defend
Twine position: `26300,420`

Pela lowers her stance and watches Lorne's feet. His magic begins in the floor before it reaches his fists. If she can read the impact craters, she can survive the punch. Not stop it. Survive it.

Choices:
- Lorne acts -> Battle Lorne Turn

### 182. Battle Analyze
Twine position: `26500,420`

Pela stops watching Lorne's hands. She watches the floor. Impact blooms beneath his heels a fraction before every burst of speed. The pattern is crude, arrogant, and repeatable. Pela can almost see the next motion before he commits to it. 'Simple enough,' she murmurs. Lorne's eyes narrow.

Choices:
- Lorne acts -> Battle Lorne Turn

### 183. Battle Lightning Feint
Twine position: `26700,420`

Pela snaps lightning across the spearpoint, not as a projectile, but as a threat close enough to taste. Lorne flinches from the flash. Pela uses the opening to strike his guard and send him skidding backward. The class spectators gasp. Vayne does not.

Choices:
- Lorne acts -> Battle Lorne Turn

### 184. Battle Impact Shield
Twine position: `26900,420`

Pela shapes Belladonna's lesson around her body. The Impact Shield bends into being thin and flexible. It will not save her from everything, but it will punish anything foolish enough to hit her more than once. Professor Vayne's mouth curves almost imperceptibly as she notices this tactic mid-battle.

Choices:
- Lorne acts -> Battle Lorne Turn

### 185. Battle Forbidden Focus
Twine position: `27100,420`

The Forbidden One speaks from behind Pela's thoughts. "Fear is loud. Awe is precise. Make him small enough in your mind to measure all his weaknesses." The advice steadies her. The spear feels more real in her grip.]

Choices:
- Lorne acts -> Battle Lorne Turn

### 186. Battle Fusion Finisher
Twine position: `27300,420`

Pela drops the spear. Lorne laughs, thinking she has panicked. She has not. Lightning Strike forms in one palm. Impact Shield folds over it in the other. The spells fuse for a single dangerous heartbeat, then crash into Lorne's charged fist with a thunderclap. The impact shot collapses. Lorne hits the floor.

Choices:
- Finish the duel -> Lorne Defeated

### 187. Battle Lorne Turn
Twine position: `27500,420`

[Lorne detonates impact magic beneath his feet and becomes a blur.] [Lorne closes one hand until silver pressure crawls between his knuckles.] [Lorne splits his impact magic into five ugly pulses and comes in too fast for one clean answer.] [Lorne does not attack. He drags impact magic down into his fist until the air around it starts to bend.] [The gathered force breaks loose. Lorne's fist comes forward with enough pressure to make the ward floor scream.] [Lorne stops caring about form. He throws himself forward, silver light boiling past his guard.] [Pela reads the shape of it before the hit fully becomes a hit.] [The movement is too fast. By the time she sees him, the answer is already arriving.] [The pressure steals the clean thought from her head before she can use it.] [Silver force boils around Lorne's arms now. He has stopped performing for the class and started fighting to win.] [Pela's footwork saves her from the center of the blow, but not from the edge.] [Pela braces hard enough to make the impact spend itself against her stance.] [She moves with the first warning and lets the worst of the attack hit empty air.] [Negative Impact Shield answers every small hit. Each pulse bites itself on the way in.] [Negative Impact Shield catches part of the force and sends a thin punishment back through his wrist.] [Impact Parry catches the first strike perfectly. The other pulses still find her before she can reset.] [Impact Parry closes at the exact moment. Lorne's attack dies against it without touching her.] [Pela's words are still in his stance. His timing keeps arriving a breath too early.] [The smile in Pela's mark keeps showing up in Lorne's blind spots. Impact magic slips from his fists like it has teeth marks.] [The reapplied Feast Mark worries the silver light around Lorne's fists, taking another small mouthful.] [The Grinning Ward answers Lorne before Pela can. Impact magic snaps back through his arm with a wet, private kind of wrongness.] [Pela's smile catches the punch first. Her body only receives what the teeth leave behind.] [His rush carries him too far. For one breath, his guard is open and everyone in the room can see it.] [Pela takes no damage.] [Her guard catches most of it. Pain snaps up her arms, but her stance holds.] [The blow lands hard enough to rattle her ribs.] [The impact throws Pela across the warded floor. For a second, the room becomes soundless.]

Choices:
- Pela falls -> Lorne Game Over
- Keep fighting -> Lorne Battle Menu

### 188. Lorne Game Over
Twine position: `27700,420`

GAME OVER Lorne's final impact breaks Pela's stance. The spear dissolves before it reaches her hand. The classroom ceiling turns slowly above her while Vayne's voice cuts through the ringing in her ears, ending the match before pride becomes a corpse. Pela survives. But she does not pass the induction duel.

Choices:
- Retry the Lorne battle -> Duel With Lorne Begins
- Return to Start -> Start

### 189. Ch6 The Unseen 01
Twine position: `28720,120`

Chapter 6: The Unseen Someone knocks on Pela's door, and she looks up. "Who is it?"

Choices:
- Let Gareth in -> Ch6 Gareth Enters Normally
- Ask if Gareth is really all right. -> Ch6 Gareth Check On Him
- Hide the grimoire first. -> Ch6 Hide Grimoire Before Gareth

### 190. Ch6 The Unseen 02
Twine position: `28940,120`

"It's me, Gareth. Can I come in?" "Of course, come on in," Pela replied, smiling, "what's up?" "I just wanted to see how you were doing," Gareth explained, "I heard about the battle against Lorne."

Choices:
- Answer Gareth's concern -> Ch6 The Unseen 03

### 191. Ch6 The Unseen 03
Twine position: `29160,120`

"Oh, yeah. I noticed that you weren't in class, what happened?" Pela replied, concerned. "Nothing, I was just feeling a little sick. It's no big deal," Gareth reassured, his tone casual. "Are you sure? I can't believe you'd miss that fight. It was incredible," Pela said, her expression softening.

Choices:
- Let his excuse pass for now -> Ch6 Gareth Excuse Pass
- Press him gently about being sick. -> Ch6 Gareth Press Sickness

### 192. Ch6 The Unseen 04
Twine position: `29380,120`

"Yeah, I heard. I'm sorry I missed it," Gareth replied, "how did it go?" "I won," Pela smiled, "It was tough, but I pulled through in the end." "That's great! Congratulations," Gareth grinned, "I knew you'd win. I never had a doubt in my mind."

Choices:
- Tell him how the duel ended -> Ch6 Odelyn Route Interrupt
- Tell him how the duel ended -> Ch6 The Unseen 05

### 193. Ch6 The Unseen 05
Twine position: `29600,120`

"Thanks," Pela said, her cheeks flushing. "I wanted to keep you updated on what's been going on at the Academy. The whole place has been buzzing with news about the fight," Gareth explained, "It's a big deal, you know. Having a duel in front of everyone where a previously unknown Mage comes in and wipes the floor with a transfer student from the College of Iluus at Brittanica City. People are talking, and they're not saying nice things about Lorne. He has a lot of raw power..." "Oh, yeah? That's not surprising," Pela replied, her expression neutral.

Choices:
- Listen to what victory means here -> Ch6 The Unseen 06

### 194. Ch6 The Unseen 06
Twine position: `29820,120`

"I know you don't realize this, but the reason that is significant is that he is supposed to be the strongest heir in his Royal House in terms of pure potential. He's a prodigy and a natural at combat magic. He has the highest potential in all of House Arcadia," Gareth elaborated, "But, you beat him. It's unheard of, no one has ever done that in their first battle. You've set a precedent, Pela. A really high bar, and people are going to want you to keep it up or destroy you to prove a point." "Great, no pressure," Pela groaned, her anxiety rising. "It'll be fine. You can handle it. You've got the skills, but do not seek that fame or else the Nhal will no doubt kill you. If you're not careful, you'll find yourself in a position where you can't handle that exposure. You have to be smart about this, Pela," Gareth warned, his expression serious.

Choices:
- Promise Gareth she will be careful -> Ch6 Promise Careful
- Ask how assassins bypass academy wards (DC Research: 9) -> Ch6 Ward Bypass Question

### 195. Ch6 The Unseen 07
Twine position: `30040,120`

"Thanks, Gareth. I'll be careful," Pela promised. "Good, because the other thing is... there's been a lot of chatter about the two of us," Gareth admitted, his tone cautious, "It's mostly rumors, but people are speculating about us." "Speculating? About what?" Pela asked, confused.

Choices:
- Deny the rumor too quickly. -> Ch6 Rumor Denial
- Admit the friendship matters. -> Ch6 Friendship Matters

### 196. Ch6 The Unseen 08
Twine position: `30260,120`

"They think we're dating, or, at least, that we're going to start dating," Gareth replied, his expression embarrassed. Pela's mouth goes dry. "That is what they think?" "I know, but people are talking. They think that you and I have a connection, that we're close... I-mean-we-are-close-but-not-like-that," Gareth stammered, his cheeks burning.

Choices:
- Ease the embarrassment -> Ch6 Ease Gareth Embarrassment
- Let the awkward silence answer -> Ch6 Awkward Silence Rumor

### 197. Ch6 The Unseen 09
Twine position: `30480,120`

"We are," Pela agreed, her face turning red, "But, we're not...you know..." "I know, I know," Gareth said, his voice wavering, "But, the other students don't know that, and they're making assumptions. We have to be careful. Any exposure is not necessarily good exposure. People will look for a weak link in your armor and exploit it if they can. Especially with me. People don't like me. They think I'm some kind of freak, and they're not shy about letting me know. I can take care of myself, but if they target you because of our friendship, that could be bad. We need to keep our heads down and stay under the radar as much as possible," Gareth cautioned, his tone firm. "I'll try, but I can't promise anything," Pela shrugged.

Choices:
- Refuse to hide what matters (DC Trust: 6) -> Unclaimed Gareth Rumor
- Promise to keep their heads down -> Ch6 The Unseen 10
- Ask what people say about Gareth. -> Ch6 Ask About Gareth Rumors

### 198. Ch6 The Unseen 10
Twine position: `30700,120`

"That's all I ask," Gareth smiled, his tone sincere. "So, are you feeling better?" "Yeah, I'm fine. Don't worry about me," Gareth dismissed, "How are you doing? How's the book?"

Choices:
- Pretend he means coursework -> Ch6 Book Coursework Dodge
- Keep her voice steady about the book (DC Nerve: 9) -> Ch6 Book Voice Steady

### 199. Ch6 The Unseen 11
Twine position: `30920,120`

"The book?" Pela asked realizing she never told Gareth about it, "It's fine. Nothing to report," Pela answered, her tone guarded. "Okay. Well, if you ever need anything, you know where to find me," Gareth replied, his voice gentle, "I'll see you later, okay?" "Okay. See you," Pela nodded.

Choices:
- Let Gareth leave -> Ch6 The Unseen 12
- Nearly call him back -> Ch6 Gareth Almost Call Back

### 200. Ch6 The Unseen 12
Twine position: `31140,120`

Gareth turned and walked out of the room, leaving Pela alone with her thoughts. 'What the hell? I can't believe the Nhal would actually make an attempt on me, in one of the centers of Brittanican Magic no less. That's insane! What am I going to do? Are Athean assassins really so powerful and deadly that the Nhal can send them into a city of mages without fear of retaliation? I have no idea. Maybe I should tell the professors or the Dean about this...' Pela's thoughts raced as she tried to figure out her next move. 'I can't tell them about the book either, a demon being taught by a demon!? It's not just the Nhal or the Sovereigne, but the other royal houses. They'd probably think I was some kind of spy or infiltrator and would have me sent to the dungeon and questioned by the Royal Knights, then the Nhal would find out about the book and would definitely send an assassin. Dammit, why can't life be simple?'

Choices:
- Consider telling a professor -> Ch6 Tell Professor Thought
- Bury the book deeper in secrecy. -> Ch6 Bury Book Thought

### 201. Ch6 The Unseen 13
Twine position: `31360,120`

Pela started to make her way to the Dean's office when she stopped dead in her tracks, her heart beating wildly. 'That's not true. I have a demon on my side, I just have to keep my head down and learn as much magic as possible. Once I master Spell Fusion, I can take out any threat that comes my way. I just have to survive long enough to achieve that goal. And, once I have that, no one will ever be able to threaten me again. No one will ever be able to stop me from becoming a great mage, and a force for good in the world,' Pela affirmed. Her mind made up, she continued walking, her resolve strengthened.

Choices:
- Choose study over panic -> Ch6 Resolve Study
- Let ambition answer fear. -> Ch6 Ambition Answers Fear

### 202. Ch6 The Unseen 14
Twine position: `31580,120`

BOOM! "What the hell?!" Pela gasped, the ground rumbling. Pela felt the impact, the vibrations shaking the air and rattling her bones.

Choices:
- Run from the blasts -> Ch6 Run From Blasts
- Read the explosion pattern (DC Research: 10) -> Ch6 Explosion Read

### 203. Ch6 The Unseen 15
Twine position: `31800,120`

'What's happening?!' Pela wondered, her eyes wide. BOOM! Another impact shook the building, this time closer.

Choices:
- Follow the next blast -> Ch6 The Unseen 16

### 204. Ch6 The Unseen 16
Twine position: `32020,120`

"Everyone, evacuate immediately!" A woman screamed. No one else in the hallways seemed to heed her advice and help walking along. 'The explosion came from the other side of the school, opposite to me. That's a good sign. It means the attackers are coming from the east,' Pela realized, her eyes narrowing. BOOM!

Choices:
- Look for a safe route through the hall. -> Ch6 Safe Route Hallway
- Run with the evacuation voice. -> Ch6 Evacuation Voice

### 205. Ch6 The Unseen 17
Twine position: `32240,120`

Pela broke out into a run, heading away from the sound of the blasts. Pela's heart pounding, her legs pumping, and her breath coming in short gasps. She could feel the fear, the adrenaline coursing through her veins, but she refused to give in to it. She had a mission, a purpose, and she wasn't about to let a few explosions stop her. "That's always something I disliked about you," an arm grabbed her shoulder and stopped her in place, "you always let your emotions drive your actions. It's a weakness, a flaw, and it will be your undoing," Professor Ardenfelt stated, his eyes cold. "What the hell are you doing here, I have to evacuate?!" Pela growled, trying to pull away from him.

Choices:
- Identify the class behind the blasts (DC Research: 12) -> Ch6 Identify Explosive Class
- Argue that evacuation is rational. -> Ch6 Argue Evacuation Rational

### 206. Ch6 The Unseen 18
Twine position: `32460,120`

"Do not mind the explosions. I thought you were stronger than that... those explosions are obviously from the Explosive Magic Specialization class," Professor Ardenfelt revealed. "What are you talking about, they're coming from the east," Pela replied, confused. Ardenfelt flicked her forehead and Pela sunk to the floor.

Choices:
- Swallow the insult -> Ch6 Swallow Insult Ardenfelt
- Ask what kind of warning that was. -> Ch6 Ask About Forehead Flick

### 207. Ch6 The Unseen 19
Twine position: `32680,120`

"That was just a warning. Do not test my patience, I can easily turn you into a vegetable with a single flick of my finger. Now, come with me, and I'll show you what is going on," Professor Ardenfelt ordered. "You're insane," Pela murmured, her body numb. "Insanity has nothing to do with it," Professor Ardenfelt smirked.

Choices:
- Follow Ardenfelt despite herself -> Ch6 The Unseen 20

### 208. Ch6 The Unseen 20
Twine position: `32900,120`

He took her by the arm and dragged her towards the east side of the Academy. "The Academy has many defense mechanisms, one of which is to detect intruders and alert the staff. Those explosions are from a very simple spell, and the fact that the Explosive Magic Specialization class is being taught at the moment is no accident," Professor Ardenfelt explained, "If an actual invasion were to happen, the Academy would be alerted. It is a fail-safe that prevents the Nhal or the other royal houses from being able to strike a major blow. As for Explosive Magic Specialization, that is taught every time this year. It's an exam, to see how well the students can control and cast the spell." "But, why didn't they warn us about it? Why is no one telling the students what is going on?"

Choices:
- Ask why the exam sounds like an attack -> Ch6 Exam Sounds Like Attack
- Listen for the logic beneath Ardenfelt's cruelty. -> Ch6 Listen Ardenfelt Logic

### 209. Ch6 The Unseen 21
Twine position: `33120,120`

"You are Brittanican mages. You should be able to recognize the sound of an explosion and determine the source. It's not my fault if the students are too lazy to do so," Professor Ardenfelt shrugged, "There's a big difference between how combat sounds and a demonstration blast of an explosion. It is a basic thing you should have learned in your first semester... of course, it appears you were not paying attention... or you were not there." Pela's cheeks flushed, "Well, why not evacuate the building?" "The building is shielded and reinforced. Evacuating would be pointless, especially considering the Academy has been under attack before and has survived," Professor Ardenfelt said in an annoyed fashion,"Enough questions, just observe."

Choices:
- Observe as ordered -> Ch6 The Unseen 22

### 210. Ch6 The Unseen 22
Twine position: `33340,120`

They walked to a small classroom with its door barely open. "Beyond this door is an open field. You are forbidden from casting any spells unless prompted by Instructor Leunname. I will cast a barrier to prevent sound from escaping the classroom, like she should have to begin with. Once you are inside, you will stand still and observe. When the lesson is finished, I will bring you back. Am I understood?" "Yes, Professor," Pela mumbled. "Good," Professor Ardenfelt opened the door and pushed her into the room.

Choices:
- Agree to only observe -> Ch6 Observe Agreement
- Memorize the barrier rule. -> Ch6 Barrier Rule Memorized

### 211. Ch6 The Unseen 23
Twine position: `33560,120`

Pela stumbled, but managed to catch herself. She looked around, taking in her surroundings. In the middle of the field were ten students, each casting an Explosion spell. The ground was blackened and scorched from the spells, and the air was filled with smoke. The students themselves were wearing special protective clothing and helmets, preventing them from suffering any physical injuries. "What are you doing here?!" A woman hissed.

Choices:
- Face the masked student -> Ch6 The Unseen 24

### 212. Ch6 The Unseen 24
Twine position: `33780,120`

Pela's eyes widened, seeing a young girl about her age with a black uniform, a dark hood, and a mask covering her face. The girl was staring at her intently, her green eyes filled with distain. "I'm sorry, I was just-" "Shh! Not another word," the girl hissed, "you can't be interrupting me now. Not after I worked so hard to master this technique. I will not fail."

Choices:
- Apologize and go quiet -> Ch6 Apologize To Masked Girl
- Study her technique from the corner. -> Ch6 Study Masked Girl Technique

### 213. Ch6 The Unseen 25
Twine position: `34000,120`

"Okay," Pela whispered. "Listen closely, the second lesson is about to begin," a voice boomed. "Instructor Leunname, a new student is here," the young girl said, her voice filled with reverence.

Choices:
- Listen to Instructor Leunname -> Ch6 The Unseen 26

### 214. Ch6 The Unseen 26
Twine position: `34220,120`

"I see," a woman with a crimson outfit floated in the sky to announce, "she will not be allowed to participate in the exam. She has not completed the first lesson. You will observe, nothing more. Now, take your positions." The girl gave Pela a look. Then she took her place in the center of the group. Leunnamme was a woman in her forties, her face was lined with stress and her eyes were full of wisdom and experience. She was wearing a crimson red and black coat with a matching hat, her hair was black as coal, and her eyes were more red than a rose. Her skin was pale and her expression was severe.

Choices:
- Watch the crimson instructor -> Ch6 The Unseen 27

### 215. Ch6 The Unseen 27
Twine position: `34440,120`

"The second lesson is about learning how to cause Magical Clash to occur without an opposing mage," Leunname started, "You must understand this. It will help you in combat and survival. To demonstrate, I will use the field as a target. Everyone, stand back and watch closely." The students immediately backed away from her, their eyes filled with awe and respect. Instructor Leunname raised both of her hands. Each hand had an orb of swirling magic present. "In my left hand is fire magic enhanced with impact magic for Spell Fusion and my right hand has fire magic and negative impact magic for a Spell Fusion," Leunname explained, her voice filled with excitement.

Choices:
- Study the two orbs -> Ch6 The Unseen 28

### 216. Ch6 The Unseen 28
Twine position: `34660,120`

"However, using these together will create a stronger fire spell. Why?" Leunname asked. "Because the opposing elements are not in conflict. Negative magic has no effect on positive magic, except to draw positive magic towards it. The two forces combine, creating a new, and greater power," Pela declared confidently. "Very good. Now, observe," Leunname ordered.

Choices:
- Stay silent and observe -> Ch6 Stay Silent Observe Synergy
- Answer Leunname before anyone else (DC Research: 12) -> Ch6 Answer Leunname First

### 217. Ch6 The Unseen 29
Twine position: `34880,120`

She fired the two magic orbs at the field and they combined to created a giant fireball that scorched the ground, causing the earth to tremble. "What do you see? What did we just learn?" Leunname asked, her gaze falling on the young girl. "We learned that two magics, if they are not opposed, can create a much more powerful result," the young girl said.

Choices:
- Measure the young girl's answer -> Ch6 Measure Young Girl Answer
- Focus on Leunname's correction. -> Ch6 Focus Leunname Correction

### 218. Ch6 The Unseen 30
Twine position: `35100,120`

"Good. Very good. And, what does this have to do with Magical Clash?" Leunname asked. "By creating a greater power, and releasing that power, you can cause a magical explosion. An explosion that, if controlled, can create a Magical Clash. That is the second lesson," the young girl explained, her tone absolute. "Wrong. Magical Clash wasn't even close to achieved. That was Magical Synergy, the first step. The second step, however, is much harder. You need to have your own Magic Control and Magic Capacity. Your Magic Control allows you to channel your magical energy into a desired outcome, while your Magic Capacity allows you to store and manipulate magical energy," Leunname created the two magical orbs again. "The most important part of this is having your own Magic Control and Magic Capacity. That is why, when we start, you must start with the first step. Learning to create a Magical Synergy," Leunname announced.

Choices:
- Follow the harder second step -> Ch6 The Unseen 31

### 219. Ch6 The Unseen 31
Twine position: `35320,120`

Pela inquired, "Is the next step to learn Magical Clash causing Magical Synergy to break?" "Yes, very good. I'm glad to see you have a good understanding of this," Leunname praised. "Thank you," Pela said.

Choices:
- Accept Leunname's praise -> Ch6 Accept Leunname Praise
- Wonder why Ardenfelt brought her here. -> Ch6 Wonder Ardenfelt Motive

### 220. Ch6 The Unseen 32
Twine position: `35540,120`

"Now, take your positions. We will be learning to achieve the that step today," Leunname instructed. "Wait, there's one last thing I don't understand. What's the difference between Spell Fusion and Magical Clash?" Pela asked. "That is the most important question, the most important one. Because, if you do not understand that, then everything else is useless. Magical Clash is the combination of two different types of magic, but three different spells," Leunname said as she moved the negative impact orb to the center and created a third magic orb of fire magic and impact magic to replace the moved negative impact orb.

Choices:
- Let Leunname continue -> Ch6 Let Leunname Continue
- Ask the Spell Fusion versus Magical Clash question (DC Research + Fusion: 15) -> Ch6 Ask Fusion Clash Question

### 221. Ch6 The Unseen 33
Twine position: `35760,120`

Leunamme fired the spell at the field. The two impact spells were drawn to the negative force in the center and collided into one, creating a massive explosion that rocked the entire field. BOOM! "Magical Clash is a much more powerful version of Magical Synergy, and the key is control. You must have absolute control over all three parts. If you do not, Spell Misfire will occur and explode," Leunname declared.

Choices:
- Keep the explosion in memory -> Ch6 The Unseen 34

### 222. Ch6 The Unseen 34
Twine position: `35980,120`

"I see," Pela mumbled. "Take your positions, it is time for the next lesson," Leunname commanded. In that moment Professor Ardenfelt pulled her out of the room, shutting the door behind them. "That will be all," Ardenfelt stated, "I'm glad to see that you did not embarrass yourself. You are dismissed."

Choices:
- Ask Ardenfelt one last question -> Ch6 The Unseen 35

### 223. Ch6 The Unseen 35
Twine position: `36200,120`

"Wait, I have one last question," Pela said, "how do you know when Spell Misfire occurs and how can you stop it from happening?" "Spell Misfire will always happen if you do not have complete control over all three aspects. The only way to prevent it is through practice and experience," Ardenfelt explained, his tone dismissive, "now, go back to your dorm. You will have homework to complete by the end of the day. I expect a 1000-word essay about the differences between Spell Fusion and Magical Clash and the pros and cons of each. I will not have one of my students destroying themselves because they cannot grasp a basic concept." "Yes, sir," Pela mumbled.

Choices:
- Accept the homework -> Ch6 The Unseen 36

### 224. Ch6 The Unseen 36
Twine position: `36420,120`

"Dismissed," Ardenfelt snapped, and then he disappeared marching to a different part of the school. Pela turned and made her way back to her room, her thoughts racing. 'That was so cool! I can't wait to try out the technique myself. Maybe I can learn to control it and use it in a real battle someday,' Pela thought excitedly.

Choices:
- Imagine using Magical Clash in battle. -> Ch6 Imagine Clash Battle
- Remind herself not to misfire. -> Ch6 Remember Misfire Warning

### 225. Ch6 The Unseen 37
Twine position: `36640,120`

She was so engrossed in her own thoughts, that she didn't notice the girl in black and green following her, her eyes full of curiosity and confusion. "So, are you the transfer student from Brittanica City? How did you do that? No outsiders should have been able to hear the instructor's lesson. That's a high-level technique that only the most powerful mages can master. I've never seen a student of your caliber be able to pull it off," the girl questioned. "Huh?" Pela blinked.

Choices:
- Turn toward the follower -> Ch6 Turn To Follower
- Pretend she was not startled. -> Ch6 Pretend Not Startled

### 226. Ch6 The Unseen 38
Twine position: `36860,120`

"You should forget that you ever saw anything. This is a secret technique and it's not something for the likes of an outsider to learn," the girl said, her tone threatening. "Who are you, anyway?" Pela asked, confused. "I am Princess Tama, and you will show me respect," the girl declared, her eyes burning with anger, "Now, explain yourself. How did you do that? Are a demon of the ancient world after all?" The room turned cold.

Choices:
- Tell Tama her title is doing most of the work (DC Nerve: 13, Spend: 2 Nerve) -> Jerk Tama Title
- Explain herself calmly to Tama (DC Nerve: 12) -> Ch6 Explain Calmly To Tama
- Cite Ardenfelt as witness. -> Ch6 Cite Ardenfelt Witness
- Demand she stop calling Pela a spy. -> Ch6 Demand Stop Spy

### 227. Ch6 The Unseen 39
Twine position: `37080,120`

Pela's mind went blank, her body numb, "What? No, that's crazy. I'm just a normal mage," Pela laughed. "Then, how were you able to hear the lesson? Infiltrator! Demon spy!" Tama declared, "You're a threat to the Royal Houses! You have no right to be here!" "What are you talking about, I'm just a normal student!" Pela exclaimed, "Besides, Professor Ardenfelt knew about it and let me watch the lesson. He was the one who brought me there."

Choices:
- Offer Ardenfelt's name as proof -> Ch6 The Unseen 40

### 228. Ch6 The Unseen 40
Twine position: `37300,120`

"That's impossible," Tama shook her head, "that old fool would never do such a thing." "He did. Ask him, if you don't believe me," Pela countered, "There's no need for this anger." "How can I trust a spy and an outsider!?" Tama shouted, her voice laced with venom.

Choices:
- Try to lower Tama's anger -> Ch6 Lower Tamas Anger
- Point her toward Ardenfelt again. -> Ch6 Point Tama Ardenfelt

### 229. Ch6 The Unseen 41
Twine position: `37520,120`

"I'm not a spy!" Pela yells back. "Liar!" Tama's hand cuts through the air, and green glass gathers around her palm in a tight, trembling crown. It is not a finished spell. It is pride, fear, and training trying to become one sharp thing. Pela feels the shout rising behind her teeth.

Choices:
- Snap -> Ch6 Snap At Tama
- Let the smile answer Tama's fear (DC Oath: 9) -> Eldritch Tama Smile
- Hold the shout behind her teeth (DC Nerve: 14) -> Ch6 Hold Shout Behind Teeth
- Let the Saint of the Feast hunger for battle (DC Oath: 6) -> Tama Battle Trigger Oath

### 230. Ch6 The Unseen 42
Twine position: `39500,120`

Tama lies unconscious on the warded floor, her failed spell gone cold around her fingers. "Oh, crap," Pela whispers. "I didn't do that. I didn't touch her." The Saint only hums, pleased with itself. A figure appeared, shrouded in shadow, "Don't worry, I've got this. You just focus on your lessons. Leave the rest to me." "Wait, who are you?" Pela asked, her heart pounding. Tama lies unconscious where the duel ended, her breath shallow but steady. Pela's hands shake around the shape of power she barely understands. "Oh, crap. I didn't mean for it to go that far," Pela mumbled, "what have I done?" A figure appeared, shrouded in shadow, "Don't worry, I've got this. You just focus on your lessons. Leave the rest to me." "Wait, who are you?" Pela asked, her heart pounding. "ENOUGH!" Pela's voice boomed sending Tama backwards and slamming her into the wall, knocking her unconscious. "Oh, crap. I didn't mean to do that," Pela mumbled, "what have I done?" A figure appeared, shrouded in shadow, "Don't worry, I've got this. You just focus on your lessons. Leave the rest to me." "Wait, who are you?" Pela asked, her heart pounding.

Choices:
- Ask the stranger's name -> Ch6 Ask Lysander Name
- Demand he leave Tama alone. -> Ch6 Demand Tama Left

### 231. Ch6 The Unseen 43
Twine position: `39720,120`

"The name's Lysander. Just call me Ly," the figure winked and then began to disappear, taking the unconscious Tama with him. "Wait, Ly," Pela called out, but the figure was already gone. Pela fell to the stone floor, her heart racing, and her mind reeling from the events that had just transpired.

Choices:
- Call after Ly -> Ch6 Call After Ly
- Check the empty hall for witnesses. -> Ch6 Check Hall Witnesses

### 232. Ch6 The Unseen 44
Twine position: `39940,120`

"What's happening to me? Why do I keep losing control like this?" Pela whispered. [She had not struck Tama. That should have comforted her. It did not. The Saint had found a way to make restraint look like violence, and now Tama would wake with no clean wound to explain why she fell.] [She took a deep breath, centering herself and trying to calm her nerves.] 'I can't keep doing this. I have to control my intense emotions. Otherwise, I'm going to lose my mind. There's too much pressure on me right now. The book, the Nhal, Tama, Lysander, and everything else,' Pela thought, her eyes downcast. Her hands balled into fists and her expression hardened. 'I'm not a demon. I'm a mage, and I will prove it. The Nhal will not defeat me. Neither will anyone else.'

Choices:
- Hold onto being a mage -> Ch7 A New Path 01

### 233. Ch7 A New Path 01
Twine position: `40160,120`

Chapter 7: A New Path 'I've been summoned to the Dean's office. This is bad. The only reason he would summon me is if there's something wrong. And, the only thing that could be wrong is the Nhal and my involvement with the Forbidden One. This is it. My life is over. The Nhal will destroy everything I've worked so hard for, and the Royal Houses will have no choice but to execute me,' Pela thought as she knocked on the door to the Dean's office. "Come in," a voice replied.

Choices:
- Stand there too long, then knock -> Ch7 Stand Too Long
- Knock before fear can grow (DC Nerve: 13) -> Ch7 Knock Before Fear

### 234. Ch7 A New Path 02
Twine position: `40380,120`

Pela opened the door and walked inside. "Ah, there you are. I was expecting you," Dean Sainstroy greeted. "Sorry for the delay," Pela apologized.

Choices:
- Take the offered seat -> Ch7 Take Offered Seat
- Apologize without explaining. -> Ch7 Apologize Without Explaining

### 235. Ch7 A New Path 03
Twine position: `40600,120`

"No, no. That's quite alright. You're actually a few minutes early," Dean Sainstroy dismissed, "Take a seat." "Yes, sir," Pela nodded and sat down. "I wanted to speak with you about your situation. I've been informed of the incident between you and Princess Tama," Dean Sainstroy started.

Choices:
- Hear the Dean's judgment -> Ch7 A New Path 04

### 236. Ch7 A New Path 04
Twine position: `40820,120`

"It was an accident. I didn't mean to hurt her," Pela defended. "Yes, yes. I'm aware of that," Dean Sainstroy interrupted, "I've spoken with Professor Ardenfelt about the whole situation, and we've decided that, given the circumstances, you should be exempt from the upcoming Spell Fusion exam." "Exempt?" Pela asked, shocked.

Choices:
- Ask what class he means -> Ch7 Ask What Class
- Ask why exemption sounds like punishment. -> Ch7 Exemption Punishment

### 237. Ch7 A New Path 05
Twine position: `41040,120`

"Yes. While your performance has been outstanding, and your abilities are beyond question, the incident between you and Princess Tama has raised concerns," Dean Sainstroy continued, "Ardenfelt proposed that, instead of participating in the exam, you will be entered into a special class, one that will focus on your particular talents and strengths." "Special class?" "Yes. The class will be led by Ardenfelt himself. Every year, a tenured professor or qualified Arch-Mage candidate can teach a Specialization Class, one that is geared toward a particular type of magic. For example, there's Leunname's Explosion Arts class, Professor Opal's Necromancy class, and Professor Malachite's Geomancy class," Dean Sainstroy elaborated, "You will be placed into Ardenfelt's new class, one focused on pure combat magic called Spell Applications of Combat."

Choices:
- Ask why Ardenfelt leads it -> Ch7 Ask Ardenfelt Leads
- List the specialization classes in her head. -> Ch7 List Specializations

### 238. Ch7 A New Path 06
Twine position: `41260,120`

"Spell Applications of Combat," Pela echoed. "Yes. The class will focus on teaching you how to use your magical powers to aid in combat, while minimizing the risk of Spell Misfire or Spell Misuse," Dean Sainstroy confirmed as the room turned dark. Completely black. "This class is perfect for you. You've demonstrated an ability to use your magical abilities to enhance your fighting skills, but you still lack the control needed to effectively utilize them. With Ardenfelt's help, you'll learn how to use your magic without putting yourself or others or yourself at risk," the dean stared directly into Pela's eyes, "Furthermore, we are aware of you and some of your classmates being targets for The Nhal, and the Academy has been working tirelessly to protect you and other students of interest. Your participation in this class is essential to the Academy's efforts, and the safety of all Brittanican mages. You cannot be allowed to fall into the hands of the Nhal, nor can you be allowed to expose yourself or others to danger. Do you understand?"

Choices:
- Agree because refusal is not an option -> Ch7 Agree No Refusal
- Read the Dean's wording (DC Research: 12) -> Ch7 Read Dean Wording

### 239. Ch7 A New Path 07
Twine position: `41480,120`

"Yes, sir," Pela mumbled. "Very well," the lights returned, "I expect you to give your all. Dismissed." Pela stood up and walked out of the room, her mind racing.

Choices:
- Leave before the darkness returns -> Ch7 A New Path 08
- Replay the Dean's warning. -> Ch7 Replay Dean Warning

### 240. Ch7 A New Path 08
Twine position: `41700,120`

'Why are they singling me out? Is it because of the duel against Lorne or the fight with Tama? Am I really that special? Or is it because Athea's Sovereigne wants to recruit me? I don't get it, and it's making me nervous,' Pela thought, 'Wait, but why isn't Vayne teaching the class? She's a Spell Blade duelist, she knows more about combat magic than Ardenfelt ever will. Why is he taking over?' "Hey, you!" a voice called out. Pela turned around and saw a tall man with auburn hair and green eyes walking towards her, his expression stern.

Choices:
- Answer the auburn-haired stranger -> Ch7 A New Path 09
- Notice the royal colors first. -> Ch7 Notice Royal Colors

### 241. Ch7 A New Path 09
Twine position: `41920,120`

"You're Pela, right?" "Um, yes?" ["I've heard about you," the man stated, his voice cold, "I've also heard Princess Tama confronted you and collapsed without a mark on her. No duel. No normal spell injury. Just you, my sister, and a hallway full of terrified wards. What did you do to her?!"] "I've heard about you," the man stated, his voice cold, "I've also heard about what you did to Princess Tama. What the hell were you thinking?!"]

Choices:
- Ask who he is -> Ch7 A New Path 10

### 242. Ch7 A New Path 10
Twine position: `42140,120`

"I'm sorry, who are you?" "I'm Prince Elijah, Princess Tama's older brother. What the hell is wrong with you?!" ["It wasn't a fight," Pela said, the denial coming out too quickly. "I held back. I didn't touch her. Something happened to her spell."] ["It was an accident. I didn't mean to hurt her. I never wanted to hurt her," Pela explained.]

Choices:
- Explain the accident again -> Ch7 A New Path 11
- Ask if Tama is alive. -> Ch7 Ask If Tama Alive

### 243. Ch7 A New Path 11
Twine position: `42360,120`

"I don't care whether your hands touched her," Elijah declared, his expression fierce. "She is the heir to the House of Ashcroft, and she was found unconscious after challenging you. No clean wound. No clean spell trace. That is worse, not better." "But, it was an accident. I didn't even mean for anything to happen," Pela protested, her eyes wide. "Doesn't matter. Royal physicians say her magic recoiled as if something fed on it. If that something came from you, then you are not just reckless. You are dangerous," Elijah growled. "I don't care. She's the heir to the House of Ashcroft, and she's a Princess. You can't go around hurting her and getting away with it. The Ashcrofts will not stand for it. You will pay for your crimes," Elijah declared, his expression fierce. "But, it was an accident. I didn't even mean to do it. It was just a reaction," Pela protested, her eyes wide. "Doesn't matter. You hurt a member of the royal family. That's punishable by death, and the Royal Family won't hesitate to enact that punishment," Elijah growled.

Choices:
- Snap back -> Ch7 Snap Back Elijah
- Let Elijah see the teeth under the fear (DC Oath: 11) -> Eldritch Elijah Smile
- Breathe through the word death (DC Nerve: 14) -> Ch7 Breathe Through Death
- Recognize Elijah's intimidation tactic (DC Research: 13) -> Ch7 Recognize Elijah Tactic

### 244. Ch7 A New Path 12
Twine position: `42580,120`

Pela snaps just as she's threatened again. "Death? Why are you talking about death?! What are you planning, huh?! Are you going to kill me, do you think you could actually pull it off?" Pela snapped, her eyes flashing red. "What the hell are you doing?! Why are your eyes changing color?" Elijah gasped, his expression fearful.

Choices:
- Name what is happening to her -> Ch7 A New Path 13

### 245. Ch7 A New Path 13
Twine position: `42800,120`

"I'm not going to let anyone kill me, and if you try, I'll rip you apart! I'll make sure that no one, and nothing, can stop me. You'll be begging for mercy before I'm done with you," Pela growled, her body starting to shake, "Your entire bloodline will perish. None of you will survive. The House of Ashcroft will end, and I'll make sure of it. I will not allow you to threaten me ever again! This is your one and only warning!" "Dear god, what are you?" Elijah murmured, his voice filled with fear. "I'm a mage of Brittanica, nothing more and nothing less," Pela promised, her voice echoing in the hall and causing it to rumble.

Choices:
- Watch Elijah break -> Ch7 A New Path 14

### 246. Ch7 A New Path 14
Twine position: `43020,120`

Elijah ran, leaving Pela alone in the hallway. 'What's wrong with me? Why did I do that? He was just trying to scare me. He's not the first person who's tried to intimidate me. What's different about this time? Am I losing control? Is it the book? Or is it the Nhal? It's the stress, the pressure, and the fear of it all.' "Are you okay?" A familiar voice asked, breaking Pela from her thoughts.

Choices:
- Answer Odelyn before lying to herself -> Ch7 Answer Odelyn
- Say she is fine -> Ch7 Say Fine Odelyn

### 247. Ch7 A New Path 15
Twine position: `43240,120`

"I-I'm fine. I just got a bit stressed," Pela replied, her tone guarded. "That was a bold move, challenging Prince Elijah," Lysander remarked, his voice filled with curiosity. "I was just trying to stand up for myself," Pela explained.

Choices:
- Listen to Lysander's warning -> Ch7 A New Path 16

### 248. Ch7 A New Path 16
Twine position: `43460,120`

"I see. However, the next time you feel the need to stand up for yourself, please do so in a less dramatic manner. Your outburst is likely to bring unwanted attention," Lysander cautioned. "Okay, I'll try," Pela promised. "You cannot keep antagonizing the Royalty. It's not healthy, and it will only lead to your death. You are a special kind of mage, Pela. You have a destiny, and Royalty or worse... the Nhal will try to exploit it. They will not hesitate to kill you if they believe you are a threat. They will not listen to reason, or compromise. They will kill you and all who stand in their way. You have to be careful," Lysander warned, his expression serious, "I should know. I'm house Ashcroft's assassin."

Choices:
- Promise Lysander she will be careful. -> Ch7 Promise Lysander Careful
- Ask what debt makes him obey Ashcroft. -> Ch7 Ask Lysander Debt

### 249. Ch7 A New Path 17
Twine position: `43680,120`

"You're what?!" "I'm not here to kill you, I'm here to warn you. If you want to live, you have to stop antagonizing the Royal Family. I would never go out of my way to hurt an innocent girl, but the Brittanican Royals will not hesitate to order your death if you become a nuisance to them," Lysander assured, his tone grim, "My family and I are in their debt, and if we do not obey, we will be killed instead. So, its nothing personal." "You're a member of the Ashcroft family?"

Choices:
- Ask whether he means to warn or threaten her -> Ch7 Warn Or Threaten
- Accept the warning carefully -> Ch7 Accept Ly Warning

### 250. Ch7 A New Path 18
Twine position: `43900,120`

"Not exactly, but that is irrelevant. All that matters is that you stop antagonizing the Royal Family, otherwise they will come after you," Lysander warned, "Do not take this lightly young mage. The Ashcrofts are deadly serious, and if you are not careful, they will strike without hesitation. Nothing will be able to protect you." "I understand. Thank you," Pela said, her expression conflicted. "Next time I won't warm you and instead you'll simply disappear," Lysander warned.

Choices:
- Let Lysander leave -> Ch7 A New Path 19

### 251. Ch7 A New Path 19
Twine position: `44120,120`

"I won't. I'll be more careful. Thanks for the advice," Pela promised, her voice sincere. *** Later that night, Pela sat in her room, reading the book.

Choices:
- Keep reading anyway -> Ch7 Keep Reading Anyway
- Lean into the chosen feeling (DC Forbidden: 9) -> Ch7 Lean Into Chosen

### 252. Ch7 A New Path 20
Twine position: `44340,120`

'You are strong, Pela. You are a chosen one, destined for greatness. I will help you achieve your destiny,' the Forbidden One whispered in her thoughts. 'There is a reason the book chose me. I'm special, I'm the chosen one. The book chose me, not some random student. It's my destiny. The Nhal, Athea's Sovereigne, the Royal Families, they'll all bow to my power. None of them will stop me. Not anymore. I won't let them. They'll tremble at my feet, begging for mercy,' Pela spiraled as she read. A shadowy gray smoke started manifesting in the corner of Pela's room.

Choices:
- Notice the shadow in the corner -> Ch7 Notice Shadow Corner
- Follow the whisper deeper. -> Ch7 Follow Whisper Deeper

### 253. Ch7 A New Path 21
Twine position: `44560,120`

'Yes, that is it. That is the path, the destiny. You will become a god. You will have all the power, the knowledge, the wealth, the love. All of it is yours,' the Forbidden One declared in tandem with another sinister voice. "What have you done Pela, do not let this power corrupt you. It is not about the power itself, it is about the responsibility and the potential. If you misuse this power, it will consume you and destroy everything around you," Odelyn appeared from the shadowy darkness and rushed over to Pela and closed her book. "No, no. You're wrong," Pela shook her head, her eyes burning, "I'm destined to use this power, to change the world. I can't ignore my fate."

Choices:
- Argue with Odelyn -> Ch7 Argue Odelyn Fate
- Close a hand over the book. -> Ch7 Grip Book Against Odelyn

### 254. Ch7 A New Path 22
Twine position: `44780,120`

"Fate is a myth, it does not exist. You control your destiny, and if you choose to embrace the darkest desires it will cause you to cease to exist. Take it from one cursed Brittanican to another. It's easy to spot the signs once they become visible," Odelyn warned. "No, you're wrong. You don't know what you're talking about," Pela argued, her eyes blazing. Odelyn slapped Pela across the face, sending her reeling.

Choices:
- Ask what curse took from Odelyn. -> Ch7 Ask Odelyn Curse
- Insist fate is real. -> Ch7 Insist Fate Real

### 255. Ch7 A New Path 23
Twine position: `45000,120`

"I'm not going to stand here and watch you throw your life away, not after what happened to me and my family. I won't let you go down that path, I won't," Odelyn declared, her eyes watering. "I'm sorry. I didn't mean to-" Odelyn slaps Pela even harder, "Enough! I can't believe you, how can you be so blind?! Don't you realize the danger you're putting yourself in? The Nhal and the Ashcrofts want you dead! Dead! Do you understand?! The Nhal, a group of fanatical cultists, are going to come after you, and the Ashcrofts will gladly send an assassin to kill you! And, if that doesn't work, they'll kill everyone around you until you surrender! This is serious, Pela. Your life is in danger," Odelyn ranted, tears streaming down her cheeks.

Choices:
- Let Odelyn's fear hit her -> Ch7 Let Fear Hit
- Push back against the accusation -> Ch7 Push Back Odelyn

### 256. Ch7 A New Path 24
Twine position: `45220,120`

"I can handle it. I'm not a little kid," Pela countered, her tone dismissive. "No, you're a stupid kid. A stupid, reckless, foolish child who doesn't understand the danger she's in," Odelyn said as she grabbed Pela's tie and yanked her close. "I'm going to make you understand." "Let go," Pela protested.

Choices:
- Pull against Odelyn's grip -> Ch7 A New Path 25

### 257. Ch7 A New Path 25
Twine position: `45440,120`

"Not a chance," Odelyn declared. "Let me go!" Pela screamed, her voice reverberating through the room and causing it to shake. "Get the hell away from me!" Pela cried out as a surge of energy ripped through her body, but Odelyn simply responded by cloaking her hand in shadow and grabbing her forehead. Dark Slumber. "What-what did you do to me?!" Pela cried out, her body feeling numb and her mind foggy.

Choices:
- Fall into The Lost -> Ch7 Fall Into Lost
- Resist Dark Slumber for one breath (DC Nerve: 15) -> Ch7 Resist Dark Slumber

### 258. Ch7 A New Path 26
Twine position: `45660,120`

"I cast Dark Slumber on you. A high-level spell that knocks the victim unconscious. It's very powerful, but I only use it when absolutely necessary. You were a bit too emotional, and I can't let you run amok like that. I'm sorry," Odelyn apologized, her tone sad. "Wh-why?" Pela said as she sank to the floor, her body feeling like lead. Slowly, she lost consciousness. Odelyn gently placed Pela on the bed and pulled the blanket over her.

Choices:
- Fall under despite the apology -> Ch7 A New Path 27

### 259. Ch7 A New Path 27
Twine position: `45880,120`

"I'm so sorry," Odelyn whispered, tears streaming down her cheeks. "I'm so, so, sorry." *** Pela awoke the next morning, her body still aching from Odelyn's attack.

Choices:
- Wake inside The Lost -> Ch7 A New Path 28

### 260. Ch7 A New Path 28
Twine position: `46100,120`

'She really knocked me out. Damn, that hurt,' Pela thought. "Pela, wake up. Class is in session," Odelyn said, her tone firm. "Okay," Pela mumbled, her throat dry.

Choices:
- Answer the class summons -> Ch7 A New Path 29

### 261. Ch7 A New Path 29
Twine position: `46320,120`

Pela looked around at an endless sea of shadow. "What's going on?" Pela asked, confused. "This is The Lost, a place where people are banished. It is a place where nightmares and the despaired reside. It is a realm of endless pain and torment. But, it is also a place where people are given second chances. A place where people are allowed to atone for their sins and make a new start," Odelyn said, her words resonating with the shadows.

Choices:
- Ask what The Lost wants from her -> Ch7 Ask Lost Wants
- Look for the edges of the realm. -> Ch7 Look Lost Edges

### 262. Ch7 A New Path 30
Twine position: `46540,120`

"I don't understand," Pela mumbled, her eyes wide. "The Hat Man, through the curse he has given me, I am able to access The Lost. I fear, Pela. I fear that you are going to fall into darkness and never return. I can't bear to lose another friend to a curse. It hurts too much. You must stay strong, and fight the temptations. Please, for your own sake," Odelyn pleaded, her voice breaking. "Okay. I'll try. I promise," Pela nodded, her voice solemn.

Choices:
- Promise she will try -> Ch7 Promise Try Odelyn
- Ask who Odelyn lost. -> Ch7 Ask Who Odelyn Lost

### 263. Ch7 A New Path 31
Twine position: `46760,120`

"Your words aren't good enough. Your actions will speak for themselves. Prove to me, and yourself, that you can stay on the path of light. Prove that you can overcome the darkness. Prove that you can be more than what a monster, gives you" Odelyn said, her words cutting deep. "I will. I'll do better. I'll show you, and myself, that I can be more than a monster," Pela said, her heart swelling with emotion. "What part of your words do not matter to me do you not understand?" Odelyn questioned, her tone harsh.

Choices:
- Let actions answer -> Ch7 A New Path 32

### 264. Ch7 A New Path 32
Twine position: `46980,120`

"What?" Pela asked, confused. "Your words, your promises, they mean nothing to me. Your actions, your determination, that's what I'm interested in. Create your weapon and win without the anger you've allowed the Ashcrofts to see and spread rumors around the Academy," Odelyn ordered, her voice cold. "I-I," Pela stammered.

Choices:
- Create the weapon -> Odelyn Duel Begins

### 265. Ch7 A New Path 33
Twine position: `47200,120`

"Don't speak. Just create," Odelyn stated, her tone leaving no room for argument. Pela took a deep breath, and channeled her magic. She formed a blade in her hand. BAM. Odelyn punched Pela so hard that she fell to the ground, her vision blurred and her ears ringing. "What the hell was that for?!" Pela cried out, her face red.

Choices:
- Force the blade into being -> Ch7 Force Blade Into Being
- Form the blade without rage (DC Weapon: 9) -> Ch7 Form Blade Without Rage

### 266. Ch7 A New Path 34
Twine position: `47420,120`

Odelyn kicks Pela into the air and kicks her back down, causing her to crash into the ground. "That is what it means to fight, and win, without visible anger or rage. To use your head, not your heart. To fight with your wits. To win with your skill, and only while using strength as an enhancer. You can be pissed off," Odelyn steeled herself, "but, never allow that anger to be visible. Do you understand me? Or are you too much of a monster to get that through your thick skull?Just because you are a demon, doesn't mean you need to act like one. Especially not in front of others. Do you want to bring more attention to yourself? Do you want the whole school to know what you are and start hunting you? That is the quickest way to get yourself killed!" Odelyn creates her spear. Pela stared at her for a long moment. Then, she nodded, her expression resolute. "I understand."

Choices:
- Stand and defend herself -> Ch7 A New Path 35

### 267. Ch7 A New Path 35
Twine position: `47640,120`

"Good. Now, get up," Odelyn ordered, "Defend yourself, I will not pull my punches anymore." Pela slowly stood up, her body shaking. "I will show you. I will not give in. I will not become a slave to my anger," Pela growled, her eyes glowing red.

Choices:
- Parry by instinct -> Ch7 Parry By Instinct
- Guard without flinching (DC Nerve: 14) -> Ch7 Guard Without Flinching
- Become Lightning cleanly (DC Spark: 13) -> Ch7 Become Lightning Cleanly
- Read Odelyn's spear rhythm (DC Research + Weapon: 17) -> Ch7 Read Spear Rhythm

### 268. Ch7 A New Path 36
Twine position: `47860,120`

Odelyn charges at her, her spear poised. Pela parries her first attack, her weapon blocking Odelyn's. Odelyn attacks again, her movements fast and precise.

Choices:
- Meet the second strike -> Ch7 A New Path 37

### 269. Ch7 A New Path 37
Twine position: `48080,120`

Pela dodges the strikes and counters with her own. Odelyn easily moves away from the strike, grabs the spear, and throws Pela to the ground. Pela quickly rolls out of the way, jumps back onto her feet, and charges at Odelyn.

Choices:
- Roll back to her feet -> Ch7 A New Path 38

### 270. Ch7 A New Path 38
Twine position: `48300,120`

Odelyn meets the charge, her spear ready. Pela deflects the blow and attempts to disarm Odelyn. However, Odelyn uses a magic clash mid-strike causing the two weapons to explode, and send both fighters flying back. Pela hits the ground first, her body smashing against the hard floor.

Choices:
- Endure the clash explosion -> Ch7 A New Path 39

### 271. Ch7 A New Path 39
Twine position: `48520,120`

Odelyn lands next, her body rolling to a stop. Both of them are covered in dust and blood, but they are still standing. Odelyn created her spear again. The fear in Perla's eyes are visible, and they are clear as day.

Choices:
- Face Odelyn's spear again -> Ch7 A New Path 40

### 272. Ch7 A New Path 40
Twine position: `48740,120`

'This is not a duel. This is a test. One that will determine whether you are fit to continue as a mage of the academy. The Ashcrofts have already made their intentions clear.' Odelyn thought as she charged forward, her spear aiming for the heart. Pela created a sword, blocking the strike. Odelyn pushed harder, her magic flowing through the spear, her body, and the very air. Speed of Shadow. Odelyn's movements increased tenfold, her body becoming a blur. She attacks with a flurry of strikes, her speed increasing with every strike.

Choices:
- Track Speed of Shadow -> Ch7 A New Path 41

### 273. Ch7 A New Path 41
Twine position: `48960,120`

Pela does her best to defend herself, but she is outmatched. Odelyn is a master at the spear, and she is a novice in Spell Blade compared to her. She continually gets slashed by Odelyn's spear. Become Lightning. Pela vanished from view, and a flash of lightning filled the air. Pela reappeared behind Odelyn, her sword ready. Odelyn barely had time to react, her body moving instinctively. Speed of Shadow - Stack. Odelyn moved even faster than before as she stacked her shadow spell on top of itself, her body matching Pela's newfound speed.

Choices:
- Answer with Become Lightning -> Ch7 A New Path 42

### 274. Ch7 A New Path 42
Twine position: `49180,120`

Pela and Odelyn trade blows, their weapons colliding in a blinding flash of sparks and visible darkness. "You will not defeat me, I will not allow it," Pela vowed, her voice echoing. "It's not about victory, it's about survival," Odelyn replied, her voice cold. Odelyn finds an opening and kicks Pela in the chest, sending her flying back.

Choices:
- Get back up for survival -> Ch7 Get Up Survival
- Ask what Odelyn means by survival -> Ch7 Ask Survival Meaning

### 275. Ch7 A New Path 43
Twine position: `49400,120`

Pela landed on the floor, her body aching. She tried to get up, but she couldn't. She was too weak. "Why?" Pela whispered, her voice cracking. "If you keep acting this way, and fighting this pathetically, I'll lose my friend!" Odelyn finally screamed, "I will not allow that! You need to learn. You need to grow. You can't keep letting your emotions get the best of you!"

Choices:
- Hear the fear beneath Odelyn's anger -> Ch7 A New Path 44

### 276. Ch7 A New Path 44
Twine position: `49620,120`

Pela protested, her voice nonexistent. She knew Odelyn was right so she silently cried. Tears streamed down her face, and she let them fall. Odelyn was also crying, her voice choked up, "I can't lose another friend, I just can't. You need to become stronger, not weaker. Right now... that book is corrupting you, and if you don't control it, it will destroy you." Pela's heart felt heavy, and she knew that Odelyn was right to an extent. But, she couldn't just give up on her destiny, on her destiny to become a great mage. She had to become stronger, or the Nhal would hunt her down. And, if she wasn't careful, the Ashcrofts would have her executed. The thought crossed her mind and she realized that was the book speaking.

Choices:
- Separate her thought from the book's thought. -> Ch7 Separate Book Thought
- Admit Odelyn is partly right. -> Ch7 Admit Odelyn Right

### 277. Ch7 A New Path 45
Twine position: `49840,120`

'It's not too late. You can still change, Pela. You can still be more than a demon,' the Forbidden One said, its voice soft. "You're not a monster, Pela. I can tell that much. You just need to find the courage, the will, to push past your emotions and become a great mage. Prove to everyone that you are worthy of being a mage of the academy, because I've seen that spark of a great mage personally," Odelyn declared, "Using your emotions to spell cast does not mean letting them wear you like a coat. It means that you can harness the power of your emotions and make it your own. You are a Brittanican mage, Pela. You are strong. Act like it." Pela stayed silent. She took a long moment to internalize what Odelyn said. Spark of a Great Mage.

Choices:
- Force one more movement -> Ch7 Force One More Movement
- Use emotion without letting it show (DC Nerve + Spark: 20) -> Ch7 Emotion Without Showing
- Shape the blade around trust (DC Trust: 9, Weapon: 8) -> Ch7 Shape Blade Around Trust

### 278. Ch7 A New Path 46
Twine position: `50060,120`

Pela disappeared, her form an electric blur, and reappeared next to Odelyn, her sword pointing directly at her chest. "I understand," Pela whispered, her voice close to trembling, but staying as calm as she could be, "I'm sorry." Odelyn's eyes widened. "That was the spark of a great mage, Pela."

Choices:
- Lower the sword first -> Ch7 A New Path 47

### 279. Ch7 A New Path 47
Twine position: `50280,120`

The world went back to normal and they were in Pela's dorm room again. Odelyn pulled Pela into a hug. "You have potential. Don't waste it," she whispered. "I won't. I promise," Pela replied.

Choices:
- Step back and promise to do better -> Ch7 Step Back Promise
- Hold onto Odelyn for one breath. -> Ch7 Hold Odelyn One Breath

### 280. Ch7 A New Path 48
Twine position: `50500,120`

Odelyn let go and stepped back. "Good luck," she said. "I'll need it," Pela mumbled.

Choices:
- Step into the day between lessons -> Post Odelyn Interlude Start

### 281. Chapter Eight Hook
Twine position: `50720,120`

Chapter 8: A Beautiful Scent A beautiful scent reaches Pela before the next danger does. It is sweet enough to feel like memory and sharp enough to feel like a warning. Roses bloom in a place she has never been.

Choices:
- Wake inside the warning -> Ch8 Dream Threshold
- Smell the roses before waking. -> Ch8 Dream Threshold
- Hold the dream still long enough to study it. -> Ch8 Dream Threshold
- Refuse any destiny that arrives wearing a chain (DC Self: 2) -> Ch8 Dream Threshold

### 284. Ch6 Accept Leunname Praise
Twine position: `35320,20`

Leunname's praise warms Pela before she can pretend it does not matter. Then she remembers Ardenfelt is nearby, and warmth becomes caution. Approval from one teacher can become evidence in another teacher's hands.

Choices:
- Ask the next question -> Ch6 The Unseen 32

### 285. Ch6 Ambition Answers Fear
Twine position: `31360,300`

Fear asks what will happen if everyone is stronger than her. Ambition answers first: then become stronger. The thought comforts her too much. Pela notices that and keeps walking anyway.

Choices:
- Step into the hall -> Ch6 The Unseen 14

### 286. Ch6 Answer Leunname First
Twine position: `34660,300`

The answer leaves Pela before caution can stop it. A few students turn toward her. Leunname does too. For one awful second, Pela thinks she has interrupted something sacred. Then the instructor smiles with the bright, dangerous delight of someone watching theory come alive.

Choices:
- Watch the demonstration -> Ch6 The Unseen 29

### 287. Ch6 Apologize To Masked Girl
Twine position: `33780,20`

"Sorry," Pela whispers, lowering her voice until it barely exists. The masked girl accepts the apology the way a blade accepts a sheath: reluctantly, and only because it is useful for the moment.

Choices:
- Let the lesson begin -> Ch6 The Unseen 25

### 288. Ch6 Argue Evacuation Rational
Twine position: `32240,300`

"Running from explosions is not emotional. It is rational," Pela snaps. Ardenfelt's expression barely changes. "Rationality without knowledge is panic wearing formal clothing." The insult lands because there is enough truth in it to hurt.

Choices:
- Endure Ardenfelt's lesson -> Ch6 The Unseen 18

### 289. Ch6 Ask About Forehead Flick
Twine position: `32460,300`

"What kind of warning was that?" Pela asks, holding one hand to her forehead. "A merciful one," Ardenfelt says. "The next lesson will involve less mercy and more attention." Pela decides she hates every version of this man that might be right about something.

Choices:
- Follow him -> Ch6 The Unseen 19

### 290. Ch6 Ask About Gareth Rumors
Twine position: `30480,300`

"What do they say about you?" Pela asks. Gareth smiles like the question struck a bruise. "That I am strange. Useful when convenient. Dangerous when not. The usual academy poetry." Pela suddenly understands why he is warning her. He is not afraid of gossip. He knows what gossip becomes when powerful students need a target.

Choices:
- Return to the book question -> Ch6 The Unseen 10

### 291. Ch6 Ask Fusion Clash Question
Twine position: `35540,300`

Pela asks the question clearly, and the field seems to listen with her. Leunname's expression sharpens. "Good. If you confuse Spell Fusion with Magical Clash, you will not cast a spell. You will build your own execution."

Choices:
- Watch the three-part spell -> Ch6 The Unseen 33

### 292. Ch6 Ask Lysander Name
Twine position: `39500,20`

"Who are you?" Pela asks again, because names are the only handles left on a night that has lost its shape. The stranger smiles as if the question amuses him, but he checks Tama's breathing with practiced care before he answers.

Choices:
- Listen -> Ch6 The Unseen 43

### 293. Ch6 Awkward Silence Rumor
Twine position: `30260,300`

Neither of them speaks. The silence fills itself with every version of the rumor the academy could invent. Pela hates how easily strangers can take a friendship and turn it into a weapon.

Choices:
- Break the silence -> Ch6 The Unseen 09

### 294. Ch6 Barrier Rule Memorized
Twine position: `33340,300`

Pela fixes the barrier rule in her mind: sound contained, casting forbidden, observe only. Rules at Torrindale are rarely just rules. They are maps of what has gone wrong before.

Choices:
- Enter the classroom field -> Ch6 The Unseen 23

### 295. Ch6 Book Coursework Dodge
Twine position: `30700,20`

"The book?" Pela repeats, pretending the question has an innocent shape. "If you mean coursework, it is fine. Heavy. Weird. Normal academy misery." Gareth's expression says he heard the dodge. His kindness is that he lets it pass.

Choices:
- Let Gareth leave it alone -> Ch6 The Unseen 11

### 296. Ch6 Book Voice Steady
Twine position: `30700,300`

Pela keeps her face still when Gareth asks about the book. "It is fine," she says, each word placed carefully. "Coursework is just coursework." Gareth watches her for a second longer than comfort allows. He does not believe her completely, but he chooses mercy over interrogation.

Choices:
- Let the lie stand -> Ch6 The Unseen 11

### 297. Ch6 Bury Book Thought
Twine position: `31140,300`

Pela folds the secret inward until it feels less like a choice and more like armor. The grimoire is dangerous. So are courts, houses, assassins, teachers, rumors, and every hallway in the academy. At least the book speaks to her like it wants her alive.

Choices:
- Choose a different answer -> Ch6 The Unseen 13

### 298. Ch6 Call After Ly
Twine position: `39720,20`

"Ly!" Pela calls after him. The name disappears into the hall with the shadow. It feels unfair that someone can enter her disaster, take evidence with him, and leave her with more questions than before.

Choices:
- Gather herself -> Ch6 The Unseen 44

### 299. Ch6 Check Hall Witnesses
Twine position: `39720,300`

Pela checks the hall because panic has become practical. No one stands in the open. No one gasps from a doorway. But Torrindale has never needed witnesses to know when something has gone wrong.

Choices:
- Gather herself -> Ch6 The Unseen 44

### 300. Ch6 Cite Ardenfelt Witness
Twine position: `36860,300`

"Ardenfelt brought me," Pela says. "Ask him. He was there." Tama's certainty falters for half a second, which is enough to prove she can doubt. Then pride rushes in to save her from it.

Choices:
- Face the accusation anyway -> Ch6 The Unseen 39

### 301. Ch6 Demand Stop Spy
Twine position: `36860,440`

"Stop calling me a spy," Pela says, and the air tightens around the words. Tama recoils, not because Pela is loud, but because she is controlled. Control makes the threat feel more real.

Choices:
- Face the accusation anyway -> Ch6 The Unseen 39

### 302. Ch6 Demand Tama Left
Twine position: `39500,300`

"Do not hurt her," Pela says, hating that she has to ask after being the reason Tama is on the floor. The stranger's expression flickers. "That part, at least, we agree on."

Choices:
- Listen to Ly -> Ch6 The Unseen 43

### 303. Ch6 Ease Gareth Embarrassment
Twine position: `30260,20`

"I know what you mean," Pela says before Gareth can stammer himself into the floor. He exhales a laugh, weak but real. The room becomes less sharp for one breath. Then the danger underneath the rumor returns: people watch what they think they can use.

Choices:
- Talk about keeping their heads down -> Ch6 The Unseen 09

### 304. Ch6 Evacuation Voice
Twine position: `32020,300`

The woman's command slices through Pela's fear: evacuate immediately. Pela obeys because obedience is not always weakness. Sometimes it is the first sane thing in a building that refuses to admit it is in danger.

Choices:
- Keep moving -> Ch6 The Unseen 17

### 305. Ch6 Exam Sounds Like Attack
Twine position: `32900,20`

"If it sounds like an attack, students are going to treat it like one," Pela says. Ardenfelt glances back. "Only students who listen with fear before knowledge." She wants to argue. The next explosion makes the argument smaller in her mouth.

Choices:
- Hear his answer -> Ch6 The Unseen 21

### 306. Ch6 Explain Calmly To Tama
Twine position: `36860,20`

Pela makes herself speak slowly. "I was brought there by Professor Ardenfelt. I did not sneak in. I did not steal anything. I watched because I was told to watch." Tama hears the words. She does not yet trust them. Her anger searches for a crack to live in.

Choices:
- Face the accusation anyway -> Ch6 The Unseen 39

### 307. Ch6 Explosion Read
Twine position: `31580,300`

The blasts do not come like an attack. They arrive in measured intervals, too controlled to be panic and too even to be siege work. Pela still runs, but now her fear has information inside it. Someone is making a point with those explosions.

Choices:
- Move before the next blast -> Ch6 The Unseen 15

### 308. Ch6 Focus Leunname Correction
Twine position: `34880,300`

Leunname's correction lands like a second explosion, quieter but more useful. Synergy is not Clash. Power combining is not the same as power breaking. Pela repeats it until the distinction stops blurring.

Choices:
- Listen to Leunname correct her -> Ch6 The Unseen 30

### 309. Ch6 Friendship Matters
Twine position: `30040,300`

"If they are saying we are close, they are not wrong," Pela says. Gareth goes still, then softens. The admission is not romance and not safety, but it is true. In Torrindale, truth can feel more dangerous than either.

Choices:
- Let Gareth explain the rumor -> Ch6 The Unseen 08

### 310. Ch6 Gareth Almost Call Back
Twine position: `30920,300`

Pela almost calls him back. The words rise: stay, help, I think something is wrong with me. Then she imagines the grimoire, the Forbidden One, the Nhal, and Gareth caught in the middle of all of it. She lets the door close.

Choices:
- Sit with the silence -> Ch6 The Unseen 12

### 311. Ch6 Gareth Check On Him
Twine position: `28720,300`

"Are you all right?" Pela asks before she can make the question sound casual. Gareth blinks at the concern. For a second, the practiced ease falls away and he looks like someone who has been carrying a secret through crowded halls. Then he nods too quickly. "I am. I just wanted to check on you."

Choices:
- Let him in -> Ch6 The Unseen 02
- Tell him she likes when he worries about her (DC Trust: 8) -> Romance Gareth Worries

### 312. Ch6 Gareth Enters Normally
Twine position: `28720,20`

Pela opens the door without hiding anything because there is nothing ordinary about trying to look ordinary. Gareth stands outside with one hand lifted, as if he almost knocked again. He smiles when he sees her, but the smile has effort behind it.

Choices:
- Let him speak -> Ch6 The Unseen 02

### 313. Ch6 Gareth Excuse Pass
Twine position: `29160,20`

Pela lets the excuse sit between them. Sick. No big deal. The words have the flat shine of a coin rubbed too often. She wants to push, but Gareth is looking at her like he came here to help her stay steady, not become another problem she has to solve.

Choices:
- Talk about the duel instead -> Ch6 The Unseen 04

### 314. Ch6 Gareth Press Sickness
Twine position: `29160,300`

"You missed the fight because you were sick?" Pela asks gently. Gareth rubs the back of his neck. "Something like that." It is not an answer. It is a door closing without a lock. Pela hears the invitation in that too: not now, but maybe someday.

Choices:
- Let him keep the secret for now -> Ch6 The Unseen 04

### 315. Ch6 Hide Grimoire Before Gareth
Twine position: `28720,440`

Pela slides the grimoire beneath a folded blanket before she reaches the door. The motion is small, but it makes the room feel guilty. When she opens the door, Gareth glances past her shoulder. He does not ask what she hid. That almost makes it worse.

Choices:
- Invite him inside -> Ch6 The Unseen 02

### 316. Ch6 Hold Shout Behind Teeth
Twine position: `37520,300`

Pela locks the shout behind her teeth. The hallway trembles anyway, but it does not break. Tama sees the restraint and mistakes it for mockery. Her spell gutters, reforms, then gutters again. The Saint of the Feast stirs behind Pela's pulse. "Look at her. A princess dressed as a blade, too weak to decide whether she wants blood or applause." Pela holds still. No spell. No answer. Just the pressure of not becoming what Tama already fears. Something hungry presses through the failed spell anyway.

Choices:
- Watch the Saint answer Tama's weakness -> Ch6 Ly Intervenes Without Blood

### 317. Ch6 Identify Explosive Class
Twine position: `32240,20`

Pela catches the signature a heartbeat before Ardenfelt speaks: controlled force, repeated casting, shielded resonance. "Explosion Arts," she says, breathless. Ardenfelt's eyes narrow, not with pride exactly, but with the irritation of a teacher robbed of the chance to call a student foolish first.

Choices:
- Endure Ardenfelt's lesson -> Ch6 The Unseen 18

### 318. Ch6 Imagine Clash Battle
Twine position: `36420,20`

Pela imagines the clash in battle: force drawing force, timing sharpened until a mistake becomes a crater. The image thrills her. That is the dangerous part. Magic that beautiful should not look so much like victory.

Choices:
- Notice who follows her -> Ch6 The Unseen 37

### 319. Ch6 Let Leunname Continue
Twine position: `35540,20`

Pela lets Leunname continue because the explanation is already bigger than her confidence. There is no shame in listening. She tells herself that twice, because once does not hold.

Choices:
- Watch the three-part spell -> Ch6 The Unseen 33

### 320. Ch6 Listen Ardenfelt Logic
Twine position: `32900,300`

Pela forces herself to listen beneath the contempt. The academy uses routine as camouflage. A lesson can sound like disaster. A disaster can hide inside a lesson. The difference is not volume. It is pattern.

Choices:
- Hear his answer -> Ch6 The Unseen 21

### 321. Ch6 Lower Tamas Anger
Twine position: `37300,20`

"There is no need for this," Pela says, keeping her palms open. Tama looks at the open hands like they are another trick. Royal fear does not become gentle just because someone offers it peace.

Choices:
- Try one more time -> Ch6 The Unseen 41

### 322. Ch6 Measure Young Girl Answer
Twine position: `34880,20`

The masked girl answers with precision, but Pela hears the edge under it. She wants to be correct in a way that proves no outsider can stand beside her. Pela recognizes the hunger and dislikes how familiar it feels.

Choices:
- Listen to Leunname correct her -> Ch6 The Unseen 30

### 323. Ch6 Observe Agreement
Twine position: `33340,20`

"Understood," Pela says. The word tastes like restraint. She hates how much of magic seems to begin there.

Choices:
- Enter the classroom field -> Ch6 The Unseen 23

### 324. Ch6 Point Tama Ardenfelt
Twine position: `37300,300`

"Ask Ardenfelt," Pela repeats. "If I am lying, he will enjoy proving it." For the first time, Tama looks uncertain. Then the uncertainty curdles into humiliation, and humiliation is faster than reason.

Choices:
- Try one more time -> Ch6 The Unseen 41

### 325. Ch6 Pretend Not Startled
Twine position: `36640,300`

Pela forces her shoulders loose. "Can I help you?" she asks, as if being followed by masked royalty after a secret magic lesson is an ordinary inconvenience. The girl's eyes narrow. The performance does not fool her, but it buys Pela a breath.

Choices:
- Answer the accusation -> Ch6 The Unseen 38

### 326. Ch6 Promise Careful
Twine position: `29820,20`

"I will be careful," Pela says. Gareth studies her as if he is trying to decide whether courage and recklessness are the same language in her mouth. He does not look convinced, but he looks grateful she tried.

Choices:
- Hear the other warning -> Ch6 The Unseen 07

### 327. Ch6 Remember Misfire Warning
Twine position: `36420,300`

Spell Misfire stays with Pela longer than the explosion. Power is not the lesson. Control is. Every teacher at Torrindale seems determined to carve that into her one painful example at a time.

Choices:
- Notice who follows her -> Ch6 The Unseen 37

### 328. Ch6 Resolve Study
Twine position: `31360,20`

Panic wants Pela to run in circles. Study gives her a line to follow. If she can understand the magic before it understands her, maybe she can become more than someone reacting to the next threat.

Choices:
- Step into the hall -> Ch6 The Unseen 14

### 329. Ch6 Rumor Denial
Twine position: `30040,20`

"If this is about people thinking something is going on between us, that is stupid," Pela says too fast. Gareth's eyebrows lift. Pela feels heat crawl up her neck because he has not said what the rumor is yet. Her denial arrives early and loud enough to betray her.

Choices:
- Let Gareth explain -> Ch6 The Unseen 08

### 330. Ch6 Run From Blasts
Twine position: `31580,20`

Pela runs because bodies understand danger before minds finish arguing. The academy walls shudder around her. Portraits tremble. Somewhere ahead, someone screams for evacuation and no one reacts quickly enough.

Choices:
- Move before the next blast -> Ch6 The Unseen 15

### 331. Ch6 Safe Route Hallway
Twine position: `32020,20`

Pela scans corners, doorways, window glass, smoke drift, anything that might tell her where not to be. The fear stays, but it becomes organized. A route. A calculation. Something she can move through.

Choices:
- Keep moving -> Ch6 The Unseen 17

### 332. Ch6 Snap At Tama
Twine position: `37520,20`

The word leaves Pela like a spell she never chose. It is anger, but anger is only the door. Fear, shame, the book, the court, and the academy all rush through it at once. Tama does not fall. She catches herself against the wall, blood at the corner of her mouth, and her eyes ignite with humiliation.

Choices:
- Tama answers with royal glass -> Tama Battle Trigger Snap

### 333. Ch6 Stay Silent Observe Synergy
Twine position: `34660,20`

Pela keeps her answer behind her teeth. Silence lets her see more. The students are not just learning power. They are learning when to let power touch another force without becoming ruin.

Choices:
- Watch the demonstration -> Ch6 The Unseen 29

### 334. Ch6 Study Masked Girl Technique
Twine position: `33780,300`

Pela studies the masked girl from the corner of her eye. Her stance is tight with discipline, but not calm. Every breath says she has something to prove, and every glance at Pela says the proof cannot tolerate witnesses.

Choices:
- Let the lesson begin -> Ch6 The Unseen 25

### 335. Ch6 Swallow Insult Ardenfelt
Twine position: `32460,20`

Pela swallows the insult with the ache in her forehead. Ardenfelt is cruel, but his cruelty has direction. He is dragging her somewhere instead of away from something. That does not comfort her. It only makes the lesson feel unavoidable.

Choices:
- Follow him -> Ch6 The Unseen 19

### 336. Ch6 Tell Professor Thought
Twine position: `31140,20`

For a moment, telling a professor seems like the cleanest answer. Then Pela imagines the questions. Where did the book come from? What has it said? Why did she keep listening? Every honest answer points back at a secret that could put a chain around her future.

Choices:
- Choose a different answer -> Ch6 The Unseen 13

### 337. Ch6 Turn To Follower
Twine position: `36640,20`

Pela turns before the footsteps can become an ambush in her mind. The girl in black and green stops too late to pretend she has not been following. Her eyes are bright with accusation and something that almost looks like fear.

Choices:
- Answer the accusation -> Ch6 The Unseen 38

### 338. Ch6 Ward Bypass Question
Twine position: `29820,300`

Pela thinks through the academy wards before fear can swallow the shape of them. "How would assassins even get past Torrindale security?" Gareth answers too quickly. "Invitations. Maintenance routes. Old service doors. People with names everyone trusts. Wards are strong until a person is allowed to stand on the wrong side of them." That is worse than a monster at the gate. Monsters can be barred. People can be welcomed in.

Choices:
- Promise him she will be careful -> Ch6 The Unseen 07

### 339. Ch6 Wonder Ardenfelt Motive
Twine position: `35320,300`

Pela glances toward the door Ardenfelt shut behind her. He did not bring her here out of kindness. He wanted her to see this. The question is whether he wants her educated, tested, or warned.

Choices:
- Ask the next question -> Ch6 The Unseen 32

### 340. Ch7 Accept Ly Warning
Twine position: `43680,300`

Pela nods once. She does not trust Lysander, but she trusts the fear under his words. He is not trying to impress her with danger. He is tired of explaining it to people who die anyway.

Choices:
- Accept the danger -> Ch7 A New Path 18

### 341. Ch7 Admit Odelyn Right
Twine position: `49620,300`

"You are right," Pela says, barely loud enough for herself. Odelyn does not look victorious. She looks relieved in a way that makes Pela ashamed of how long she has made her friend fight to be heard.

Choices:
- Listen for the spark -> Ch7 A New Path 45

### 342. Ch7 Agree No Refusal
Twine position: `41260,20`

"I understand," Pela says because refusal has not been offered as part of the conversation. The Dean hears obedience. Pela hopes he does not hear resentment learning how to stand upright.

Choices:
- Leave the office -> Ch7 A New Path 07

### 343. Ch7 Answer Odelyn
Twine position: `43020,20`

"No," Pela says, then flinches at how honest it sounds. "I do not think I am okay." Odelyn's expression softens for half a heartbeat. Then she looks down the hall where Elijah fled, and softness becomes urgency.

Choices:
- Let Lysander speak -> Ch7 A New Path 15
- Admit Odelyn being gentle is dangerous (DC Trust: 8) -> Romance Odelyn Softness

### 344. Ch7 Apologize Without Explaining
Twine position: `40380,300`

"Sorry," Pela says, then stops before the apology turns into a confession for crimes no one has named yet. Dean Sainstroy smiles like he noticed the restraint and filed it away.

Choices:
- Hear why she was summoned -> Ch7 A New Path 03

### 345. Ch7 Argue Odelyn Fate
Twine position: `44560,20`

"You do not know what it is like," Pela says. Odelyn's face twists with a pain so old it no longer looks surprised. "I know exactly what it is like to call a curse destiny because the alternative is admitting you are afraid."

Choices:
- Hear Odelyn's warning -> Ch7 A New Path 22

### 346. Ch7 Ask Ardenfelt Leads
Twine position: `41040,20`

"Why Ardenfelt?" Pela asks before she can stop herself. Dean Sainstroy's smile thins. "Because he understands combat as application, not spectacle. You need less spectacle." Pela cannot tell if that is concern or warning. It may be both.

Choices:
- Hear the safety clause -> Ch7 A New Path 06

### 347. Ch7 Ask If Tama Alive
Twine position: `42140,300`

"Is Tama alive?" Pela asks. Elijah stops as if concern is the last answer he expected from her. For one breath, grief shows through the anger. Then the anger covers it again. ["She is alive," Elijah says. "She woke shaking, with no bruise big enough to explain it and no memory except your face and something laughing. Do not pretend that makes you innocent."] ["She is alive. No thanks to you."]

Choices:
- Face Elijah's accusation -> Ch7 A New Path 11

### 348. Ch7 Ask Lost Wants
Twine position: `46320,20`

"What does this place want from me?" Pela asks. The shadows do not answer. Odelyn does. "Nothing. That is the mercy and the horror of it. The Lost waits. People decide what they become inside it."

Choices:
- Listen to Odelyn's fear -> Ch7 A New Path 30

### 349. Ch7 Ask Lysander Debt
Twine position: `43460,300`

"What debt makes someone obey Ashcroft?" Pela asks. Lysander's smile fades. "The kind inherited before birth and collected after death. Do not mistake chains for loyalty." Then the mask returns.

Choices:
- Hear what he is -> Ch7 A New Path 17

### 350. Ch7 Ask Odelyn Curse
Twine position: `44780,20`

"What did your curse take from you?" Pela asks. Odelyn's eyes shine. For a second, the hard-edged guardian in Pela's room is gone. What remains is a girl standing in the wreckage of a family name. "Enough," she says, and the slap comes with grief behind it.

Choices:
- Feel the slap land -> Ch7 A New Path 23
- Tell Odelyn she explains pain like a weapon (DC Nerve: 14, Spend: 2 Nerve) -> Jerk Odelyn Weaponized Advice

### 351. Ch7 Ask Survival Meaning
Twine position: `49180,300`

"Survival for who?" Pela whispers. Odelyn's answer comes through clenched teeth. "For the girl under the power. For the friend under the curse. For anyone still in there who wants to live."

Choices:
- Hear Odelyn finally shout -> Ch7 A New Path 43

### 352. Ch7 Ask What Class
Twine position: `40820,20`

Pela keeps her voice careful. "What class?" If this is a sentence, she wants to know the shape of the cage before she steps inside it.

Choices:
- Hear the answer -> Ch7 A New Path 05

### 353. Ch7 Ask Who Odelyn Lost
Twine position: `46540,300`

"Who did you lose?" Pela asks. Odelyn looks away into the dark. "Too many people for one answer. Enough that I know warning signs when they start wearing a friend's face."

Choices:
- Hear what promises are worth -> Ch7 A New Path 31

### 354. Ch7 Become Lightning Cleanly
Twine position: `47640,400`

Pela calls the lightning without letting panic split the current. For an instant, her body remembers what speed feels like when it is not fleeing. Odelyn smiles grimly, then moves to break that confidence.

Choices:
- Meet Odelyn's charge -> Ch7 A New Path 36

### 355. Ch7 Breathe Through Death
Twine position: `42360,300`

Death hits Pela like cold water, but she breathes through it. In. Out. The word is not the act. The threat is not the blade. She holds herself together for one more second than fear expected.

Choices:
- Hear the threat again -> Ch7 A New Path 12

### 356. Ch7 Emotion Without Showing
Twine position: `49840,300`

Pela lets the emotion stay. She does not bury it. She does not display it. She gives it shape, current, purpose. The lightning gathers without screaming through her face.

Choices:
- Move with control -> Ch7 A New Path 46

### 357. Ch7 Exemption Punishment
Twine position: `40820,300`

"Why does exemption sound like punishment?" Pela asks. The Dean folds his hands. "Because you are listening to consequence instead of opportunity. Both are present. I prefer the second word." That is not a denial.

Choices:
- Ask about the class -> Ch7 A New Path 05

### 358. Ch7 Fall Into Lost
Twine position: `45440,20`

Dark Slumber does not feel like sleep. It feels like being lowered through black water while someone on the surface keeps apologizing.

Choices:
- Fall into The Lost -> Ch7 A New Path 26

### 359. Ch7 Follow Whisper Deeper
Twine position: `44340,300`

The whisper knows where to press. Chosen. Strong. Destined. Pela should hate the words for how easily they find her wounds. Instead, she leans closer before she remembers to be afraid.

Choices:
- Notice what else entered -> Ch7 A New Path 21

### 360. Ch7 Force Blade Into Being
Twine position: `47200,20`

Pela forces the blade into her hand. It answers with heat and jagged edges. Odelyn sees the anger in it before Pela does and punishes the mistake immediately.

Choices:
- Endure Odelyn's correction -> Ch7 A New Path 34

### 361. Ch7 Force One More Movement
Twine position: `49840,20`

Pela moves because stopping would mean admitting she is beaten. It is not graceful. It is not enlightened. But somewhere inside the stubbornness, she finds a thread of control and pulls.

Choices:
- Move with control -> Ch7 A New Path 46

### 362. Ch7 Form Blade Without Rage
Twine position: `47200,300`

Pela forms the blade around breath instead of anger. The shape is thinner than usual, less eager, but steadier. Odelyn hits her anyway, because the lesson is not about being spared for improvement.

Choices:
- Endure Odelyn's correction -> Ch7 A New Path 34

### 363. Ch7 Get Up Survival
Twine position: `49180,20`

Pela tries to stand because survival is not noble in the moment. It is knees, elbows, breath, pain, and the refusal to stay where the next blow expects her.

Choices:
- Hear Odelyn finally shout -> Ch7 A New Path 43

### 364. Ch7 Grip Book Against Odelyn
Twine position: `44560,300`

Pela closes a hand over the book, not opening it, not letting it go. Odelyn notices the compromise and hates it. "That is how it keeps you. One reasonable inch at a time."

Choices:
- Hear Odelyn's warning -> Ch7 A New Path 22

### 365. Ch7 Guard Without Flinching
Twine position: `47640,260`

Pela raises her guard and keeps it there. Fear moves through her hands, but it does not command them. Odelyn's spear comes on anyway, fast enough to make discipline feel like a thin shield.

Choices:
- Meet Odelyn's charge -> Ch7 A New Path 36

### 366. Ch7 Hold Odelyn One Breath
Twine position: `50280,300`

Pela holds on for one breath longer than pride wants. Odelyn stiffens, then returns the hug with careful force, as if she is afraid Pela might vanish if held too loosely.

Choices:
- Let go gently -> Ch7 A New Path 48
- Tell Odelyn she is warm (DC Trust: 8) -> Romance Odelyn Warmth

### 367. Ch7 Insist Fate Real
Twine position: `44780,300`

"Fate is real," Pela insists. Odelyn strikes the certainty out of the air before the book can make a throne of it. The slap is not just punishment. It is interruption.

Choices:
- Feel the slap land -> Ch7 A New Path 23

### 368. Ch7 Keep Reading Anyway
Twine position: `44120,20`

Pela tells herself she is only reading. Not agreeing. Not surrendering. Just reading. The lie is small enough to fit between one page turn and the next.

Choices:
- Read the words that answer her -> Ch7 A New Path 20

### 369. Ch7 Knock Before Fear
Twine position: `40160,300`

Pela knocks before fear can finish building a future for her. The sound is small, but it is hers. Not the book's. Not the court's. Hers.

Choices:
- Enter the Dean's office -> Ch7 A New Path 02

### 370. Ch7 Lean Into Chosen
Twine position: `44120,300`

Pela lets the chosen feeling unfold. It is warm in the way fever is warm. Wrong, but comforting. Dangerous, but shaped exactly like relief.

Choices:
- Read the words that answer her -> Ch7 A New Path 20

### 371. Ch7 Let Fear Hit
Twine position: `45375,150`

For once, Pela lets someone else's fear reach her. Odelyn is not trying to control her for power. She is terrified in a way Pela recognizes: the terror of watching a friend walk toward a door that only opens in one direction.

Choices:
- Meet Odelyn's grip -> Ch7 A New Path 24

### 372. Ch7 List Specializations
Twine position: `41040,300`

Pela names the classes silently to steady herself: Explosion Arts, Necromancy, Geomancy, Spell Applications of Combat. The list sounds academic until she notices hers is the only one that feels designed around a problem with her name on it.

Choices:
- Hear the safety clause -> Ch7 A New Path 06

### 373. Ch7 Look Lost Edges
Twine position: `46320,300`

Pela searches for walls, doors, corners, anything that proves The Lost has limits. The dark gives her distance instead. Endless does not mean empty. It means every direction can become a mistake.

Choices:
- Listen to Odelyn's fear -> Ch7 A New Path 30

### 374. Ch7 Notice Royal Colors
Twine position: `41700,300`

Before the stranger reaches her, Pela notices the green and the cut of his uniform. Royal. Angry. Moving like someone who expects hallways to clear for him.

Choices:
- Answer him carefully -> Ch7 A New Path 09

### 375. Ch7 Notice Shadow Corner
Twine position: `44340,20`

The shadow in the corner thickens like smoke remembering it used to be a person. Pela looks up too late. The book has not been speaking alone.

Choices:
- Notice what else entered -> Ch7 A New Path 21

### 376. Ch7 Parry By Instinct
Twine position: `47640,20`

Pela moves because hesitation will hurt more than ignorance. Her parry is ugly, loud, and barely in time. Odelyn accepts it only as a beginning.

Choices:
- Meet Odelyn's charge -> Ch7 A New Path 36

### 377. Ch7 Promise Lysander Careful
Twine position: `43460,20`

"I will be careful," Pela says. Lysander studies her like he knows careful is a promise people make before they understand the price of keeping it. "Good. Start by surviving your own temper."

Choices:
- Hear what he is -> Ch7 A New Path 17

### 378. Ch7 Promise Try Odelyn
Twine position: `46540,20`

"I will try," Pela says. Odelyn closes her eyes as if she wants to believe the words and knows better than to rest anything precious on them.

Choices:
- Hear what promises are worth -> Ch7 A New Path 31

### 379. Ch7 Push Back Odelyn
Twine position: `45000,300`

"You do not get to call me stupid because you are scared," Pela says. Odelyn's hand tightens in Pela's tie. "I get to call you alive while you still are."

Choices:
- Meet Odelyn's grip -> Ch7 A New Path 24

### 380. Ch7 Read Dean Wording
Twine position: `41260,300`

Pela listens past the polite words. Protect means contain. Essential means watched. Safety means the academy has decided she is both student and risk. The darkness around the room makes the translation easy.

Choices:
- Agree with clearer eyes -> Ch7 A New Path 07

### 381. Ch7 Read Spear Rhythm
Twine position: `47640,540`

Odelyn's spear has rhythm: feint, pressure, punish, retreat. Pela catches the pattern just before the first strike lands. Understanding it does not make blocking easy. It makes blocking possible.

Choices:
- Meet Odelyn's charge -> Ch7 A New Path 36

### 382. Ch7 Recognize Elijah Tactic
Twine position: `42360,440`

Elijah wants her cornered. Pela sees it in the shape of his voice: accusation, title, death, no space to answer. Knowing the tactic does not make it harmless. It only tells her where the knife is meant to enter.

Choices:
- Hear the threat again -> Ch7 A New Path 12

### 383. Ch7 Replay Dean Warning
Twine position: `41480,300`

Outside the office, Pela replays the Dean's warning word by word. No sentence openly threatened her. That is what makes it feel practiced. Powerful people rarely need to raise their voices when the building already belongs to them.

Choices:
- Keep walking -> Ch7 A New Path 08

### 384. Ch7 Resist Dark Slumber
Twine position: `45440,300`

Pela fights the sleep for one breath. The room tilts. Odelyn's shadowed hand is cold against her forehead. Pela keeps her eyes open long enough to see that Odelyn is crying.

Choices:
- Fall into The Lost -> Ch7 A New Path 26

### 385. Ch7 Say Fine Odelyn
Twine position: `43020,300`

"I am fine," Pela lies. Odelyn gives her a look that says she has seen better lies from worse liars. She does not challenge it. Not here, not with the hallway still humming from Pela's voice.

Choices:
- Let Lysander speak -> Ch7 A New Path 15

### 386. Ch7 Separate Book Thought
Twine position: `49620,20`

Pela catches the thought as it forms: I need power or they will kill me. Then she hears the book inside the need, polishing fear until it looks like destiny. The realization hurts, but it gives her something to hold that is not the grimoire.

Choices:
- Listen for the spark -> Ch7 A New Path 45

### 387. Ch7 Shape Blade Around Trust
Twine position: `49840,440`

Pela thinks of Gareth at her door, Odelyn crying in the dark, the strange mercy in people who keep warning her instead of leaving. The blade steadies around that feeling. Not rage. Not destiny. A reason to come back whole.

Choices:
- Move with control -> Ch7 A New Path 46

### 388. Ch7 Snap Back Elijah
Twine position: `42360,20`

Pela tries to defend herself with words, but fear gets there first. The academy hallway narrows. Elijah's face becomes every threat wearing one expression, and Pela answers like someone with nowhere left to retreat.

Choices:
- Let the outburst break loose -> Ch7 A New Path 12

### 389. Ch7 Stand Too Long
Twine position: `40160,20`

Pela stands outside the Dean's door until the silence becomes accusing. Every possible punishment rehearses itself in her head. Only when she realizes she is shaking does she knock.

Choices:
- Enter the Dean's office -> Ch7 A New Path 02

### 390. Ch7 Step Back Promise
Twine position: `50280,20`

Pela steps back because promises need room to become action. Odelyn watches her face, searching for the book, the anger, the girl underneath both. Pela lets herself be seen.

Choices:
- Let go gently -> Ch7 A New Path 48

### 391. Ch7 Take Offered Seat
Twine position: `40380,20`

Pela takes the seat because refusing would make her look guilty and accepting makes her feel trapped. The chair is comfortable in the exact way official rooms use comfort to remind students they are smaller than the desk across from them.

Choices:
- Hear why she was summoned -> Ch7 A New Path 03

### 392. Ch7 Warn Or Threaten
Twine position: `43680,20`

"Is this a warning or a threat?" Pela asks. "A warning," Lysander says. "If it becomes a threat, you will not get a conversation first." Pela believes him. That is the worst part.

Choices:
- Accept the danger -> Ch7 A New Path 18

### 393. Ch6 Ly Intervenes Without Blood
Twine position: `37740,300`

Tama's spell folds inward. For a second she looks furious enough to keep standing through anything. Then the Saint's unseen pressure passes over her like a hand closing around a candle flame. Tama's eyes roll back. She drops before Pela can reach her. "There it is," the Saint murmurs, amused. "Weakness pretending to be royalty. She wanted a feast and could not bear the first bite." Pela's hands remain at her sides. That should matter. It does not feel like it will.

Choices:
- Call for help before anyone misunderstands -> Ch6 The Unseen 42

### 394. Tama Analyze Explosion
Twine position: `38620,700`

Pela stops watching the shine and studies the structure. Tama's glass forms in two decisions: pride first, control second. The gap is tiny, but once Pela sees it, the technique becomes less like a miracle and more like a problem.

Choices:
- Tama acts -> Tama Battle Turn

### 396. Tama Battle Trigger Oath
Twine position: `37520,440`

The Saint of the Feast laughs somewhere behind Pela's pulse. "A princess offers a table of pride, fear, and power. Are you really going to leave hungry?" Pela's restraint twists into appetite. Tama feels the shift and answers it with royal glass magic, because pride knows a challenge even when no one speaks it aloud.

Choices:
- Let the feast become a duel -> Tama Duel Begins

### 397. Tama Battle Trigger Snap
Twine position: `37740,20`

The warded hall catches Pela's shout before it can become murder. It does not catch the insult. Tama straightens, shaking with rage. Green glass crawls over her gloves in thin, bright lines. The secret technique she feared Pela stealing gathers in her hands, unstable and polished enough to look expensive. "You want proof you're not an infiltrator?" Tama says. "Survive me."

Choices:
- Fight Tama -> Tama Duel Begins

### 398. Tama Battle Turn
Twine position: `39060,300`

) ) $tamaActionName $tamaActionText [Tama's posture remains perfect enough that even pain looks like something she has permitted.] [The spell costs her. For one breath, her guard is too open to call royal.] [The fracture in her mana makes the glass ring out of tune.] [Pela catches the exact instant the glass commits to being real. The spell spends itself against nothing and leaves Tama staring at the empty answer.] [Pela turns most of it aside. Glass scrapes her sleeve and leaves bright lines in the cloth.] [The glass catches Pela across the shoulder and drives her back over the ward-stones.] [The hit lifts Pela off her feet. For one second, the hallway is nothing but green glass, white pain, and Tama's furious breathing.]] [No damage lands yet. That is what makes the next spell worse.]

Choices:
- Pela falls -> Tama Game Over
- Keep fighting -> Tama Battle Menu

### 399. Tama Brace Blast
Twine position: `38400,840`

Pela braces into the spell instead of away from it. Glass light rolls over her face. The ward floor rattles beneath her boots. She stays standing, and that alone makes Tama's expression tighten.

Choices:
- Tama acts -> Tama Battle Turn

### 400. Tama Challenge Pride
Twine position: `38620,1120`

"You are terrified I learned in one lesson what you bled for," Pela says. Tama's glass flares too bright. It works. It also makes the next spell meaner.

Choices:
- Tama acts -> Tama Battle Turn

### 401. Tama Controlled Clash
Twine position: `38840,1120`

Pela forces a controlled Clash at arm's length. For one terrible heartbeat, the hall becomes white-green glass thunder. Tama takes the worst of it. Pela still feels the backlash chew through her bones.

Choices:
- Pela falls -> Tama Game Over
- Tama acts -> Tama Battle Turn

### 402. Tama Defeated
Twine position: `39280,120`

Tama drops to one knee, then to both. Her spell tears apart before it can become another crown. The fragments scatter over the ward floor like dying glass stars. Pela stands over her, shaking. The victory does not feel clean. It feels witnessed. A shadow steps into the hall before anyone else can see what Pela has done.

Choices:
- Let the stranger handle the aftermath -> Ch6 The Unseen 42

### 403. Tama Defend
Twine position: `38400,700`

Pela watches Tama's shoulders, not her hands. The glass is dramatic on purpose. The real warning begins in the breath before Tama decides where the room will cut.

Choices:
- Tama acts -> Tama Battle Turn

### 404. Tama Disrupt Synergy
Twine position: `38840,980`

Pela remembers Leunname's distinction and attacks the join, not the power. Tama's glass synergy tears loose before it can become a courtly chain. The backlash sends bright fractures racing up both walls.

Choices:
- Tama acts -> Tama Battle Turn

### 405. Tama Duel Begins
Twine position: `37960,300`

Tama Boss Battle Pela $pelaHP / 48 Tama $tamaHP / 66 Turn $tamaTurn Focus $tamaFocus Pride Exposed Turns: Tama deals 1 more damage, but Pela deals 2 more damage while her pride is exposed. Saint Hunger Permanent: The Saint feeds the duel; Tama deals 1 more damage. Tama takes a duelist's stance, but her magic is not Lorne's direct impact. Glass shivers into being around her fingers, thin and bright enough to look fragile until it starts cutting the air into shapes. She does not just attack Pela. She tries to make the hallway obey her.

Choices:
- Choose Pela's first response -> Tama Battle Menu

### 406. Tama Feast Counter
Twine position: `38840,1260`

Pela lets the Saint's hunger touch the counterspell, but not hold it. The result is viciously clean. Tama's glass collapses inward as if something took a bite from the center of it.

Choices:
- Tama acts -> Tama Battle Turn

### 407. Tama Feast Hunger
Twine position: `38620,980`

The Saint's hunger sharpens every sound. Tama's breathing. Pela's pulse. The glass singing between them like a knife dragged across a plate. The focus comes with a cost. Pela tastes blood and smiles before she means to.

Choices:
- Pela falls -> Tama Game Over
- Tama acts -> Tama Battle Turn

### 408. Tama Forbidden Focus
Twine position: `38620,840`

The Forbidden One's lesson surfaces cold and precise. "She is not attacking you. She is defending a story about herself. Break the story and the spell will follow." Pela hates that it helps.

Choices:
- Tama acts -> Tama Battle Turn

### 409. Tama Game Over
Twine position: `39060,500`

GAME OVER Tama's final glass spell breaks across Pela's guard and drops her to the warded floor. The hall rings. The Saint laughs. Somewhere beyond the green light, a shadow moves too late to make this victory painless. Pela survives. But Tama wins the secret duel.

Choices:
- Retry the Tama battle -> Tama Duel Begins
- Return to the Tama confrontation -> Ch6 The Unseen 41

### 410. Tama Impact Shield
Twine position: `38400,1120`

Pela shapes Impact Shield at the edge of Tama's glass. The spell folds around the shield and snaps back in thin, bright pieces. Tama hisses as her own force cuts through her sleeve.

Choices:
- Tama acts -> Tama Battle Turn

### 411. Tama Lightning Break
Twine position: `38840,840`

Pela threads lightning through the weakest place in Tama's spell. The glass breaks before it opens. If Tama has a crown waiting, though, the broken pieces remember who shaped them first.

Choices:
- Tama acts -> Tama Battle Turn

### 412. Tama Low Sweep
Twine position: `38180,700`

Pela goes low before Tama can finish drawing the glass line. Her heel clips Tama's ankle. The princess stumbles, furious more than hurt, and the half-made spell rings against the floor like cracked crystal.

Choices:
- Tama acts -> Tama Battle Turn

### 413. Tama Spark Clash Finisher
Twine position: `38840,1400`

Pela waits until Tama commits everything to the next glass chain. Then she threads Spark through the forming Clash and turns the spell inside out. The crown shatters into a single silent flash. Tama hits the floor before the sound catches up.

Choices:
- End the Tama fight -> Tama Defeated

### 414. Tama Spark Spear
Twine position: `38180,840`

Pela forms the spear faster than she did against Lorne. The shape still trembles, but this time it holds. She drives the haft into Tama's guard and feels the glass spell buckle around it instead of bloom cleanly.

Choices:
- Tama acts -> Tama Battle Turn

### 415. Tama Spark Step
Twine position: `38180,980`

Pela becomes a short flash of blue-white movement. Not full lightning. Not yet. But enough to cross the space before the royal glass finishes its circle and strike Tama beneath the ribs.

Choices:
- Tama acts -> Tama Battle Turn

### 416. Tama Spear Pin
Twine position: `38840,700`

Pela pins Tama's casting hand against the wall with the spear shaft. The glass detonates sideways, carving stone instead of skin. Tama twists free, but not cleanly.

Choices:
- Tama acts -> Tama Battle Turn

### 417. Tama Ward Step
Twine position: `38400,980`

Pela reads the ward-stones as Tama's glass pulls against them. The floor gives her the angle. She steps with the ward instead of against it, and the glass breaks one pace behind her.

Choices:
- Tama acts -> Tama Battle Turn

### 418. Belladonna Walk Forward
Twine position: `11100,20`

Pela rose from her chair slowly. Every step toward the front of the room felt too loud, as if the floor had decided to report her fear.

Choices:
- Stop when Belladonna raises his hand -> Negative Bolt Warning

### 419. Belladonna Rare Spell Notes
Twine position: `10700,20`

Pela remembered the line from the textbook. Negative impact did not reverse force. It invited force to return to its source. That sounded simple until she imagined being the thing invited.

Choices:
- Watch the demonstration choose her -> Belladonna Calls Pela

### 420. Belladonna Spark Anchor
Twine position: `13900,120`

Spark gathered in Pela's feet instead of her hands. It hated being still. So did she.

Choices:
- Face the Negative Burst -> Negative Burst Challenge

### 421. Belladonna Exhausted Entrance
Twine position: `10100,120`

A few minutes later, Professor Belladonna walked into the room. He looked different than usual. His normally clean-shaven face was covered with stubble, and his usually pressed clothes were wrinkled. The room quieted quickly. Not because he looked respectable. Because he looked like someone who had stopped caring whether he frightened people.

Choices:
- Study how tired he looks. -> Belladonna Exhaustion Read
- Look down before he notices her. -> Belladonna Avoid Notice
- Keep her eyes on the professor. -> Belladonna Holds Professor Gaze

### 422. Belladonna Late Door
Twine position: `9700,120`

Pela snuck in the door and tried to make her body smaller than a mistake. The last empty seats were the worst ones. Too visible, too far away, or too close to students who smiled like they had been waiting for her to be late. The room noticed her anyway.

Choices:
- Take the back seat before anyone can make it a story. -> Belladonna Quiet Seat
- Apologize under her breath and sit near the front. -> Belladonna Front Apology
- Count who saw her come in late. -> Belladonna Watchful Count

### 423. Belladonna Avoid Notice
Twine position: `10300,120`

Pela looked down so quickly her neck hurt. The ink on the page blurred. She had written nothing, but she stared at the blank lines anyway. Sometimes looking busy was the only kind of hiding allowed in class.

Choices:
- Listen to the lesson begin -> Belladonna Negative Lesson

### 424. Belladonna Whisper Ready
Twine position: `11900,120`

She stood right next to the professor and felt his cold hand on her shoulder. He whispered into her ear, "Be ready." With that, the negative magic's pull stopped. The spell was broken, and Pela fell to the ground.

Choices:
- Scramble back to her feet -> Negative Theory
- Memorize how the pull released. -> Negative Theory

### 425. Belladonna Pull Research
Twine position: `12500,120`

"The caster becomes the point the force returns to," Pela said. "It is not absence of force. Instead, it is a redirection of force." The class went quieter. Belladonna nodded. "Better than the textbook. Less elegant, but better."

Choices:
- Hear Belladonna's next lesson -> Belladonna Burst Definition

### 426. Belladonna Class Murmur
Twine position: `10700,120`

The students whispered around her. "Negative impact." "Do you think he will show us?" "I heard it can pull organs out of place." Pela decided not to ask if that last part was true.

Choices:
- Watch the demonstration choose her -> Belladonna Calls Pela

### 427. Belladonna Deny Weakness
Twine position: `13300,120`

"I'm not weak," Pela said. It came out smaller than she wanted, but not small enough to vanish. Professor Belladonna's eyes narrowed. "Then let us stop discussing it as if it were undecided."

Choices:
- Hear the threat clearly -> Belladonna Threatens Expulsion

### 428. Negative Bolt Pull
Twine position: `11700,120`

"Brace yourself. Here comes the spell." A moment of expectance. Negative Bolt. Then a bright light engulfed Pela, and she felt weightlessness. Her vision blurred as she was pulled by negative forces to the front of the class. The light blinded her, and she could hear her classmates gasping in shock and awe.

Choices:
- Land beside the professor -> Belladonna Whisper Ready

### 429. Belladonna Overpower Burst
Twine position: `14300,460`

Pela did not make the shield wide. She made it sharp. Spark caught the edge of the Negative Burst and shoved. For half a breath, Belladonna's spell buckled backward toward him, and several students shouted. Then the force corrected itself and threw Pela across the room anyway. But Professor Belladonna was smiling when she opened her eyes.

Choices:
- Hear the class react -> Belladonna Erika Answer

### 430. Belladonna Holds Professor Gaze
Twine position: `10300,220`

Pela kept her eyes on him. Professor Belladonna's gaze swept the room and passed over her once. Then it came back.

Choices:
- Listen to the lesson begin -> Belladonna Negative Lesson

### 431. Belladonna Quiet Seat
Twine position: `9900,20`

Pela took a seat in the back and lowered her head. It should have helped. It did not. The class had a way of making silence feel like a hand pointing. She opened her notebook to a clean page and wrote the date like that was enough to make her belong there.

Choices:
- Wait for Belladonna -> Belladonna Exhausted Entrance

### 432. Negative Bolt Warning
Twine position: `11300,120`

As she began to walk toward the front of the class, Professor Belladonna held up his hand. "No need to walk all the way up here. Stay right there. I'm going to perform the spell on you." Pela froze, fear washing over her. She couldn't move. Her legs felt like lead, and her stomach churned.

Choices:
- Say she knows she will be fine. -> Belladonna Trusts Lesson
- Ask if he is casting Negative Bolt. -> Belladonna Names Negative Bolt
- Brace badly, but brace anyway. -> Belladonna Braces Badly
- Hide her fear from the class (DC Nerve: 3) -> Belladonna Hide Fear

### 433. Belladonna Erika Answer
Twine position: `14500,120`

Professor Belladonna smiled. "Well done," he complimented. "I'm impressed." Pela blushed and lowered her gaze. "Who can tell me what Miss Pela did? She blocked Negative Bolt, but got sent backwards. Anyone?" A hand went up.

Choices:
- Look at the floor until it is over -> Belladonna Professor Praise
- Listen closely to the answer. -> Belladonna Erika Argument
- Meet the room after surviving it (DC Nerve: 5) -> Belladonna Professor Praise

### 434. Belladonna Question Why
Twine position: `11100,120`

"Why me?" Pela asked before she could make herself smaller. Professor Belladonna looked at her. "Because how late you normally come in, and because you need it. Who knows how much you retain losing out on so much class time." The answer was unfair, which did not make it useless.

Choices:
- Stop when Belladonna raises his hand -> Negative Bolt Warning

### 435. Belladonna Negative Lesson
Twine position: `10500,120`

"Good morning, students," he greeted. "As you know, today's lesson is about negative impact spells." A murmur of excitement ran through the classroom. Negative impact spells were rare and difficult to master. Rare enough that students liked saying the name, even when they did not know what the name meant.

Choices:
- Recall the textbook definition (DC Research: 2) -> Belladonna Rare Spell Notes
- Listen to the excitement around her. -> Belladonna Class Murmur
- Wonder what made Belladonna look like that. -> Belladonna Bad Morning

### 436. Belladonna Braces Badly
Twine position: `11500,220`

Pela tried to brace herself. She locked her knees, which was probably wrong. She clenched her hands, which was definitely wrong. There was no time to correct it.

Choices:
- Brace herself -> Negative Bolt Pull

### 437. Belladonna Warded Classroom
Twine position: `12900,120`

"Is the room warded for that?" "Of course," Belladonna said. "I am not irresponsible. I am simply disliked." That was not as comforting as he seemed to believe.

Choices:
- Hear what he is really testing -> Belladonna Will Lecture

### 438. Belladonna Watchful Count
Twine position: `9900,220`

Pela counted six students who noticed, three who whispered, and one who looked away too quickly. Counting did not make the embarrassment vanish, but it gave it corners. Corners could be studied. She sat down before the whispers became names.

Choices:
- Wait for Belladonna -> Belladonna Exhausted Entrance

### 439. Belladonna Fear Edge
Twine position: `13300,220`

Pela felt the word weakness open under her feet. She hated that he knew where to put it. She hated more that some part of her had already been waiting there. The Saint had offered power. Belladonna offered humiliation and called it instruction.

Choices:
- Hear the threat clearly -> Belladonna Threatens Expulsion

### 440. Belladonna Pull Spark Sense
Twine position: `12500,220`

"It felt like the spell made my body agree with it," Pela said. Spark flickered under her skin, not casting, only remembering. "Like the force was not hitting me. It was convincing the space around me to return me to you." Professor Belladonna stared for a moment longer than he needed to.

Choices:
- Hear Belladonna's next lesson -> Belladonna Burst Definition

### 441. Belladonna Formula Count
Twine position: `13900,20`

Pela counted the distance between them. She counted his stance, the angle of his shoulders, the direction the air began to press. The numbers did not save her. They gave her something to hold.

Choices:
- Face the Negative Burst -> Negative Burst Challenge

### 442. Belladonna Class Watches
Twine position: `13700,120`

Pela was stunned. Was he serious? Was he really threatening her? What had she done to deserve this treatment? "What's wrong?" he questioned. "Afraid?" "N-No," Pela managed, swallowing hard. "Good."

Choices:
- Stand in front of the class -> Negative Burst Challenge
- Ask if all practical lessons come with theater (DC Nerve: 6, Spend: 2 Nerve) -> Jerk Belladonna Theater
- Count the force before it lands (DC Research: 3) -> Belladonna Formula Count
- Anchor Spark in her feet (DC Spark: 4) -> Belladonna Spark Anchor
- Remember what the Saint made fear feel like (DC Oath: 2) -> Belladonna Saint Memory

### 443. Belladonna Honest Confusion
Twine position: `12500,340`

"I understand the pull," Pela said. "I don't understand why it felt like falling upward." A few students laughed. Professor Belladonna did not. "Because confusion means you were paying attention."

Choices:
- Hear Belladonna's next lesson -> Belladonna Burst Definition

### 444. Belladonna Names Negative Bolt
Twine position: `11500,120`

"Negative Bolt?" Pela asked. "Correct." It should have made her feel better. Instead, it made the fear more specific.

Choices:
- Brace herself -> Negative Bolt Pull

### 445. Belladonna Exhaustion Read
Twine position: `10300,20`

The wrinkles were not random. His cuffs were scorched. His left sleeve had been repaired badly, and there was a line of dried ink across his palm. He had either been grading too long, fighting too long, or both. Pela did not know which answer was worse.

Choices:
- Listen to the lesson begin -> Belladonna Negative Lesson

### 446. Belladonna Calls Pela
Twine position: `10900,120`

"Allow me to demonstrate it on one of our normally chronically late students. Please, Miss Pela, will you come here," he asked. Pela's heart sank. She had been hoping to slip through the class unnoticed. That hope left quickly and without dignity.

Choices:
- Rise from her chair slowly. -> Belladonna Walk Forward
- Ask why he chose her. -> Belladonna Question Why
- Swallow the anger before it shows. -> Belladonna Swallow Anger

### 447. Belladonna Front Apology
Twine position: `9900,120`

"Sorry," Pela whispered, before anyone asked for it. No one answered. That made it worse in a different way. She took the closest seat and kept her hands flat on the desk until they stopped wanting to shake.

Choices:
- Wait for Belladonna -> Belladonna Exhausted Entrance

### 448. Belladonna Swallow Anger
Twine position: `11100,220`

Pela bit down on the first answer that came to her. It tasted like humiliation. The Saint of the Feast would have laughed at that. Pela did not.

Choices:
- Stop when Belladonna raises his hand -> Negative Bolt Warning

### 449. Belladonna Bad Morning
Twine position: `10700,220`

Professor Belladonna did not move like a tired man. He moved like a man who had carried his exhaustion into the room and planned to use it as part of the lesson. Pela's stomach twisted before he even said her name.

Choices:
- Watch the demonstration choose her -> Belladonna Calls Pela

### 450. Belladonna Notice Class Fear
Twine position: `12900,220`

The class stopped sounding excited. Pela heard paper shift, heard a chair leg scrape, heard someone whisper her name with pity in it. Pity made her want to be brave for ugly reasons.

Choices:
- Hear what he is really testing -> Belladonna Will Lecture

### 451. Belladonna Trusts Lesson
Twine position: `11500,20`

Professor Belladonna looked Pela down and said, "Are you scared? Don't be. I promise you will feel no pain." Pela shook her head. "If you're going to use the spell I think you are, I know I'll be fine." He nodded once, as if she had given the only acceptable answer.

Choices:
- Brace herself -> Negative Bolt Pull

### 452. Belladonna After Class Question
Twine position: `15300,300`

"Professor," Pela said, before courage could leave her. "Would you really have expelled me?" Belladonna stacked his papers slowly. "I would rather terrify a student into surviving than praise them gently into dying." It should have comforted her. Instead, the part that felt true made it worse.

Choices:
- Go to Spellblade -> Spellblade Waiting Room

### 453. Belladonna Lunch Reaction
Twine position: `15300,120`

When the bell rang, Pela stayed seated one breath longer than everyone else. Her body expected another spell. Nothing came. That was almost worse. It meant the lesson had ended, and she had to decide what to do with the fact that she survived it.

Choices:
- Sit with it at lunch -> Lunch Alone
- Ask if he meant the expulsion threat -> Belladonna After Class Question
- Go to Spellblade before anyone corners her -> Spellblade Waiting Room

### 454. Belladonna Feast Shield
Twine position: `14300,340`

The Saint's hunger moved before Pela's fear could decide what it wanted. The Negative Burst struck something inside her that smiled back. For one second, Pela did not shield herself. She became a table with a feast laid out upon it, and the spell was invited to sit down. Then she hit the floor hard enough to remember she was still human.

Choices:
- Hear the class react -> Belladonna Erika Answer

### 455. Belladonna Threatens Expulsion
Twine position: `13500,120`

"Are you satisfied with being the weakest link, or will you try to grow?" A moment of pause occurred as Professor Belladonna looked at her and then back at the class. "You've constantly used excuses and have been allowed to do so, but no longer. Today, you will prove your worth, and show us why you are a worthy student. If you are not able to protect yourself with a Negative Impact Shield, I will personally see to your expulsion." Unwavering menace radiated from his eyes.

Choices:
- Let the class watch -> Belladonna Class Watches

### 456. Belladonna Burst Definition
Twine position: `12700,120`

"Good," Professor Belladonna replied. "Now, let's try something a little more advanced. How about a Negative Burst?" "A what?!" Pela exclaimed. "A Negative Burst," he repeated. "W-What's a Negative Burst?" Pela stammered, her curiosity peaked.

Choices:
- Ask how a burst works. -> Belladonna Ask Burst How
- Ask whether the room is warded. -> Belladonna Warded Classroom
- Listen to the class go silent. -> Belladonna Notice Class Fear

### 457. Belladonna Pull Plain
Twine position: `12500,20`

"The force of the spell pulls you towards the caster. But, instead of being pushed away, you're sucked in." Pela heard herself become steadier as she continued. "That's why you feel like you're floating, because you're not really being pushed. Hence the negative, because the force is pulling you instead of pushing you."

Choices:
- Hear Belladonna's next lesson -> Belladonna Burst Definition

### 458. Belladonna Ask Motivation
Twine position: `13300,20`

"What are you trying to say?" "You always use your 'lack of applicational talent' as a crutch, but what if you are just lacking motivation? Or perhaps, a desire to improve." The class became so quiet it almost sounded empty.

Choices:
- Hear the threat clearly -> Belladonna Threatens Expulsion

### 459. Belladonna Hide Fear
Twine position: `11500,340`

Pela forced her face still. The fear stayed. It simply lost permission to speak first. Professor Belladonna noticed. His expression did not soften, but it did become sharper.

Choices:
- Brace herself -> Negative Bolt Pull

### 460. Belladonna Saint Memory
Twine position: `13900,220`

Pela had seen The Saint. She had stood in a place where hunger wore divinity like a crown. Compared to that, Professor Belladonna was a man with tired eyes and a cruel lesson. That did not mean he was harmless.

Choices:
- Face the Negative Burst -> Negative Burst Challenge
- Let the memory bare its teeth (DC Oath: 5) -> Eldritch Belladonna Hunger

### 461. Belladonna Ask Burst How
Twine position: `12900,20`

"How?" "Well, if you know how to manipulate negative energy, you can cause an explosion without having to actually use a spell," he explained. "Huh, I didn't know that," Pela murmured. "Not many do."

Choices:
- Hear what he is really testing -> Belladonna Will Lecture

### 462. Belladonna Textbook Page
Twine position: `15100,120`

"I've already heard she is a Spark Mage, and I want her to know her strengths, and not be a waste to the Academy of Torrindale!" The professor's words boomed throughout the classroom. "But, you just told her she's the weakest link," Erika argued. "I did not," the professor replied. "I merely implied it." The class passed by quickly after that. Before she knew it, everyone was taking out their textbooks and turning to page 327. "I'd like to discuss the importance of channeling mana into one's weapon."

Choices:
- Let the class pass quickly -> Belladonna Lunch Reaction
- Copy the weapon-channeling note (DC Research: 4) -> Belladonna Lunch Reaction
- Write Belladonna's insult exactly. -> Belladonna Lunch Reaction

### 463. Belladonna Professor Praise
Twine position: `14900,120`

"What I didn't tell you is that I expected Pela to use a lot less mana when using the Negative Impact Shield, but I'm glad she didn't." "Why didn't you just expel her if she was so weak?" Erika asked. "Because, Erika, the fact that she was able to block the spell and not die or get seriously injured is impressive. And, even though she didn't use the proper amount of mana to overpower my Negative Bolt, it was enough to show me that she is not the weakling that she has presented herself as." Pela stared at the floor, not wanting to make eye contact with anyone.

Choices:
- Let the class move on -> Belladonna Textbook Page

### 464. Belladonna Will Lecture
Twine position: `13100,120`

"Now, I'm going to perform the Negative Burst, but I want you to try and stop me," he challenged. "My contemporaries constantly remind me of how you cannot fight a mage, you must fight their will. If you are a mage, you cannot lose against anyone who is not a mage. You are the stronger, more powerful, and most intelligent of the two." Pela felt the sentence aim at her more than the class.

Choices:
- Ask what he is trying to say. -> Belladonna Ask Motivation
- Deny that weakness is her identity. -> Belladonna Deny Weakness
- Let the insult cut first. -> Belladonna Fear Edge

### 465. Belladonna Erika Argument
Twine position: `14700,120`

"She used a Negative Burst as a shield. It's a very advanced technique. You have to control the flow of mana from your body and use it to create a shield. However, she matched the force of the spell. If she had been stronger, she would have repelled the blast," a boy said. "Correct. Now, what could have happened if Miss Pela did not match the force of the blast and instead used less mana? If you will, Erika, please continue." Erika stood up and replied, "Well, she would have been slightly knocked forward and probably hurt herself, which is why the Negative Burst is considered a support spell. Your enemy has to gamble on how much mana they need to use to block it." Pela hated how useful the explanation was.

Choices:
- Hear Belladonna explain himself -> Belladonna Professor Praise

### 466. Romance Gareth Look Back
Tags: `romance`
Twine position: `16900,620`

Pela smiles at Gareth before she can make the expression practical. Not pity. Not panic. Something warmer and more reckless, like telling him he is allowed to come back alive. Gareth sees it. The fear on his face stumbles, briefly, into surprise. Then the infirmary door takes him away.

Choices:
- Go with Vayne -> Vayne Private Talk

### 467. Romance Odelyn You Came
Tags: `romance`
Twine position: `15500,320`

"You sound happy to see me," Pela says. Odelyn pauses, as if the sentence has stepped too close. "I am," she says, then frowns at herself for admitting it so easily. Pela's stomach does something unhelpful. "Good," she says. "I was hoping that was what it sounded like."

Choices:
- Enter the battle stage -> Duel Begins

### 468. Romance Odelyn Warmth
Tags: `romance`
Twine position: `50500,500`

"You are warm," Pela says into Odelyn's shoulder. Odelyn goes still. "People usually say that like it is a bad thing." "I'm not." The answer leaves them both quiet. Odelyn's arms tighten once, careful and real, before she lets Pela breathe again.

Choices:
- Let go gently -> Ch7 A New Path 48

### 469. Romance Gareth Notices
Tags: `romance`
Twine position: `8100,500`

"I noticed," Pela says, then realizes the words are already out. "Because I was looking." Gareth's grin returns wrong at first, too quick and too bright. Then it softens into something that does not try to defend itself. "Dangerous habit," he says. "I have a few." For once, he does not immediately answer. Pela likes that more than she should.

Choices:
- Head for the library -> Library Decision

### 470. Romance Odelyn Softness
Tags: `romance`
Twine position: `43240,220`

"You know," Pela says, because fear has ruined enough sentences already, "you are dangerous when you are gentle." Odelyn's urgency falters. "That is a very strange thing to say right now." "I know." For one heartbeat, Odelyn almost smiles. Then the hall, Elijah, Tama, and the terrible shape of consequences return.

Choices:
- Let Lysander speak -> Ch7 A New Path 15

### 471. Romance Gareth Worries
Tags: `romance`
Twine position: `28940,620`

"I like when you worry about me," Pela says. Gareth blinks. "That sounded less embarrassing in my head." "It did not sound embarrassing from here," he replies, and then looks embarrassed enough for both of them. The room becomes quiet in a way that does not feel empty.

Choices:
- Let him in -> Ch6 The Unseen 02

### 472. Romance Odelyn Faith
Tags: `romance`
Twine position: `28320,320`

"It sounds better when you say it," Pela admits. "What does?" "That I can do this." Odelyn looks at her for a long second, the kind that makes Pela want to look away and refuses to let her. "Then listen to me more often," Odelyn says. Pela laughs once, quietly. "That is an awful plan." "It is a correct one."

Choices:
- End chapter five -> Chapter Five End

### 473. Jerk Gareth Compliments
Tags: `jerk`
Twine position: `7300,500`

"Compliments are not a strategy," Pela says. Gareth blinks, then laughs once. "I was hoping they were at least a distraction." "They are distracting in the way loose stairs are distracting." His smile turns genuine at the insult. That is either charming or a warning sign. Pela refuses to decide.

Choices:
- Ask why he cares -> Gareth Secret

### 474. Jerk Odelyn Weaponized Advice
Tags: `jerk`
Twine position: `44780,500`

"You explain pain like a weapon," Pela says. Odelyn's eyes harden because the words found a place to land. "Sometimes it is the only language pain leaves behind." Pela almost apologizes. Then the slap comes, and grief is faster than regret.

Choices:
- Feel the slap land -> Ch7 A New Path 23

### 475. Jerk Saint Better Question
Tags: `jerk`
Twine position: `4700,500`

Pela's voice tears itself loose. "If you want an honest answer, ask a better question." The Saint goes very still. Then he smiles, slow and bright and awful. "There is the little tooth." The words should scare her. They do. They also make the truth in her chest bare its teeth back.

Choices:
- Hear the price -> The True Desire

### 476. Jerk Lorne Robe
Tags: `jerk`
Twine position: `25500,620`

Pela looks at Lorne's robe, then at Lorne. "Your robe is doing more fighting than you are." The silence that follows is almost worth whatever happens next. Lorne's expression goes flat. Professor Vayne makes a very small sound that might have been amusement and might have been a warning. His confidence has a crack in it before the duel even starts.

Choices:
- Take positions -> Duel With Lorne Begins

### 477. Jerk Tama Title
Tags: `jerk`
Twine position: `36860,620`

"Princess Tama," Pela repeats. "That explains why the title is doing most of the work." Tama's face changes. Not shock. Not hurt. Permission. The air around her hand tightens, and Pela realizes a heartbeat too late that some insults are keys.

Choices:
- Watch Tama's anger answer -> Ch6 The Unseen 39

### 478. Jerk Odelyn Warning Label
Tags: `jerk`
Twine position: `19300,500`

"You sound like the warning label," Pela says. Odelyn looks at her. "Good. Warning labels exist because people survive less often than they think." "Do they also glare?" "Only the useful ones." Pela almost smiles, which is annoying because Odelyn is not wrong.

Choices:
- Enter the Bochord -> Enter Bochord

### 479. Jerk Forbidden Drama
Tags: `jerk`
Twine position: `21700,500`

"You are losing the argument by being dramatic," Pela says. The Forbidden One's smile does not move. "Am I?" "A little." "Then I will try terror instead." The room presses against Pela's mind hard enough to make her knees tremble. She hates that her mouth still wants to answer.

Choices:
- Answer the Forbidden One -> Forbidden Bargain

### 480. Jerk Belladonna Theater
Tags: `jerk`
Twine position: `13700,500`

"Do all practical lessons come with theater, or is this special for me?" Several students make the mistake of breathing too loudly. Professor Belladonna's eyes sharpen. "Good. Fear has not made you polite enough to be useless." Pela does not know if that is praise. She decides not to thank him.

Choices:
- Face the Negative Burst -> Negative Burst Challenge

### 481. Battle Nerve Break
Twine position: `26700,620`

Pela lets the sharp part of her speak with aim instead of panic. "You keep charging like if you hit hard enough, no one will notice you are scared." Lorne's next step lands wrong. Not much. Enough for Pela to see the rhythm under the impact magic and break it.

Choices:
- Lorne acts -> Battle Lorne Turn

### 482. Battle Spear Sweep
Twine position: `26300,620`

Pela drops low, but this time the spear moves with her. The sweep carries Spark through the floorward arc and clips Lorne behind the knee. He catches himself with impact magic, but not quickly enough to hide the stumble.

Choices:
- Lorne acts -> Battle Lorne Turn

### 483. Battle Spear Flurry
Twine position: `26500,620`

The Spear Rush becomes something faster. Pela strikes wrist, rib, shoulder, then the same wrist again before Lorne can decide which blow matters. Sparks flash in a broken circle around them. Lorne retreats for the first time without pretending it was his idea.

Choices:
- Lorne acts -> Battle Lorne Turn

### 484. Battle Rattled Spark Burst
Twine position: `26700,820`

Pela gathers her nerve before doubt can even enter her mind. Spark gathers in the gap Lorne left open. Not a clean spell. Not a pretty one. A short, bright burst of pressure and current that catches him before his impact magic can decide where to harden his defenses. Lorne stumbles sideways, furious that the mistake was his first.

Choices:
- Lorne acts -> Battle Lorne Turn

### 485. Battle Rattled Spear Drive
Twine position: `26900,820`

Pela sees the stumble before Lorne recovers from it. The spear sweeps low, then drives upward through the opening it made. Lorne blocks the point with silver force, but the haft still hammers into his ribs. For once, he is the one trying to find space to breathe.

Choices:
- Lorne acts -> Battle Lorne Turn

### 486. Eldritch Blood Smile
Tags: `eldritch`
Twine position: `5300,620`

Pela smiles because the mark hurts. Not happily. Not bravely. The expression moves through her first, a thin white curve under the skin of her face, and the Saint watches it with bright approval. For one second, the oath does not feel like a chain. It feels like teeth learning where they belong.

Choices:
- Return to the room -> After The Oath

### 487. Eldritch Reflection Smile
Tags: `eldritch`
Twine position: `5700,620`

Pela smiles back at the reflection. The Saint's grin and hers do not match. Then, for one trembling moment, they almost do. The glass darkens around her face as if the window has learned to keep a secret.

Choices:
- Fall into a black dream -> Dream Under Feast

### 488. Eldritch Marginal Smile
Tags: `eldritch`
Twine position: `6100,700`

The sentence waits for her to be frightened of it. Pela reads it as an invitation instead. The ink warms under her fingers. The words do not change, but something behind them opens one eye. The feast begins when the lonely call it kindness. Pela does not know why the sentence feels less like a warning when she lets it want her.

Choices:
- Run late again -> Run Late Again

### 489. Eldritch Woodcut Smile
Tags: `eldritch`
Twine position: `8500,700`

Pela looks at the woodcut long enough for the sleeping faces to seem less asleep. The saint above the table notices. His painted smile gains another tooth. Then another. Pela blinks, and the book is only paper again, which is not comforting because paper remembers what hands do to it.

Choices:
- Turn around -> Odelyn Introduction

### 490. Eldritch Belladonna Hunger
Tags: `eldritch`
Twine position: `14100,700`

Pela remembers the Saint and lets the memory open its mouth. Professor Belladonna's threat does not become smaller. It becomes edible. That thought is horrible. It is also useful. Fear still lives in her chest, but now something beside it is setting the table.

Choices:
- Face the Negative Burst -> Negative Burst Challenge

### 491. Eldritch Recognized Whisper
Tags: `eldritch`
Twine position: `17700,700`

Pela answers the whisper inside her thoughts. What recognizes me there? The vanished idol does not speak. It smiles into the question. For a moment, Pela can taste dust, old bargains, and something expensive being wrapped for sale.

Choices:
- Visit Gareth before leaving -> Infirmary Door
- Go straight to the Bochord -> Autumn Walk

### 492. Eldritch Lorne Mark
Tags: `eldritch`
Twine position: `25500,820`

Pela lets the smile sit behind her teeth as Lorne studies her. For one breath, his impact magic forgets its shape. Not completely. Not enough for anyone kind to call it sabotage. But the silver light around his fists bends inward, as if something unseen has taken a first bite. Vayne notices. She says nothing.

Choices:
- Take positions -> Duel With Lorne Begins

### 493. Eldritch Elijah Smile
Tags: `eldritch`
Twine position: `42360,500`

Pela lets Elijah see the thing under her fear. Not the Saint. Not exactly. A smile with too many reasons to be hungry. Elijah takes half a step back before pride catches him by the collar and drags him forward again.

Choices:
- Hear the threat again -> Ch7 A New Path 12

### 494. Eldritch Tama Smile
Tags: `eldritch`
Twine position: `37520,700`

Pela keeps her mouth closed. The smile opens anyway. Tama sees it, or feels it, or sees herself reflected in it. Her unfinished spell trembles like a frightened animal pretending to be royal. Pela does not cast. Something hungry answers the silence for her.

Choices:
- Watch the Saint answer Tama's weakness -> Ch6 Ly Intervenes Without Blood

### 501. Credits
Tags: `menu`
Twine position: `900,760`

Credits
Demons of an Idol Dawn Writer - <>
Quality Assurance - <>
Art - <>

Choices:
- Back to Main Menu -> Main Menu

### 502. Battle Grinning Ward
Tags: `eldritch`
Twine position: `26300,5600`

Pela smiles before she understands why. Lorne's impact magic comes for her like a fist and meets something waiting with teeth. The force turns in on itself. It does not break. It bites. For one ugly second, Lorne's own spell looks hungry for him. Lorne stops pretending he is amused. He looks at Pela as if the duel has changed shape without asking his permission.

Choices:
- Lorne acts -> Battle Lorne Turn

### 503. Battle Teeth in the Spark
Tags: `eldritch`
Twine position: `26500,5600`

Pela's Spark does not sharpen into a spear. It opens. White current splits into a grin of light, too wide, too eager, and the training-stage shadow under Lorne's feet bends toward it. "Hold still," Pela says, and the sweetness in her voice does not belong to her. "I want to see what shape fear makes." The Spark closes around him.

Choices:
- Lorne acts -> Battle Lorne Turn

### 504. Battle Apply Feast Mark
Tags: `eldritch`
Twine position: `26700,5600`

Pela reaches for the old mark instead of another spell. It answers too quickly... the hunger gnawing. The smile opens under her skin, and Lorne's impact magic remembers being bitten. The silver light around his fists does not dim. It recoils. Something in the duel has learned his taste, and that makes him nervous.

Choices:
- Lorne acts -> Battle Lorne Turn

### 505. Unclaimed Love Answer
Tags: `unclaimed`
Twine position: `4900,320`

"I want to be loved," Pela says. The confession should make her smaller. It does not. "But not owned for it." The Saint's smile thins by a single, perfect fraction. For the first time in the void, Pela feels the shape of her own answer before anyone else can carve it into something useful.

Choices:
- Hear the price -> The True Desire

### 506. Unclaimed Book Lesson
Tags: `unclaimed`
Twine position: `24100,320`

Pela keeps the calm where it is useful and pushes the hand off the center of her mind. The Forbidden One can teach her what a leash feels like. That does not make him the hand that gets to hold it. "You may teach me," Pela says. "You may not name what I am." The page turns by itself. Slower this time.

Choices:
- Begin the lesson -> Awe Lesson

### 507. Unclaimed Anchor Odelyn
Tags: `unclaimed`
Twine position: `20100,320`

Pela reaches for Odelyn like Odelyn is real, not bait, not proof, not another lesson wearing a friendly face. Their fingers lock. For one impossible second, the Bochord has to pull against both of them. Then the building pulls harder than flesh can answer. Odelyn slips away into the dark below, eyes wide not with accusation, but warning. "Don't trust the rooms!" The floor closes.

Choices:
- Call her name -> Alone Library

### 508. Unclaimed Odelyn Faith
Tags: `unclaimed`
Twine position: `28300,320`

Pela lets Odelyn's faith stand beside her. Not above her. Not inside her mouth. Not as another hand deciding the shape of her future. Beside her. "Then I will use it," Pela says. "But I am still the one using it." Odelyn's smile is small and fierce. "Good. I would hate being right for nothing."

Choices:
- End chapter five -> Chapter Five End

### 509. Unclaimed Gareth Rumor
Tags: `unclaimed`
Twine position: `30680,320`

"We can be careful," Pela says. "But I will not make myself smaller because someone else is bored enough to name me." Gareth looks at her like he expected fear and found a blade instead. "I do not belong to their rumor," Pela continues. "And neither do you." For a moment, the room feels less like hiding. It feels like choosing where to stand.

Choices:
- Ask about the book -> Ch6 The Unseen 10

### 510. Ch6 Odelyn Route Interrupt
Tags: `odelyn-route`
Twine position: `30680,560`

"That's great! Congratulations," Gareth grinned, "I knew you'd win. I never had a doubt in my mind." The grin holds for half a second too long. Then his eyes move toward the door. "Actually," he says, quieter, "someone else should talk to you about what that win means." Pela frowns. "Gareth?" "I'm not leaving because I want to," he says. "I'm leaving because she has sharper teeth for this conversation than I do."

Choices:
- Let Gareth go -> Ch6 Odelyn Route Doorway
- Ask if he is avoiding something. -> Ch6 Odelyn Route Gareth Honesty

### 511. Ch6 Odelyn Route Gareth Honesty
Tags: `odelyn-route`
Twine position: `30880,560`

"A lot," Gareth admits. The honesty is so quick that Pela almost misses it. "But not you. Not this." He steps aside before the sentence can become anything softer.

Choices:
- See who is waiting -> Ch6 Odelyn Route Doorway

### 512. Ch6 Odelyn Route Doorway
Tags: `odelyn-route`
Twine position: `31080,560`

Odelyn stands in the doorway with her arms folded. She does not look like she came to visit. She looks like she came to stop a roof from falling. "Gareth told you about Lorne?" "Not yet." "Good," Odelyn says. "Then I can do it worse."

Choices:
- Let Odelyn explain the damage -> Ch6 Odelyn Route Lorne Rumor
- Ask if she came because she was worried. -> Ch6 Odelyn Route Worry

### 513. Ch6 Odelyn Route Worry
Tags: `odelyn-route`
Twine position: `31280,560`

Odelyn's mouth opens. No answer comes out at first. "I came because you are standing in the middle of a room you cannot see," she says finally. "If that is worry, fine." It is not a confession. It is not not a confession either. It stands close enough to one that Pela feels the heat of it.

Choices:
- Let Odelyn explain the damage -> Ch6 Odelyn Route Lorne Rumor

### 514. Ch6 Odelyn Route Lorne Rumor
Tags: `odelyn-route`
Twine position: `31480,560`

"Lorne is not just some arrogant transfer student," Odelyn says. "He is House Arcadia's little miracle. Raw power, famous blood, academy gossip already kneeling before he opened his mouth." Pela's stomach tightens. "And you beat him." Odelyn says it without celebration. "That means every person who wanted him to win now needs a reason you should not have."

Choices:
- Let the warning land -> Ch6 Odelyn Route Exposure Warning
- Ask what nobles do first. -> Ch6 Odelyn Route Exposure Warning
- Ask what Odelyn would do first. -> Ch6 Odelyn Route Exposure Warning

### 515. Ch6 Odelyn Route Exposure Warning
Tags: `odelyn-route`
Twine position: `31680,560`

"They will call you lucky first," Odelyn says. "Then unstable. Then dangerous. Then they will ask whether someone dangerous should be allowed to keep studying beside their children." Pela looks toward the hidden drawer where the grimoire waits. Odelyn notices. "Fame is not armor, Pela. It is a lantern. It tells things in the dark where to stand."

Choices:
- Promise not to chase the lantern -> Ch6 Odelyn Route Book Question
- Ask how assassins bypass academy wards (DC Research: 9) -> Ch6 Odelyn Route Ward Bypass
- Tell Odelyn she sounds like she came because she cared (DC Trust: 8) -> Ch6 Odelyn Route Care

### 516. Ch6 Odelyn Route Ward Bypass
Tags: `odelyn-route`
Twine position: `31880,560`

"How would assassins even get past Torrindale security?" "Invitations," Odelyn answers. "Maintenance routes. Old service doors. A student with the right last name. A professor who thinks the academy is too important to be fooled." That is worse than a monster at the gate. Monsters can be barred. People can be welcomed in.

Choices:
- Promise not to chase the lantern -> Ch6 Odelyn Route Book Question

### 517. Ch6 Odelyn Route Care
Tags: `odelyn-route`
Twine position: `32080,560`

"You sound like you came because you cared," Pela says. Odelyn looks away too quickly. "I came because someone should be useful around here." "That is a terrible denial." "Then stop making me deny things while I am trying to save your life."

Choices:
- Promise not to chase the lantern -> Ch6 Odelyn Route Book Question

### 518. Ch6 Odelyn Route Book Question
Tags: `odelyn-route`
Twine position: `32280,560`

Odelyn nods toward the drawer. "Is it still talking?" Pela does not ask what she means. The grimoire is quiet. Quiet, she is learning, does not always mean absent.

Choices:
- Tell Odelyn it is quiet enough. -> Ch6 Odelyn Route Leaves
- Admit it feels like being watched. -> Ch6 Odelyn Route Leaves
- Say the book can teach, not own (DC Self: 1) -> Ch6 Odelyn Route Unclaimed Book
- Lie and call it coursework. -> Ch6 Odelyn Route Leaves

### 519. Ch6 Odelyn Route Unclaimed Book
Tags: `odelyn-route unclaimed`
Twine position: `32480,560`

"It can teach me," Pela says. "It cannot own me." Odelyn studies her face with uncomfortable care. "Good," she says. "Keep saying that until it stops sounding like a hope and starts sounding like a rule."

Choices:
- Hear Odelyn's last warning -> Ch6 Odelyn Route Leaves

### 520. Ch6 Odelyn Route Leaves
Tags: `odelyn-route`
Twine position: `32680,560`

Odelyn moves to leave, then stops at the door. "Do not do something stupid alone." "Is that concern or an order?" "Yes." Then she is gone, and the room is quieter than it was before she entered.

Choices:
- Think through the warning -> Ch6 Odelyn Route Aftermath

### 521. Ch6 Odelyn Route Aftermath
Tags: `odelyn-route`
Twine position: `32880,560`

Pela sits alone with Odelyn's warning and the grimoire's silence. The Nhal might come through a door everyone trusted. The royal houses might decide one duel was enough proof to make her a problem. The academy might protect her, or study her, or lock her away and call it procedure. And the book. She cannot tell them about the book. A demon being taught by a demon sounds like guilt even before anyone adds politics to it. For once, the fear does not scatter. It organizes.

Choices:
- Consider telling a professor -> Ch6 Tell Professor Thought
- Bury the book deeper in secrecy. -> Ch6 Bury Book Thought

### 522. Weekend Day One
Twine position: `25100,1000`

The weekend opens with the book gone from Pela's hands and the lesson still buried under her skin. Two days stand between her and the first Spellblade class. She does not know the skill level of the other students. They could be complete amateurs, or they could be masters. For this reason she has to choose what kind of preparation will keep her from walking into the room already beaten.

Choices:
- Practice her own spear skills -> Weekend Day One Spear Practice
- Visit Odelyn for Spellblade advice -> Weekend Day One Odelyn Advice
- Ask the Forbidden One for a lesson -> Weekend Day One Forbidden Lesson

### 523. Weekend Day One Spear Practice
Twine position: `25300,1140`

Pela had to take her time to master the spear before her first Spellblade class. She had no idea the skill level of the other students. They could be complete amateurs, or they could be masters. For this reason she had to be at her very best.

Choices:
- Practice until the shape answers -> Weekend Spear Practice Hours

### 524. Weekend Day One Odelyn Advice
Twine position: `25300,860`

As the weekend hours go by, Pela wants to gain some insight from Odelyn about Spellblade and what is in store for her. Pela thinks about Odelyn and admits that they seem to have a good relationship with each other, but Odelyn has always been an odd individual to her. She understands Pela because of their shared ostracized life, albeit for different reasons.

Choices:
- Think about what draws them together -> Weekend Odelyn Close Friend

### 525. Weekend Day One Forbidden Lesson
Twine position: `25300,1420`

Pela opens her grimoire once again and sees The Forbidden One. The room goes dark and it greets her again. "Pela, you've come for my guidance once again." It finishes its remark while Pela's thoughts are racing. Pela knows she must be respectful, and must ask the demon the right questions.

Choices:
- Ask for guidance carefully -> Weekend Forbidden Respectful Ask

### 526. Weekend Day Two
Twine position: `25500,1000`

The second day comes with old ache in Pela's fingers. The first Spellblade class is close enough now that even resting feels like a decision. She can spend the remaining hours one more way before the weekend becomes something she has to prove in front of everyone.

Choices:
- Take the spear to the training grounds -> Weekend Day Two Practiced Form
- Visit Gareth for Spellblade advice -> Weekend Day Two Gareth Advice
- Write to her parents -> Weekend Day Two Parents Letter

### 527. Weekend Day Two Practiced Form
Twine position: `25700,1000`

Now that Pela understood what her spear truly was, she was determined to make it last longer than a few minutes. To her, her attempts were a complete failure that still only lasted no more than a few minutes. Pela wanted to make it last even longer, but she couldn't figure out how to make it happen.

Choices:
- Admit what kind of lesson she needs -> Weekend Practiced Form Application

### 528. Weekend Day Two Gareth Advice
Twine position: `25700,1560`

Pela visits Gareth in his dorm room. "Hey, Pela," Gareth greets, his voice cheerful. "What brings you here?"

Choices:
- Ask for advice and take the friendly jab -> Weekend Gareth Friendly Jab

### 529. Weekend Day Two Parents Letter
Twine position: `25700,1280`

Pela thinks about her family and her childhood before she left for Torrindale. She wonders how her mom and dad are doing. She has not had a back and forth conversation with them for quite a long time at this point.

Choices:
- Remember when stories were kind -> Weekend Parents Childhood Stories

### 530. Weekend Spear Practice Hours
Twine position: `25500,1140`

Pela practiced for hours upon hours but could not seem to get it right. She kept trying to manifest her spear, and could not help but remember how Odelyn's looked. It was a dark black color, and she could feel the power it radiated. She imagined it in her mind nearly perfectly... but that is when she finally realized where she went wrong.

Choices:
- Understand the mistake -> Weekend Spear Not Odelyn

### 531. Weekend Spear Not Odelyn
Twine position: `25700,1140`

Pela finally understood. It has to be her own spear. She can't keep modeling herself after Odelyn. She has to be her own person. It can't be Odelyn's spear, but Spark. Pela's spear has to be her own. That's why she was only able to keep it manifested for a few seconds. Because she couldn't imagine her own spear.

Choices:
- Imagine Spark as her own weapon -> Weekend Spear Own Shape

### 532. Weekend Spear Own Shape
Twine position: `25900,1140`

Pela focused and made it happen. Her spear was a bright gold and white color, almost like the color of the sun. It was a long spear with a curved tip and a small hook at the end. Through practice, she was now able to make the spear manifest for minutes at a time. The practice left her with a lot of ache, but now at least she was more confident. Not completely confident, but definitely more comfortable now. Pela went to sleep, looking forward to the next day feeling more prepared for her coming Spellblade class.

Choices:
- Let the second day arrive -> Weekend Day Two

### 533. Weekend Odelyn Close Friend
Twine position: `25500,860`

Still, Pela never saw Odelyn in a negative light because she was cursed, but rather as a peer. That's what, admittedly, drew them to each other. Pela doesn't have many friends, but she would consider Odelyn a close friend. As she thinks this, she goes to find her.

Choices:
- Find Odelyn at the training grounds -> Weekend Odelyn Training Grounds

### 534. Weekend Odelyn Training Grounds
Twine position: `25700,860`

When Pela finds Odelyn, she is practicing in the training grounds with a dummy. "Hello, Odelyn." "Oh... Hello, Pela," Odelyn replies, her voice curious. "What are you doing here?" "I was wondering if you could tell me more about Spellblade, and what I am in for?" Pela requests, her voice hopeful.

Choices:
- Listen to what Odelyn can safely say -> Weekend Odelyn Induction Warning

### 535. Weekend Odelyn Induction Warning
Twine position: `25900,860`

"I don't want to give you too much information as it's frowned upon for inductees. It's supposed to be an experience everyone gets, but I will tell you that the first day will be grueling. You will be inducted with a fight against someone who definitely is more skilled than you at this point," Odelyn explains, her voice sympathetic. "It will be a test of your skill and willpower. Just know... I believe in you." Odelyn finishes with worry in her voice. "Thank you," Pela responds, her voice grateful. "I will do my best."

Choices:
- Ask if anything else can help -> Weekend Odelyn Stance Practice

### 536. Weekend Odelyn Stance Practice
Twine position: `26100,860`

Pela looks to the side before leaving. "Anything else that can help me?" "Work on your stance. This one is a close range fighter. He is an offensive fighter and is likely going to go at you and won't take it easy," Odelyn warns, her voice stern. "I will," Pela promises, her voice determined. With that, Pela practices alongside Odelyn for a few hours before calling it a night. She works on her stance and Odelyn corrects her while also honing her own skills.

Choices:
- Let the second day arrive -> Weekend Day Two

### 537. Weekend Practiced Form Application
Twine position: `25900,1000`

She knew what she had to do. It was the exact same grief all her teachers accosted her for. She had to learn through application of real life situations rather than theory. Pela knew that the only way she could make her spear last longer was to practice instead of being held up in her room.

Choices:
- Head to the training grounds -> Weekend Practiced Form Grounds

### 538. Weekend Practiced Form Grounds
Twine position: `26100,1000`

With her mind set, she headed to the training grounds. There she practiced for a few more hours. Every time the spear flickered, she forced herself to remember that the shape belonged to her. Not Odelyn. Not the Forbidden One. Not the class waiting to measure her. Hers.

Choices:
- Push until the spear stays -> Weekend Practiced Form Earned

### 539. Weekend Practiced Form Earned
Twine position: `26300,1000`

Pela was able to keep her spear manifested for over fifteen minutes. However, that toll completely left her without any mana and her body completely aching. She now needed to rest for tomorrow if she planned to be in tip-top shape for her first day of Spellblade.

Choices:
- Let Spellblade arrive -> Two Days Later

### 540. Weekend Parents Childhood Stories
Twine position: `25900,1280`

She remembers the times that they would read to her, and their favorite stories. Stories when the world seemed so kind and it was at a time where she did not have to worry about the horns on her head, the tone of her skin, or the sharpness of her ears. It was a simpler time, when her parents would put her to sleep.

Choices:
- Let the nostalgia become a letter -> Weekend Parents Begin Letter

### 541. Weekend Parents Begin Letter
Twine position: `26100,1280`

All this nostalgia makes her want to reach out to her parents. She wants to tell them that she is okay, and that she misses them. No matter what happens in the future, she'll get to talk to them now. She gets out paper and a quill and writes a letter to them to clear her mind and heart.

Choices:
- Write what she can bear to say -> Weekend Parents Clear Heart

### 542. Weekend Parents Clear Heart
Twine position: `26300,1280`

Pela writes about the events of the past few weeks and how she has been doing in school. She does not write everything. She does not know how to make the Saint, the book, or the shape of the spear sound like anything that would not hurt them from far away. But she writes enough. By the time the last line dries, the noise in her head has somewhere else to live.

Choices:
- Let Spellblade arrive -> Two Days Later

### 543. Weekend Forbidden Respectful Ask
Twine position: `25500,1420`

Pela starts, "Forbidden One, I need to understand how to use spells and mana more efficiently. You..." She swallows and hates to admit it. "You helped me understand how demons interact with magic better." Pela finishes her sentence with a thought. And you're the only person who will help me, she thought, her mind conflicted.

Choices:
- Hear what it hears in her -> Weekend Forbidden One Of Us

### 544. Weekend Forbidden One Of Us
Twine position: `25700,1420`

"Of course, Pela," The Forbidden One replies, clearly hearing both her voice and her thoughts. His voice then becomes ominous and speaks in a low tone. "You are one of us. You may not know it yet, but you are." Pela snaps, "I don't care about all that! Just teach me already..." "Of course," The Forbidden One replies.

Choices:
- Let the lesson become stranger -> Weekend Forbidden Beyond Fusion

### 545. Weekend Forbidden Beyond Fusion
Twine position: `25900,1420`

"Your professors have already told you about Fusion, but what if I told you that you can fuse more than just spells together?" The Forbidden One asks. "What do you mean?" "Demons can use their emotions to layer their magical abilities as well as spells. You, being a half-demon, can do this as well." "I don't quite understand," Pela admits. "It's simple. You fuse a spell and your emotions. Let me give you an example to make things easier for you to understand."

Choices:
- Listen to the example -> Weekend Forbidden Hatred Spark

### 546. Weekend Forbidden Hatred Spark
Twine position: `26100,1420`

"Let's say you want to cast Spark. When you do so, you can also layer on an emotion to the spell, and it will enhance the spell." The Forbidden One lets the dark sit on the word emotion a little too long. "If you cast Spark and are filled with pure hatred, your Spark can become an explosion of pure electric energy, which will incinerate anything it touches." Pela's eyes are wide and her mouth is open. "Wow," she gasps. That is insane, she thought, her mind amazed. That's insane!

Choices:
- Practice what should probably not be practiced -> Weekend Forbidden Shame Practice

### 547. Weekend Forbidden Shame Practice
Twine position: `26300,1420`

With that, the Forbidden One and Pela take that newfound knowledge and both equally gain from that conversation. They start practicing and honing Pela's abilities. The lesson works. That is the part Pela hates most. The Spark answers faster when she lets something ugly touch it.

Choices:
- Let the second day arrive -> Weekend Day Two

### 548. Weekend Gareth Friendly Jab
Twine position: `25900,1560`

"I know you might not be the best person to ask, but what do you think I should do to prepare for Spellblade tomorrow?" Pela genuinely asks while taking a friendly jab at Gareth for losing so bad to Odelyn. She is laughing on the inside and hopes he will take that in good humor. "I'm not the right person to ask? Ouch," Gareth replies, his voice feigning hurt. "That was just a minor setback," he says in an attempt to recover his pride.

Choices:
- Let Gareth recover his pride -> Weekend Gareth Vayne Warning

### 549. Weekend Gareth Vayne Warning
Twine position: `26100,1560`

"But, you're right. From what I know of Professor Vayne, she likes to push her students quite a bit." Gareth thinks for a moment, as if deciding how comforting honesty is supposed to be. "So if she thinks you're weak, she will place you against a strong opponent. If she thinks you are strong, she will make you face a very difficult opponent. Either way, she will make you fight someone who is a challenge." Pela winces in pain at that realization.

Choices:
- Hear the weird compliment -> Weekend Gareth Challenge Compliment

### 550. Weekend Gareth Challenge Compliment
Twine position: `26300,1560`

"You will have to show her that you are strong, and capable of facing anyone who she throws your way. Think of it as a compliment in a weird way," Gareth says in an attempt to make Pela feel better. "There really isn't anything else you could let me know?" Pela asks, her tone hopeful. "Well..." Gareth scratches his neck.

Choices:
- Listen for the useful part -> Weekend Gareth Impact Advice

### 551. Weekend Gareth Impact Advice
Twine position: `26500,1560`

"I've heard he is from Iluus and uses impact magic, so as long as you were paying attention in Professor Belladonna's class it shouldn't be anything you haven't seen before." Pela visibly winces at that, and Gareth continues. "But, you have never seen impact magic used offensively at this level, so just be careful." "Thanks, Gareth," Pela thanks him, her voice sincere.

Choices:
- Let Spellblade arrive -> Two Days Later

### 558. Battle Impact Parry
Twine position: `27100,620`

Pela thinks back to Professor Belladonna's lesson. Belladonna's lesson taught her how important timing is with an opposing magical force. She waits for the exact instant Lorne's impact magic commits to being real. If she is early, it will break her. If she is late, it will not matter.

Choices:
- Lorne acts -> Battle Lorne Turn

### 559. Battle Steel Oneself
Twine position: `27300,620`

Pela uses this moment to calmly strategize. She forces herself to breathe and maintain her composure while Lorne's impact magic continues its onslaught. Her hands stop shaking just enough for the next spell to have a more clear shape.

Choices:
- Lorne acts -> Battle Lorne Turn

### 569. Tama Focused Dodge
Twine position: `38400,1260`

Pela spends the focus before panic can touch it. Tama's wrist turns. The glass has not moved yet, but its intention has. Pela steps where the spell has not learned to look.

Choices:
- Tama acts -> Tama Battle Turn

### 570. Tama Impact Parry
Twine position: `38400,1400`

Pela does not try to outmuscle the glass. She spends two clean pieces of the lesson on timing and waits for the exact instant Tama's spell stops being possible and becomes real. If she is early, the glass will cut through her. If she is late, it will already be inside the room.

Choices:
- Tama acts -> Tama Battle Turn

### 571. Tama Steel Oneself
Twine position: `38620,1260`

Pela forces herself to breathe. Not because she is calm. Because calm is useful, and useful things do not need to be honest. The glass across the hall becomes shape, angle, timing. Not terror.

Choices:
- Tama acts -> Tama Battle Turn

### 572. Tama Glass Fault Study
Twine position: `38620,1400`

Pela studies the royal glass until it stops looking perfect. There. Not a weakness Tama would admit. A fault. A private place where the spell has to lie to stay beautiful. Pela marks it in her mind, and the next chain in Tama's magic rings a little wrong.

Choices:
- Tama acts -> Tama Battle Turn

### 573. Tama Mirror Ward Counter
Twine position: `38400,1540`

Pela turns the ward like a mirror instead of a shield. The theory feels wrong in her hands. Too delicate. Too smug. Then the glass in front of her catches Tama's crown and reflects its command back with Pela's name written over it.

Choices:
- Tama acts -> Tama Battle Turn

### 574. Tama Nerve Break
Tags: `jerk`
Twine position: `38620,1540`

Pela lets the cruel answer land with aim instead of volume. "You keep making the room kneel because you are afraid it will see you standing by yourself." Tama's face goes perfectly still. That is how Pela knows it hit.

Choices:
- Tama acts -> Tama Battle Turn

### 575. Tama Pride Shatter Spark
Tags: `jerk`
Twine position: `38840,1400`

Pela turns the insult into current. Spark snaps across the exposed pride in Tama's stance, bright and mean, and the glass around her hand forgets how to look expensive. For one second, Tama is not a princess. She is just someone who got hit.

Choices:
- Tama acts -> Tama Battle Turn

### 576. Tama Crownstep Spear Drive
Tags: `jerk`
Twine position: `38840,1540`

Pela steps into the overextended crown before Tama can make it graceful again. The spear drives through the opening with ugly, practical force. Tama catches the shaft late. Too late to pretend she allowed it.

Choices:
- Tama acts -> Tama Battle Turn

### 577. Odelyn Duel Begins
Twine position: `50680,120`

Odelyn Lost Duel Pela $pelaHP / 58 Odelyn $odelynHP / $odelynMaxHP Turn $odelynTurn Focus $odelynFocus "Don't speak. Just create," Odelyn states, her tone leaving no room for argument. Pela takes a deep breath and channels her magic. She forms a blade in her hand. BAM. Odelyn punches Pela so hard that she falls to the ground, her vision blurred and her ears ringing. "What the hell was that for?!" Pela cries out, her face red.

Choices:
- Endure Odelyn's correction -> Odelyn Battle Turn

### 580. Odelyn Battle Turn
Twine position: `51120,120`

$odelynActionName [Odelyn kicks Pela into the air and kicks her back down, causing her to crash into the ground. "That is what it means to fight, and win, without visible anger or rage. To use your head, not your heart. To fight with your wits. To win with your skill, and only while using strength as an enhancer. You can be pissed off," Odelyn steels herself, "but never allow that anger to be visible. Do you understand me? Or are you too much of a monster to get that through your thick skull? Just because you are a demon, does not mean you need to act like one. Especially not in front of others. Do you want to bring more attention to yourself? Do you want the whole school to know what you are and start hunting you? That is the quickest way to get yourself killed!" Odelyn creates her spear. Pela stares at her for a long moment. Then she nods, her expression resolute. "I understand."] ["Good. Now, get up," Odelyn orders. "Defend yourself. I will not pull my punches anymore." Pela slowly stands, her body shaking. "I will show you. I will not give in. I will not become a slave to my anger," Pela growls, her eyes glowing red. Odelyn charges at her, her spear poised. Pela parries the first attack, weapon against weapon, and the sound disappears into The Lost like the realm is listening too closely.] [Odelyn attacks again, her movements fast and precise. Pela dodges the strikes and counters with her own. Odelyn moves away from the strike, grabs the spear, and throws Pela to the ground. Pela rolls out of the way, jumps back onto her feet, and charges at Odelyn because staying down feels too much like agreeing.] [Odelyn meets the charge, her spear ready. Pela deflects the blow and attempts to disarm her. Odelyn uses a magic clash mid-strike. The two weapons explode and send both fighters flying back. Pela hits the ground first, her body smashing against the hard floor. Odelyn lands next, rolling to a stop. Both of them are covered in dust and blood, but they are still standing.] [Odelyn creates her spear again. The fear in Pela's eyes is visible, clear as day. 'This is the test that either proves that Pela can defend herself, or one that shows how unfit she actually is to be at this academy with these people.' Odelyn charges forward, her spear aiming for the heart. Pela creates a sword and blocks the strike. Odelyn pushes harder, magic flowing through the spear, her body, and the very air. Speed of Shadow. Odelyn's movements increase tenfold. Her body becomes a blur. She attacks with a flurry of strikes, her speed increasing with every strike.] [Pela does her best to defend herself, but she is outmatched. Odelyn is a master at the spear, and Pela is a novice in Spellblade compared to her. She keeps getting slashed by Odelyn's spear. [Become Lightning answers from inside Pela's body instead of from theory. A flash of lightning fills the air, and Pela reappears behind Odelyn, sword ready. Odelyn barely has time to react. Speed of Shadow - Stack. Odelyn moves even faster than before, stacking her shadow spell on top of itself until her body matches Pela's newfound speed.] [The current is there. Pela can feel it, but not hold it. The lightning keeps arriving as pain instead of movement.]] [Pela and Odelyn trade blows, their weapons colliding in a blinding flash of sparks and visible darkness. "You will not defeat me. I will not allow it," Pela vows, her voice echoing. "It's not about victory. It's about survival," Odelyn replies, her voice cold. Odelyn finds an opening and kicks Pela in the chest, sending her flying back.] [Pela lands on the floor, her body aching. She tries to get up, but she cannot. She is too weak. "Why?" Pela whispers, her voice cracking. "If you keep acting this way, and fighting this pathetically, I'll lose my friend!" Odelyn finally screams. "I will not allow that! You need to learn. You need to grow. You can't keep letting your emotions get the best of you!" Pela protests, her voice nonexistent. Tears stream down her face, and she lets them fall. Odelyn is also crying, her voice choked up. "I can't lose another friend. I just can't. You need to become stronger, not weaker. Right now... that book is corrupting you, and if you don't control it, it will destroy you."] [Pela's heart feels heavy. She knows Odelyn is right to an extent. But she cannot just give up on becoming a great mage. She has to become stronger, or the Nhal will hunt her down. And if she is not careful, the Ashcrofts will have her executed. The thought crosses her mind, and she realizes that was the book speaking.] [The Lost does not hurry them. Odelyn's spear remains ready, but her eyes are on Pela's face now, searching for the girl under the power and the friend under the curse.] [Pela's parry catches part of the answer. It is not pretty, but it keeps her standing.] [Pela keeps her guard up even while fear moves through her hands.] [The rhythm Pela read earlier gives her one narrow place to survive.] [Pela moves with lightning instead of away from pain. Odelyn's spear cuts where she used to be.] [Odelyn reads the closed guard like an insult. "No," she snaps, the spear turning around Pela's defense. "Do not hide from the lesson. Answer it." The blow lands because Pela tried to survive instead of understand.] [Pela takes no damage.] [Pain catches her, but it does not command her.] [The hit lands hard enough to shake her teeth.] [The blow drives Pela across The Lost, and the shadow under her catches no mercy.]

Choices:
- Pela falls inside The Lost -> Odelyn Lost Game Over
- Keep fighting -> Odelyn Battle Menu

### 581. Odelyn Battle Won
Twine position: `51340,120`

'It's not too late. You can still change, Pela. You can still be more than a demon,' the Forbidden One says, its voice soft. "You're not a monster, Pela. I can tell that much. You just need to find the courage, the will, to push past your emotions and become a great mage. Prove to everyone that you are worthy of being a mage of the academy, because I've seen that spark of a great mage personally," Odelyn declares. "Using your emotions to spell cast does not mean letting them wear you like a coat. It means that you can harness the power of your emotions and make it your own. You are a Brittanican mage, Pela. You are strong. Act like it." Pela stays silent. She takes a long moment to internalize what Odelyn said. Spark of a Great Mage. Pela disappears, her form an electric blur, and reappears next to Odelyn, her sword pointing directly at her chest. "I understand," Pela whispers, her voice close to trembling, but staying as calm as she can be. "I'm sorry." Odelyn's eyes widen. "That was the spark of a great mage, Pela."

Choices:
- Lower the sword first -> Ch7 A New Path 47

### 582. Odelyn Lost Game Over
Twine position: `51120,300`

Odelyn's spear reaches Pela before Pela can make herself answer. The Lost does not cheer. It does not judge. It only holds the lesson in place while Pela drops to one knee, shaking, alive, and not strong enough to call that mercy anything but humiliation. Odelyn could end it cleanly. She does not. The spear stops a breath from Pela's throat. Then Odelyn moves wrong on purpose, just enough for Pela's last broken Spark to catch the edge of her guard. The sound looks convincing. The angle does not. Anyone watching from far away would think Pela found her opening. Pela is close enough to know better. Odelyn lets herself fall back one step, eyes hard, face unreadable. "There," she says, as if Pela earned it. "That is enough." Pela stands because Odelyn gives her the room to stand. The shame arrives after the pain, slower and worse. She understands the kindness. She hates that she needs it.

Choices:
- Lower the sword because Odelyn lets her -> Ch7 A New Path 47

### 583. Odelyn Force Weapon
Twine position: `50900,520`

Pela forces the weapon shape into her hand. It answers with heat and jagged edges. Odelyn sees the anger in it before Pela does, and that makes the next lesson arrive faster.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 584. Odelyn Form Blade Without Rage
Twine position: `51120,520`

Pela forms the blade around breath instead of anger. The shape is thinner than usual, less eager, but steadier. Odelyn notices the improvement and refuses to spare her for it.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 585. Odelyn Low Sweep
Twine position: `51340,520`

Pela goes low because glory keeps getting her hurt. The sweep does not beat Odelyn. It interrupts the clean line of her stance, and for one breath, that is enough to matter.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 586. Odelyn Become Lightning
Twine position: `51560,520`

Become Lightning. The words do not feel like a spell name. They feel like a door opening inside Pela before fear can lock it. Pela vanishes from view, and a flash of lightning fills the air. She reappears behind Odelyn, sword ready.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 587. Odelyn Lightning Step
Twine position: `51780,520`

Pela lets Spark take her body for one controlled instant. Not panic. Not escape. Movement with a purpose sharp enough to leave light behind.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 588. Odelyn Parry By Instinct
Twine position: `50900,700`

Pela moves because hesitation will hurt more than ignorance. Her parry is ugly, loud, and barely in time. Odelyn accepts it only as a beginning.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 589. Odelyn Guard Without Flinching
Twine position: `51120,700`

Pela raises her guard and keeps it there. Fear moves through her hands, but it does not command them. Odelyn's spear comes on anyway, fast enough to make discipline feel like a thin shield.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 590. Odelyn Lightning Guard
Twine position: `51340,700`

Pela does not try to block speed with stubbornness. She lets Become Lightning answer the shadow by being gone before the spear finishes choosing her.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 591. Odelyn Steel Oneself
Twine position: `50900,880`

Pela forces herself to breathe. The Lost makes every fear feel ancient, but breath is still breath. Her hands stop shaking just enough for the next answer to have a shape.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 592. Odelyn Read Spear Rhythm
Twine position: `51120,880`

Odelyn's spear has rhythm: feint, pressure, punish, retreat. Pela catches the pattern just before the first strike lands. Understanding it does not make blocking easy. It makes blocking possible.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 593. Odelyn Listen Fear
Twine position: `51340,880`

Pela stops hearing only the anger. Under it is terror. Not the terror of losing a duel, but the terror of watching someone she cares about walk willingly toward a curse and call it destiny.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 594. Odelyn Separate Book Thought
Twine position: `51560,880`

Pela catches the thought as it forms: I need power or they will kill me. Then she hears the book inside the need, polishing fear until it looks like destiny. The realization hurts, but it gives her something to hold that is not the grimoire.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 595. Odelyn Clean Spark Burst
Twine position: `50900,1060`

Pela compresses Spark until it stops looking like anger and starts looking like aim. The burst cracks against Odelyn's spear. Shadow hisses around the light, but for once the light does not scatter.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 596. Odelyn Magic Clash
Twine position: `51120,1060`

Pela meets Odelyn weapon to weapon and lets magic answer magic. For one terrible heartbeat, the Lost becomes white current and visible darkness. Odelyn takes the worse of it. Pela still feels the backlash chew through her bones.

Choices:
- Odelyn answers -> Odelyn Battle Turn

### 599. Ch8 Dream Threshold
Twine position: `53500,1400`

Pela stood outside the entrance to Ashcroft Manor, her hands trembling. The fog was thick enough to make the road feel unfinished. The manor looked haunted in a way that had nothing to do with old boards or broken windows. It looked like a place that had learned how to wait. The scent of roses filled the air. "Why am I so scared?" Pela whispered.

Choices:
- Wait for the voice that already knows her -> Ch8 Dream Voice
- Name the fear instead of swallowing it. -> Ch8 Dream Voice
- Study the fog around the manor. -> Ch8 Dream Voice

### 600. Ch8 Dream Voice
Twine position: `53720,1400`

"Because you are facing a force of nature," a man's voice replied. "Something that cannot be understood or explained. It is something that can only be experienced, and the experience is terrifying." Pela turned, heart pounding. "Who are you?" "I am man," the man answered, his voice full of too much emotion.

Choices:
- Demand the real answer -> Ch8 Dream Mask
- Listen for what the voice refuses to say. -> Ch8 Dream Mask
- Let the Feast enjoy the rose-scented fear (DC Oath: 15) -> Ch8 Dream Mask

### 601. Ch8 Dream Mask
Twine position: `53940,1400`

"The idea of humanity. I am its mask. Its facade. Its lie," the man said. "The truth is hidden behind a beautiful lie. The truth is that we are monsters. That we are cursed." Pela hated how easily the word monster found her. "That is why I cannot help you," he continued. "Or really why I must not help you."

Choices:
- Ask why help becomes doom -> Ch8 Dream Darkness
- Reject the word monster before it settles. -> Ch8 Reject Monster Answer
- Let the word hurt and remember where it lands. -> Ch8 Monster Word Wound

### 602. Ch8 Dream Darkness
Twine position: `54160,1400`

"Because if I do, it will only lead to your doom. You cannot be saved, but you can be redeemed. Half-demon and half-man, that is the curse of you." "What do you mean?" "You are not meant to walk the path of light, but you can redeem yourself by walking the path of darkness. The darkness of humanity."

Choices:
- Ask what humanity has done to the dark -> Ch8 Rose Destiny
- Pick apart the contradiction. -> Ch8 Contradiction Thread
- Say she is not a curse to be redeemed (DC Self: 3) -> Ch8 Unclaimed Not A Curse
- Let the roses smell her hunger back (DC Oath: 8) -> Ch8 Eldritch Rose Hunger

### 603. Ch8 Rose Destiny
Twine position: `54380,1400`

"Smell the scent of the roses that will soon bloom," the being said. "They will bring you closer to your destiny, and to the darkness. It is the only way." The roses smelled beautiful. That made Pela trust them less. "You are a demon. A monster. And you must learn to embrace that, and use it, or everything you hold dear will suffer."

Choices:
- Wake before the roses open -> Ch8 Wake Late
- Remember the scent as a warning. -> Ch8 Remember Rose Warning
- Wake angry enough to move. -> Ch8 Wake Angry Move

### 604. Ch8 Wake Late
Twine position: `54600,1400`

Pela woke in a cold sweat. "What the hell was that?" Then the room became real. The desk. The bed. The papers. The hour. Dean Sainstroy was expecting her. "Damnit, I'm going to be late!"

Choices:
- Dress in a flash and run. -> Ch8 Late Hall Run
- Write one word from the dream before leaving. -> Ch8 Dream Word Note

### 605. Ch8 Dean Office
Twine position: `54820,1400`

"Ah, there you are," Dean Sainstroy smiled. "Please, have a seat. I've been expecting you." "Sorry I'm late. I overslept," Pela apologized. "It's quite alright. Now, take a seat." Pela sat down, her expression anxious.

Choices:
- Wait for the reason she was summoned -> Ch8 Written Score
- Watch the Dean's eyes instead of his smile. -> Ch8 Watch Sainstroy Eyes

### 606. Ch8 Written Score
Twine position: `55040,1400`

"I'm sure you're wondering why I summoned you here," Dean Sainstroy said. "First, congratulations. The results of your final exam have come in, and you earned the highest score possible on the written section." "Thank you," Pela replied. "No, no. Thank you."

Choices:
- Accept the praise carefully. -> Ch8 Accept Praise Carefully
- Wait for the praise to become a blade. -> Ch8 Praise Blade Waiting

### 607. Ch8 Grades Slip
Twine position: `55260,1400`

"However, while your scores are exemplary, I cannot help but notice the other grades. Your grades have been slipping lately. Is it because of Professor Ardenfelt? Is he pushing you too hard?" "No," Pela said too quickly. "Professor Ardenfelt has been great. He's helped me a lot." It was true. That did not make it comforting.

Choices:
- Insist the problem is hers -> Ch8 Mage Card Law
- Admit Ardenfelt is difficult, not wrong. -> Ch8 Ardenfelt Difficult Not Wrong

### 608. Ch8 Mage Card Law
Twine position: `55480,1400`

"Now it's time to get serious," Dean Sainstroy said. "You know what happens during the second semester of Specialization classes, don't you?" Pela did not. "The Brittanican Mage-Card exam is a test you must pass in order to remain a student of the Academy. It tests your overall abilities. Channeling. Control. Mastery. Combat."

Choices:
- Ask if it is more than a written test -> Ch8 Execution Memory
- Mentally list what she can already do. -> Ch8 List What She Can Do

### 609. Ch8 Execution Memory
Twine position: `55700,1400`

"This is where Brittanica decides which students are worthy of a Mage-Card," Sainstroy continued. "Students who fail are executed, their memories wiped, and their bodies discarded. They are considered dead and cannot be resurrected." Pela's mouth went dry. The exam was not school. It was law with a blade under it.

Choices:
- Promise she will not fail. -> Ch8 Promise Not To Fail
- Ask when they leave. -> Ch8 Ask When They Leave
- Think of her parents and say nothing. -> Ch8 Parents Silence

### 610. Ch8 Prepare Tomorrow
Twine position: `55920,1400`

"Failure is not an option," Dean Sainstroy declared. "Your whole class will be there. You, Odelyn, Lorne, Gareth, and every other student from your class. You must prove yourself, or die trying." "I understand." "Do you? If you fail, you will be forgotten. No second chances. Prepare." "When do we go?" "Tomorrow. Be ready."

Choices:
- Meet the cart at dawn -> Ch8 Cart Dawn
- Carry the word forgotten with her. -> Ch8 Carry Forgotten
- Decide she will pass as herself, not as anyone's weapon (DC Self: 4) -> Ch8 Unclaimed Exam Self

### 611. Ch8 Cart Dawn
Twine position: `56140,1400`

The next day, Pela, Lorne, Odelyn, and Gareth arrived at the cart that would take them toward the arena. The morning looked too ordinary for something that could decide whether they were allowed to keep existing.

Choices:
- Hear Ardenfelt call out -> Ch8 Cart Ardenfelt
- Stand closer to Odelyn without saying why. -> Ch8 Stand Near Odelyn

### 612. Ch8 Cart Ardenfelt
Twine position: `56360,1400`

"So, you've made it," Professor Ardenfelt called. "But where are the other two?" "I apologize, Professor," Gareth said. "We have no idea who the other two are." "No matter. Maybe they heard the Dean's speech and no longer have the nerve. Either way, get in the cart or suffer the humiliation of excommunication."

Choices:
- Ask what excommunication means -> Ch8 Excommunication Explained
- Get in before Ardenfelt finds a lesson in hesitation. -> Ch8 Avoid Ardenfelt Lesson

### 613. Ch8 Excommunication Explained
Twine position: `56580,1400`

"What happens when you are excommunicated from a magical university?" Pela asked. Ardenfelt looked at her as if she had asked what happens when rain gets wet. Lorne answered instead, voice somber. "Complete excommunication means the loss of your magic, by any means necessary. Partial excommunication means transfer to another university or place. If you fail there, public execution."

Choices:
- Ask about the Millennium Mage -> Ch8 Lorne Transfer Silence
- Notice how Lorne says transfer. -> Ch8 Notice Lorne Transfer

### 614. Ch8 Lorne Transfer Silence
Twine position: `56800,1400`

"I have never even heard of the Millennium Mage--" "Someone like you has no reason to know who they are," Lorne snapped. "Consider it a privilege. End of story." The cart went quiet. Pela remembered hearing Lorne was a transfer student from Iluus. Maybe he had not been a willing transfer.

Choices:
- Let the wound stay unnamed. -> Ch8 Wound Unnamed
- File the detail away. -> Ch8 File Lorne Detail

### 615. Ch8 Road Stop
Twine position: `57020,1400`

Between tense silence and contemplation, Ardenfelt ordered the cart to stop. It stopped dead in its tracks. The professor stepped out and looked toward the road ahead as if he had been expecting it to disappoint him.

Choices:
- Hear the order to reach Brittanica City -> Ch8 Ardenfelt Silences Odelyn
- Watch the trees instead of Ardenfelt. -> Ch8 Watch The Trees

### 616. Ch8 Ardenfelt Silences Odelyn
Twine position: `57240,1400`

"Get to Brittanica City," Ardenfelt ordered. "You four will take the Mage-Card exam and pass. There is no or else." Odelyn tried to speak. Bubble of Silence. Her mouth moved around words that could not leave.

Choices:
- Watch Ardenfelt stay behind -> Ch8 Ardenfelt Road Alone
- Memorize the silence spell. -> Ch8 Memorize Bubble Silence

### 617. Ch8 Ardenfelt Road Alone
Twine position: `57460,1400`

The cart rolled away. The only thing standing between his students and certain death was Ardenfelt. Pela looked back once. He did not.

Choices:
- Leave the road in Ardenfelt's hands -> Ardenfelt POV Roadblock

### 618. Ardenfelt POV Roadblock
Tags: `ardenfelt`
Twine position: `57680,1860`

Ardenfelt POV Professor Ardenfelt turned his attention to the members of the Nhal. He raised his cane and pointed it directly at them. "You two really thought you stood a chance at intercepting that cart and winning? Do you realize how insulting it is to think Athean mages stand a chance against Brittanican mages?"

Choices:
- Look at the staff first -> Ardenfelt Staff First
- Insult them properly -> Ardenfelt Insult Properly

### 619. Ardenfelt POV Staff Adam
Tags: `ardenfelt`
Twine position: `57900,1760`

One cultist stepped forward in black and red robes. The staff in his hand was not ordinary. Ardenfelt knew it well. The Staff of Adam. Red ruby at the top. Dark grey metal at the bottom. A soul poured into wood and stone by one of Athea's first disciples. Unassuming. That was why it was dangerous.

Choices:
- Let Lucian introduce himself -> Ardenfelt POV Threats
- Name the relic's danger in silence. -> Ardenfelt Name Staff Danger

### 620. Ardenfelt POV Threats
Tags: `ardenfelt`
Twine position: `58120,1860`

"Truly, Ardenfelt," the cultist said, voice almost artificial, "it is not normal Brittanican procedure for professors to attend the trip to Brittanica City with their pupils. Unexpected." "If you insist on staying, then you will die first." Ardenfelt chuckled. The sound moved through the trees. "This will not be a battle," he said. "This will be a slaughter. One I will greatly enjoy."

Choices:
- Hear the title Lucian brought with him -> Ardenfelt POV Patrician Title

### 621. Ardenfelt POV Patrician Title
Tags: `ardenfelt`
Twine position: `58340,1860`

"Know me as Lucian. Lucian the Bright Star." "That is quite a title for a man who is about to die," Ardenfelt replied. The second cultist laughed. "Imagine the infamy we will gain for slaying the Patrician of Agony." Ardenfelt's eyes narrowed. "If you truly think you can slay me, allow me to show you what a true master of magic can do."

Choices:
- Begin the Patrician's lesson -> Ardenfelt Battle Begins

### 622. Ardenfelt Battle Begins
Tags: `ardenfelt`
Twine position: `58560,1860`

Custom Loadout: Patrician of Agony Ardenfelt does not fight like a student. He fights with lesson plans, contempt, and exact cruelty. Judgment. Control. Read / Counter. Execution.

Choices:
- Open the fight without mercy -> Ardenfelt Battle Menu

### 624. Ardenfelt Battle Turn
Tags: `ardenfelt`
Twine position: `59000,1860`

) $ardenActionName [Ardenfelt took a single step forward, and the world seemed to slow for the courtesy of understanding him.] [Thanian looked toward the sky too late. A massive beam of green energy tore through the air, destroying the quiet shape of the world around them.] [Lucian raised his staff. "Power of Th-" The words did not leave his mouth if Ardenfelt had anything to say about it.] [Thanian's body shook. A shadow rose from it and moved with disgusting speed into what remained of Lucian. "We are just another Devout Being of Athea," it said.] [Darkness consumed Ardenfelt. Then the world lit up again, and every nearby shadow ceased to exist.] [A beam of pure blackness struck the ground near Ardenfelt. The shockwave pulled at the trees and dragged the road out of its own certainty.] [Greater Decay reached in two directions. One hand found the cane. The Emperor's gift crumbled to dust.] [Death's Hand burst into ghostly black miasma. It ate at the air and tried to make Ardenfelt's body into proof.] [The smoke cleared. There was no blood. No body. No trace. Then Ardenfelt's hand closed on Lucian's shoulder from behind.] [The remaining phantom finally understood fear. Ardenfelt considered that educational.] [Bubble of Silence makes Lucian's arrogance useless before it can become grammar.] [Ardenfelt lets the force choose a direction, then punishes it for being predictable.] [The ward takes the curse like a servant taking a coat.] [Ardenfelt permits the spell to touch him because knowledge is sometimes worth insulting his clothes.] [The hit lands. Ardenfelt looks more offended than injured.] [Ardenfelt takes no meaningful damage.]

Choices:
- End the lesson -> Ardenfelt Battle Victory
- Choose the next correction -> Ardenfelt Battle Menu

### 625. Ardenfelt Heaven Beam
Tags: `ardenfelt`
Twine position: `58780,2100`

The sky answers Ardenfelt like it has been waiting for permission. Green light splits the air. It does not strike so much as erase the possibility that Thanian had a future.

Choices:
- Let Lucian answer the impossible -> Ardenfelt Battle Turn

### 626. Ardenfelt Patrician Step
Tags: `ardenfelt`
Twine position: `59000,2100`

Ardenfelt steps through the distance as if the road is a servant slow to move. The blow is not dramatic. It is placed exactly where Lucian was most proud of standing.

Choices:
- Observe the correction's result -> Ardenfelt Battle Turn

### 627. Ardenfelt Mental Oblivion
Tags: `ardenfelt`
Twine position: `59220,2100`

Mental Oblivion Scale. The spell does not attack the body first. That would be crude. Lucian falls clutching his head. A rainbow-colored liquid seeps from his ears, and Ardenfelt finds the result disappointing.

Choices:
- See what survives the body -> Ardenfelt Battle Turn

### 628. Ardenfelt Bubble Silence
Tags: `ardenfelt`
Twine position: `58780,2260`

Bubble of Silence. Ardenfelt removes the cultist's voice with the same effort someone else might spend closing a door.

Choices:
- Let the failed spell explain itself -> Ardenfelt Battle Turn

### 629. Ardenfelt Negative Vector
Tags: `ardenfelt`
Twine position: `59000,2260`

Ardenfelt does not dodge. He corrects the direction in which danger believes it is moving.

Choices:
- Watch the spell trip over its own force -> Ardenfelt Battle Turn

### 630. Ardenfelt Agony Ward
Tags: `ardenfelt`
Twine position: `59220,2260`

A ward unfolds around Ardenfelt, purple-black and patient. It does not promise safety. It promises that whatever touches him will regret the intimacy.

Choices:
- Let the curse meet the ward -> Ardenfelt Battle Turn

### 631. Ardenfelt Read Staff
Tags: `ardenfelt`
Twine position: `58780,2420`

Ardenfelt studies the Staff of Adam without looking impressed. Soul-weight. Ruby channel. Athean residue. Ritual dependency. Dangerous in the hands of someone better.

Choices:
- Allow Lucian to keep overestimating it -> Ardenfelt Battle Turn

### 632. Ardenfelt Study Crown
Tags: `ardenfelt`
Twine position: `59000,2420`

The floating crown is not decoration. It is anchor, mouth, and cowardice pretending to be divinity. Ardenfelt smiles because the solution has become physical.

Choices:
- Let the crown believe itself hidden -> Ardenfelt Battle Turn

### 633. Ardenfelt Let Deaths Hand Land
Tags: `ardenfelt`
Twine position: `59220,2420`

Ardenfelt lets Death's Hand land. Not because he cannot avoid it. Because his students may need to survive it later, and the first rule of teaching is to understand the thing that wants them dead.

Choices:
- Measure the curse from inside it -> Ardenfelt Battle Turn

### 634. Ardenfelt Sever Legs
Tags: `ardenfelt`
Twine position: `58780,2580`

Ardenfelt points. Lucian's legs come clean off. Then Thanian's do the same, because incomplete lessons encourage bad habits.

Choices:
- Decide whether the crown has learned enough -> Ardenfelt Battle Menu

### 636. Ardenfelt Battle Victory
Tags: `ardenfelt`
Twine position: `59440,1860`

Ardenfelt grabbed the floating crown and crushed it with his bare hand. The crown disintegrated. Shadowy black smoke escaped from the remains. "My reputation is much better earned than yours, Lucian. That spell did not affect me in the slightest. The only reason I let it hit me is because I wanted to see how effective it was." He looked down at the phantom left behind. "Not very."

Choices:
- Leave the Devout thing alive for a later lesson -> Ardenfelt Leaves Road

### 637. Ardenfelt Leaves Road
Tags: `ardenfelt`
Twine position: `59660,1860`

"The only thing keeping it eternal was your crown," Ardenfelt said. "You are very killable now. Remember that. If you do, you may just survive your next encounter." "You'll pay for this. You will suffer." "I will not." The Patrician of Agony disappeared from view, leaving two dead cultists and one ghostly phantom in desperate need of recovery.

Choices:
- Return to the students at Brittanica City -> Ch9 Gate of Brittanica

### 638. Ch9 Gate of Brittanica
Twine position: `60000,1400`

Chapter 9: The Mage-Card Exam Pela, Odelyn, Gareth, and Lorne stood at the massive gates of Brittanica City. The silver gates were adorned with intricate designs and the symbol of the Empire. The city rose beyond them with walls, murals, arches, vines, and flowers. The Seat of Magical Power was not an exaggeration.

Choices:
- Let the city make her feel small -> Ch9 City Awe
- Name the wardwork in the gate. -> Ch9 City Awe

### 639. Ch9 City Awe
Twine position: `60220,1400`

"So, this is the Capital of the Empire," Pela mused. "It's so beautiful." "Yes," Gareth agreed, solemn in a way that did not sound like a joke. "Yes it is." Lorne looked at the city like it already owed him a statue. "And to think, we will become part of its legacy."

Choices:
- Share the awe with Gareth. -> Ch9 Gareth Shared Awe
- Keep watching the city instead of Lorne. -> Ch9 Watch City Instead

### 640. Ch9 Lorne Legacy
Twine position: `60440,1400`

"We will be the next generation of great mages," Odelyn declared. "I meant me and Odelyn," Lorne corrected. "You both have no talent. Gareth, you're barely a mage, and you, Pela, you're just a monster." The word hit differently in front of the capital. Like the city itself had been asked to agree.

Choices:
- Watch Odelyn answer first -> Ch9 Odelyn Slap
- Tell Lorne he is brave for someone who loses loudly (DC Nerve: 16, Spend: 2 Nerve) -> Ch9 Jerk Loses Loudly
- Let the insult pass because the exam is bigger. -> Ch9 Let Monster Pass

### 641. Ch9 Odelyn Slap
Twine position: `60660,1400`

Odelyn slapped Lorne across the face. "What the hell is wrong with you?! We're supposed to be teammates! Pela is our friend. She is a fellow Brittanican. You have no right to say such awful things." "I have every right," Lorne replied. "You forget your place, oh Cursed One."

Choices:
- Hear Odelyn use her title like a weapon -> Ch9 Odelyn Royal Threat
- See that Odelyn is defending more than pride. -> Ch9 Odelyn Defends More

### 642. Ch9 Odelyn Royal Threat
Twine position: `60880,1400`

"Another word about my friends, Lorne, and I'll beat you much worse than Pela did at Torrindale. I don't care if you are a prince. I am the one and only Cursed Heiress of House Olethen." Odelyn's eyes burned with shadow. Pela noticed how each emphasized title pulled a small reaction from Lorne. The threat was real.

Choices:
- Follow Lorne toward the gate -> Ch9 Gate Guard
- Look at Odelyn like the defense mattered (DC Trust: 8) -> Ch9 Romance Odelyn Defense

### 643. Ch9 Gate Guard
Twine position: `61100,1400`

The gate opened, and a large crowd waited outside. "Welcome to Brittanica City," a guard said. "Judging by your attire, you are students from Torrindale. Here for the Mage-Card exam, I presume?" "Yes," Pela nodded. "Excellent. The second stage of the Mage-Card exam is taking place within the Salt Colosseum. Tomorrow at dawn."

Choices:
- Notice the phrase second stage -> Ch9 Second Stage
- Thank the guard properly. -> Ch9 Thank Gate Guard

### 644. Ch9 Second Stage
Twine position: `61320,1400`

"Wait," Pela said. "The second stage? What do you think the first stage was?" "Who knows," Gareth shrugged. "Maybe the written test," Odelyn guessed. "Who cares," Lorne said, and walked forward. The barrier bounced him backward into the ground.

Choices:
- Let Lorne discover the first stage personally -> Ch9 Lorne Hits Barrier

### 645. Ch9 Lorne Hits Barrier
Twine position: `61540,1400`

"Hey, watch it!" Lorne yelled, looking around for someone to blame. Pela laughed before she could stop herself. "Pela, did you just push me?" "No, Lorne. Simply, you can't see what I see."

Choices:
- Explain the barrier he cannot see -> Ch9 Pela Sees Barrier
- Enjoy the expression on his face. -> Ch9 Enjoy Lorne Barrier

### 646. Ch9 Pela Sees Barrier
Twine position: `61760,1400`

Magical energy surrounded Brittanica City like transparent cloth. "Your talent for seeing magic is non-existent," Pela said. "I can see it just fine," Lorne lied. "Then I recommend giving up while you can still retain some dignity."

Choices:
- Dare Lorne to try again -> Ch9 Mock Lorne
- Map the barrier's Impact Shield structure (DC Spark + Research: 30) -> Ch9 Barrier Structure Map

### 647. Ch9 Mock Lorne
Twine position: `61980,1400`

Lorne pushed against the barrier and was thrown back. "Ow." "I guess you were right," Pela laughed. "It is not too hard to pass through." Odelyn tried next. The barrier repelled her backward, and she crashed into Lorne.

Choices:
- Ask if Odelyn is okay -> Ch9 Odelyn Mana Decay
- Study the barrier's response to shadow magic. -> Ch9 Study Shadow Barrier

### 648. Ch9 Odelyn Mana Decay
Twine position: `62200,1400`

"I'm fine," Odelyn said. Then she walked toward the barrier again. Mana Decay. The mana from the barrier absorbed into Odelyn's hand, and the barrier shattered long enough for her to pass. "There we go."

Choices:
- Listen to Gareth reason through the exam -> Ch9 Gareth Barrier Theory
- Admire Odelyn without making it obvious. -> Ch9 Admire Odelyn Quietly

### 649. Ch9 Gareth Barrier Theory
Twine position: `62420,1400`

"We are Brittanican mages," Gareth said. "We can handle this." He believed they needed to apply Ardenfelt's fundamental classes and channel the proper amount of mana. Pela pressed her hand against the barrier. "Lorne, I can't believe you didn't learn from when we fought. This is just another Impact Shield."

Choices:
- Watch Lorne try to break it anyway -> Ch9 Lorne Overwhelming Impact
- Tell Gareth his answer was almost elegant. -> Ch9 Gareth Almost Elegant

### 650. Ch9 Lorne Overwhelming Impact
Twine position: `62640,1400`

"Then I'll just break it," Lorne smirked. Greater Dark Impact: Overwhelming Destruction. The barrier shattered, then reformed instantly. "Damnit, this barrier is annoying." "It's a barrier," Gareth said. "Of course it's going to be annoying."

Choices:
- Hear someone tell them to move -> Ch9 Raithgar Demands Way

### 651. Ch9 Raithgar Demands Way
Twine position: `62860,1400`

"Out of my way," a voice said behind them. The knight was clad in silver and gold armor, tall enough to make the air around him feel crowded. "Who the hell do you think you are?" Lorne demanded. The knight picked Lorne up by the neck and pressed him against the barrier.

Choices:
- Watch the prince introduce violence first -> Ch9 Raithgar Grabs Lorne
- Step back before pride becomes collateral. -> Ch9 Step Back Royal Pride

### 652. Ch9 Raithgar Grabs Lorne
Twine position: `63080,1400`

"I'm a royal of Brittanica that at least lives up to my family name. I am--" "That's enough," a voice said from farther behind. "Kyrehae," the knight said. "This is none of your business." "Let the boy down."

Choices:
- Watch Kyrehae stop Raithgar without pleading -> Ch9 Kyrehae Intervenes
- Remember both royal names. -> Ch9 Remember Royal Names

### 653. Ch9 Kyrehae Intervenes
Twine position: `63300,1400`

"You are talking about a Brittanican prince," Kyrehae warned. "And a noble of the Ashcroft Family." "That means nothing," the knight replied. Blood began to pour from Lorne's mouth. "Enough. Put him down now. You are causing a scene, and I will not allow that."

Choices:
- See whether Lorne is dead -> Ch9 Lorne Wakes

### 654. Ch9 Lorne Wakes
Twine position: `63520,1400`

Raithgar dropped Lorne. "Is he dead?" Gareth asked. "Not dead," the knight answered. Kyrehae knelt beside Lorne and slapped him hard enough to draw more blood and wake him. Lorne coughed weakly.

Choices:
- Thank Kyrehae despite the cruelty -> Ch9 Kyrehae Dismisses
- Study the slap as healing and insult together. -> Ch9 Study Kyrehae Slap

### 655. Ch9 Kyrehae Dismisses
Twine position: `63740,1400`

"Thank you," Pela said. "You wouldn't need to thank me if you and your friends were stronger," Kyrehae replied, then teleported past the gate beside Raithgar. "Damnit," Pela swore. "Who the hell were they?" Odelyn asked.

Choices:
- Let Lorne name the Academy of Cinn -> Ch9 Academy Cinn Names
- Keep the insult instead of the fear. -> Ch9 Keep Kyrehae Insult

### 656. Ch9 Academy Cinn Names
Twine position: `63960,1400`

"The woman was Kyrehae, a princess of Brittanica. The man was her brother, Prince Raithgar," Lorne said, blood still dripping from his mouth. "We will meet them again during the exam." They were sponsored by Professor Marcel at the Academy of Cinn. And there was a third sibling.

Choices:
- Ask about the third sibling -> Ch9 Reglio Rumor
- Notice Lorne sounds defeated before saying the name. -> Ch9 Notice Lorne Defeated

### 657. Ch9 Reglio Rumor
Twine position: `64180,1400`

"Prince Reglio," Lorne revealed. "The greatest mage of his generation." The words did not sound like praise from Lorne. They sounded like weather. "It's said he has the potential to be greater than his mother, Regent Ancala."

Choices:
- Help Lorne up despite everything -> Ch9 Lorne Crawl
- Ask what kind of person scares Lorne. -> Ch9 Ask What Scares Lorne

### 658. Ch9 Lorne Crawl
Twine position: `64400,1400`

"Now help me up. I'm dying here," Lorne ordered. Gareth helped him to his feet. Then Lorne called Pela monster again. In that moment, the barrier collapsed. Odelyn punched straight through it, kicked Lorne to his feet, and grabbed his throat.

Choices:
- Demand Odelyn stop before she goes too far -> Ch9 Odelyn Curse
- Let Odelyn scare him for one second. -> Ch9 Let Odelyn Scare Him

### 659. Ch9 Odelyn Curse
Twine position: `64620,1400`

"Odelyn, enough," Pela demanded. Odelyn released Lorne. He fell. His legs crumpled beneath him. "They're not broken," he muttered, trying to heal himself. The healing did not work right. "Crawl," Odelyn insisted.

Choices:
- Walk toward the Salt Colosseum with Lorne crawling behind -> Ch9 Salt Colosseum Approach
- Wonder why Odelyn is this hard on him. -> Ch9 Wonder Odelyn Hard

### 660. Ch9 Salt Colosseum Approach
Twine position: `64840,1400`

The group headed toward the Salt Colosseum. The building was white marble, circular and enormous, with four spires marking the corners of the Empire. It was truly imposing. The odd thing was the pathway. Almost deserted.

Choices:
- Notice the empty street -> Ch9 Desolate Path
- Study the guards watching from too far away. -> Ch9 Study Distant Guards

### 661. Ch9 Desolate Path
Twine position: `65060,1400`

"There are a lot of people going in and out of the entrance of this city," Odelyn noted, "but not really anyone here." "This area is probably off limits to civilians," Lorne guessed. Then the aura of the street changed. The temperature dropped. Foreboding filled the air.

Choices:
- Hear the humming -> Ch9 Humming Begins
- Reach for Spark before knowing why. -> Ch9 Reach For Spark

### 662. Ch9 Humming Begins
Twine position: `65280,1400`

Silence filled the air except for a soft, distant humming sound. 'What is that noise?' Pela thought. "It's not coming from anywhere nearby," Odelyn said. "It's not the guards," Lorne whispered. The humming grew louder.

Choices:
- See the prince pass them -> Ch9 Reglio Appears
- Listen to the rhythm of the hum. -> Ch9 Listen To Hum

### 663. Ch9 Reglio Appears
Twine position: `65500,1400`

A figure walked silently past them. He wore an inverted crown with a cyan jewel at the top and black-and-white armor. His skin was pale. His hair was white. "That's--" "Prince Reglio," Lorne finished.

Choices:
- Feel his presence arrive after he passes -> Ch9 Reglio Presence
- Keep breathing through the pressure. -> Ch9 Breathe Through Reglio

### 664. Ch9 Reglio Presence
Twine position: `65720,1400`

Reglio did not look at them. He did not even seem to notice them. That made him worse. His presence felt like a walking storm. The hairs on the back of Pela's neck stood up, and cold sweat ran down her back. Truthfully and honestly, Reglio was above them.

Choices:
- Hear everyone try to name what he is -> Ch9 Angel And Demon
- Admit his magic is beautiful and terrifying. -> Ch9 Beautiful Terrifying Magic
- Let the Saint admire the royal storm (DC Oath: 9) -> Ch9 Eldritch Royal Storm

### 665. Ch9 Angel And Demon
Twine position: `65940,1400`

"His magical energy is incredible," Pela admitted. She could appreciate his power. She was also focused on his beauty. Almost feminine. "He looks like an angel," Gareth said. "If he looks like an angel, then his sister looks like a demon," Lorne countered.

Choices:
- Ask if they have to fight him -> Ch9 Odelyn Vows
- Share the fear with Gareth without joking (DC Trust: 8) -> Ch9 Romance Gareth Fear

### 666. Ch9 Odelyn Vows
Twine position: `66160,1400`

"So, you're telling me we have to fight him," Pela asked. "And his siblings," Lorne added. "I'd like to see him try and beat me," Odelyn boasted. "I am a Brittanican. I have royal blood in my veins just like him." "You are a Cursed One," Lorne replied. "You are not the same." Odelyn's eyes hardened.

Choices:
- Cheer Odelyn on anyway -> Ch9 Tournament Rules
- Stand with Odelyn against the word cursed. -> Ch9 Stand With Odelyn Cursed

### 667. Ch9 Tournament Rules
Twine position: `66380,1400`

"Once inside, we have to prepare for a Spellblade tournament," Lorne said. "All mages will compete, and the top ten teams advance to the third stage. Three slots per team. Thirty mages moving forward." Pela understood the shape of it. The exam was a funnel. And the Empire had no trouble discarding what did not fit through.

Choices:
- Ask about the third stage -> Ch9 Third Stage
- Calculate how many teams fail. -> Ch9 Calculate Failing Teams

### 668. Ch9 Third Stage
Twine position: `66600,1400`

"It's points based on the spells we cast and our performance against our opponent," Lorne explained. "There are only a few slots for the finals. The better you do, the better your chance." "Who are the best mages in Brittanica?" Gareth asked. "Kyrehae, Prince Reglio, Raithgar, and Prince Nalto's team are all from the Academy of Cinn."

Choices:
- Ask who Prince Nalto is -> Ch9 Prince Nalto

### 669. Ch9 Prince Nalto
Twine position: `66820,1400`

"Nalto is a member of the royal family, but not a direct descendant of the Empire," Lorne said. "Besides, his team will not win." "How do you know that?" Pela challenged. "Because I don't believe the Emperor would sponsor such a weak team," Lorne said, voice suddenly pained. "Nalto was exiled for who he chose to associate himself with."

Choices:
- Hear the pain in Lorne's answer. -> Ch9 Hear Lorne Pain
- Remember Nalto's name. -> Ch9 Remember Nalto Name

### 670. Ch9 Lead Way
Twine position: `67040,1400`

"I can't believe someone from the royal family could be exiled," Odelyn mused. "He was. Now let's get to the second stage," Lorne ordered. "Alright, Lorne," Pela agreed. "Lead the way." The Salt Colosseum waited ahead, white and enormous, like the Empire had carved judgment into stone.

Choices:
- End Chapter 9 for now -> Chapter Nine End
- Follow the team without giving the Empire her fear (DC Self: 4) -> Ch9 Unclaimed Toward Colosseum

### 671. Chapter Nine End
Twine position: `67260,1400`

Chapters 8 and 9 end here for now. The Mage-Card exam has begun. The first stage has already tested whether they can enter the capital. The second waits inside the Salt Colosseum.

Choices:
- Return to Main Menu -> Main Menu
- Jump to a test moment -> Jump to Moment

### 673. Ch8 Reject Monster Answer
Twine position: `53520,1680`

Pela rejects the word before it can become true simply because someone else said it. "Monster is lazy," she says. "People use it when they are too afraid to explain what they mean." The man in the fog does not move. The roses do.

Choices:
- Make him answer anyway -> Ch8 Dream Darkness

### 674. Ch8 Monster Word Wound
Twine position: `53740,1680`

Pela lets the word monster touch her. Not because she believes it. Because sometimes pain is easier to study after it stops pretending to be new. The roses lean closer. Their sweetness becomes almost physical, and Pela hates that a beautiful thing can feel so cruel.

Choices:
- Ask what the wound means -> Ch8 Dream Darkness

### 675. Ch8 Contradiction Thread
Twine position: `53960,1680`

Pela hears the contradiction first. Cannot be saved. Can be redeemed. The words fit together too neatly, like someone built a cage and called it guidance. She does not know who the voice belongs to, but she knows when someone is trying to make surrender sound holy.

Choices:
- Follow the lie to the roses -> Ch8 Rose Destiny

### 676. Ch8 Unclaimed Not A Curse
Tags: `unclaimed`
Twine position: `54180,1680`

Pela stands straighter inside the dream. "I am not a curse to be redeemed," she says. The sentence feels dangerous. Not loud. Not heroic. Just hers. For a moment, the dark does not know where to put its hands.

Choices:
- Keep the sentence even when the dream pushes back -> Ch8 Rose Destiny

### 677. Ch8 Eldritch Rose Hunger
Tags: `eldritch`
Twine position: `54400,1680`

The roses smell sweet. Then they smell hungry. Pela does not step back. Something in her oath opens one eye and approves of that restraint. The beautiful scent presses against her throat like teeth deciding whether to become a smile.

Choices:
- Let the dream pretend it is still only a warning -> Ch8 Rose Destiny

### 678. Ch8 Remember Rose Warning
Twine position: `54620,1680`

Pela memorizes the scent like a spell component. Sweetness first. Then rot underneath it. Then something old enough to make the difference feel meaningless. If the roses bloom again, she wants to know before the dream has time to explain itself.

Choices:
- Wake with the scent still in her mouth -> Ch8 Wake Late

### 679. Ch8 Wake Angry Move
Twine position: `54840,1680`

Anger reaches Pela before fear can organize itself. Good. Fear makes her freeze. Anger makes her move. She grabs the edge of the dream with both hands and tears herself awake before the roses can open all the way.

Choices:
- Come back to the room hard enough to breathe -> Ch8 Wake Late

### 680. Ch8 Late Hall Run
Twine position: `55060,1680`

Pela dresses so quickly the buttons feel like enemies. Her hair refuses to behave. Her papers slide off the desk. One shoe hides under the bed like it has decided the Mage-Card exam is none of its business. "Not today," Pela mutters, and runs.

Choices:
- Arrive before lateness becomes another accusation -> Ch8 Dean Office

### 681. Ch8 Dream Word Note
Twine position: `55280,1680`

Pela should leave immediately. Instead, she grabs a pen and writes one word. Roses. The ink looks too dark on the page. She stares at it for half a second too long, then curses herself for wasting time and runs anyway.

Choices:
- Take the note and the lateness with her -> Ch8 Dean Office

### 682. Ch8 Watch Sainstroy Eyes
Twine position: `55500,1680`

Dean Sainstroy smiles with practiced warmth. Pela watches his eyes instead. They are kind, or shaped like kindness, which is not always the same thing. He looks at her like a student. He also looks at her like a problem that has arrived before the paperwork is ready.

Choices:
- Wait for the paper hidden under the smile -> Ch8 Written Score

### 683. Ch8 Accept Praise Carefully
Twine position: `55720,1680`

Pela accepts the praise carefully. She wants it to feel good. It does, a little. Then she remembers that praise from the Academy often comes with a hook in it, and she keeps her hands where she can see them.

Choices:
- Let the compliment finish turning -> Ch8 Grades Slip

### 684. Ch8 Praise Blade Waiting
Twine position: `55940,1680`

Pela has learned not to trust congratulations that arrive alone. They usually bring relatives. Expectation. Correction. Threat. She waits, and the Dean's voice proves her right by becoming softer before it becomes worse.

Choices:
- Hear what the praise was protecting -> Ch8 Grades Slip

### 685. Ch8 Ardenfelt Difficult Not Wrong
Twine position: `56160,1680`

"Professor Ardenfelt is difficult," Pela admits. The Dean's expression sharpens. "But difficult is not the same thing as wrong," she adds quickly. "He has helped me more than most professors have." She hates how true that is. She hates more that defending him feels like defending the bruise because it taught her where the table was.

Choices:
- Let Sainstroy move to the real reason -> Ch8 Mage Card Law

### 686. Ch8 List What She Can Do
Twine position: `56380,1680`

Pela lists what she has. Spark. A spear that sometimes obeys. A shield she learned by nearly being thrown through a classroom wall. Fusion, if the spells do not decide to kill her for arrogance. It is not enough. It is also more than she had when the semester began.

Choices:
- Let the exam become real anyway -> Ch8 Execution Memory

### 687. Ch8 Promise Not To Fail
Twine position: `56600,1680`

"I will not fail," Pela says. The words come out too fast. Sainstroy studies her for a moment. He does not comfort her. Maybe that is his version of respect. "Then make sure that is not merely optimism."

Choices:
- Accept that optimism is not enough -> Ch8 Prepare Tomorrow

### 688. Ch8 Ask When They Leave
Twine position: `56820,1680`

"When do we leave?" It is the most useful question Pela can find, which is why she asks it before terror can drag her into something dramatic. Sainstroy nods once. No one says she has permission. The closing door gives her the answer anyway.

Choices:
- Hear the answer she cannot delay -> Ch8 Prepare Tomorrow

### 689. Ch8 Parents Silence
Twine position: `57040,1680`

Pela thinks of her parents and says nothing. If she fails, they will not just lose her. They will lose the memory of losing her. The cruelty of that feels too large to fit in her chest, so it folds itself smaller and becomes shame instead.

Choices:
- Carry the silence into tomorrow -> Ch8 Prepare Tomorrow

### 690. Ch8 Unclaimed Exam Self
Tags: `unclaimed`
Twine position: `57260,1680`

Pela decides one thing before leaving the office. She will not pass as Ardenfelt's correction. She will not pass as the Saint's appetite. She will not pass as the Forbidden One's crony. If she survives, she will survive as Pela Dianthus, and she does not know whether that is bravery or stubbornness.

Choices:
- Take that decision into dawn -> Ch8 Cart Dawn

### 691. Ch8 Carry Forgotten
Twine position: `57480,1680`

Forgotten. The word follows Pela out of the office and down the hall. She does not know if the Academy means erased from record, memory, history, or all of it. She only knows that she suddenly wants to leave a mark so deep no spell can clean it out.

Choices:
- Meet the cart with the word still following -> Ch8 Cart Dawn

### 692. Ch8 Stand Near Odelyn
Twine position: `57700,1680`

Pela stands closer to Odelyn. Not close enough for anyone to comment. Close enough that Odelyn notices. Odelyn's eyes flick toward her, then away. She does not smile, but her shoulder eases by the smallest amount, and Pela understands that as clearly as any sentence.

Choices:
- Let the cart gather all of them together -> Ch8 Cart Ardenfelt

### 693. Ch8 Avoid Ardenfelt Lesson
Twine position: `57920,1680`

Pela gets in the cart before Ardenfelt can make hesitation educational. Gareth follows quickly. Lorne tries to make entering a cart look noble and fails because it is still a cart. Odelyn says nothing, but her silence has the shape of someone counting enemies.

Choices:
- Ask the question once everyone is trapped together -> Ch8 Excommunication Explained

### 694. Ch8 Notice Lorne Transfer
Twine position: `58140,1680`

Pela notices the way Lorne says transfer. Not like a door. Like a punishment that learned how to wear school colors. For one uncomfortable moment, Lorne looks less like a prince and more like a boy who had already lost somewhere else before he came here.

Choices:
- Let the silence expose what pride hides -> Ch8 Lorne Transfer Silence

### 695. Ch8 Wound Unnamed
Twine position: `58360,1680`

Pela lets the wound stay unnamed. It surprises her that she can do that. Lorne has earned plenty of cruelty from her. Still, some things feel too private to touch even when the person bleeding from them deserves nothing.

Choices:
- Sit with the silence until the road stops -> Ch8 Road Stop

### 696. Ch8 File Lorne Detail
Twine position: `58580,1680`

Pela files the detail away. Iluus. Transfer. Excommunication. Lorne's arrogance is not smaller because she understands part of it. If anything, it becomes worse. It means he knows exactly how sharp the system is and still throws other people toward the edge.

Choices:
- Keep the detail until it matters -> Ch8 Road Stop

### 697. Ch8 Watch The Trees
Twine position: `58800,1680`

Pela watches the trees instead of Ardenfelt. The road is too quiet. Leaves move without wind. Shadows sit too heavily between trunks. Even before Ardenfelt steps out of the cart, Pela understands that something has been waiting for them with patience.

Choices:
- Hear Ardenfelt make the danger simple -> Ch8 Ardenfelt Silences Odelyn

### 698. Ch8 Memorize Bubble Silence
Twine position: `59020,1680`

Bubble of Silence. Pela memorizes the shape by watching Odelyn fail to speak. It is an ugly thing to learn from a friend's frustration, but magic does not become less useful because the lesson is rude.

Choices:
- Watch Ardenfelt stay behind with the spell still fresh -> Ch8 Ardenfelt Road Alone

### 699. Ardenfelt Staff First
Tags: `ardenfelt`
Twine position: `57680,2100`

Ardenfelt POV Ardenfelt looks at the staff before he looks at the men. People lie. Relics are usually more honest about the damage they were built to do. The ruby at the top glows faintly, and Ardenfelt's annoyance becomes interest by the smallest possible measurement.

Choices:
- Name what Athea left behind -> Ardenfelt POV Staff Adam

### 700. Ardenfelt Insult Properly
Tags: `ardenfelt`
Twine position: `57900,2100`

Ardenfelt POV Ardenfelt gives them the courtesy of his contempt. "You did not ambush my students," he says. "You scheduled your own humiliation poorly." The second cultist stiffens. Good. At least one of them understands tone.

Choices:
- Let Lucian mistake contempt for conversation -> Ardenfelt POV Threats

### 701. Ardenfelt Name Staff Danger
Tags: `ardenfelt`
Twine position: `58120,2100`

Ardenfelt names the relic's danger in silence. Soul-binding. Amplification. Old Athean pride polished until it can pass for sacred history. He does not say any of this aloud. Teaching an enemy why they are doomed is only satisfying after they have run out of ways to benefit from the explanation.

Choices:
- Let Lucian introduce the mistake formally -> Ardenfelt POV Threats

### 702. Ch9 Gareth Shared Awe
Twine position: `60220,1680`

Pela shares the awe with Gareth because he is the only one not trying to own the view. "It is beautiful," she says. Gareth nods. "It makes me feel like I should stand up straighter." Pela almost laughs. Then she realizes she is doing it too.

Choices:
- Let Lorne ruin the moment on schedule -> Ch9 Lorne Legacy

### 703. Ch9 Watch City Instead
Twine position: `60440,1680`

Pela keeps watching the city instead of Lorne. Walls. Wards. Flowers. Silver gates. Old money pretending to be architecture. The capital is beautiful in the way a blade can be beautiful when it is clean and pointed at someone else.

Choices:
- Hear Lorne make beauty about himself -> Ch9 Lorne Legacy

### 704. Ch9 Jerk Loses Loudly
Tags: `jerk`
Twine position: `60660,1680`

"You are brave for someone who loses loudly," Pela says. Lorne's mouth opens. For once, no royal speech comes out immediately. It is a small victory, but it is hers, and the look on his face is worth whatever extreme reaction he will have.

Choices:
- Let Odelyn decide that was not enough -> Ch9 Odelyn Slap

### 705. Ch9 Let Monster Pass
Twine position: `60880,1680`

Pela lets monster pass through her without answering. It does not pass cleanly. The word leaves hooks. Still, the exam is bigger than Lorne's cruelty, and Pela hates that survival sometimes asks her to be quiet around people who deserve worse.

Choices:
- Let Odelyn answer what Pela swallowed -> Ch9 Odelyn Slap

### 706. Ch9 Odelyn Defends More
Twine position: `61100,1680`

Pela sees it then. Odelyn is not only defending her, she defending more than Pela. She is defending the idea that cursed does not mean disposable... the right to be cursed and still matter. That the title 'monster' does not become truth just because a prince says it in public. Pela does not know how to thank someone for fighting a word she has been carrying for years.

Choices:
- Hear Odelyn make her title dangerous -> Ch9 Odelyn Royal Threat

### 707. Ch9 Romance Odelyn Defense
Tags: `romance`
Twine position: `61320,1680`

Pela looks at Odelyn like the defense mattered. Because it did. Odelyn notices. Her anger does not soften, not really, but it turns enough for Pela to see the worry underneath. For one second, all the noise of the gate becomes quieter than the space between them.

Choices:
- Follow before the moment becomes too visible -> Ch9 Gate Guard

### 708. Ch9 Thank Gate Guard
Twine position: `61540,1680`

"Thank you," Pela says properly. The guard blinks as if politeness was not one of the spells he expected from Torrindale students. "Good luck," he replies. It sounds official. It also sounds like an apology he is not allowed to make.

Choices:
- Notice what he called the second stage -> Ch9 Second Stage

### 709. Ch9 Enjoy Lorne Barrier
Twine position: `61760,1680`

Pela enjoys the expression on Lorne's face. She should not. She absolutely does. There is something deeply satisfying about watching a prince discover that invisible things still count when they are stronger than his confidence.

Choices:
- Explain the barrier before he invents another excuse -> Ch9 Pela Sees Barrier

### 710. Ch9 Barrier Structure Map
Twine position: `61980,1680`

Pela maps the barrier in her mind. It is not a wall. Not exactly. It is an Impact Shield made enormous, spread across the gate like transparent cloth, layered with recognition magic and pressure points that punish arrogance. No wonder Lorne hit it face first.

Choices:
- Watch arrogance test the structure again -> Ch9 Mock Lorne

### 711. Ch9 Study Shadow Barrier
Twine position: `62200,1680`

Odelyn's shadow magic does not bounce off the barrier the same way Lorne's impact magic did. It drags at the ward. The barrier resists, then thins, like it is deciding whether a curse counts as a student or an infection. Pela hates the question before she fully understands it.

Choices:
- Ask if Odelyn is alright with more than her pride -> Ch9 Odelyn Mana Decay

### 712. Ch9 Admire Odelyn Quietly
Twine position: `62420,1680`

Pela admires Odelyn without making it obvious. Mana Decay is terrifying up close. Not flashy. Not pretty. Just the quiet certainty of taking a thing apart by touching it. Odelyn steps through the opening she made like she was always supposed to be there.

Choices:
- Let Gareth try to make the exam make sense -> Ch9 Gareth Barrier Theory

### 713. Ch9 Gareth Almost Elegant
Twine position: `62640,1680`

"That was almost elegant," Pela tells Gareth. "Almost?" "Do not get greedy." Gareth smiles despite the barrier, and for a second the exam feels less like an execution machine and more like something they might survive by being themselves.

Choices:
- Watch Lorne reject elegance for force -> Ch9 Lorne Overwhelming Impact

### 714. Ch9 Step Back Royal Pride
Twine position: `62860,1680`

Pela steps back before pride becomes collateral. Lorne does not. That is the difference between knowing danger and believing danger should ask permission first. The knight reaches for him, and the air changes shape around the motion.

Choices:
- Watch the prince introduce himself with violence -> Ch9 Raithgar Grabs Lorne

### 715. Ch9 Remember Royal Names
Twine position: `63080,1680`

Pela remembers both names before she understands why they matter. Raithgar. Kyrehae. The names feel heavy in the air, not because they are royal, but because everyone around them makes space for the violence attached to them.

Choices:
- Watch Kyrehae make violence obey etiquette -> Ch9 Kyrehae Intervenes

### 716. Ch9 Study Kyrehae Slap
Twine position: `63300,1680`

Kyrehae's slap is healing and insult together. Mana moves through the strike with cruel precision. Enough to wake Lorne. Enough to hurt. Not enough to apologize. Pela studies it because Brittanica keeps teaching her that kindness is not the only reason people put bodies back together.

Choices:
- Thank her because survival still counts -> Ch9 Kyrehae Dismisses

### 717. Ch9 Keep Kyrehae Insult
Twine position: `63520,1680`

Pela keeps the insult instead of the fear. You and your friends. Stronger. Kyrehae said it like weakness was a personal inconvenience the world had no obligation to tolerate. Pela hates her immediately. She also understands the warning.

Choices:
- Let Lorne name the people they have to survive -> Ch9 Academy Cinn Names

### 718. Ch9 Notice Lorne Defeated
Twine position: `63740,1680`

Lorne sounds defeated before he says the third name. That is what frightens Pela. Lorne has been angry, embarrassed, cruel, arrogant, and stupid. This is different. This is what he sounds like when he believes the outcome has already happened.

Choices:
- Ask about the name that made him smaller -> Ch9 Reglio Rumor

### 719. Ch9 Ask What Scares Lorne
Twine position: `63960,1680`

"What kind of person scares you?" Pela asks. Lorne glares. The answer sits behind his teeth and refuses to come out with dignity. "The kind you do not understand until you are already beneath them," he says finally, and Pela realizes he is not trying to sound dramatic.

Choices:
- Help him up with the answer still between them -> Ch9 Lorne Crawl

### 720. Ch9 Let Odelyn Scare Him
Twine position: `64180,1680`

Pela lets Odelyn scare him for one second. One. That is all. Lorne has thrown the word monster at Pela like a stone so many times that watching fear return to his own face feels almost fair. Then almost becomes too close to enough, and Pela moves.

Choices:
- Stop Odelyn before fear becomes damage they cannot undo -> Ch9 Odelyn Curse

### 721. Ch9 Wonder Odelyn Hard
Twine position: `64400,1680`

Pela wonders why Odelyn is this hard on him. It is not only anger. There is history in it, or recognition, or some ugly mixture of both. Odelyn looks at Lorne like he is not the first royal boy to learn cruelty as a language and mistake it for inheritance.

Choices:
- Walk while the question follows behind them -> Ch9 Salt Colosseum Approach

### 722. Ch9 Study Distant Guards
Twine position: `64620,1680`

Pela studies the guards watching from too far away. They see the students. They see the empty path. They do not approach. That is when the street stops feeling deserted and starts feeling prepared.

Choices:
- Notice what the silence is making room for -> Ch9 Desolate Path

### 723. Ch9 Reach For Spark
Twine position: `64840,1680`

Pela reaches for Spark before knowing why. The magic answers quickly, almost too quickly, a warmth under her skin that wants to become light. She does not summon the spear. Not yet. But her hand remembers the shape.

Choices:
- Hear what the street is hiding -> Ch9 Humming Begins

### 724. Ch9 Listen To Hum
Twine position: `65060,1680`

Pela listens to the rhythm of the hum. It is not music. It is magic moving with enough control to pass for silence until it chooses otherwise. The sound crawls over her skin, and every instinct in her body asks why the city is letting it approach.

Choices:
- See the person the hum belongs to -> Ch9 Reglio Appears

### 725. Ch9 Breathe Through Reglio
Twine position: `65280,1680`

Pela keeps breathing through the pressure. In. Out. Again. Reglio passes without looking at her, and somehow that is worse than being noticed. It makes her feel like scenery in her own fear.

Choices:
- Feel his presence arrive late and still overwhelm them -> Ch9 Reglio Presence

### 726. Ch9 Beautiful Terrifying Magic
Twine position: `65500,1680`

Pela admits it to herself. Reglio's magic is beautiful. It is also terrifying. Those two things do not cancel each other out. If anything, the beauty makes the terror worse, because it means power can wear elegance and still crush everything beneath it.

Choices:
- Listen to everyone fail to name him properly -> Ch9 Angel And Demon

### 727. Ch9 Eldritch Royal Storm
Tags: `eldritch`
Twine position: `65720,1680`

The Saint admires the royal storm. Not with fear. With appetite. Pela feels the oath shift under her skin like something sitting up to watch the procession. Reglio does not look at her, but the hunger inside her smiles anyway.

Choices:
- Swallow the hunger before anyone sees it -> Ch9 Angel And Demon

### 728. Ch9 Romance Gareth Fear
Tags: `romance`
Twine position: `65940,1680`

Pela shares the fear with Gareth without joking. "I do not like how small he makes the road feel," she says quietly. Gareth looks at her, then at Reglio's back. "Me neither." It does not comfort her. It steadies her, which is rarer.

Choices:
- Ask the question neither of them wants answered -> Ch9 Odelyn Vows

### 729. Ch9 Stand With Odelyn Cursed
Twine position: `66160,1680`

Pela stands with Odelyn against the word cursed. Not loudly. Lorne would only turn it into a fight. But she moves closer, the same way she did at the cart, and Odelyn notices again. This time her eyes soften for less than a heartbeat before pride covers it.

Choices:
- Let the exam swallow the argument for now -> Ch9 Tournament Rules

### 730. Ch9 Calculate Failing Teams
Twine position: `66380,1680`

Pela calculates how many teams fail. Too many. The numbers are not comforting. They never are. They turn fear into shape, but shape is not mercy. The Empire built the exam like a funnel and called it opportunity.

Choices:
- Ask what waits after the funnel narrows -> Ch9 Third Stage

### 731. Ch9 Hear Lorne Pain
Twine position: `66600,1680`

Pela hears the pain in Lorne's answer. She does not forgive him. The two things are unrelated. But for one second, she understands that he is not only repeating the Empire's cruelty because he enjoys it. He is repeating it because it already taught him where to bleed.

Choices:
- Let the pain point them toward the Colosseum -> Ch9 Lead Way

### 732. Ch9 Remember Nalto Name
Twine position: `66820,1680`

Pela remembers Nalto's name. Exiled royal. Sponsored team. Someone the Emperor would rather keep at the edge of the family than outside the game entirely. Names matter in Brittanica. Sometimes they are weapons. Sometimes they are chains.

Choices:
- Keep the name for when it becomes a problem -> Ch9 Lead Way

### 733. Ch9 Unclaimed Toward Colosseum
Tags: `unclaimed`
Twine position: `67040,1680`

Pela follows the team without giving the Empire her fear. The fear is still there. She is not stupid. But it does not get to lead. Not this time. She lets her own feet choose the direction, and for once the oath inside her has nothing useful to say.

Choices:
- End Chapter 9 for now -> Chapter Nine End

### 760. Post Odelyn Interlude Start
Twine position: `69000,2200`

The lesson with Odelyn does not leave when Odelyn does. Pela sits in the quiet after The Lost and feels the shape of every place she is still weak. The Forbidden One has been important. Too important. Prolonged exposure to that grimoire is not education anymore. It is a ramp. It is a hand on her back. It is possessive power pretending to be guidance.

Choices:
- Let the day open around her -> Post Odelyn Interlude Choice

### 761. Post Odelyn Interlude Choice
Twine position: `69220,2200`

Pela understands that she passed Odelyn's test. She does not feel accomplished. Odelyn did not put her in the infirmary. Odelyn did not break her pride the way she broke Gareth's. It really was a friend teaching a friend in a constructive manner, and somehow that makes the lesson heavier. Pela wants one day where the Academy does not decide what she becomes.

Choices:
- Explore Torrindale City and clear her head. -> Interlude City Gate
- Stay in the dorm and process Odelyn's lesson. -> Dorm Recovery Start
- Go to the Royal Library before the feeling fades. -> Library Day Approach

### 762. Interlude City Gate
Twine position: `69440,2200`

Pela leaves campus with a little money and a mind full of unfinished spells. Torrindale City waits beyond the academy gates. She has seen pieces of it from classroom windows, but mostly she has lived between dormitory walls, lecture halls, and places where professors decide whether fear counts as failure.

Choices:
- Walk until the city stops feeling like a test -> Interlude City Money
- Keep one hand near her spell focus. -> Interlude City Money

### 763. Interlude City Money
Twine position: `69660,2200`

The streets are busy enough that Pela can almost disappear. Almost. A few people stare at her horns. A few stare at her skin. Most are too busy selling fruit, ink, charms, fried bread, bad poetry, and worse advice. That helps more than kindness would have.

Choices:
- Follow the sound of music -> Bard District Lights

### 764. Bard District Lights
Twine position: `69880,2200`

Nothing catches her eye until she arrives at the Bard's District. Food, drinks, entertainment, and arcane artisans crowd the streets. Lanterns hang bright over the road. The air smells like sugar, old wood, hot oil, and mana spent for applause. It reminds her of celebrations in Orgoshk, which is unfair because she was trying not to miss home.

Choices:
- Let the district pull her deeper -> Musician Shoppe Sign
- Compare the lights to Orgoshk instead of Brittanica. -> Musician Shoppe Sign

### 765. Musician Shoppe Sign
Twine position: `70100,2200`

A sign reads The Musician's Shoppe. Pela stops because curiosity still has power over her, even after everything else that has tried. Music spills through the door in low, warm notes. It does not sound like the Academy. It sounds like someone making a room belong to them.

Choices:
- Enter the shop -> Musician Shoppe Inside
- Listen from the doorway first. -> Musician Shoppe Inside

### 766. Musician Shoppe Inside
Twine position: `70320,2200`

Inside the shop, a bard sits on a boulder in the middle of the room, tuning a dark wooden instrument. The wood is too familiar. The carvings along its body look almost goblin. Not the exaggerated version Brittanican artists draw when they want something to seem primitive. The real kind. Careful. Practical. Full of tiny jokes only the maker understood.

Choices:
- Approach the musician -> Daisy Bass Correction

### 767. Daisy Bass Correction
Twine position: `70540,2200`

"I like your guitar," Pela blurts out before she can make herself sound normal. "Thanks, but this is a bass." For a moment, Pela looks blankly at the person tuning their instrument.

Choices:
- Ask how to tell the difference. -> Daisy Peg Lesson
- Admit she has no idea what she is looking at. -> Daisy Peg Lesson

### 768. Daisy Peg Lesson
Twine position: `70760,2200`

"Do you want to know how to tell the difference between the two instruments?" "Yes... please," Pela asks, her tone hesitant. "A bass has four tuning pegs," the person says, excitedly showing Pela. "A standard guitar has six pegs." "Ah," Pela says. "That's cool."

Choices:
- Let her introduce herself -> Daisy Introduction

### 769. Daisy Introduction
Twine position: `70980,2200`

"Right! I'm glad you also see it my way. Anyway, I'm Daisy." "Pela," she replies, shy despite herself. Daisy smiles like names are not traps. "So," Pela asks, "do you know how to play it?"

Choices:
- Listen to Daisy play -> Daisy First Song
- Ask if the instrument is hard to learn. -> Daisy First Song

### 770. Daisy First Song
Twine position: `71200,2200`

"Of course!" Daisy says. "I can show you, if you'd like?" "I'd love that!" Daisy starts playing. Pela's eyes widen. The sound is beautiful in a way that makes her homesick before she has time to defend herself.

Choices:
- Recognize the wood -> Orgoshk Wood

### 771. Orgoshk Wood
Twine position: `71420,2200`

Her memory is not deceiving her. The longer Daisy plays, the more obvious it becomes. The dark wood is from Orgoshk. It carries the same resonance as the lute Pela has at home. Goblin instruments have a distinct sound. It is craft, but not only craft. Mana lives in the wood until music and magic agree to be one.

Choices:
- Ask if Daisy has ever been to Orgoshk. -> Goblin Instrument Lore
- Tell Daisy what the wood is. -> Goblin Instrument Lore

### 772. Goblin Instrument Lore
Twine position: `71640,2200`

"Have you ever been to Orgoshk?" Pela asks. "No," Daisy says, equally curious. "But I've always wanted to go. Why do you ask?" "The bass you're using is made from the same wood as my lute back home," Pela explains. "The wood has magical properties. I've never heard any human play it with such skill. It takes a goblin to truly master the art of playing a goblin instrument." "I had no idea!" Daisy says.

Choices:
- Hear what Daisy does with that knowledge -> Daisy Star Music

### 773. Daisy Star Music
Twine position: `71860,2200`

Daisy plays again. This time the music rises louder, brighter, and more intense. To Pela's demon eyes, the magic around Daisy looks like stars pinned across a night sky. It is colorful. It is alive. It is not ashamed of being felt.

Choices:
- Watch the music become emotion -> Daisy Emotion Attuned
- Let herself miss home openly. -> Daisy Emotion Attuned

### 774. Daisy Emotion Attuned
Twine position: `72080,2200`

Daisy is magically attuned to her emotions. Pela loves that about her immediately, maybe because it is everything the Academy keeps trying to turn into a warning. Daisy does not look controlled by the music. She looks like an artist painting a picture with it.

Choices:
- Let Daisy offer a lesson -> Daisy Offer Lesson

### 775. Daisy Offer Lesson
Twine position: `72300,2200`

"You can try a few notes," Daisy offers. Pela looks at the bass like it is both instrument and relic. Part of her wants to touch it. Part of her worries the sound will make home feel farther away.

Choices:
- Try the bass gently. -> Pela Tries Bass
- Respect the instrument and only listen. -> Pela Refuses Bass Touch

### 776. Pela Tries Bass
Twine position: `72520,2200`

Pela touches the strings carefully. The note that comes out is ugly. Daisy laughs, but not cruelly. Pela laughs too, startled by how much easier it is to fail when no one is keeping score.

Choices:
- Let the moment stay kind -> Daisy Laughs Softly

### 777. Pela Refuses Bass Touch
Twine position: `72520,2360`

"I think I just want to listen," Pela admits. Daisy nods like that is a complete answer. No professor corrects her. No student snickers. No demon calls the choice weakness.

Choices:
- Let the moment stay kind -> Daisy Laughs Softly

### 778. Daisy Laughs Softly
Twine position: `72740,2200`

For a little while, Pela is only a girl in a music shop. That feels impossible enough to be magic. Daisy keeps playing until the afternoon begins to lean toward evening and the Bard's District grows louder outside.

Choices:
- Leave the Musician's Shoppe -> Bard District After Music

### 779. Bard District After Music
Twine position: `72960,2200`

Outside, the city feels different. Not safer. Brittanica has not earned that. But less singular. The Academy is not the whole world. There are shops where mistakes become jokes, songs that understand homesickness, and people who do not turn Pela into a problem the second she enters a room.

Choices:
- Decide what to do with the rest of the day -> Day One After Daisy

### 780. Day One After Daisy
Twine position: `73180,2200`

Evening settles over Torrindale. Pela can go back to the dorms and keep this small mercy clean. Or she can make the day useful in the way the Academy understands usefulness.

Choices:
- Go back to the dorms and let the day end -> Skip Gerkle Dorm Choice
- Visit the Royal Library before returning. -> Daisy To Royal Library

### 781. Skip Gerkle Dorm Choice
Twine position: `73400,2200`

Pela returns to the dorms before curiosity can become another trap. The city stays behind her. The music follows longer than the lantern light. For once, she lets a good thing remain good instead of digging under it for teeth.

Choices:
- Sleep before the next summons finds her -> Daisy Return To Dorm

### 782. Dorm Recovery Start
Twine position: `69440,2560`

Pela stays in her dorm. It is not brave. It is not cowardly. It is a room with a door she can close. Odelyn's lesson keeps moving through her head. Using emotions to cast spells is not the same as letting emotions wear her like a coat.

Choices:
- Practice Become Lightning in small bursts -> Dorm Blade Reflection
- Write down what Odelyn taught her -> Dorm Letter Thought
- Do nothing until the silence becomes useful -> Dorm Quiet Practice

### 783. Dorm Blade Reflection
Twine position: `69660,2560`

Pela practices the beginning of Become Lightning without allowing the spell to take her all the way. Spark gathers in her limbs. Her heartbeat tries to become a command. She stops before speed turns into running.

Choices:
- Hold the current steady. -> Dorm Sleep Before Dream

### 784. Dorm Letter Thought
Twine position: `69660,2720`

Pela writes one sentence. I passed. Then she scratches it out, because it is true and not true enough. She writes another. I am not where I want to be yet.

Choices:
- Keep the second sentence. -> Dorm Sleep Before Dream

### 785. Dorm Quiet Practice
Twine position: `69660,2880`

Pela does nothing. At first, it feels like wasting time. Then it becomes something else. Her body stops bracing for the next correction. Her magic settles. Her thoughts stop sprinting long enough for her to catch them.

Choices:
- Let rest count as preparation. -> Dorm Sleep Before Dream

### 786. Dorm Sleep Before Dream
Twine position: `69880,2720`

By the time Pela lies down, Odelyn's voice has stopped sounding like judgment. Act like it. Pela does not know if she can. She falls asleep anyway.

Choices:
- Let the next dream find her -> Dorm Return To Dream

### 787. Library Day Approach
Twine position: `69440,3240`

Pela continues through the city with her mind wandering back to family. She has not heard from them in too long. Not because she thinks they are in danger. Orgoshk is safer for them than Torrindale is for her. The worry is simpler than that. She misses them.

Choices:
- Enter the Royal Library of Torrindale City -> Royal Library Exterior

### 788. Royal Library Exterior
Twine position: `69660,3240`

The Royal Library of Torrindale City rises larger than any building has a right to be. Pela has never visited it before. If answers can be found anywhere in this city, she wants to believe they can be found here.

Choices:
- Walk beneath the library arches -> Royal Library Scale

### 789. Royal Library Scale
Twine position: `69880,3240`

The library is the largest on the continent of Solitrium, excluding Bingham's University. Pela does not really consider Bingham a true country of mages. It is a country of pretentious and absurd hermits, and she will never step foot in there.

Choices:
- Let the thought become petty enough to help -> Bingham Thought
- Admit she would rather be here than anywhere in Bingham. -> Bingham Thought

### 790. Bingham Thought
Twine position: `70100,3240`

Of the three Great Mage Countries, Brittanica Ultima, Bingham, and the Theocracy of Athea, Bingham is the most insular. Pela would rather stay in the Torrindale Library forever than visit either of the other two countries and pretend their arrogance is culture.

Choices:
- Find the book that makes the hunger wake -> Feastcraft Shelf

### 791. Feastcraft Shelf
Twine position: `70320,3240`

While pondering, Pela comes across a book called Feastcraft. The title is enough. Her hunger recognizes it before her hands do.

Choices:
- Reach for Feastcraft -> Philip Takes Book
- Study why the title feels alive. -> Philip Takes Book

### 792. Philip Takes Book
Twine position: `70540,3240`

Pela reaches for the book. Someone else grabs it first. "I don't think this book is for you," a voice says.

Choices:
- Ask who he thinks he is. -> Philip Names Himself
- Demand a reason before anger becomes magic. -> Philip Names Himself

### 793. Philip Names Himself
Twine position: `70760,3240`

"Why not?" Pela asks. "Who are you to say what I can and can't read?" "My name is Philip Gerkle, and I am a professional researcher of Arcane Artificing here at Torrindale."

Choices:
- Look at him properly -> Philip Description

### 794. Philip Description
Twine position: `70980,3240`

Philip Gerkle looks creepy. He is a pale elf with a scar that starts at his bottom lip and ends at his right ear. His eyes are piercing blue. His hair is dark enough to make his skin look even paler.

Choices:
- Notice the earrings -> Valis Earrings
- Keep looking until the detail matters. -> Valis Earrings

### 795. Valis Earrings
Twine position: `71200,3240`

His earrings remind Pela of Valis, one of the three Alter Gods. They are shaped like crescent moons textured as raven feathers, and the chain is bright bronze. She knows this because her parents taught her the old stories. The Alter Gods are not worshipped in the main Brittanican cities, but they are recognized on the outskirts of the kingdom.

Choices:
- Return to the argument -> Advanced Book Argument

### 796. Advanced Book Argument
Twine position: `71420,3240`

"This is a very advanced book for a student to understand," Philip says. "You should start with something simpler, like The Fundamentals of Arcane Artificing." "Does that make you better than me or something?" Pela asks. "Because if you are going to say I'm just a student, then that is not going to stop me."

Choices:
- Feel why the book matters -> Hunger Knows Tome

### 797. Hunger Knows Tome
Twine position: `71640,3240`

Pela wants that book because it is related to the Saint of the Feast. She can see it with her demon eyes. She can tell deep down by the hunger it makes her feel. She knows this and will not admit it to Philip.

Choices:
- Call herself a researcher too. -> Claim Researcher
- Hold out her palm for the book. -> Claim Researcher

### 798. Claim Researcher
Twine position: `71860,3240`

"You called yourself a researcher, not a professor," Pela says. "By that logic I am also a researcher of arcane artificing, so hand me the book." She finishes the sentence with her hand open and her palm facing Philip. "Absolutely not," Philip huffs.

Choices:
- Ask why Feastcraft is so important -> Ask Why Important

### 799. Ask Why Important
Twine position: `72080,3240`

"Fine," Pela says. "Can you at least tell me why it's so important?" "It's about a lost school of magic," Philip replies. "That is why it is important, and why I need it for my research."

Choices:
- Ask about his research -> Ask Research
- Watch his hands instead of his answer. -> Ask Research

### 800. Ask Research
Twine position: `72300,3240`

"What is your research?" Pela asks. "That's none of your business," Philip retorts. "Fine," Pela mutters. The word tastes like losing.

Choices:
- Walk away from him and the book -> Walk Away Hungry

### 801. Walk Away Hungry
Twine position: `72520,3240`

Pela walks away, but the hunger gnaws at her. It is like her stomach is screaming for her to consume the knowledge within that book. Now that she has seen it, she can find it again.

Choices:
- Reach the library doors -> Library Door Resistance

### 802. Library Door Resistance
Tags: `unclaimed`
Twine position: `72740,3240`

At the library doors, Pela stops. She can go home and try to calm herself. She can follow the hunger until it becomes a map. The rational part of Pela wants Feastcraft because it might help her break the curse. The other part wants it because the Saint is hungry.

Choices:
- Go home and try to calm herself -> Gate Hunger Rising
- Tell the hunger no and return to the dorm (DC Self: 2) -> Unclaimed Refuse Chase
- Follow the hunger before it tears through her restraint. -> Night Streets Hunger

### 803. Unclaimed Refuse Chase
Tags: `unclaimed`
Twine position: `72960,3080`

Pela keeps walking away. The hunger screams like she has betrayed it. Maybe she has. "You can want something without being owned by wanting it," Pela whispers, and the sentence hurts enough to feel true.

Choices:
- Return to the dorm with empty hands -> Unclaimed Refuse Return

### 804. Gate Hunger Rising
Twine position: `72960,3240`

As Pela approaches the gate to leave Torrindale City, the hunger becomes unbearable. The demon within her starts to scream. She has to get that book.

Choices:
- Lose the argument with herself -> Night Streets Hunger

### 805. Night Streets Hunger
Twine position: `73180,3240`

It is late in the night when Pela returns to Torrindale's streets. The hunger leads her. Not like a thought. Like a hook behind her ribs.

Choices:
- Follow it into the Ossuary District -> Ossuary District

### 806. Ossuary District
Twine position: `73400,3240`

The Ossuary District is where the dead are laid to rest and outdated temples survive because Brittanicans hate gods less than they love archives. The area is rundown and quiet. Pela finds what she is looking for near a temple of Valis.

Choices:
- Approach the temple -> Temple of Valis
- Notice how old worship rots when no one admits it is worship. -> Temple of Valis

### 807. Temple of Valis
Twine position: `73620,3240`

Pela can feel the book's presence, and the demon within her rejoices. 'Philip Gerkle is in the same vicinity of the book. What will you do?' a voice asks inside her mind. 'I'll fight him if I have to. I can't let this book escape me,' Pela thinks.

Choices:
- Snap out of the hunger for one breath -> Coin Of Hunger

### 808. Coin Of Hunger
Twine position: `73840,3240`

Pela snaps out of it before walking into the ugly monolith. She cannot let herself get that desperate. Yes, part of her wants the book because of the Saint of the Feast's hunger. But the rational part wants it because it might help her break this curse. Two sides of a coin. One to free herself from the gnawing. One to indulge in it.

Choices:
- Enter the run-down building -> Run Down Building

### 809. Run Down Building
Twine position: `74060,3240`

The main section of the building seems innocuous enough. There is only a giant statue of Valis at its center. No guard. No priest. No sign that anyone living has cared about this place in years.

Choices:
- Study the statue as she passes -> Valis Statue

### 810. Valis Statue
Twine position: `74280,3240`

The statue looks like an owl with a raven's beak, feathers carved to resemble silk, and horns of a stag. A crown of talons sits on its head. It has been here for a long time, waiting for people to either worship it or pretend they are only preserving history.

Choices:
- Descend into the crypt -> Crypt Hallway

### 811. Crypt Hallway
Twine position: `74500,3240`

The stairs lead into a hallway with tombs on either side. Each tomb is marked with a half crescent shape with horns sticking out of each corner. Candles are lit. Philip is down here.

Choices:
- Follow the chanting -> Chanting Mana Path
- Read the mana path he left behind. -> Chanting Mana Path

### 812. Chanting Mana Path
Twine position: `74720,3240`

The voice ahead is not normal chatter. It is chanting. Pela cannot make out the words, but she knows it is Philip. His mana path is not usual mana. It is laced with something wicked enough that even a normal person might feel the air trying to leave.

Choices:
- Enter the grand room -> Monolith Chamber

### 813. Monolith Chamber
Twine position: `74940,3240`

Deep beneath the temple, Philip stands near a monolith of Valis. Feastcraft lies on the altar. For one second, the hunger makes the book the center of the room.

Choices:
- See what else is on the altars -> Goblin Altars

### 814. Goblin Altars
Twine position: `75160,3240`

Four goblins lie on separate altars at the four cardinal directions of the room. They are clearly butchered. It saddens Pela to see non-human blood spilled in a place that will not mourn them. If she was not here, no one would have even known.

Choices:
- Threaten Philip before grief becomes panic. -> Pela Threatens Philip
- Hold the spell ready before speaking. -> Pela Threatens Philip

### 815. Pela Threatens Philip
Twine position: `75380,3240`

"Move and I will annihilate you." Pela's voice booms through the chamber before she has time to decide if the threat is wise. Philip turns slowly.

Choices:
- Hear his calm answer -> Philip Says Talk

### 816. Philip Says Talk
Twine position: `75600,3240`

"I'm not here to fight. We can just talk," Philip says, his tone calm. The calm makes him worse. There is blood on the altars and a book that wants Pela to stop looking at anything else.

Choices:
- Ask about the bodies -> Ask Bodies

### 817. Ask Bodies
Twine position: `75820,3240`

"What do you plan to do with the bodies of these poor people," Pela asks, "and why did you kill them?" Philip's expression does not change quickly enough to count as shame.

Choices:
- Hear what he calls them -> Philip Cruel Answer

### 818. Philip Cruel Answer
Twine position: `76040,3240`

"Well, they can hardly be called people," Philip says. "And, as for what I plan to do with them..." His response nearly makes Pela's blood boil. She forces herself to stay magically ready instead.

Choices:
- Keep anger useful -> Pela Holds Anger

### 819. Pela Holds Anger
Twine position: `76260,3240`

Odelyn already taught her this. Emotions are weapons. That does not mean letting loose her inhibitions and allowing them to take over. Using emotions to cast spells is not the same as letting them cloud judgment.

Choices:
- Give Philip one more chance -> Philip Feastcraft Plan

### 820. Philip Feastcraft Plan
Twine position: `76480,3240`

"You have one more chance to answer me. I'm not in the mood for theatrics." "I plan to use Feastcraft in combination with these goblins to create an unholy abomination," Philip answers. "I figured someone with your stench would understand." He smiles. "Or did you want to join me?"

Choices:
- Demand what he means by stench -> Stench Accusation

### 821. Stench Accusation
Twine position: `76700,3240`

"What do you mean, my stench?! Do you mean because I'm half-demon?" "Members of the Feasting Guild can smell the stench of others who have made deals with our Saint," Philip says. "You smell like the pits of the abyss."

Choices:
- Tell him it is a curse -> Curse Not Pact

### 822. Curse Not Pact
Twine position: `76920,3240`

"I don't know who the Saint of the Feast is, and frankly I don't want to know." "Liar. You are seeking the same book as I, and yet you have the gall to say you know nothing about the Saint? The black stench is basically seeping out of your pores." "It's a curse!" Pela snaps. "I didn't choose this!"

Choices:
- Hear the offer that should not exist -> Philip Offers Deal

### 823. Philip Offers Deal
Twine position: `77140,3240`

"Right. Whatever. I don't have time for this nonsense," Philip says. "The ritual is almost complete, and I will be leaving this pitiful excuse of a country soon." He laughs. Then he stops. "Tell you what. If you let me finish my work in peace, I will give you the book. No. Strings. Attached."

Choices:
- Decide what kind of person gets Feastcraft -> Gerkle Decision

### 824. Gerkle Decision
Twine position: `77360,3240`

Pela looks at Feastcraft. Then at the bodies. Then at Philip. The hunger has an answer. Rage has an answer. Fear has an answer. Pela has to choose which one she is willing to hear.

Choices:
- Accept the deal and take the book. -> Accept Deal
- Reject the deal and stop him. -> Reject Deal
- Tell Philip he talks too much for someone standing near dead bodies (DC Nerve: 14, Spend: 2 Nerve) -> Reject Deal

### 825. Accept Deal
Twine position: `77580,3080`

"Okay," Pela agrees. Her voice sounds hesitant. It should. Philip continues his evil machinations while Pela stands in the corner and feels every second become a stain.

Choices:
- Watch the ritual finish -> Accept Ritual Watching

### 826. Accept Ritual Watching
Twine position: `77800,3080`

The four goblins rise from their altars. For half a heartbeat, Pela thinks they are alive. Then their souls are forcibly taken from their bodies.

Choices:
- Watch them look at Pela -> Goblin Souls Taken

### 827. Goblin Souls Taken
Twine position: `78020,3080`

They look to Pela for a split second as they are ripped from their mortal vessels. The mana of their souls slowly flows into a vial Philip Gerkle holds up. Pela does not move. That is the worst part. Pela just stands there.

Choices:
- Hear what he made -> Stitching Draught

### 828. Stitching Draught
Twine position: `78240,3080`

"It's called the Stitching Draught," Philip explains. "A potion that allows me to change shape. The shape is based on who I consume and their attributes." His voice becomes a cackle. "The more I have, the better."

Choices:
- Let him leave with what he stole -> Philip Leaves Book

### 829. Philip Leaves Book
Twine position: `78460,3080`

Philip leaves the chamber. His laughter echoes throughout the temple. All that remains is Feastcraft. The book she was unwilling to fight for. The book she still had to pay for. The price was dignity, honor, and pride.

Choices:
- Take Feastcraft with hands that feel unclean -> Accept Return Dorm

### 830. Accept Return Dorm
Twine position: `78680,3080`

Pela returns to the dorm with Feastcraft hidden under her arm. The Saint does not congratulate her. It does not need to. The hunger is quiet in the way a fed thing is quiet.

Choices:
- Sleep badly before the Dean's summons -> Philip Deal Return

### 831. Reject Deal
Twine position: `77580,3420`

"No," Pela says. "After what you did to these poor people, I will make sure you pay." Philip's amusement drains away. "Then we will have to fight."

Choices:
- Stop him before he escapes -> Chase Through Temple

### 832. Chase Through Temple
Twine position: `77800,3420`

Philip grabs Feastcraft and runs toward an exit Pela did not notice before. She is hot on his tail, but she has to stop him without hitting the book. The hunger wants her to be careless. Odelyn's lesson refuses.

Choices:
- Become lightning and close the gap -> Become Lightning Grapple

### 833. Become Lightning Grapple
Twine position: `78020,3420`

Pela uses Become Lightning to immediately close the gap. Philip is not prepared for this. She throws him to the ground, grabs the Feastcraft tome from him, and hurls it to a safe distance.

Choices:
- Refuse his attempt to talk -> Flesh Stitch Escape

### 834. Flesh Stitch Escape
Twine position: `78240,3420`

"Stop! Let's talk about this." "No! You don't get to talk your way out of this!" Philip says the words of a spell Pela has never heard before. "Flesh: Stitch." His body becomes malleable, and he escapes from Pela's grasp.

Choices:
- Fight Philip Gerkle -> Philip Battle Begins

### 835. Philip Battle Begins
Tags: `philip-battle`
Twine position: `78460,3420`

Philip Gerkle Boss Battle Pela $pelaHP / 62 Philip $gerkleHP / $gerkleMaxHP Turn $gerkleTurn Focus $gerkleFocus Philip rises wrong. His joints remember being elf-shaped, but the spell has taught them options. Feastcraft lies on the stone at the edge of the chamber. The dead are still dead. The ritual is not finished. Pela has to make that matter.

Choices:
- Begin the fight -> Philip Battle Menu

### 838. Philip Battle Turn
Tags: `philip-battle`
Twine position: `79120,3420`

) + " damage.") $gerkleActionText Pela hits the stone hard enough for Feastcraft to blur. Fall before the ritual ends $gerkleActionText Pela takes $gerkleDamage damage. Keep fighting

Choices:
- Fall before the ritual ends -> Philip Battle Loss
- Keep fighting -> Philip Battle Menu

### 839. Philip Low Sweep
Tags: `philip-battle`
Twine position: `78680,3640`

Pela keeps the fight low and ugly. She sweeps Philip's ankle before his flesh decides it can become something else. The ritual line under his foot breaks for one useful second.

Choices:
- Philip acts -> Philip Battle Turn

### 840. Philip Spark Spear
Tags: `philip-battle`
Twine position: `78900,3640`

Pela's spear forms bright and clean in the corpse-cold chamber. Philip's eyes flick to it too late. The thrust catches him through the shoulder and pins his stitched spellwork in place long enough to hurt.

Choices:
- Philip acts -> Philip Battle Turn

### 841. Philip Lightning Grapple
Tags: `philip-battle`
Twine position: `79120,3640`

Pela becomes lightning before Philip can become another shape. She crosses the room in a white-gold blur and drives him away from Feastcraft. For once, the hunger is not the fastest thing in the chamber.

Choices:
- Philip acts -> Philip Battle Turn

### 842. Philip Defensive Footwork
Tags: `philip-battle`
Twine position: `78680,3860`

Pela watches Philip's feet, then his shadow, then the altar. His magic is not brave enough to move without leaving a trace first. She follows the trace instead of the fear.

Choices:
- Philip acts -> Philip Battle Turn

### 843. Philip Impact Shield
Tags: `philip-battle`
Twine position: `78900,3860`

Pela shapes Belladonna's lesson around her body. Not a wall. A response. If Philip throws many small horrors at her, the shield will answer each one with a little pain of its own.

Choices:
- Philip acts -> Philip Battle Turn

### 844. Philip Brace Against Stitch
Tags: `philip-battle`
Twine position: `79120,3860`

Pela chooses the pain she can survive. She locks her stance and refuses to let Philip's wrong-shaped magic decide where her body belongs.

Choices:
- Philip acts -> Philip Battle Turn

### 845. Philip Read Stitchwork
Tags: `philip-battle`
Twine position: `78680,4080`

Pela stops looking at Philip's face. She watches the stitch-lines in his magic instead. The spell is disgusting, but not incomprehensible. It has rules. It has seams. It has little moments where the body remembers it was never meant to do this.

Choices:
- Philip acts -> Philip Battle Turn

### 846. Philip Steel Oneself
Tags: `philip-battle`
Twine position: `78900,4080`

Pela breathes. The chamber smells like candles, blood, and old stone. She cannot make that less horrible. She can make herself less easy to move.

Choices:
- Philip acts -> Philip Battle Turn

### 847. Philip Disrupt Ritual
Tags: `philip-battle`
Twine position: `79120,4080`

Pela sends Spark through the ritual line instead of Philip's body. The current bites into the circle and turns the spellwork crooked. Philip snarls because the magic still works, but now it has to limp.

Choices:
- Philip acts -> Philip Battle Turn

### 848. Philip Pressure Spark
Tags: `philip-battle`
Twine position: `78680,4300`

Pela compresses Spark into a short-range burst. No flourish. No lecture-room elegance. Just pressure and white current detonating close enough for Philip to stop smiling.

Choices:
- Philip acts -> Philip Battle Turn

### 849. Philip Unclaimed Refusal
Tags: `philip-battle unclaimed`
Twine position: `78900,4300`

Pela feels Feastcraft pull her attention toward itself. She refuses. The refusal becomes motion. The motion becomes a spell that belongs to her, not the hunger.

Choices:
- Philip acts -> Philip Battle Turn

### 850. Philip Feastcraft Rebuke
Tags: `philip-battle eldritch`
Twine position: `79120,4300`

Feastcraft wants. For one terrible second, Pela lets it want in Philip's direction. The book's hunger snaps back through his spellwork, and Philip finally looks offended that the Saint's appetite can recognize more than one disciple.

Choices:
- Philip acts -> Philip Battle Turn

### 851. Philip Battle Won
Tags: `philip-battle`
Twine position: `79340,3420`

Philip collapses near the altar. Feastcraft lies several steps away, untouched by the last burst of Spark. Pela catches him. Defeats him. Then she understands the fight has not given her the part of the answer she wanted.

Choices:
- Decide what happens to Philip Gerkle -> Philip Judgment Choice

### 852. Philip Battle Loss
Tags: `philip-battle`
Twine position: `79340,3640`

Pela wakes with her cheek against stone. Philip is gone. Feastcraft is gone. The goblins remain, which is worse than if the room had been empty. The dead do not accuse her. They do not need to. She failed them without ever learning their names.

Choices:
- Return to the dorm before dawn finds the temple -> Philip Loss Return

### 853. Philip Judgment Choice
Tags: `philip-battle`
Twine position: `79560,3420`

Philip breathes. That is the problem. If Pela lets him go, he will surely kill again. If she kills him, she will have taken a life with her own hands. Brittanica has many answers for what power should do. Pela does not trust any of them.

Choices:
- Do what Brittanica would call necessary. -> Philip Kill Him
- Let the Feast approve the execution (DC Oath: 10, +1 Shame) -> Philip Feast Kill
- Make the choice without giving it to the hunger (DC Self: 3) -> Philip Unclaimed Kill

### 854. Philip Kill Him
Tags: `philip-battle`
Twine position: `79780,3300`

Pela sends sparks flying into Philip's brain. The spell is quick. Not merciful. Quick. The man known as Philip Gerkle is dead. Brittanican professors would be proud of her. Pela does not know if she is proud of herself.

Choices:
- Take Feastcraft from the ground -> Philip Aftermath Book

### 855. Philip Feast Kill
Tags: `philip-battle eldritch`
Twine position: `79780,3460`

Pela kills Philip before she can pretend the Saint did not enjoy the decision. Spark enters his skull. The hunger goes quiet, but not innocent. For one breath, Feastcraft feels pleased with her.

Choices:
- Take Feastcraft from the ground -> Philip Feast Aftermath Book

### 856. Philip Unclaimed Kill
Tags: `philip-battle unclaimed`
Twine position: `79780,3620`

Pela does not ask the hunger what to do. She does not ask Brittanica either. She decides, and the decision is terrible because it is hers. Spark burns through Philip's mind. He dies before he can become another monster someone else explains too late.

Choices:
- Take Feastcraft from the ground -> Philip Unclaimed Aftermath Book

### 857. Philip Aftermath Book
Twine position: `80000,3460`

Pela takes Feastcraft from the ground. The book is heavier than it should be. She leaves the temple before dawn finds her there with a dead man, four murdered goblins, and a story no one in Brittanica would tell correctly.

Choices:
- Return to the dorm before the next summons -> Philip Victory Return

### 858. Daisy To Royal Library
Twine position: `73180,3380`

The music follows Pela back into the street. It should make the city feel softer, but it only makes the silence between buildings easier to notice. If she is going to make the day useful in the way the Academy understands usefulness, then it should at least be somewhere with answers. Somewhere with shelves. Somewhere with enough books that a person can pretend knowledge and safety are the same thing.

Choices:
- Carry the music into the Royal Library -> Library Day Approach

### 859. Daisy Return To Dorm
Twine position: `73620,2240`

Pela returns to the dorm with Daisy's bass still somewhere behind her ribs. The Academy has not become kinder. Torrindale City has not saved her. But for a little while, someone taught her the difference between instruments instead of the difference between people. That matters more than Pela wants to admit. She sleeps easier. Not easy.

Choices:
- Sleep until the roses find her -> Chapter Eight Hook

### 860. Dorm Return To Dream
Twine position: `70100,2720`

Pela has no new book, no city song, and no corpse-cold secret to hide under her bed. Only Odelyn's lesson. Only a room quiet enough for that lesson to stop sounding like a wound and start sounding like instruction. That is not nothing.

Choices:
- Sleep until the roses find her -> Chapter Eight Hook

### 861. Unclaimed Refuse Return
Tags: `unclaimed`
Twine position: `73180,3080`

Pela returns with empty hands. The hunger wanted them filled. That does not make the emptiness holy. It does not make it easy. It only means the chain did not tighten tonight. When she lies down, the room feels almost too quiet, as if even the dark is waiting to see if she regrets refusing it.

Choices:
- Sleep until the roses find her -> Chapter Eight Hook

### 862. Philip Deal Return
Twine position: `78900,3080`

Feastcraft sits where Pela can see it from bed. She thinks about hiding it, then hates that hiding it would feel too much like shame and not enough like caution. She did not save anyone. She got what she came for. That may be the ugliest sentence she knows how to think.

Choices:
- Sleep until the roses find her -> Chapter Eight Hook

### 863. Philip Loss Return
Tags: `philip-battle`
Twine position: `79560,3640`

Pela returns without Feastcraft. Without answers. Without the comfort of saying she did everything she could. Failure is not dramatic. It does not announce itself with thunder or blood bright enough to be beautiful. It follows her into the dorm and sits beside the bed like another person in the room.

Choices:
- Sleep until the roses find her -> Chapter Eight Hook

### 864. Philip Feast Aftermath Book
Tags: `philip-battle eldritch`
Twine position: `80000,3620`

Pela takes Feastcraft from the ground. The book is heavier than it should be, but not in a way that resists her. It feels like something pleased enough to be patient. She leaves the temple before dawn finds her there with a dead man, four murdered goblins, and a hunger that has learned another way to be quiet.

Choices:
- Return to the dorm before the next summons -> Philip Victory Return

### 865. Philip Unclaimed Aftermath Book
Tags: `philip-battle unclaimed`
Twine position: `80000,3780`

Pela takes Feastcraft from the ground. The book does not feel won. It feels taken from a room that should never have existed. Pela holds it anyway, because someone has to hold the evidence, and she refuses to let the hunger be the only thing that remembers what happened here.

Choices:
- Return to the dorm before the next summons -> Philip Victory Return

### 866. Philip Victory Return
Twine position: `80220,3460`

Pela returns with Feastcraft and a dead man's absence following her. She tells herself Philip would have killed again. It may be true. It does not make her hands lighter. By the time she reaches her bed, the book feels less like a prize and more like a door she should not have opened, even if leaving it closed would have been worse.

Choices:
- Sleep until the roses find her -> Chapter Eight Hook

### 867. Post Odelyn Interlude Return To Dream
Twine position: `80220,3460`

By the time Pela returns to her dorm, the day has stopped pretending it was a day off. Whatever she chose follows her inside. The room is quiet. The bed waits. The next summons has not arrived yet. Sleep does.

Choices:
- Sleep until the roses find her -> Chapter Eight Hook

