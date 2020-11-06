import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import type { ClientUserConnection } from "../../entity/ClientUserConnection";
import { ClientUserConnectionPlatform } from "../../enum/ClientUserConnectionPlatform";

const ConnectionLabel = ({
  connection,
}: {
  connection: ClientUserConnection;
}) => {
  let icon = null;
  let name = null;

  switch (connection.platform) {
    case ClientUserConnectionPlatform.DISCORD:
      icon = <FaDiscord />;
      name = connection.username + "#" + connection.discriminator;
      break;
    case ClientUserConnectionPlatform.GITHUB:
      icon = <FaGithub />;
      name = connection.displayName || connection.username;
      break;
    default:
      name = connection.id;
  }

  return (
    <span>
      {icon} {name}
    </span>
  );
};

export { ConnectionLabel };
