import { Poppins } from "next/font/google";
import { Nunito } from "next/font/google";
import "../css-app/reset.css";
import "../css-app/globals.css";


import 'react-datepicker/dist/react-datepicker.css';
import BootstrapScript from '../components/BootstrapScript';
import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
});

export const metadata = {
  title: "After Life Parque - Sua aventura começa aqui!",
  description: "Explore as atrações incríveis do After Life Parque e reserve sua diversão!",
};

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
