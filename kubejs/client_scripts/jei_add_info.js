// Priority: 1
/**
 * @file JEI - Add Info Panels
 * @description Adds informational text panels to items in JEI.
 * @copyright KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 */

JEIEvents.information(event => {

  // --- Ender Storage ---
  event.addItem('enderstorage:ender_chest', [
    'Cross-dimensional wireless item transfer to any chest on the same channel.',
    'Use dye on the colored bars to set the channel.',
    'Sneak + right-click with a diamond to switch to private channel.',
    'Sneak + right-click with an ender pearl or eye of ender to increase inventory size.',
  ])

  event.addItem('enderstorage:ender_tank', [
    'Cross-dimensional wireless fluid transfer to any tank on the same channel.',
    'Use dye on the colored bars to set the channel.',
    'Sneak + right-click with a diamond to switch to private channel.',
    'Sneak + right-click with an ender pearl or eye of ender to increase tank size.',
  ])

  // --- Enigmatic Legacy ---
  event.addItem('enigmaticlegacy:earth_heart', [
    '100% drop chance by killing a Wither.',
    '10% drop chance by killing a Vex.',
    '5% drop chance by killing a Wither Skeleton.',
  ])

  event.addItem('enigmaticlegacy:abyssal_heart', [
    '100% drop chance by killing a Warden.',
  ])

})
