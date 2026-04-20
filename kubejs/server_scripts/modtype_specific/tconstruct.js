// Priority: 100
/**
 * @file        tconstruct.js
 * @description Tinkers' Construct smeltery tweaks:
 *                - Adds a gear cast recipe using molten gold
 *                - Removes alloy/raw smelting for unused metals
 *                - Removes all recipes for chromium, bendalloy, cadmium, nicrosil, duralumin
 * @copyright   KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 * @author      @Cyn-SolveroftheAbsoluteGremlins on Discord
 */

ServerEvents.recipes(function(event) {

  // ---------------------------------------------------------------------------
  // Add Gear Cast Recipe (molten gold → gear cast)
  // ---------------------------------------------------------------------------

  event.custom({
    type: 'tconstruct:casting_table',
    cast: { tag: 'forge:gears' },
    cast_consumed: true,
    conditions: [{ type: 'mantle:tag_filled', tag: 'forge:gears' }],
    cooling_time: 57,
    fluid: { amount: 90, tag: 'forge:molten_gold' },
    result: 'tconstruct:gear_cast',
    switch_slots: true
  }).id('kubejs:smeltery/casts/gold/gear')

  // ---------------------------------------------------------------------------
  // Remove Smeltery Recipes
  // ---------------------------------------------------------------------------

  var removeById = [
    // Alloys with no raw ore (brass, pewter, electrum, steel)
    'tconstruct:smeltery/melting/metal/brass/raw_block',
    'tconstruct:smeltery/melting/metal/brass/raw',
    'tconstruct:smeltery/melting/metal/pewter/raw_block',
    'tconstruct:smeltery/melting/metal/pewter/raw',
    'tconstruct:smeltery/melting/metal/electrum/raw_block',
    'tconstruct:smeltery/melting/metal/electrum/raw',
    'tconstruct:smeltery/melting/metal/steel/raw_block',
    'tconstruct:smeltery/melting/metal/steel/raw',
    // Unused alloy
    'tconstruct:smeltery/alloys/molten_nicrosil',
    // Sparse and dense ore variants (all metals)
    /tconstruct:smeltery\/melting\/metal\/.*\/ore_sparse/,
    /tconstruct:smeltery\/melting\/metal\/.*\/ore_dense/,
    // Unused mod metals (all recipes)
    /^.*chromium.*/,
    /^.*bendalloy.*/,
    /^.*cadmium.*/,
    /^.*nicrosil.*/,
    /^.*duralumin.*/,
  ]

  removeById.forEach(function(id) {
    event.remove({ id: id })
  })

})