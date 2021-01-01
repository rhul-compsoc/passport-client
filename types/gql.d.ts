interface Game {
  bindingId: number!
  gameId: string!
  gameUsername: string
  gameUserId: string
  memberId: string!
  userBanned: boolean
}

interface User {
  guildId: string!
  memberId: string!
  booleanScore: number
  numMessages: number
  username: string
  nickname: string
  discrim: string
  studentVerified: boolean
  avatarUrl: string
  xpTotal: number
  games: Game[]
  guild: Guild
}

interface Guild {
  guildId: string
  avatarUrl?: string
  guildName?: string
  users: User[]
  games: Game[]
}

interface ErrorLocation {
  line: number
  column: number
}

export type {
  Game, User, Guild
}
