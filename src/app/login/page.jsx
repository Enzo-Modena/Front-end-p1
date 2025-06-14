import styles from "./page.module.css";

export default function Login() {
    return (
        // alteração nos arquivos de page e adicionado a pesagem da fonte poppins
        <div className="container">
            <div className={styles.container}>
                    <div className={styles.containerGeral}>
                        {/* Criar conta */}
                        <div className={styles.containerCriarConta}>
                            <div className={styles.containerTexto}>
                                <h1>Primeira vez aqui?</h1>
                                <p className={styles.texto}>Crie sua conta em poucos minutos e</p>
                                <p className={styles.texto}>tenha acesso a todos os nossos serviços</p>
                            </div>
                            <div className={styles.containerBtnCriarConta}>
                                <button>Cadastre-se</button>
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
                                <input type="text" placeholder="Senha" name="senha" />
                            </div>
                            <div className={styles.containerBtnEntrar}>
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
