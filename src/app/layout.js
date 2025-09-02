import { Epilogue, Lato  } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["900"]
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300"]
});

export const metadata = {
  title: "Dominik Bučák | Portfolio",
  description: "Dominik Bučák | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
