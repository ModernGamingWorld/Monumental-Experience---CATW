// Priority: 100
/**
 * @file        recipe_correction.js
 * @description Removes and corrects broken or undesirable recipes.
 *              Replaces createdeco zinc sheet input with the forge tag equivalent.
 * @copyright   KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 * @author      @Cyn-SolveroftheAbsoluteGremlins on Discord
 */

ServerEvents.recipes(event => {

  // ---------------------------------------------------------------------------
  // Input Replacement — use forge tag instead of direct item
  // ---------------------------------------------------------------------------

  event.replaceInput(
    { input: 'createdeco:zinc_sheet' },
    'createdeco:zinc_sheet',
    '#forge:plates/zinc'
  )

  // ---------------------------------------------------------------------------
  // Remove Recipes by ID
  // ---------------------------------------------------------------------------

  const removeById = [
    // Forcecraft
    'forcecraft:transmutation/irom_ingot_from_cauldron',

    // Mystical Agriculture / Big Reactors
    'mysticalagriculture:essence/extremereactors2/yellorium_ingot',
    'bigreactors:crafting/yellorium_nugget_to_ingot',

    // Thermal
    'thermal:furnace_1698891930',

    // Tinkers' Construct — Zinc geo-ore melting
    'tconstruct:smeltery/melting/metal/zinc/geore/bud_large',
    'tconstruct:smeltery/melting/metal/zinc/geore/bud_medium',
    'tconstruct:smeltery/melting/metal/zinc/geore/bud_small',
    'tconstruct:smeltery/melting/metal/zinc/geore/cluster',

    // Farmer's Delight — typo in original mod ID (dought → dough)
    'farmersdelight:wheat_dought_from_water_and_flour',

    // All The Compatibility — Botania
    'allthecompatibility:botania/mana_infusion/manasteel_block',

    // All The Compatibility — Cyclic solidifier (multiple metals)
    /allthecompatibility:cyclic\/solidifier\/(allthemodium|copper|lead|osmium|tin|uranium|unobtainium|vibranium)/,

    // All The Compatibility — Cyclic crusher clumps
    /allthecompatibility:cyclic\/crusher\/.*_clump/,

    // All The Compatibility — Botania crystal infusions
    /allthecompatibility:botania\/mana_infusion\/.*_crystal/,
  ]

  removeById.forEach(function(id) { event.remove({ id: id }) })

  // ---------------------------------------------------------------------------
  // Remove Recipes by Output / Input
  // ---------------------------------------------------------------------------

  // Thermal — Netherite gear
  event.remove({ output: 'thermal:netherite_gear' })
  event.remove({ input:  'thermal:netherite_gear' })

  // Thermal — Rose gold gear
  event.remove({ output: 'thermal:rose_gold_gear' })
  event.remove({ input:  'thermal:rose_gold_gear' })

  // Botania — Manasteel block mana infusion (also covered by ID above, belt-and-suspenders)
  event.remove({ output: 'botania:manasteel_block', type: 'botania:mana_infusion' })

})