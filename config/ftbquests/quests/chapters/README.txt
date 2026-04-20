═══════════════════════════════════════════════════════════════
  COBBLEMON QUEST CHAPTERS — FTB Quests SNBT Files
═══════════════════════════════════════════════════════════════

INSTALLATION
────────────
Copy all 10 .snbt files into:
  config/ftbquests/quests/chapters/

Then run in-game:  /ftbquests reload

CHAPTER GROUP
─────────────
All chapters reference group ID: 1000000000000001

To display them under a named group (e.g. "Cobblemon") in the
FTB Quests book, add the following entry to your
chapter_groups.snbt:

  {
    id: "1000000000000001"
    title: "Cobblemon"
    icon: { id: "cobblemon:poke_ball" }
    order_index: 0
  }

If you don't use chapter groups, you can remove the "group:"
line from each .snbt file — the chapters will still appear
ungrouped in the quest book.

FILES INCLUDED
──────────────
  cobblemon_01_first_steps.snbt           (8 quests)
  cobblemon_02_battle_basics.snbt         (9 quests)
  cobblemon_03_exploration.snbt           (8 quests)
  cobblemon_04_cobblemonrider.snbt        (6 quests)
  cobblemon_05_farmers_nature.snbt        (6 quests)
  cobblemon_06_create_industrial.snbt     (6 quests)
  cobblemon_07_megamons.snbt              (6 quests)
  cobblemon_08_unchained_integrations.snbt(6 quests)
  cobblemon_09_breeding.snbt              (6 quests)
  cobblemon_10_endgame.snbt               (7 quests)

TASK TYPES
──────────
Most quests use "checkmark" tasks — players tick them off
manually when they've completed the objective. A few quests
use "item" tasks where FTB Quests can detect the item in
the player's inventory automatically.

You can open any quest in-game edit mode to change task
types (e.g., to "kill" or "advancement") for stricter
completion detection.

NOTES
─────
• All IDs are unique hex strings — safe to merge with
  existing quest books.
• Rewards use standard Cobblemon item IDs. If your pack
  uses different item registry names, update them in-game
  via the quest editor.
• Quest positions (x/y) create a left-to-right progression
  tree within each chapter.
═══════════════════════════════════════════════════════════════
