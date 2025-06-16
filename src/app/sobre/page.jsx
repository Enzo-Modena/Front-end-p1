import Image from "next/image";
import styles from "./page.module.css"

export default function Sobre() {
  return (
    <div className="container">
        <div className={styles.containerTitulo}>
            <h1 className={styles.titulo}>AfterLife</h1>
        </div>
        <Image 
            src="/sobre/sobre-afterlife.jpg"
            alt="Sobre AfterLife"
            width={560}  
            height={400}  
            className={styles.imagem}
        />
        <p className={styles.texto}>Fundado com o propósito de proporcionar experiências únicas e momentos inesquecíveis, o AfterLife consolidou-se como uma referência em entretenimento e lazer para toda a família. Ao longo de sua trajetória, o parque se dedicou a oferecer atrações que unem segurança, inovação e qualidade, sempre priorizando o bem-estar e a satisfação dos visitantes.</p>
        <p className={styles.texto}>Desde sua inauguração, nossa missão tem sido criar um ambiente onde pessoas de todas as idades possam vivenciar experiências marcantes. Com uma infraestrutura moderna e cuidadosamente planejada, o parque conta com uma ampla variedade de brinquedos e atrações, que vão desde espaços destinados ao público infantil até opções voltadas para aqueles que buscam aventuras mais emocionantes.</p>
        <p className={styles.texto}>Nosso compromisso é oferecer um espaço que valoriza a convivência, a diversão e a criação de memórias afetivas. Cada detalhe foi projetado para garantir conforto, segurança e excelência em atendimento. Além dos brinquedos, o parque também conta com uma programação especial de eventos, apresentações culturais e espaços gastronômicos que complementam a experiência dos nossos visitantes.</p>
        <p className={styles.texto}>O AfterLife segue, continuamente, investindo em melhorias e inovações, reafirmando seu compromisso com a qualidade, a responsabilidade social e o desenvolvimento sustentável. Convidamos você e sua família a fazerem parte dessa história, onde a diversão, o encantamento e a segurança caminham lado a lado.</p>
    </div>
  );
}