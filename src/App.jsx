import { useState } from "react";
import "./App.css";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEventos";
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
import { Tema } from "./componentes/Tema";



function App() {


    const temas = [{
      id: 1,
      nome: 'Front-End'
    },
    {
      id: 2,
      nome: 'Back-End'
    },
    {
      id: 3,
      nome: 'Devops'
    }
  ,
    {
      id: 4,
      nome: 'Inteligência Artificial'
    }
  ,
    {
      id: 5,
      nome: 'Data Science'
    }
  ,
    {
      id: 6,
      nome: 'Cloud'
    }
  
  ]

    const [eventos, setEventos] = 
      useState([{
      capa: 'http://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }])

    function adicionarEvento(evento) {
      setEventos([...eventos, evento])
    }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

        <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />


      <section className="container">
      {temas.map(function(tema){
        if (!eventos.some(function (evento) {
          return evento.tema.id == tema.id
        })) {
          return null
        }
        return (
          <section key={tema.id}>
            <Tema tema={tema} />
            <div className="eventos">
            {eventos.filter(function (evento){
                return evento.tema.id == tema.id
            }) 
            .map( function (evento, index) {
               return <CardEvento evento={evento} key={index} />
            })} 
            </div>
          </section>
        )
      })}
      </section>

    </main>
  );
}

export default App;
