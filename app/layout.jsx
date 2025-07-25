// app/layout.js (or layout.tsx)
import "./globals.css";
import React from "react";

export const metadata = {
  title: "VisQode - We Build & Scale Digital Products",
  description:
    "Founding successful companies by combining ideas with business expertise, capital, and technical execution.",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&family=Open+Sans:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
          integrity="sha512-kJlvECunwXftkPwyvHbclArO8wszgBGisiLeuDFwNM8ws+wKIw0sv1os3ClWZOcrEB2eRXULYUsm8OVRGJKwGA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      {""} <body>{children}</body>
    </html>
  );
}
