import React from "react";
import { FaDiscord, FaGit, FaGithub, FaMicrosoft } from "react-icons/fa";
import { Chip } from "react-materialize";
import type { ClientUserConnection } from "../../entity/ClientUserConnection";
import { ClientUserConnectionPlatform } from "../../enum/ClientUserConnectionPlatform";

const ConnectionIcon = ({
  connection
}: {
  connection: ClientUserConnection
}) => {
  switch(connection.platform) {
    case ClientUserConnectionPlatform.DISCORD:
      return <FaDiscord />;
    case ClientUserConnectionPlatform.GITHUB:
      return <FaGithub />;
    case ClientUserConnectionPlatform.MICROSOFT:
      return <FaMicrosoft />;
    default:
      return null;
  }
}

const ConnectionUsername = ({
  connection,
}: {
  connection: ClientUserConnection;
}) => {
  switch (connection.platform) {
    case ClientUserConnectionPlatform.DISCORD:
      return <span>{connection.username + "#" + connection.discriminator}</span>;
    default:
      return <span>{connection.username}</span>;
  }
}

export { ConnectionIcon, ConnectionUsername };
