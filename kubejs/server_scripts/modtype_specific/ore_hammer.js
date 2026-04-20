// Priority: 100
/**
 * @file        ore_hammer.js
 * @description Replaces AllTheOres ore hammer recipes with manual-only shapeless/shaped
 *              versions. Covers dusts, rods, plates, gems, gem dusts, alloys, and stone bricks.
 * @copyright   KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 * @author      @Cyn-SolveroftheAbsoluteGremlins on Discord
 */

ServerEvents.recipes(function(event) {

  var hammer = '#alltheores:ore_hammers'

  // ---------------------------------------------------------------------------
  // Configuration
  // ---------------------------------------------------------------------------

  var dustMats = [
    { mat: 'nickel',     mod: 'alltheores' },
    { mat: 'tin',        mod: 'alltheores' },
    { mat: 'platinum',   mod: 'alltheores' },
    { mat: 'lead',       mod: 'alltheores' },
    { mat: 'osmium',     mod: 'alltheores' },
    { mat: 'iridium',    mod: 'alltheores' },
    { mat: 'silver',     mod: 'alltheores' },
    { mat: 'aluminum',   mod: 'alltheores' },
    { mat: 'zinc',       mod: 'alltheores' },
    { mat: 'uranium',    mod: 'alltheores' },
    { mat: 'gold',       mod: 'minecraft'  },
    { mat: 'iron',       mod: 'minecraft'  },
    { mat: 'copper',     mod: 'minecraft'  },
    { mat: 'allthemodium',  mod: 'allthemodium' },
    { mat: 'vibranium',     mod: 'allthemodium' },
    { mat: 'unobtainium',   mod: 'allthemodium' },
    { mat: 'desh',     mod: 'moremekanismprocessing', add: 'ad_astra' },
    { mat: 'ostrum',   mod: 'moremekanismprocessing', add: 'ad_astra' },
    { mat: 'calorite', mod: 'moremekanismprocessing', add: 'ad_astra' },
  ]

  var rodPlateMats = [
    'electrum', 'platinum', 'gold',     'lumium',   'silver',   'osmium',
    'constantan', 'uranium', 'lead',    'diamond',  'brass',    'invar',
    'enderium', 'iridium',  'zinc',     'iron',     'nickel',   'signalum',
    'copper',   'tin',      'aluminum', 'steel',    'bronze',
    'ostrum',   'desh',     'calorite',
  ]

  var gemMats = ['peridot', 'sapphire', 'ruby']

  var gemDustMats = ['peridot', 'ruby', 'sapphire', 'diamond', 'netherite']

  // ---------------------------------------------------------------------------
  // Dust Recipes
  // ---------------------------------------------------------------------------

  dustMats.forEach(function(d) {
    var raw, dustItem

    if (d.mod === 'moremekanismprocessing') {
      raw      = d.add + ':raw_' + d.mat
      dustItem = d.mod + ':dust_' + d.mat
      // Note: no event.remove here — original code skipped removal for this branch too
    } else if (d.mod === 'allthemodium') {
      raw      = d.mod + ':raw_' + d.mat
      dustItem = d.mod + ':' + d.mat + '_dust'
      // BUG FIX: original used duplicate `input` keys in one object — only last key was read.
      // Split into two separate remove calls so both inputs are actually checked.
      event.remove({ input: raw,    output: dustItem })
      event.remove({ input: hammer, output: dustItem })
    } else {
      raw      = d.mod + ':raw_' + d.mat
      dustItem = 'alltheores:' + d.mat + '_dust'
      // BUG FIX: same duplicate input key issue as above — split into two calls.
      event.remove({ input: raw,    output: dustItem })
      event.remove({ input: hammer, output: dustItem })
    }

    event.shapeless(Item.of(dustItem, 2), [hammer, raw])
      .id('kubejs:' + d.mat + '_dust_from_hammer_crushing_manual_only')
  })

  // ---------------------------------------------------------------------------
  // Rod & Plate Recipes
  // ---------------------------------------------------------------------------

  rodPlateMats.forEach(function(mat) {
    var isSpaceMat  = mat === 'desh' || mat === 'ostrum' || mat === 'calorite'
    var isDiamond   = mat === 'diamond'
    var ingotInput  = isDiamond ? 'minecraft:' + mat : '#forge:ingots/' + mat

    if (isSpaceMat) {
      // Space metals (Ad Astra) — plate only, no rod
      var plate = 'ad_astra:' + mat + '_plate'
      event.shaped(Item.of(plate), ['ha ', 'a  ', '   '], { a: ingotInput, h: hammer })
        .id('kubejs:' + mat + '_plate_manual_only')
      event.remove({ input: hammer, output: plate })

    } else {
      // All other metals — rod + plate
      var rodOut   = 'alltheores:' + mat + '_rod'
      var plateOut = 'alltheores:' + mat + '_plate'

      event.shaped(Item.of(rodOut),   ['  a', 'ha ', '   '], { a: ingotInput, h: hammer })
        .id('kubejs:' + mat + '_rod_manual_only')
      event.remove({ input: hammer, output: rodOut })

      event.shaped(Item.of(plateOut), ['ha ', 'a  ', '   '], { a: ingotInput, h: hammer })
        .id('kubejs:' + mat + '_plate_manual_only')
      event.remove({ input: hammer, output: plateOut })
    }
  })

  // ---------------------------------------------------------------------------
  // Gem Recipes (ore → 3x gem)
  // ---------------------------------------------------------------------------

  gemMats.forEach(function(ge) {
    var oreInput = '#forge:ores/' + ge
    var gemOut   = 'alltheores:' + ge
    event.shapeless(Item.of(gemOut, 3), [hammer, oreInput])
      .id('kubejs:' + ge + '_from_hammer_crushing_manual_only')
    // BUG FIX: same duplicate input key issue — split into two remove calls.
    event.remove({ input: oreInput, output: gemOut })
    event.remove({ input: hammer,   output: gemOut })
  })

  // ---------------------------------------------------------------------------
  // Gem Dust Recipes
  // ---------------------------------------------------------------------------

  gemDustMats.forEach(function(ge) {
    var isNetherite = ge === 'netherite'
    var gemInput    = isNetherite ? '#forge:ingots/' + ge : '#forge:gems/' + ge
    var dustOut     = isNetherite ? 'thermal:' + ge + '_dust' : 'alltheores:' + ge + '_dust'
    event.shapeless(Item.of(dustOut), [hammer, gemInput])
      .id('kubejs:' + ge + '_dust_from_hammer_crushing_manual_only')
    // BUG FIX: same duplicate input key issue — split into two remove calls.
    event.remove({ input: gemInput, output: dustOut })
    event.remove({ input: hammer,   output: dustOut })
  })

  // ---------------------------------------------------------------------------
  // Allthemodium Stone Bricks
  // ---------------------------------------------------------------------------

  event.shapeless(Item.of('allthemodium:ancient_chiseled_stone_bricks'), [hammer, 'allthemodium:ancient_cracked_stone_bricks'])
    .id('kubejs:ancient_chiseled_stone_bricks_from_crushing_manual_only')

  event.shapeless(Item.of('allthemodium:ancient_cracked_stone_bricks'), [hammer, 'allthemodium:ancient_stone_bricks'])
    .id('kubejs:ancient_cracked_stone_bricks_from_crushing_manual_only')

  // ---------------------------------------------------------------------------
  // Alloy Blending — Enderium Dust & Steel Dust
  // ---------------------------------------------------------------------------

  event.shaped(Item.of('alltheores:enderium_dust', 4), [
    'lll',
    'pee',
    'h  '
  ], {
    l: '#forge:dusts/lead',
    h: hammer,
    e: 'minecraft:ender_pearl',
    p: '#forge:dusts/platinum'
  }).id('kubejs:enderium_dust_from_alloy_blending_manual_only')

  event.shaped(Item.of('alltheores:steel_dust'), [
    'dcc',
    'cch',
    '   '
  ], {
    d: '#forge:dusts/iron',
    h: hammer,
    c: 'minecraft:coal'
  }).id('kubejs:steel_dust_from_alloy_blending_manual_only')

  // ---------------------------------------------------------------------------
  // Remove Default Recipes
  // ---------------------------------------------------------------------------

  var removeById = [
    'alltheores:steel_dust_from_alloy_blending',
    'alltheores:enderium_dust_from_alloy_blending',
    'allthemodium:ancient_cracked_stone_bricks_from_crushing',
    'allthemodium:ancient_chiseled_stone_bricks_from_crushing',
    'ad_astra:steel_rod',
    'ad_astra:iron_rod',
    'buildersaddition:iron_rod',
  ]

  removeById.forEach(function(id) {
    event.remove({ id: id })
  })

})