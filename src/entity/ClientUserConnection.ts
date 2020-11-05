import { ClientUserConnectionPlatform } from '../enum/ClientUserConnectionPlatform';

interface ClientUserConnection {
  platform: ClientUserConnectionPlatform;
  id: string;
  email?: string;
  username: string;
  displayName?: string;
  discriminator?: string;
}

export { ClientUserConnection };
