import styles from './page.module.css';

export default function Hospedagem() {
  return (
    <div>
      <header>
        <div className={styles.container}>
          <img src="/logo.png" alt="Logo After Life" className={styles.logo} />
          <nav>
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#" className={styles.active}>Hospedagem</a>
          </nav>
          <div className={styles.icons}>
            <i className={styles.cart}>🛒</i>
            <button className={styles.btnIngressos}>Ingressos</button>
          </div>
        </div>
      </header>

      <section className={styles.filtros}>
        <div className={styles.container}>
          <input type="date" placeholder="Check-in" />
          <input type="date" placeholder="Check-out" />
          <input type="number" placeholder="Quartos" />
          <input type="number" placeholder="Pessoas" />
          <button className={styles.btnPesquisar}>Pesquisar</button>
        </div>
      </section>

      <main className={`${styles.hospedagens} ${styles.container}`}>
        <div className={styles.card}>
          <img src="/pousada1.jpg" alt="Pousada Recanto do Lar" />
          <h3>Pousada Recanto do Lar</h3>
          <p>
            A Pousada Recanto do Lar oferece uma linda vista nos morros localizados a 5 km da cidade. Com uma maravilhosa vista da natureza e da cidade. Fica a 10 km do parque.
          </p>
          <div className={styles.preco}>
            R$ 420,00 <span>Em até 5x de R$ 84,00</span>
          </div>
          <button>Reservar</button>
        </div>
        <div className={styles.card}>
          <img src="/pousada1.jpg" alt="Pousada Recanto do Lar" />
          <h3>Pousada Recanto do Lar</h3>
          <p>
            A Pousada Recanto do Lar oferece uma linda vista nos morros localizados a 5 km da cidade. Com uma maravilhosa vista da natureza e da cidade. Fica a 10 km do parque.
          </p>
          <div className={styles.preco}>
            R$ 420,00 <span>Em até 5x de R$ 84,00</span>
          </div>
          <button>Reservar</button>
        </div>
        <div className={styles.card}>
          <img src="/pousada1.jpg" alt="Pousada Recanto do Lar" />
          <h3>Pousada Recanto do Lar</h3>
          <p>
            A Pousada Recanto do Lar oferece uma linda vista nos morros localizados a 5 km da cidade. Com uma maravilhosa vista da natureza e da cidade. Fica a 10 km do parque.
          </p>
          <div className={styles.preco}>
            R$ 420,00 <span>Em até 5x de R$ 84,00</span>
          </div>
          <button>Reservar</button>
        </div>
      </main>

      <footer>
        <div className={styles.container}>
          <p>After Life Parque @ 2025 – Todos os direitos reservados</p>
          <p>Be always happy :)</p>
        </div>
      </footer>
    </div>
  );
}
