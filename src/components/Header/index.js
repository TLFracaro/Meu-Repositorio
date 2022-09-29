import {Link} from "react-router-dom"
    function Header() {
        return (
            <header>
                <div>
                <Link to="/">Home</Link><br />
                <Link to="/cadastro">Cadastro</Link><br />
                <Link to="/calculofinanceiro">Calculo Financeiro</Link><br />
                <Link to="/contacorrente">Conta Corrente</Link><br />
                <Link to="/sobrenos">Sobre Nós</Link><br />
                </div>
            </header>
        )
    }
export default Header;