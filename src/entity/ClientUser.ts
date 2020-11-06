import type { ClientUserConnection } from "./ClientUserConnection";

interface ClientUser {
  id: string;
  connections: ClientUserConnection[];
}

export { ClientUser };
