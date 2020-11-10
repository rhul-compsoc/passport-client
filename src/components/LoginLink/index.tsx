import React, { ReactNode } from 'react';
import { ClientUserConnectionPlatform } from '../../enum/ClientUserConnectionPlatform';

const LoginLink = ({ children, type }: { children: ReactNode, type: ClientUserConnectionPlatform }) => (
  <a onClick={() => window.location.href = `${process.env.API_URL}/login/${type}?return=${encodeURIComponent(window.location.href)}`}>
    { children }
  </a>
)

export {
  LoginLink
}
