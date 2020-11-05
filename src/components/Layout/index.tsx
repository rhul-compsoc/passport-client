import React, { ReactNode } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

const Layout = ({ children } : { children: ReactNode }) => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Header />
    <main style={{ flexGrow: 1 }}>
      {children}
    </main>
    <Footer />
  </div>
)

export {
  Layout
}
