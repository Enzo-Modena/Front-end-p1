import Image from "next/image";
import styles from "./page.module.css";
import { FaTicketAlt, FaBed } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.heroImage}>
        <Image
          src="/abaixoheader.png"
          alt="Imagem destaque do parque"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className={styles.destaqueAzul}>As atrações mais animadas esperam por você!</div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.tituloCard}>Xícara maluca</div>
          <Image
            src="/xicaras.png"
            alt="Xícara maluca"
            width={400}
            height={250}
            className={styles.imagem}
          />
        </div>

        <div className={styles.card}>
          <div className={styles.tituloCard}>Carros musicais</div>
          <Image
            src="/carrosmusicais.png"
            alt="Carros musicais"
            width={400}
            height={250}
            className={styles.imagem}
          />
        </div>

        <div className={styles.card}>
          <div className={styles.tituloCard}>Carrinho bate-bate</div>
          <Image
            src="/carrinho.png"
            alt="Carrinho bate-bate"
            width={400}
            height={250}
            className={styles.imagem}
          />
        </div>

        <div className={styles.card}>
          <div className={styles.tituloCard}>Montanha Radical</div>
          <Image
            src="/montanha.png"
            alt="Montanha Radical"
            width={400}
            height={250}
            className={styles.imagem}
          />
        </div>
      </div>

      <div className={styles.destaqueAzul}>Embarque na diversão! Compre seu ingresso aqui!</div>
      <div className={styles.secaoAzulClaro}>
        <Image
          src="/mulher-ingresso.png"
          alt="Mulher segurando ingressos"
          width={400}
          height={250}
          className={styles.imagemSecaoAzul}
        />
        <div className={styles.cardAzulEscuro}>
          <FaTicketAlt className={styles.iconeSecao} />
          <div className={styles.tituloSecaoGrande}>Garanta já o seu ingresso!</div>
          <div className={styles.subtituloSecao}>Aproveite a experiência completa do parque com praticidade e segurança.</div>
          <ul className={styles.listaPassos}>
            <li>Escolha a data do evento</li>
            <li>Selecione o tipo de ingresso desejado ou o pacote</li>
            <li>Finalize a compra com poucos cliques</li>
          </ul>
          <div className={styles.fraseFinalSecao}>Não perca a chance de viver essa experiência!</div>
          <Link href="/ingressos" className={styles.botaoAzulClaro}>
            Compre já!
          </Link>
        </div>
      </div>

      <div className={styles.destaqueAzul}>A aventura continua com uma boa noite de sono!</div>
      <div className={styles.secaoAzulClaro}>
        <Image
          src="/hotel.png"
          alt="Imagem do hotel"
          width={400}
          height={250}
          className={styles.imagemSecaoAzul}
        />
        <div className={styles.cardAzulEscuro}>
          <FaBed className={styles.iconeSecao} />
          <div className={styles.tituloSecaoGrande}>Hospede-se com conforto!</div>
          <div className={styles.subtituloSecao}>Descanse e recarregue as energias para mais diversão no parque.</div>
          <ul className={styles.listaPassos}>
            <li>Escolha a data da reserva</li>
            <li>Selecione o tipo de quarto</li>
            <li>Finalize com segurança e aproveite momentos inesquecíveis</li>
          </ul>
          <div className={styles.fraseFinalSecao}>Não deixe para depois, garanta já sua hospedagem!</div>
          <Link href="/hospedagem" className={styles.botaoAzulClaro}>
            Reserve agora!
          </Link>
        </div>
      </div>
    </main>
  );
}
