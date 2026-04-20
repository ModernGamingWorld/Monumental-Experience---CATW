// Priority: 10
/**
 * @file        clear_weather.js
 * @description When a player sleeps in the Twilight Forest during rain or a storm,
 *              schedules a weather clear in the Overworld after 100 ticks.
 *              Duration is randomised between 3–7 in-game days.
 * @copyright   KnightDexx's Modded Minecraft World & ModernGamingWorld
 */

BlockEvents.rightClicked(function(event) {

  if (!event.entity.isPlayer() || event.entity.isFake()) return

  var dimension = String(event.level.getDimension())

  if (dimension !== 'twilightforest:twilight_forest') return
  if (!event.level.isRaining && !event.level.isThundering) return

  // BUG FIX: original regex used `hammock_` (trailing underscore) which would never
  // match 'comforts:hammock' — changed to `hammock` without the underscore.
  if (!event.block.getId().match(/(minecraft:|comforts:).*(_bed|sleeping_bag|hammock)/)) return

  event.server.scheduleInTicks(100, function(schedule) {
    var interval = randomInt(3, 7) * 24000
    schedule.server.runCommandSilent('/execute in minecraft:overworld run weather clear ' + interval)
    console.log('[ClearWeather] Cleared Overworld rain for ' + interval + ' ticks.')
  })

})