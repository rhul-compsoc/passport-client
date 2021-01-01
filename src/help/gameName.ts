const games = {
  minecraft: 'Minecraft Java Edition'
}

const gameName = (game: string) => {
  let key: keyof typeof games;

  for (key in games) {
    if (game === key) {
      return games[key];
    }
  }

  return '';
}

export { gameName }
