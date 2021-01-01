import React, { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import styles from "./index.module.scss";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className={styles.body}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export { Layout };
