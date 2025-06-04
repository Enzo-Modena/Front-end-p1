import styles from './page.module.css';
import Image from 'next/image'; // Importar Image de Next.js para otimização, se aplicável

export default function Hospedagem() {
  // Dados simulados para as pousadas (poderia vir de uma API ou de um arquivo de dados)
  const pousadas = [
    {
      name: "Pousada Recanto do Lar",
      description: "A Pousada Recanto do Lar oferece uma linda vista nos morros localizados a 5 km da cidade. Com uma maravilhosa vista da natureza e da cidade. Fica a 10 km do parque.",
      price: "420,00",
      installments: "5x de R$ 84,00",
      image: "/hospedagem/pousada1.jpg"
    },
    {
      name: "Pousada Vale do Céu",
      description: "A Pousada Vale do Céu destaca-se por sua privilegiada localização em um bairro próximo ao Parque After Life, contornado com uma tranquilidade.",
      price: "420,00",
      installments: "5x de R$ 84,00",
      image: "/hospedagem/pousada2.jpg"
    },
    {
      name: "Pousada Canto do Descanso",
      description: "A Pousada Canto do Descanso destaca-se por sua privilegiada localização, incrustada no costão roberto de frente para o mar, na Praia Grande, a 3 km do Parque After Life.",
      price: "420,00",
      installments: "5x de R$ 84,00",
      image: "/hospedagem/pousada5.jpg"
    },
    {
      name: "Pousada da Natureza",
      description: "A Pousada da Natureza destaca-se juntamente por estar em volta de toda a natureza. Proporciona ar puro e alegria aconchegam todos os hóspedes.",
      price: "420,00",
      installments: "5x de R$ 84,00",
      image: "/hospedagem/pousada4.jpg"
    },
    {
      name: "Pousada das Famílias",
      description: "A Pousada Vale do Céu destaca-se por sua privilegiada localização, incrustada no costão roberto de frente para o mar, na Praia Grande, a 3 km do Parque After Life.",
      price: "420,00",
      installments: "5x de R$ 84,00",
      image: "/hospedagem/pousada5.jpg"
    },
    {
      name: "Hotel das Águas",
      description: "O Hotel das Águas destaca-se por sua comodidade excepcional e por sua localização bem no centro da cidade.",
      price: "420,00",
      installments: "5x de R$ 84,00",
      image: "/hospedagem/pousada1.jpg"
    }
  ];

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          {/* Se estiver usando Next.js, é melhor usar o componente Image */}
          <img src="/logo.png" alt="Logo After Life" className={styles.logo} />
          {/* <Image src="/logo.png" alt="Logo After Life" width={150} height={40} className={styles.logo} /> */}
          <nav className={styles.navbarNav}>
            <a href="#" className={styles.navLink}>Home</a>
            <a href="#" className={styles.navLink}>Sobre</a>
            <a href="#" className={`${styles.navLink} ${styles.active}`}>Hospedagem</a>
          </nav>
          <div className={styles.headerIcons}>
            <i className={`${styles.icon} ${styles.cartIcon}`}></i> {/* Ícone de carrinho, pode ser um SVG ou outra fonte de ícone */}
            <i className={`${styles.icon} ${styles.userIcon}`}></i> {/* Ícone de usuário */}
            <button className={styles.btnIngressos}>Ingressos</button>
          </div>
        </div>
      </header>

      <section className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <div className={styles.filterInputGroup}>
            <label htmlFor="check-in" className={styles.visuallyHidden}>Check-in</label>
            <span className={styles.filterLabel}>Check-in</span>
            <input type="date" id="check-in" className={styles.filterInput} />
          </div>
          <div className={styles.filterInputGroup}>
            <label htmlFor="check-out" className={styles.visuallyHidden}>Check-out</label>
            <span className={styles.filterLabel}>Check-out</span>
            <input type="date" id="check-out" className={styles.filterInput} />
          </div>
          <div className={styles.filterInputGroup}>
            <label htmlFor="rooms" className={styles.visuallyHidden}>Quartos</label>
            <span className={styles.filterLabel}>Quartos</span>
            <input type="number" id="rooms" placeholder="" className={styles.filterInput} />
          </div>
          <div className={styles.filterInputGroup}>
            <label htmlFor="people" className={styles.visuallyHidden}>Pessoas</label>
            <span className={styles.filterLabel}>Pessoas</span>
            <input type="number" id="people" placeholder="" className={styles.filterInput} />
          </div>
          <button className={styles.btnSearch}>
            <span className={styles.searchIcon}>🔍</span> Pesquisar
          </button>
        </div>
      </section>

      <main className={styles.mainContent}>
        <div className={styles.cardsGrid}>
          {pousadas.map((pousada, index) => (
            <div className={styles.card} key={index}>
              {/* Usar Image de Next.js para otimização */}
              <img src={pousada.image} alt={pousada.name} className={styles.cardImage} />
              {/* <Image src={pousada.image} alt={pousada.name} layout="responsive" width={300} height={200} className={styles.cardImage} /> */}
              <h3 className={styles.cardTitle}>{pousada.name}</h3>
              <p className={styles.cardDescription}>{pousada.description}</p>
              <div className={styles.cardPrice}>
                R$ {pousada.price} <span className={styles.cardInstallments}>Em até {pousada.installments}</span>
              </div>
              <button className={styles.btnReservar}>Reservar</button>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p>After Life Parque @ 2025 – Todos os direitos reservados</p>
          <p>Be always happy :)</p>
        </div>
      </footer>
    </div>
  );
}