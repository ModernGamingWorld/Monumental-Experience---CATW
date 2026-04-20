// Priority: 1
/**
 * @file        disable_mod_spawns.js
 * @description Prevents specific mod entities from spawning in specific dimensions.
 *              Add entries to `blockedMods` to extend — key is mod ID, value is
 *              an array of dimension IDs where that mod's entities are blocked.
 * @copyright   KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 */

// ---------------------------------------------------------------------------
// Configuration — mod ID → list of dimensions where its entities are blocked
// ---------------------------------------------------------------------------

var blockedMods = {
  'alexsmobs': [
    'minecraft:the_end',
  ],
}

// ---------------------------------------------------------------------------
// Spawn Check
// ---------------------------------------------------------------------------

EntityEvents.checkSpawn(function(event) {
  var modid = String(event.entity.type).split(':')[0]
  var dim   = String(event.level.dimension)

  if (blockedMods[modid] && blockedMods[modid].includes(dim)) {
    event.cancel()
  }
})