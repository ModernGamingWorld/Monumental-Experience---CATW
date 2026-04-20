// Priority: 2
/**
 * @file        tags.js
 * @description Adds, removes, and fixes item/block/fluid/entity/biome tags
 *              for cross-mod compatibility across the modpack.
 * @copyright   KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 * @author      @Cyn-SolveroftheAbsoluteGremlins on Discord
 */

// ---------------------------------------------------------------------------
// Item Tags
// ---------------------------------------------------------------------------

ServerEvents.tags('item', function(e) {

  // --- Basic Fixes & Additions ---

  e.add('forge:cheese', '#forge:cheeses')
  e.add('forge:cheese/sweet', [
    'tconstruct:cheese_ingot',
    'ad_astra:cheese',
    'croptopia:cheese',
    'thermal:cheese_wedge',
    'refurbished_furniture:cheese',
    'brewinandchewin:flaxen_cheese_wedge',
    'brewinandchewin:scarlet_cheese_wedge',
  ])
  e.add('forge:sugar', 'minecraft:sugar')
  e.add('forge:ingots/crystaltine', 'extendedcrafting:crystaltine_ingot')
  e.add('forge:storage_blocks/raw_cinnabar', '#forge:storage_blocks/cinnabar')
  e.add('forge:wooden_grip', 'immersiveengineering:wooden_grip')
  e.add('thermal:rubberwood_logs', '#forge:rubberwood_logs')
  e.add('letsdo_addon_compat:tools/knives', '#forge:tools/knives')
  e.add('forge:nuggets/ender_pearl', [
    'inventorypets:nugget_ender',
    'opolisutilities:ender_pearl_fragment',
  ])
  e.add('forge:hot_spice', 'thermal:tomato_sauce')
  e.add('minecraft:prismarine_shard', 'minecraft:prismarine_shard')
  e.add('vinery:dark_cherry_logs', [
    'vinery:stripped_dark_cherry_log',
    'vinery:dark_cherry_log',
    'vinery:stripped_dark_cherry_wood',
    'vinery:dark_cherry_wood',
  ])

  // --- Tag Removals ---
  e.removeAllTagsFrom(/alltheores:dirty_(copper|nickel|osmium|platinum|tin|uranium|zinc)_dust/)
  e.removeAllTagsFrom(/alltheores:(copper|nickel|osmium|platinum|tin|uranium|zinc)_shard/)
  e.removeAllTagsFrom(/alltheores:(copper|nickel|osmium|platinum|tin|uranium|zinc)_crystal/)
  e.removeAllTagsFrom(/alltheores:(copper|nickel|osmium|platinum|tin|uranium|zinc)_clump/)
  e.removeAllTagsFrom(/mekanism:crystal_lead/)
  e.removeAllTagsFrom(/mekanism:shard_lead/)
  e.removeAllTagsFrom(/mekanism:clump_lead/)
  e.removeAllTagsFrom(/mekanism:dirty_dust_lead/)

  var cullMats = ['aluminum', 'iridium', 'silver']
  cullMats.forEach(function(mat) {
    e.removeAllTagsFrom('moremekanismprocessing:crystal_'    + mat)
    e.removeAllTagsFrom('moremekanismprocessing:shard_'      + mat)
    e.removeAllTagsFrom('moremekanismprocessing:clump_'      + mat)
    e.removeAllTagsFrom('moremekanismprocessing:dirty_dust_' + mat)
  })

  e.removeAllTagsFrom('enderio:powdered_cobalt')

  // --- Ore Processing Tags (crystals / shards / clumps / dusts) ---

  var oreMats = [
    { mat: 'copper',       modAdd: 'mekanism'               },
    { mat: 'gold',         modAdd: 'mekanism'               },
    { mat: 'iron',         modAdd: 'mekanism'               },
    { mat: 'osmium',       modAdd: 'mekanism'               },
    { mat: 'tin',          modAdd: 'mekanism'               },
    { mat: 'uranium',      modAdd: 'mekanism'               },
    { mat: 'allthemodium', modAdd: 'allthemodium'           },
    { mat: 'unobtainium',  modAdd: 'allthemodium'           },
    { mat: 'vibranium',    modAdd: 'allthemodium'           },
    { mat: 'lead',         modAdd: 'alltheores'             },
    { mat: 'aluminum',     modAdd: 'alltheores'             },
    { mat: 'iridium',      modAdd: 'alltheores'             },
    { mat: 'silver',       modAdd: 'alltheores'             },
    { mat: 'platinum',     modAdd: 'moremekanismprocessing' },
    { mat: 'zinc',         modAdd: 'moremekanismprocessing' },
    { mat: 'nickel',       modAdd: 'moremekanismprocessing' },
    { mat: 'desh',         modAdd: 'moremekanismprocessing' },
    { mat: 'ostrum',       modAdd: 'moremekanismprocessing' },
    { mat: 'calorite',     modAdd: 'moremekanismprocessing' },
    { mat: 'cobalt',       modAdd: 'moremekanismprocessing' },
    { mat: 'sapphire',     modAdd: 'moremekanismprocessing' },
    { mat: 'ruby',         modAdd: 'moremekanismprocessing' },
    { mat: 'peridot',      modAdd: 'moremekanismprocessing' },
    { mat: 'sulfur',       modAdd: 'moremekanismprocessing' },
    { mat: 'apatite',      modAdd: 'moremekanismprocessing' },
    { mat: 'cinnabar',     modAdd: 'moremekanismprocessing' },
    { mat: 'niter',        modAdd: 'moremekanismprocessing' },
  ]

  oreMats.forEach(function(o) {
    var m = o.modAdd
    var mat = o.mat
    e.add('forge:crystals',              m + ':crystal_'    + mat)
    e.add('forge:crystals/'    + mat,    m + ':crystal_'    + mat)
    e.add('forge:shards',                m + ':shard_'      + mat)
    e.add('forge:shards/'      + mat,    m + ':shard_'      + mat)
    e.add('forge:clumps',                m + ':clump_'      + mat)
    e.add('forge:clumps/'      + mat,    m + ':clump_'      + mat)
    e.add('forge:dirty_dusts',           m + ':dirty_dust_' + mat)
    e.add('forge:dirty_dusts/' + mat,    m + ':dirty_dust_' + mat)
    e.add('forge:dusts',                 m + ':dust_'       + mat)
    e.add('forge:dusts/'       + mat,    m + ':dust_'       + mat)
    
    e.add('forge:crystals',              m + ':' + mat + '_crystal')
    e.add('forge:crystals/'    + mat,    m + ':' + mat + '_crystal')
    e.add('forge:shards',                m + ':' + mat + '_shard')
    e.add('forge:shards/'      + mat,    m + ':' + mat + '_shard')
    e.add('forge:clumps',                m + ':' + mat + '_clump')
    e.add('forge:clumps/'      + mat,    m + ':' + mat + '_clump')
    e.add('forge:dirty_dusts',           m + ':dirty_' + mat + '_dust')
    e.add('forge:dirty_dusts/' + mat,    m + ':dirty_' + mat + '_dust')
    e.add('forge:dusts',                 m + ':' + mat + '_dust')
    e.add('forge:dusts/'       + mat,    m + ':' + mat + '_dust')
  })

  e.remove('minecraft:coals', 'immersiveengineering:coal_coke')
  e.remove('forge:all_hammers', ['#immersiveengineering:tools/hammers'])
  e.remove('forge:tools/wrench', ['immersiveengineering:hammer'])

  // --- Stones ---

  e.add('forge:end_stones', [
    '#chipped:end_stone',
    'rechiseled:end_stone_blobs',
    'rechiseled:end_stone_chiseled',
    'rechiseled:end_stone_crushed',
    'rechiseled:end_stone_diagonal_bricks',
    'rechiseled:end_stone_mesh',
    'rechiseled:end_stone_paving',
    'rechiseled:end_stone_polished',
    'rechiseled:end_stone_scales',
    'rechiseled:end_stone_small_tiles',
    'rechiseled:end_stone_spiral_pattern',
    'rechiseled:end_stone_squares',
    'rechiseled:end_stone_tiles',
  ])

  e.add('forge:netherrack', [
    'quark:netherrack_bricks',
    'rechiseled:netherrack_beams',
    'rechiseled:netherrack_bricks',
    'rechiseled:netherrack_dented',
    'rechiseled:netherrack_small_tiles',
    'rechiseled:netherrack_stripes',
    'rechiseled:netherrack_tiles',
    '#chipped:netherrack',
  ])

  e.add('forge:obsidian', [
    'rechiseled:obsidian_bordered',
    'rechiseled:obsidian_bricks',
    'rechiseled:obsidian_chiseled',
    'rechiseled:obsidian_chiseled_circles',
    'rechiseled:obsidian_chiseled_creeper',
    'rechiseled:obsidian_chiseled_skeleton',
    'rechiseled:obsidian_dark',
    'rechiseled:obsidian_large_tiles',
    'rechiseled:obsidian_spots',
    'rechiseled:obsidian_squares',
    'rechiseled:obsidian_stripes',
    'rechiseled:obsidian_tiles',
    '#chipped:obsidian',
  ])

  // --- Tools ---

  e.add('forge:tools/pickaxes', [
    'blue_skies:bluebright_pickaxe',    'blue_skies:lunar_pickaxe',
    'blue_skies:starlit_pickaxe',       'blue_skies:dusk_pickaxe',
    'blue_skies:frostbright_pickaxe',   'blue_skies:maple_pickaxe',
    'blue_skies:turquoise_stone_pickaxe', 'blue_skies:lunar_stone_pickaxe',
    'blue_skies:pyrope_pickaxe',        'blue_skies:aquite_pickaxe',
    'blue_skies:diopside_pickaxe',      'blue_skies:charoite_pickaxe',
    'blue_skies:horizonite_pickaxe',
    'gobber2:gobber2_pickaxe',          'gobber2:gobber2_pickaxe_nether',
    'gobber2:gobber2_pickaxe_end',
  ])

  // --- Clocks ---

  var clockTypes = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'cuckoo', 'clock']
  clockTypes.forEach(function(type) {
    e.add('forge:clocks', [
      'furniture:'      + type + '_clock',
      'cyclic:'         + type,
      'furniture:'      + type + '_grandfather_clock',
      'create:'         + type + '_clock',
      'supplementaries:' + type + '_block',
    ])
  })

  // --- Planks ---

  e.add('forge:planks/mangrove', 'minecraft:mangrove_planks')

  var twilightWoodTypes = ['transformation', 'dark', 'sorting', 'twilight_oak', 'canopy', 'time', 'mining']
  twilightWoodTypes.forEach(function(type) {
    e.add('forge:planks/' + type, 'twilightforest:' + type + '_planks')
  })

  // --- Hexerei Logs ---

  var hexLogs = ['mahogany', 'willow', 'witch_hazel']
  hexLogs.forEach(function(log) {
    e.add('hexerei:' + log + '_logs', [
      'hexerei:' + log + '_log',
      'hexerei:stripped_' + log + '_log',
      'hexerei:' + log + '_wood',
      'hexerei:stripped_' + log + '_wood',
    ])
  })

  // --- Botania Quartz ---

  var bQuartz = ['dark', 'mana', 'blaze', 'lavender', 'red', 'elven', 'sunny']
  bQuartz.forEach(function(type) {
    e.add('botania:all_quartz', 'botania:quartz_' + type)
  })

  // --- MythicBotany ---

  e.add('forge:raw_materials/elementium',      'mythicbotany:raw_elementium')
  e.add('forge:storage_blocks/raw_elementium', 'mythicbotany:raw_elementium_block')

  // --- Log Fixes (stems → logs aliases) ---

  e.add('minecraft:crimson_logs',                      '#minecraft:crimson_stems')
  e.add('minecraft:warped_logs',                       '#minecraft:warped_stems')
  e.add('securitycraft:reinforced/crimson_logs',       '#securitycraft:reinforced/crimson_stems')
  e.add('securitycraft:reinforced/warped_logs',        '#securitycraft:reinforced/warped_stems')
  e.add('twilightforest:dark_logs',                    '#twilightforest:darkwood_logs')
  e.add('twilightforest:time_logs',                    '#twilightforest:timewood_logs')
  e.add('twilightforest:transformation_logs',          '#twilightforest:transwood_logs')
  e.add('twilightforest:sorting_logs',                 '#twilightforest:sortwood_logs')

  // --- Pebbles ---

  pebble.forEach(function(peb) {
    e.add('kubejs:' + peb + '_pebbles', [
      'exdeorum:' + peb + '_pebble',
      'havenpebbles:' + peb + '_pebble',
    ])
  })

  e.add('actuallyadditions:tinycoal', [
    'opolisutilities:mini_charcoal',
    'inventorypets:nugget_coal',
  ])

  e.add('forge:stone_pebbles',     'strainers:stone_pebble')
  e.add('forge:deepslate_pebbles', 'strainers:deepslate_pebble')

})

