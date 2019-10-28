import React from 'react'
import logo from "../img/logoBurger.png";
import "../css/App.css";

export const Chef = () => {

    return(
        <div>
            <header className="Flex-header">
             <img src={logo} alt="imagen de product" className="Burger-log" />
            </header>
            <main>
                <section>
                 <button>Enviado</button>
                 <button>Pendiente</button>
                </section>
            </main>
        </div>
    )
}