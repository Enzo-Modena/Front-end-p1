import styles from './page.module.css'; 

export default function Rodape() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; After Life Parque {currentYear} - Todos os direitos reservados</p>
        <p>Be always happy :)</p>
      </div>
    </footer>
  );
}