// ---------------------------------------------------------------------------
// Block Tags
// ---------------------------------------------------------------------------

ServerEvents.tags('block', function(e) {

  e.add('buildinggadgets:blacklist/generic', '#forge:relocation_not_supported')
  e.add('forge:relocation_not_supported', [
    'minecraft:beehive',
    'minecraft:bee_nest',
    '@waystones',
  ])
  e.add('entangled:invalid_targets', ['@ae2', '@refinedstorage', '@extrastorage'])

})

// ---------------------------------------------------------------------------
// Fluid Tags
// ---------------------------------------------------------------------------

ServerEvents.tags('fluid', function(e) {

  e.remove('minecraft:water', ['createaddition:flowing_seed_oil', 'createaddition:seed_oil'])

})

// ---------------------------------------------------------------------------
// Entity Type Tags
// ---------------------------------------------------------------------------

ServerEvents.tags('entity_type', function(e) {

  e.add('kubejs:mob_blacklist', ['artifacts:mimic', 'minecraft:iron_golem'])
  e.add('industrialforegoing:mob_duplicator_blacklist', '#kubejs:mob_blacklist')
  e.add('ars_nouveau:drygmy_blacklist', 'artifacts:mimic')

})

// ---------------------------------------------------------------------------
// Biome Tags
// ---------------------------------------------------------------------------

ServerEvents.tags('worldgen/biome', function(e) {

  e.add('botania:mystical_flower_spawnlist', 'allthemodium:mining')
  e.add('botania:mystical_mushroom_spawnlist', [
    'allthemodium:the_other',
    'allthemodium:soul_sand_valley',
    'allthemodium:warped_forest',
    'allthemodium:desert_hills',
    'allthemodium:desert',
    'allthemodium:crimson_forest',
    'allthemodium:basalt_deltas',
  ])

})