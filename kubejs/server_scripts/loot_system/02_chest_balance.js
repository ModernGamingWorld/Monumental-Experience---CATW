// Priority: 1
/**
 * @file        02_chest_balance.js
 * @description Removes OP items from all chest loot tables to enforce
 *              progression. Players must craft, not loot, for powerful gear.
 * @modpack     Age of Fate (AOF)
 * @author      KnightDexx
 * @version     1.0
 * @copyright   KnightDexx's Modded Minecraft World
 * @license     All Rights Reserved
 * @link        https://legacy.curseforge.com/minecraft/modpacks/age-of-fate
 */

LootJS.modifiers(event => {

  if (!global.AOF_LOOT.FEATURES.CHEST_BALANCE) {
    console.info('[AOF] Chest Balance: DISABLED (skipping)')
    return
  }

  console.info('[AOF] Chest Balance System v1.0 — removing OP items from all chests...')

  const config = global.AOF_LOOT

  // Helper: apply a removeLoot call to both vanilla and modded chest tables
  const removeFromAllChests = (target) => {
    event.addLootTableModifier(/minecraft:chests\/.*/).removeLoot(target)
    event.addLootTableModifier(/.+:chests\/.*/).removeLoot(target)
  }

  // --- Blacklisted Mods ---
  config.BLACKLIST.MODS.forEach(mod => {
    removeFromAllChests(new RegExp(`${mod}:.*`))
    console.info(`[AOF]   ✓ Removed all items from mod: ${mod}`)
  })

  // --- Specific Blacklisted Items ---
  config.BLACKLIST.ITEMS.forEach(item => {
    removeFromAllChests(item)
    console.info(`[AOF]   ✓ Removed item: ${item}`)
  })

  // --- Pattern-Matched Items (Tools / Weapons / Armor) ---
  config.BLACKLIST.PATTERNS.forEach(pattern => removeFromAllChests(pattern))
  console.info('[AOF]   ✓ Removed all tools/weapons/armor (pattern match)')

  console.info('[AOF] Chest Balance complete — OP gear must now be crafted.')

})
