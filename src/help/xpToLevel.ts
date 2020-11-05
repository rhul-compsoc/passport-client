const xpToLevel = (xp: number) => Math.floor((Math.sqrt(2 * xp + 225) - 15) / 10)

export {
  xpToLevel
}
