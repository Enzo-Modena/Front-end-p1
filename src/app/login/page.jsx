"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

export default function Login() {
  const searchParams = useSearchParams();
  const modeFromUrl = searchParams.get("mode");

  const [inverter, setInverter] = useState(false); // false = login padrão

  useEffect(() => {
    if (modeFromUrl === "cadastro") {
      setInverter(true);
    } else {
      setInverter(false);
    }
  }, [modeFromUrl]);

  const handleTrocar = () => {
    setInverter(!inverter);
  };

  return (
    <div className="container">
      <div className={styles.container}>
        <div className={styles.containerGeral}>
          {!inverter ? (
            <>
              {/* Criar conta */}
              <div className={styles.containerCriarConta}>
                <div className={styles.containerTexto}>
                  <h1>Primeira vez aqui?</h1>
                  <p className={styles.texto}>Crie sua conta em poucos minutos e</p>
                  <p className={styles.texto}>tenha acesso a todos os nossos serviços</p>
                </div>
                <div className={styles.containerBtnCriarConta}>
                  <button onClick={handleTrocar}>Cadastre-se</button>
                </div>
              </div>

              {/* Acessar conta */}
              <div className={styles.containerAcessarConta}>
                <div className={styles.containerTitulo}>
                  <h1>Acessar conta</h1>
                </div>
                <form className={styles.forms}>
                  <div className={styles.campoPreencher}>
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Senha" name="senha" />
                  </div>
                  <div className={styles.containerBtnEntrar}>
                    <button>Login</button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              {/* Acessar conta primeiro */}
              <div className={styles.containerAcessarContaTrecho}>
                <div className={styles.containerTextoTrecho}>
                  <h1>Bem-vindo de volta!</h1>
                  <p className={styles.textoTrecho}>Acesse sua conta para comprar ingressos,</p>
                  <p className={styles.textoTrecho}>realizar reservas e muito mais!</p>
                </div>
                <div className={styles.containerBtnEntrarTrecho}>
                  <button onClick={handleTrocar}>Login</button>
                </div>
              </div>

              {/* Criar conta depois */}
              <div className={styles.containerCriarContaPrincipal}>
                <div className={styles.containerTituloPrincipal}>
                  <h1>Criar conta</h1>
                </div>
                <form className={styles.formsPrincipal}>
                  <div className={styles.campoPreencherPrincipal}>
                    <input type="text" placeholder="Nome Completo" name="nome" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Senha" name="senha" />
                  </div>
                  <div className={styles.containerBtnCadastrar}>
                    <button>Cadastrar</button>
                  </div>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
