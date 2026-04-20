// Priority: 1
/**
 * @file JEI - Hide Slurries
 * @description Hides all clean and dirty Mekanism slurries from JEI.
 * @copyright KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 * @modified @Cyn-SolveroftheAbsoluteGremlins on Discord
 */

const MekanismJEI = Java.loadClass('mekanism.client.jei.MekanismJEI')

JEIEvents.hideCustom(event => {

  const slurryPatterns = [/.*:clean_/, /.*:dirty_/]

  slurryPatterns.forEach(pattern => {
    event.get(MekanismJEI.TYPE_SLURRY).hide(pattern)
  })

})
