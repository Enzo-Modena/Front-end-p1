
import { Nunito, Nunito } from "next/font/google";
import { Poppins } from "next/font/google";

import "../css-app/reset.css"
import "../css-app/globals.css";

const Nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "After Life",
  description: "Be always happy",
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
