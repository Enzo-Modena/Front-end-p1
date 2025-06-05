'use client'; // Mantenha esta diretiva no topo

import React, { useState } from 'react';
import styles from './page.module.css';
// import Image from 'next/image';

export default function Hospedagem() {
  // Estados para os inputs de data (se estiver usando eles)
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');

  // Estados para controlar a visibilidade dos modais
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // NOVO ESTADO

  // Funções para o Modal do Carrinho
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  // Funções para o Modal de Sucesso
  const openSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  // NOVO: Função para lidar com a finalização da compra
  const handleFinalizarCompra = () => {
    closeCartModal(); // Fecha o modal do carrinho
    openSuccessModal(); // Abre o modal de sucesso
  };


  // Dados simulados para as pousadas (mantidos como estão)
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
      image: "/hospedagem/pousada1.jpg"
    },
    {
      name: "Pousada da Natureza",
      description: "A Pousada da Natureza destaca-se juntamente por estar em volta de toda a natureza. Proporciona ar puro e alegria aconchegam todos os hóspedes.",
      price: "420,00",
      installments: "5x de R$ 84,00",
      image: "/hospedagem/pousada5.jpg"
    },
    {
      name: "Pousada das Famílias",
      description: "A Pousada Vale do Céu destaca-se por sua privilegiada localização, incrustada no costão roberto de frente para o mar, na Praia Grande, a 3 km do Parque After Life.",
      price: "420,00",
      installments: "5x de R$ 84,00",
      image: "/hospedagem/pousada4.jpg"
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
          <img src="/logo_afterlife.png" alt="Logo After Life" className={styles.logo} />
          <nav className={styles.navbarNav}>
            <a href="#" className={styles.navLink}>Home</a>
            <a href="#" className={styles.navLink}>Sobre</a>
            <a href="#" className={`${styles.navLink} ${styles.active}`}>Hospedagem</a>
          </nav>
          <div className={styles.headerIcons}>
            <i className={`${styles.icon} ${styles.cartIcon}`} onClick={openCartModal}></i>
            <i className={`${styles.icon} ${styles.userIcon}`}></i>
            <button className={styles.btnIngressos}>Ingressos</button>
          </div>
        </div>
      </header>

      {/* Seção de Filtros (mantida) */}
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
            <span className={styles.searchIcon}></span> Pesquisar
          </button>
        </div>
      </section>

      {/* Conteúdo Principal (Hospedagens) (mantido) */}
      <main className={styles.mainContent}>
        <div className={styles.cardsGrid}>
          {pousadas.map((pousada, index) => (
            <div className={styles.card} key={index}>
              <img src={pousada.image} alt={pousada.name} className={styles.cardImage} />
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

      <footer>
        <div className={styles.footer}>
          <p>After Life Parque @ 2025 – Todos os direitos reservados</p>
          <p>Be always happy :)</p>
        </div>
      </footer>

      {/* Modal do Carrinho */}
      {isCartModalOpen && (
        <div className={styles.cartModalOverlay} onClick={closeCartModal}>
          <div className={styles.cartModalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.cartModalHeader}>
              <h2>CARRINHO</h2>
              <button className={styles.closeModalBtn} onClick={closeCartModal}>&times;</button>
            </div>
            <div className={styles.cartModalBody}>
              <div className={styles.cartItemSummary}>
                <img src={pousadas[0].image} alt="1 Hospedagem" className={styles.cartItemSummaryImage} />
                <div className={styles.cartItemSummaryDetails}>
                  <p>1 Hospedagem</p>
                  <p>1 Quarto 2 Adultos</p>
                  <a href="#" className={styles.viewMoreInfo}>Ver mais informações</a>
                </div>
              </div>
            </div>
            <div className={styles.cartModalFooter}>
              {/* VINCULANDO O BOTÃO "FINALIZAR" À NOVA FUNÇÃO */}
              <button className={styles.btnFinalizar} onClick={handleFinalizarCompra}>Finalizar</button>
            </div>
          </div>
        </div>
      )}

      {/* NOVO: Modal de Sucesso "Compra finalizada com sucesso!" */}
      {isSuccessModalOpen && (
        <div className={styles.cartModalOverlay} onClick={closeSuccessModal}> {/* Reutiliza o overlay */}
          <div className={`${styles.cartModalContent} ${styles.successModalContent}`} onClick={(e) => e.stopPropagation()}>
            {/* O modal de sucesso não tem cabeçalho visível ou botão "X" na imagem, mas podemos adicionar um se necessário */}
            {/* <div className={styles.cartModalHeader}>
              <button className={styles.closeModalBtn} onClick={closeSuccessModal}>&times;</button>
            </div> */}
            <div className={styles.successModalBody}>
              <div className={styles.successIcon}> {/* Ícone de check */}
                <img src="/hospedagem/sucesso.png" alt="Sucesso" className={styles.checkImage} /> {/* Supondo um ícone de check em public/images */}
              </div>
              <p className={styles.successMessage}>Compra finalizada com sucesso!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}