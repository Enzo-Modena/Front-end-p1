"use client";

import React, { useState } from "react";
import styles from "./page.module.css"


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

                {/* Atrações */}
                <section className={styles.atracoes}>
                    {atracoes.map((item, i) => (
                        <div className={styles.atracao} key={i}>
                            <h3>{item.titulo}</h3>
                            <img
                                src={item.imagem}
                                alt={item.titulo}
                                style={{ cursor: "pointer" }}
                                data-bs-toggle="modal"
                                data-bs-target="#ExemploModalCentralizado"
                                onClick={() => setAtracaoSelecionada(item)}
                            />
                        </div>
                    ))}
                </section>

                {/* Modal */}
                <div
                    className="modal fade"
                    id="ExemploModalCentralizado"
                    tabIndex="-1"
                    aria-labelledby="TituloModalCentralizado"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className={`modal-content ${styles.modalContent}`}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="TituloModalCentralizado">
                                    {atracaoSelecionada?.titulo}
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Fechar"
                                ></button>
                            </div>
                            <div className="modal-body">
                                {atracaoSelecionada && (
                                    <>
                                        <div className={`container ${styles.modalContainer}`}>
                                            <img
                                            
                                                src={atracaoSelecionada.imagem}
                                                alt={atracaoSelecionada.titulo}
                                                width={100}
                                                height={100}
                                               
                                            />
                                            <p>{atracaoSelecionada.descricao}</p>
                                            <h6>Inclui:</h6>
                                            <ul>
                                                {atracaoSelecionada.inclui.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Ingresso;
