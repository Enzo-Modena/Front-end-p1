'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { FaShoppingCart } from 'react-icons/fa';

export default function Hospedagem() {
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const openSuccessModal = () => {
    setIsSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  const handleFinalizarCompra = () => {
    closeCartModal();
    openSuccessModal();
  };

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
      {/* Seção de Filtros */}
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

      {/* Conteúdo Principal */}
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
              <button className={styles.btnReservar} onClick={openCartModal}>Reservar</button>
            </div>
          ))}
        </div>
      </main>

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
              <button className={styles.btnFinalizar} onClick={handleFinalizarCompra}>Finalizar</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Sucesso */}
      {isSuccessModalOpen && (
        <div className={styles.cartModalOverlay} onClick={closeSuccessModal}>
          <div className={`${styles.cartModalContent} ${styles.successModalContent}`} onClick={(e) => e.stopPropagation()}>
            <div className={styles.successModalBody}>
              <div className={styles.successIcon}>
                <img src="/hospedagem/sucesso.png" alt="Sucesso" className={styles.checkImage} />
              </div>
              <p className={styles.successMessage}>Compra finalizada com sucesso!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}