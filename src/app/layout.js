
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";

import "../css-app/reset.css"
import "../css-app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "Teste",
  description: "Uso de React e Next JS",
};

// Aqui serve para colocar o menu (por exemplo a navgar) e o rodapé, para não ter que ficar colocando em todas as páginas
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
