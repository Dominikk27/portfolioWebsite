import { Epilogue, Lato  } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800",]
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
    <html>
      <body className={`${epilogue.variable} ${lato.variable} antialiased`}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
