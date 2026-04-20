// Priority: 100
/**
 * @file        botanypots.js
 * @description Adds custom tiered Botany Pot recipes (Elite / Ultra / Creative)
 *              and removes the default botanypotstiers recipes they replace.
 *
 * Depends on:
 *   - `botanypotmaterial` array  (defined in startup/constants script)
 *   - `removeRecipeByID(event, ids)` helper (defined in startup/constants script)
 *
 * @copyright   KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 */

ServerEvents.recipes(function(event) {

  botanypotmaterial.forEach(function(material) {

    // -------------------------------------------------------------------------
    // ELITE Botany Pot
    // -------------------------------------------------------------------------

    event.custom({
      type: 'crafting_shaped',
      pattern: ['ABA', 'ACA', ' A '],
      key: {
        A: { tag:  'forge:storage_blocks/compressed_iron' },
        B: { tag:  'forge:ender_pearls' },
        C: { item: 'botanypots:' + material + '_botany_pot' }
      },
      result: { item: 'botanypotstiers:elite_' + material + '_botany_pot', count: 1 }
    }).id('kubejs:elite/' + material + '_botany_pot')

    // -------------------------------------------------------------------------
    // ELITE Hopper Botany Pot
    // -------------------------------------------------------------------------

    event.custom({
      type: 'crafting_shaped',
      pattern: ['ABA', 'ACA', 'DED'],
      key: {
        A: { item: 'minecraft:' + material },
        B: { tag:  'forge:ender_pearls' },
        C: { item: 'botanypotstiers:elite_' + material + '_botany_pot' },
        D: { tag:  'forge:storage_blocks/compressed_iron' },
        E: { tag:  'monumental_recipes:hoppers' }
      },
      result: { item: 'botanypotstiers:elite_' + material + '_hopper_botany_pot', count: 1 }
    }).id('kubejs:elite/' + material + '_hopper_botany_pot')

    // -------------------------------------------------------------------------
    // ULTRA Botany Pot
    // -------------------------------------------------------------------------

    event.custom({
      type: 'crafting_shaped',
      pattern: ['ABA', 'ACA', ' A '],
      key: {
        A: { tag:  'forge:storage_blocks/diamond' },
        B: { tag:  'forge:nether_stars' },
        C: { item: 'botanypotstiers:elite_' + material + '_botany_pot' }
      },
      result: { item: 'botanypotstiers:ultra_' + material + '_botany_pot', count: 1 }
    }).id('kubejs:ultra/' + material + '_botany_pot')

    // -------------------------------------------------------------------------
    // ULTRA Hopper Botany Pot
    // -------------------------------------------------------------------------

    event.custom({
      type: 'crafting_shaped',
      pattern: ['ABA', 'ACA', 'DED'],
      key: {
        A: { item: 'minecraft:' + material },
        B: { tag:  'forge:nether_stars' },
        C: { item: 'botanypotstiers:ultra_' + material + '_botany_pot' },
        D: { tag:  'forge:storage_blocks/diamond' },
        E: { tag:  'monumental_recipes:hoppers' }
      },
      result: { item: 'botanypotstiers:ultra_' + material + '_hopper_botany_pot', count: 1 }
    }).id('kubejs:ultra/' + material + '_hopper_botany_pot')

    // -------------------------------------------------------------------------
    // CREATIVE Botany Pot
    // -------------------------------------------------------------------------

    event.custom({
      type: 'crafting_shaped',
      pattern: ['ABA', 'ACA', ' A '],
      key: {
        A: { tag:  'forge:storage_blocks/netherite' },
        B: { item: 'minecraft:enchanted_golden_apple' },
        C: { item: 'botanypotstiers:ultra_' + material + '_botany_pot' }
      },
      result: { item: 'botanypotstiers:creative_' + material + '_botany_pot', count: 1 }
    }).id('kubejs:creative/' + material + '_botany_pot')

    // -------------------------------------------------------------------------
    // CREATIVE Hopper Botany Pot
    // -------------------------------------------------------------------------

    event.custom({
      type: 'crafting_shaped',
      pattern: ['ABA', 'ACA', 'DED'],
      key: {
        A: { item: 'minecraft:' + material },
        B: { item: 'minecraft:enchanted_golden_apple' },
        C: { item: 'botanypotstiers:creative_' + material + '_botany_pot' },
        D: { tag:  'forge:storage_blocks/netherite' },
        E: { tag:  'monumental_recipes:hoppers' }
      },
      result: { item: 'botanypotstiers:creative_' + material + '_hopper_botany_pot', count: 1 }
    }).id('kubejs:creative/' + material + '_hopper_botany_pot')

    // -------------------------------------------------------------------------
    // Remove default botanypotstiers recipes replaced by the above
    // -------------------------------------------------------------------------

    removeRecipeByID(event, [
      // Elite
      'botanypotstiers:crafting/elite_' + material + '_botany_pot',
      'botanypotstiers:crafting/elite_' + material + '_botany_pot_2',
      'botanypotstiers:crafting/elite_' + material + '_hopper_botany_pot',
      'botanypotstiers:crafting/elite_' + material + '_compact_hopper_botany_pot',
      'botanypotstiers:crafting/elite_' + material + '_compact_hopper_botany_pot_2',
      'botanypotstiers:crafting/elite_' + material + '_compact_hopper_botany_pot_3',
      // Ultra
      'botanypotstiers:crafting/ultra_' + material + '_botany_pot',
      'botanypotstiers:crafting/ultra_' + material + '_botany_pot_2',
      'botanypotstiers:crafting/ultra_' + material + '_hopper_botany_pot',
      'botanypotstiers:crafting/ultra_' + material + '_compact_hopper_botany_pot',
      'botanypotstiers:crafting/ultra_' + material + '_compact_hopper_botany_pot_2',
      'botanypotstiers:crafting/ultra_' + material + '_compact_hopper_botany_pot_3',
      // Creative
      'botanypotstiers:crafting/creative_' + material + '_botany_pot',
      'botanypotstiers:crafting/creative_' + material + '_botany_pot_2',
      'botanypotstiers:crafting/creative_' + material + '_hopper_botany_pot',
      'botanypotstiers:crafting/creative_' + material + '_compact_hopper_botany_pot',
      'botanypotstiers:crafting/creative_' + material + '_compact_hopper_botany_pot_2',
      'botanypotstiers:crafting/creative_' + material + '_compact_hopper_botany_pot_3',
      // Terracotta hardcoded variants (not covered by material loop)
      'botanypotstiers:crafting/elite_terracotta_botany_pot_2',
      'botanypotstiers:crafting/elite_terracotta_hopper_botany_pot',
      'botanypotstiers:crafting/elite_terracotta_compact_hopper_botany_pot_2',
      'botanypotstiers:crafting/elite_terracotta_compact_hopper_botany_pot_3',
      'botanypotstiers:crafting/ultra_terracotta_botany_pot_2',
      'botanypotstiers:crafting/ultra_terracotta_hopper_botany_pot',
      'botanypotstiers:crafting/ultra_terracotta_compact_hopper_botany_pot_2',
      'botanypotstiers:crafting/ultra_terracotta_compact_hopper_botany_pot_3',
      'botanypotstiers:crafting/creative_terracotta_botany_pot_2',
      'botanypotstiers:crafting/creative_terracotta_hopper_botany_pot',
      'botanypotstiers:crafting/creative_terracotta_compact_hopper_botany_pot_2',
      'botanypotstiers:crafting/creative_terracotta_compact_hopper_botany_pot_3',
    ])

  })

})