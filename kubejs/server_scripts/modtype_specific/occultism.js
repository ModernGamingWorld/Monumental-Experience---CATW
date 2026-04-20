// Priority: 100
/**
 * @file        occultism.js
 * @description Forces a server reload on first player login to ensure Occultism
 *              rituals and summoning recipes are loaded correctly.
 *              The reload only fires once per server session via a global flag.
 * @copyright   KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 * @author      @Cyn-SolveroftheAbsoluteGremlins on Discord
 */

PlayerEvents.loggedIn(function(event) {

  if (!global.occultism_reload) {
    global.occultism_reload = true
    event.server.runCommandSilent('reload')
    console.log('[Occultism] First login detected — triggered reload for recipe fix.')
  }

})