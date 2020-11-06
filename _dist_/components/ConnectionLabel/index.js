import React from "../../../web_modules/react.js";
import {FaDiscord, FaGithub} from "../../../web_modules/react-icons/fa.js";
import {ClientUserConnectionPlatform as ClientUserConnectionPlatform2} from "../../enum/ClientUserConnectionPlatform.js";
const ConnectionLabel = ({
  connection
}) => {
  let icon = null;
  let name = null;
  switch (connection.platform) {
    case ClientUserConnectionPlatform2.DISCORD:
      icon = /* @__PURE__ */ React.createElement(FaDiscord, null);
      name = connection.username + "#" + connection.discriminator;
      break;
    case ClientUserConnectionPlatform2.GITHUB:
      icon = /* @__PURE__ */ React.createElement(FaGithub, null);
      name = connection.displayName || connection.username;
      break;
    default:
      name = connection.id;
  }
  return /* @__PURE__ */ React.createElement("span", null, icon, " ", name);
};
export {ConnectionLabel};
