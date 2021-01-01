const defaultAvatar = (discriminator: string) =>
  `https://cdn.discordapp.com/embed/avatars/${
    parseInt(discriminator, 10) % 5
  }.png`;

export { defaultAvatar };
