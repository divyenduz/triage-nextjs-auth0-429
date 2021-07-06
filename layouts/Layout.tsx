import React, { CSSProperties } from "react";

import { UserProvider } from "@auth0/nextjs-auth0";
import AppBar from "../components/AppBar";

export const Layout: React.FC = ({ children }) => {
  return (
    <UserProvider>
      <AppBar></AppBar>
      {children}
    </UserProvider>
  );
};

const Styles: Record<string, CSSProperties> = {
  LayoutWrapper: {
    minHeight: "98vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
  },
  LayoutHeader: {
    backgroundColor: "#fff",
    padding: 0,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  LayoutContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 1024,
    width: "100%",
    backgroundColor: "#fff",
  },
  LayoutFooter: {
    backgroundColor: "#fff",
    textAlign: "center",
    justifyContent: "center",
  },
  FooterLink: {
    color: "#666",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Layout;
