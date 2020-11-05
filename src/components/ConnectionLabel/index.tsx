import React, { ReactNode } from 'react';
import { ClientUserConnection } from '../../entity/ClientUserConnection';
import { ClientUserConnectionPlatform } from '../../enum/ClientUserConnectionPlatform';
import { Header } from '../Header';
import { FaGithub, FaDiscord } from 'react-icons/fa'

const ConnectionLabel = ({ connection } : { connection: ClientUserConnection }) => {
  let icon = null;
  let name = null;

  switch(connection.platform) {
    case ClientUserConnectionPlatform.DISCORD:
      icon = <FaDiscord />
      name = connection.username + '#' + connection.discriminator
      break
    case ClientUserConnectionPlatform.GITHUB:
      icon = <FaGithub />
      name = connection.displayName || connection.username
      break
    default:
      name = connection.id
  }

  return <span>{icon}{' '}{name}</span>
}

export {
  ConnectionLabel
}
