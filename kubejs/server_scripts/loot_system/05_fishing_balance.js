// Priority: 1
/**
 * @file        05_fishing_balance.js
 * @description Removes OP items from all fishing loot tables.
 *              Balances Aquaculture 2 so players must craft, not fish, for gear.
 *              Neptune's Bounty and neptunium gear now drop from water creatures instead.
 *
 *   🎣 Fishing      → basic materials only
 *   🐟 Water mobs   → neptunium progression
 *   ⚒️  Crafting     → make your own tools
 *
 * @modpack     Age of Fate (AOF)
 * @author      KnightDexx
 * @version     2.0
 * @copyright   KnightDexx's Modded Minecraft World
 * @license     All Rights Reserved
 * @link        https://legacy.curseforge.com/minecraft/modpacks/age-of-fate
 */

LootJS.modifiers(event => {

  if (!global.AOF_LOOT?.FEATURES.FISHING_LOOT) {
    console.info('[AOF] Fishing Balance: DISABLED (skipping)')
    return
  }

  console.info('[AOF] Fishing Balance System v2.0 — removing OP items from fishing loot...')

  const config = global.AOF_LOOT

  const fishingTables = [
    /minecraft:gameplay\/fishing\/.*/,   // Vanilla fishing
    /aquaculture:gameplay\/fishing\/.*/  // Aquaculture 2 fishing
  ]

  // Helper: apply a removeLoot call to all fishing tables
  const removeFromFishing = (target) => {
    fishingTables.forEach(table => {
      event.addLootTableModifier(table).removeLoot(target)
    })
  }

  // --- Blacklisted Mods ---
  if (config.FISHING.USE_CHEST_BLACKLIST) {
    config.BLACKLIST.MODS.forEach(mod => {
      removeFromFishing(new RegExp(`${mod}:.*`))
      console.info(`[AOF]   ✓ Removed all items from mod: ${mod}`)
    })
  }

  // --- Specific Blacklisted Items ---
  if (config.FISHING.USE_CHEST_BLACKLIST) {
    config.BLACKLIST.ITEMS.forEach(item => {
      removeFromFishing(item)
      console.info(`[AOF]   ✓ Removed item: ${item}`)
    })
  }

  // --- Pattern-Matched Items (Tools / Weapons / Armor) ---
  if (config.FISHING.USE_CHEST_BLACKLIST) {
    config.BLACKLIST.PATTERNS.forEach(pattern => removeFromFishing(pattern))
    console.info('[AOF]   ✓ Removed all tools/weapons/armor (pattern match)')
  }

  // --- Aquaculture Extra Blacklist (Neptunium Gear) ---
  if (config.FISHING.EXTRA_BLACKLIST) {
    config.FISHING.EXTRA_BLACKLIST.forEach(item => removeFromFishing(item))
    console.info('[AOF]   ✓ Removed Aquaculture neptunium gear from fishing')
  }

  // --- Neptune's Bounty (now drops from water creatures instead) ---
  removeFromFishing('aquaculture:neptunes_bounty')
  console.info("[AOF]   ✓ Removed Neptune's Bounty from fishing (now drops from water creatures)")

  // --- Vanilla Treasure from Neptunium Fishing ---
  event.addLootTableModifier('aquaculture:gameplay/fishing/neptunium')
    .removeLoot('minecraft:bow')
    .removeLoot('minecraft:fishing_rod')
    .removeLoot('minecraft:enchanted_book')
    .removeLoot('minecraft:name_tag')
    .removeLoot('minecraft:nautilus_shell')
    .removeLoot('minecraft:saddle')
  console.info('[AOF]   ✓ Removed vanilla treasure from neptunium fishing')

  // --- Custom Aquaculture Fish Pool ---
  event.addLootTableModifier('aquaculture:gameplay/fishing/fish')
    .addWeightedLoot(1, [
      Item.of('aquaculture:atlantic_cod').withChance(15),
      Item.of('aquaculture:blackfish').withChance(40),
      Item.of('aquaculture:pacific_halibut').withChance(10),
      Item.of('aquaculture:atlantic_halibut').withChance(8),
      Item.of('aquaculture:atlantic_herring').withChance(60),
      Item.of('aquaculture:pink_salmon').withChance(20),
      Item.of('aquaculture:pollock').withChance(25),
      Item.of('aquaculture:rainbow_trout').withChance(20),
      Item.of('aquaculture:bayad').withChance(20),
      Item.of('aquaculture:boulti').withChance(30),
      Item.of('aquaculture:capitaine').withChance(7),
      Item.of('aquaculture:synodontis').withChance(60),
      Item.of('aquaculture:smallmouth_bass').withChance(30),
      Item.of('aquaculture:bluegill').withChance(60),
      Item.of('aquaculture:brown_trout').withChance(30),
      Item.of('aquaculture:carp').withChance(30),
      Item.of('aquaculture:catfish').withChance(10),
      Item.of('aquaculture:gar').withChance(20),
      Item.of('aquaculture:minnow').withChance(55),
      Item.of('aquaculture:muskellunge').withChance(10),
      Item.of('aquaculture:perch').withChance(60),
      Item.of('aquaculture:arapaima').withChance(8),
      Item.of('aquaculture:piranha').withChance(40),
      Item.of('aquaculture:tambaqui').withChance(20),
      Item.of('aquaculture:brown_shrooma').withChance(50),
      Item.of('aquaculture:red_shrooma').withChance(50),
      Item.of('aquaculture:jellyfish').withChance(30),
      Item.of('aquaculture:red_grouper').withChance(20),
      Item.of('aquaculture:tuna').withChance(10),
      Item.of('aquaculture:leech').withChance(30),
      Item.of('aquaculture:arrau_turtle').withChance(5),
      Item.of('aquaculture:box_turtle').withChance(5),
      Item.of('aquaculture:starshell_turtle').withChance(5),
    ])
  console.info('[AOF]   ✓ Custom Aquaculture fish pool applied')

  console.info('[AOF] Fishing Balance complete.')

})
