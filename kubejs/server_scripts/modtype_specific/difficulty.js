// Priority: 100
/**
 * @file Server - Difficulty Lock
 * @description Forces the server difficulty to Hard on every load.
 *              Intentionally runs every time (no persistentData guard)
 *              to prevent difficulty from being changed persistently.
 * @copyright KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 */

ServerEvents.loaded(event => {
  event.server.runCommandSilent('difficulty hard')
  console.log('[Difficulty] Locked to: hard')
})