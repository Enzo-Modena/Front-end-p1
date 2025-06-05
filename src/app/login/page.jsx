import './page.module.css'

export default function Login() {
    return(
        //alteração nos arquivos de page e adicionado a pesagem da fonte poppins
        <div className="container">
            {/* Criar conta */}
            <div className="container-criar-conta">
                <div className="container-texto">
                    <h1>Primeira vez aqui?</h1>
                    <p className="texto">Crie sua conta em poucos minutos e </p>
                    <p className="texto">tenha acesso a todos os nossos serviços</p>
                </div>
            </div>
            {/* Acessar conta */}
            <div className="container-acessar-conta">
                <div className="container-titulo">
                    <h1>Acessar conta</h1>
                </div>
                <form>
                    <div className="campo-preencher">
                    <input type="text" placeholder="Email" name="email"></input>
                    <input type="text" placeholder="Senha" name="senha"></input>
                </div>
                <div className="container-botao">
                    <button>Login</button>
                </div>
                </form>
            </div>
        </div>
    );
}