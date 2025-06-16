"use client";

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./page.module.css";
import { FaCalendar, FaCarCrash, FaGift, FaUniversalAccess } from "react-icons/fa";
import DatePicker from "react-datepicker";

function Ingresso() {
    const atracoes = [
        {
            titulo: 'Diversão Total',
            imagem: 'ingressosImg/night-ring.jpg',
            descricao: 'Acesso ilimitado a todos os brinquedos do parque por um dia inteiro! Ideal para quem quer aproveitar cada segundo com intensidade.',
            inclui: [
                'Acesso irrestrito a todos os brinquedos',
                'Show noturno exclusivo',
                'Foto digital personalizada com mascote do parque'
            ]
        },
        {
            titulo: 'Diversão em Família',
            imagem: 'ingressosImg/people-pier.jpg',
            descricao: 'Diversão garantida para todas as idades, com atrações pensadas para o conforto e entretenimento em grupo familiar.',
            inclui: [
                'Entrada para todas as atrações familiares',
                'Área de descanso exclusiva para famílias',
                'Oficina de artes para crianças',
                'Foto em grupo com mascote'
            ]
        },
        {
            titulo: 'Baby Park',
            imagem: 'ingressosImg/people.jpg',
            descricao: 'Espaço seguro e divertido para os pequenos aproveitarem brinquedos especiais para a primeira infância.',
            inclui: [
                'Acesso ao parque infantil exclusivo para bebês e crianças pequenas',
                'Monitores especializados',
                'Área para troca de fraldas e alimentação',
                'Brindes surpresa para as crianças'
            ]
        },
        {
            titulo: 'VIP Mágico',
            imagem: 'ingressosImg/people-street.jpg',
            descricao: 'Experiência premium com acesso VIP, fila exclusiva e atendimento personalizado para momentos inesquecíveis.',
            inclui: [
                'Entrada VIP sem filas',
                'Tour guiado exclusivo pelo parque',
                'Lounge VIP com bebidas e petiscos',
                'Foto com personagens mágicos'
            ]
        },
        {
            titulo: 'Aventura da Tarde',
            imagem: 'ingressosImg/child.jpg',
            descricao: 'Pacote perfeito para os amantes da adrenalina, com acesso às atrações radicais durante a tarde.',
            inclui: [
                'Acesso às atrações radicais das 14h às 20h',
                'Sessão exclusiva de escalada e tirolesa',
                'Desconto em lojas de souvenires',
                'Foto de ação personalizada'
            ]
        },
        {
            titulo: 'Noite Radical',
            imagem: 'ingressosImg/glowing.jpg',
            descricao: 'Uma experiência noturna cheia de emoção, com shows especiais e atrações iluminadas para uma aventura única.',
            inclui: [
                'Entrada para atrações noturnas',
                'Show de luzes e música ao vivo',
                'Bar aberto com drinks especiais',
                'Foto com efeitos de luz exclusivos'
            ]
        }
    ];

    const [atracaoSelecionada, setAtracaoSelecionada] = useState(null);
    const [showModalPacote, setShowModalPacote] = useState(false);
    const [showModalData, setShowModalData] = useState(false);
    const [dataSelecionada, setDataSelecionada] = useState(null);
    const [showModalFinalizado, setShowModalFinalizado] = useState(false);

    function abrirModalPacote(item) {
        setAtracaoSelecionada(item);
        setShowModalPacote(true);
        setDataSelecionada(null);
    }

    function fecharModalPacote() {
        setShowModalPacote(false);
    }

    function irParaEscolherData() {
        setShowModalPacote(false);
        setShowModalData(true);
    }

    function abrirModalData() {
        setShowModalPacote(false);
        setShowModalData(true);
    }

    function fecharModalData() {
        setShowModalData(false);
        setDataSelecionada(null);
    }
    function abrirModalFinalizado() {
        setShowModalFinalizado(true);
        setShowModalData(false);
    }

    function fecharModalFinalizado() {
        setShowModalFinalizado(false);
        setShowModalData(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.conteudo}>
                <section className={styles.bannerIng}>
                    <h1>COMPRA DE <br /> INGRESSOS</h1>
                </section>
                <div className={styles.cardInfoIng}>
                    <h2>PACOTES INCRÍVEIS PARA VOCÊ</h2>
                    <p className={styles.mensagem}>
                        É AGORA OU NUNCA! APROVEITE NOSSOS PACOTES INCRÍVEIS E TRANSFORME SUA EXPERIÊNCIA.
                    </p>
                </div>

                <section className={styles.atracoes}>
                    {atracoes.map((item, i) => (
                        <div className={styles.atracao} key={i}>
                            <h3>{item.titulo}</h3>
                            <img
                                src={item.imagem}
                                alt={item.titulo}
                                style={{ cursor: "pointer" }}
                                onClick={() => abrirModalPacote(item)}
                            />
                        </div>
                    ))}
                </section>

                {/* Modal Pacote */}
                <Modal
                    show={showModalPacote}
                    onHide={fecharModalPacote}
                    centered
                    size="lg"
                    contentClassName={styles.modalContent}
                    dialogClassName={styles.modalDialogGrande}
                    className={styles.modalContainer}
                >
                    <Modal.Header closeButton className={styles.modalHeader}>
                        <div className={styles.tituloAlin}>
                            <FaGift className={styles.icon} />
                            <Modal.Title className={styles.modalTitle}>PACOTE</Modal.Title>
                        </div>
                    </Modal.Header>
                    <Modal.Body className={`container ${styles.modalContainer}`}>
                        {atracaoSelecionada && (
                            <>
                                <div>
                                    <img
                                        src={atracaoSelecionada.imagem}
                                        alt={atracaoSelecionada.titulo}
                                        className={styles.imgAtracao}
                                    />
                                </div>
                                <div className={styles.descricaoCard}>
                                    <h2 className={styles.tituloCard}>{atracaoSelecionada.titulo}</h2>
                                    <p>{atracaoSelecionada.descricao}</p>
                                    <h6>Inclui:</h6>
                                    <ul className={styles.item}>
                                        {atracaoSelecionada.inclui.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                    <Button variant="secondary" className={styles.btnCard} onClick={irParaEscolherData}>
                                        Escolher Data
                                    </Button>
                                </div>
                            </>
                        )}
                    </Modal.Body>
                </Modal>

                {/* Modal Selecionar Data */}
                <Modal
                    show={showModalData}
                    onHide={fecharModalData}
                    centered
                    size="lg"
                    contentClassName={styles.modalDataContent}
                    dialogClassName={styles.modalDataDialog}
                    className={styles.modalContainer}>

                    <Modal.Header closeButton className={styles.modalDataHeader}>
                        <div className={styles.modalDataTituloAlinhado}>
                            <FaCalendar className={styles.modalDataIcon} />
                            <Modal.Title className={styles.modalDataTitle}>SELECIONAR DATA E CONFIRMAR</Modal.Title>
                        </div>
                    </Modal.Header>
                    <Modal.Body className={`container ${styles.modalDataContainer}`}>
                        <DatePicker
                            selected={dataSelecionada}
                            onChange={(date) => setDataSelecionada(date)}
                            dateFormat="dd/MM/yyyy"
                            inline
                            className={styles.calendarioDataCustom}
                        />

                        {dataSelecionada && (
                            <div className={styles.modalDataInfo}>
                                <h3 className={styles.tituloCarddata}>{atracaoSelecionada.titulo}</h3>
                                <ul className={styles.itemData}>
                                    {atracaoSelecionada.inclui.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                                <p className={`mt-2 text-center ${styles.dataCentro}`}>
                                    <strong>Data selecionada:</strong> {dataSelecionada.toLocaleDateString()}
                                </p>
                                <Button variant="secondary" className={styles.btnCard} onClick={abrirModalFinalizado}>
                                    Finalizar
                                </Button>
                            </div>
                        )}
                    </Modal.Body>
                </Modal>
                <Modal
                    show={showModalFinalizado}
                    onHide={fecharModalFinalizado}
                    centered
                    contentClassName={styles.modalFinalizadoContent}
                    dialogClassName={styles.modalFinalizadoDialog}
                    className={styles.modalContainer}
                >

                    <Modal.Body className={`text-center ${styles.modalFinalizadoBody}`}>

                        <h5 className={styles.modalFinalizadoTexto}>
                        
                            <img
                                src="/iconSuccess.png"
                                alt="Ícone de sucesso"
                                width={30}
                                height={30}
                                className="mb-2"
                            />
                            <br />
                            Compra finalizada com sucesso!
                        </h5>

                    </Modal.Body>
                    <Modal.Footer className={styles.modalFinalizadoFooter}>
                        <Button variant="primary" className={styles.btnCard} onClick={fecharModalFinalizado}>
                            Fechar
                        </Button>
                    </Modal.Footer>
                </Modal>



            </div>
        </div>
    );
}

export default Ingresso;
