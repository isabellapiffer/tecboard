import "./criarbotao.css"

export function BotaoCriarEvento({ children, type = "submit" }) {
    return(
    <button className="criarEvento" type= {type}>
        { children }
    </button>
    );
}