// Priority: 100
/**
 * @file        remove_trim.js
 * @description Removes all armor trim smithing recipes from vanilla and modded sources.
 * @copyright   KnightDexx's Modded Minecraft World | ModernGamingWorld | GeekTechMedia
 */

ServerEvents.recipes(function(event) {

  var trimsToRemove = [
    // Vanilla & mods — armor trims
    /minecraft:.*_trim/,
    /blue_skies:.*_trim/,
    /kobolds:.*_trim/,
    /alexscaves:.*armortrim/,
    // Forbidden Arcanus — smithing modifiers
    /forbidden_arcanus:smithing.*_demolishing_modifier/,
    /forbidden_arcanus:smithing.*_soulbound_modifier/,
    /forbidden_arcanus:smithing.*_fiery_modifier/,
  ]

  trimsToRemove.forEach(function(id) {
    event.remove({ id: id })
  })

})