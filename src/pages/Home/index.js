import { Link } from "react-router-dom";
function Home(){
    return(
        <div class = "row">
            <div class="column">
                <div class="card">
                    <h1>Página Inicial</h1>
                    <h2>Página inicial do Banco PW</h2>
                    <img src={require("./bancopw.gif")} alt="BancoPW"></img>
                </div>
            </div>
        </div>
    );
}
export default Home;