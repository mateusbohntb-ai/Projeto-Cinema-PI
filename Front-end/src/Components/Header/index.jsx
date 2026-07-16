
//import do estilo do proprio arquivo 
import "./style.css"

// Import das rotas 
import { Link } from "react-router-dom"

function header() {
    return (

        <header>

            
            <h1>Aba de navegação </h1>
        
        <Link to="/">Home</Link>
        
        
        </header>

    )
}

export default Header 