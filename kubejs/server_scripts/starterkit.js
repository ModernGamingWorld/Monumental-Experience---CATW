// Priority: 3
/**
 * @file        starterkit.js
 * @description Gives new players a starter kit on first login, gated by the
 *              'starting_items' player stage so it only runs once per player.
 *              Armor and items are given after a short delay to ensure the
 *              inventory is fully initialised before writing to it.
 * @copyright   KnightDexx's Modded Minecraft World & ModernGamingWorld
 * @author      @Cyn-SolveroftheAbsoluteGremlins on Discord
 */

PlayerEvents.loggedIn(function(event) {

  var player = event.player

  if (player.stages.has('starting_items')) return

  // Mark stage immediately so a second login before the tick delay can't re-trigger
  player.stages.add('starting_items')

  // --- Armor & offhand (after 1 tick, inventory ready) ---
  event.server.schedule(1, function() {
    player.setHeadArmorItem(Item.of('minecraft:leather_helmet'))
    player.setChestArmorItem(Item.of('minecraft:leather_chestplate'))
    player.setLegsArmorItem(Item.of('minecraft:leather_leggings'))
    player.setFeetArmorItem(Item.of('minecraft:leather_boots'))
    player.setOffHandItem(Item.of('minecraft:shield'))

    // --- Starter items ---
    var defaultKit = [
      Item.of('minecraft:oak_sapling', 4),
      Item.of('minecraft:iron_sword'),
      Item.of('minecraft:iron_pickaxe'),
      Item.of('minecraft:iron_shovel'),
      Item.of('minecraft:iron_axe'),
      Item.of('constructionwand:iron_wand'),
      Item.of('naturescompass:naturescompass'),
      Item.of('prefab:item_house_improved'),
      Item.of('prefab:item_farm_improved'),
      Item.of('minecraft:cookie', 4),
      Item.of('comforts:sleeping_bag_light_blue'),
      Item.of('minecraft:crafting_table'),
      Item.of('minecraft:smithing_table'),
    ]

    defaultKit.forEach(function(item) { player.give(item) })
  })

  // --- Backpack (after 2 ticks, fully initialised) ---
  event.server.schedule(2, function() {
    if (Platform.isLoaded('sophisticatedbackpacks')) {
      player.give(Item.of('sophisticatedbackpacks:backpack'))
    }
  })

})