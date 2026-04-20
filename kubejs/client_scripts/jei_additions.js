// Priority: 1
/**
 * @file JEI - Add Items
 * @description Adds items back into JEI that are hidden by default or missing.
 * @copyright KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 * @modified @Cyn-SolveroftheAbsoluteGremlins on Discord
 */

JEIEvents.addItems(event => {

  const itemsToAdd = [

    // --- Buckets ---
    'aether:skyroot_bucket',
    'botania:open_bucket',
    'blue_skies:ventium_bucket',
    'exdeorum:unfired_porcelain_bucket',
    'exdeorum:porcelain_bucket',
    'minecraft:bucket',
    'minecraft:lava_bucket',
    'minecraft:milk_bucket',
    'minecraft:water_bucket',

    // --- Leaves ---
    'aether:crystal_leaves',

    // --- Chipped (workbenches only; rest of mod is hidden) ---
    'chipped:alchemy_bench',
    'chipped:botanist_workbench',
    'chipped:carpenters_table',
    'chipped:glassblower',
    'chipped:loom_table',
    'chipped:mason_table',
    'chipped:mechanist_workbench',
    'chipped:tinkering_table',

    // --- Rechiseled ---
    'rechiseled:chisel',

    // --- Structurize ---
    'structurize:clay_oak_shingle',
    'structurize:clay_shingle_slab',
    'structurize:double_crossed_oak_oak_timber_frame',
    'structurize:down_gated_oak_oak_timber_frame',
    'structurize:framed_oak_oak_timber_frame',
    'structurize:horizontal_plain_oak_oak_timber_frame',
    'structurize:one_crossed_lr_oak_oak_timber_frame',
    'structurize:one_crossed_rl_oak_oak_timber_frame',
    'structurize:plain_oak_oak_timber_frame',
    'structurize:side_framed_horizontal_oak_oak_timber_frame',
    'structurize:side_framed_oak_oak_timber_frame',
    'structurize:up_gated_oak_oak_timber_frame',

  ]

  itemsToAdd.forEach(i => event.add(i))

  // Uncomment to re-add MCW Bridges spruce bridge pieces:
  // Ingredient.of(/^mcwbridges:.*spruce_(log_bridge_middle|bridge|bridge_pier|bridge_stair)$/).stacks.forEach(s => event.add(s))

})
