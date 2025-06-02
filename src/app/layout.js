import { Poppins } from "next/font/google";

import "../css-app/reset.css";
import "../css-app/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "After Life",
  description: "Be always happy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
