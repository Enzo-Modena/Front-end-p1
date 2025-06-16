import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { Nunito } from "next/font/google";

import "../css-app/reset.css"
import "../css-app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-datepicker/dist/react-datepicker.css';
import BootstrapScript from '../components/BootstrapScript';
import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";

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
  weight: ["400", "600", "700"], // Regular, SemiBold e Bold
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"]
})

export const metadata = {
  title: "Teste",
  description: "Uso de React e Next JS",
};

// Aqui serve para colocar o menu (por exemplo a navgar) e o rodapé, para não ter que ficar colocando em todas as páginas
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} ${nunito.variable}`}>
        <BootstrapScript />
        <div className="layoutContainer">
          <Cabecalho />
          <main className="mainContent">{children}</main>
          <Rodape />
        </div>
      </body>
    </html>
  );
}