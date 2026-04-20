// Priority: 1
/**
 * @file JEI - Hide Items
 * @description Hides clutter, debug tools, creative items, and mod-specific noise from JEI.
 * @copyright KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 */

JEIEvents.hideItems(event => {

  const hide = [

    // --- Debug Tools ---
    'ars_elemental:debug',
    'ars_nouveau:debug',
    'minecraft:debug_stick',
    'sophisticatedstorage:debug_tool',
    'zerocore:debugtool',

    // --- Cake Items ---
    'exdeorum:end_cake',
    'telepastries:end_cake',
    'telepastries:lost_city_cake',
    'telepastries:nether_cake',
    'telepastries:overworld_cake',

    // --- Creative-only Items ---
    'ae2:creative_energy_cell',
    'ars_nouveau:creative_source_jar',
    'botania:infrangible_platform',
    'botania:corporea_spark_creative',
    'buildinggadgets:construction_paste_container_creative',
    'create:creative_fluid_tank',
    'create:creative_crate',
    'create:handheld_worldshaper',
    'cyclic:battery_infinite',
    'mekanism:creative_chemical_tank',
    'mekanism:creative_fluid_tank',
    'mekanism:creative_bin',

    // --- Leaves (all mods) ---
    /^aether:.+_leaves$/,
    /^ad_astra:.+_leaves$/,
    /^allthemodium:.+_leaves$/,
    /^ars_elemental:.+_leaves$/,
    /^ars_nouveau:.+_leaves$/,
    /^bloomingnature:.+_leaves$/,
    /^biomesoplenty:.+_leaves$/,
    /^biomeswevegone:.+_leaves$/,
    /^blue_skies:.+_leaves$/,
    /^cobblemon:.+_leaves$/,
    /^caupona:.+_leaves$/,
    /^culturaldelights:.+_leaves$/,
    /^deeperdarker:.+_leaves$/,
    /^deep_aether:.+_leaves$/,
    /^forestry:.+_leaves$/,
    /^fishofthieves:.+_leaves$/,
    /^forbidden_arcanus:.+_leaves$/,
    /^forcecraft:.+_leaves$/,
    /^hexerei:.+_leaves$/,
    /^meadow:.+_leaves$/,
    /^naturesaura:.+_leaves$/,
    /^occultism:.+_leaves$/,
    'occultism:otherworld_leaves_natural',
    /^sushigocrafting:.+_leaves$/,
    /^tconstruct:.+_leaves$/,
    /^thermal:.+_leaves$/,
    /^twilightforest:.+_leaves$/,
    /^undergarden:.+_leaves$/,
    /^upgrade_aquatic:.+_leaves$/,
    /^vinery:.+_leaves$/,
    /^quark:.+_leaves$/,

    // --- Miscellaneous Clutter ---
    /ae2:facade/,
    /^doggytalents:dog_bed$/,
    /^ftbquests:.+/,
    /^forcecraft:.+_flask$/,
    /^gendustry:.+gene_/,
    /^iron_bushes:.+_fragment$/,
    /^iron_bushes:.+_bush_seed$/,
    /^iron_bushes:.+_covered_leaves$/,
    /^immersiveposts:(stick)_(copper|gold|lead|silver|nickel|constantan|electrum|uranium)$/,
    /^majruszsdifficulty:.+_treasure_bag$/,
    /^quark:ancient_tome$/,
    /^quark:backpack$/,
    /^quark:.+_pouch$/,
    /^quark:.+_shard$/,
    /^quark:.+_crystal_cluster$/,
    /^reliquary:bullets\/neutral_bullet$/,
    /^reliquary:magazines\/neutral_magazine$/,
    /^tombstone:.*_of_/,
    /^twilightforest:.*_force_field$/,
    /^twilightforest:.*_castle_door$/,
    /^twilightforest:.*_cloud$/,
    /^tconstruct:.*potion$/,

    // --- Ore Items ---
    'deep_aether:skyjade_ore',
    'undergarden:depthrock_cloggrum_ore',
    'undergarden:shiverstone_cloggrum_ore',
    'undergarden:depthrock_froststeel_ore',

    // --- Tinkers' Construct (JEI clog) ---
    /tconstruct:repair_kit/,
    /tconstruct:.*_axe/,
    /tconstruct:.*_head/,
    /tconstruct:.*_blade/,
    /tconstruct:tool_.*/,
    /tconstruct:tough_.*/,
    /tconstruct:.*bow.*/,
    /tconstruct:arrow_.*/,
    /tconstruct:fletching/,
    /tconstruct:.*_plating/,
    /tconstruct:maille/,
    /tconstruct:shield_core/,
    /tconstruct:.*_staff/,
    /tconstruct:pickaxe/,
    /tconstruct:pickadze/,
    /tconstruct:mattock/,
    /tconstruct:kama/,
    /tconstruct:dagger/,
    /tconstruct:sword/,
    /tconstruct:.*_hammer/,
    /tconstruct:excavator/,
    /tconstruct:scythe/,
    /tconstruct:cleaver/,
    /tconstruct:fishing_rod/,
    /tconstruct:javelin/,
    /tconstruct:arrow/,
    /tconstruct:shuriken/,
    /tconstruct:melting_pan/,
    /tconstruct:war_pick/,
    /tconstruct:battlesign/,
    /tconstruct:swasher/,

    // --- Twilight Forest ---
    'twilightforest:antibuilder',
    'twilightforest:aurora_block',
    'twilightforest:auroralized_glass',
    'twilightforest:blue_castle_rune_brick',
    'twilightforest:brown_thorns',
    'twilightforest:burnt_thorns',
    'twilightforest:candelabra',
    'twilightforest:castle_brick',
    'twilightforest:castle_roof_tile',
    'twilightforest:cicada',
    'twilightforest:deadrock',
    'twilightforest:death_tome_spawner',
    'twilightforest:etched_nagastone',
    'twilightforest:fire_jet',
    'twilightforest:firefly',
    'twilightforest:ghast_trap',
    'twilightforest:giant_cobblestone',
    'twilightforest:giant_log',
    'twilightforest:giant_obsidian',
    'twilightforest:green_throns',
    'twilightforest:hedge',
    'twilightforest:huge_mushgloom',
    'twilightforest:huge_mushgloom_stem',
    'twilightforest:huge_stalk',
    'twilightforest:keepsake_casket',
    'twilightforest:lich_tower_miniature_structure',
    'twilightforest:locked_vanishing_block',
    'twilightforest:mazestone',
    'twilightforest:mining_log_core',
    'twilightforest:moonworm',
    'twilightforest:naga_courtyard_miniature_structure',
    'twilightforest:nagastone',
    'twilightforest:nagastone_head',
    'twilightforest:pink_castle_rune_brick',
    'twilightforest:smoker',
    'twilightforest:sorting_log_core',
    'twilightforest:stronghold_shield',
    'twilightforest:time_log_core',
    'twilightforest:transformation_log_core',
    'twilightforest:trophy_pedestal',
    'twilightforest:trollber',
    'twilightforest:trollsteinn',
    'twilightforest:trollvidr',
    'twilightforest:twilight_portal_miniature_structure',
    'twilightforest:uberous_soil',
    'twilightforest:uncrafting_table',
    'twilightforest:underbrick',
    'twilightforest:unripe_trollber',
    'twilightforest:violet_castle_rune_brick',
    'twilightforest:wrought_iron_fence',
    'twilightforest:yellow_castle_rune_brick',

    // --- Buckets, Spawn Eggs, Tipped Arrows ---
    /.*:.*tipped_arrow.*/,
    /.*:.*bucket.*/,
    /.*:.*spawn_egg.*/,
    /occultism:.*debug.*/,
    /^cnb:.+_egg$/,
    'hunterillager:spawnegg_hunterillager',
    'inventorypets:easter_egg',
    /twilightforest:.*boss_spawner/,

    // --- Entire Mods ---
    '@additionalbanners',
    '@conjurer_illager',
    '@chipped',
    '@rechiseled',
    '@pickletweaks',
    '@obtrophies',
    '@wandering_trapper',

  ]

  event.hide(hide)

  // --- Refined Storage: Colored Machines ---
  const rsMachines = [
    'controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid',
    'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector',
    'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter',
    'crafter_manager', 'crafting_monitor',
  ]

  Color.DYE.forEach(color => {
    rsMachines.forEach(machine => {
      event.hide(`refinedstorage:${color}_${machine}`)
    })
  })

})
