// Priority: 1
/**
 * @file Server - Default Gamerules
 * @description Sets default gamerule values on first server load.
 *              Uses persistentData to ensure rules are only applied once,
 *              not overwritten on every reload.
 * @copyright KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 */

ServerEvents.loaded(event => {

  const defaultGamerules = [
    { rule: 'doFireTick',              value: 'false' },
    { rule: 'doImmediateRespawn',      value: 'true'  },
    { rule: 'playersSleepingPercentage', value: '1'   },
  ]

  defaultGamerules.forEach(function(gamerule) {
    if (!event.server.persistentData[gamerule.rule]) {
      event.server.runCommandSilent(`/gamerule ${gamerule.rule} ${gamerule.value}`)
      event.server.persistentData[gamerule.rule] = gamerule.value
      console.log(`[Gamerules] Applied default: ${gamerule.rule} = ${gamerule.value}`)
    }
  })

})