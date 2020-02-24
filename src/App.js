import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import Frase from "./components/Frase.js";



const Contenedor = styled.div`
 display: flex;
 align-items: center;
 padding-top: 5rem;
 flex-direction:column;

`
const Boton = styled.button`
background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
background-size: 300px;
font-family: Arial, Helvetica, san-serif;
color: #fff;
margin-top: 3rem;
padding: 1rem 3 rem;
font-size: 2rem;
border: 2px solid black;
transition: background-size .8s ease;
  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`

const Milink = styled.p`
color: white;
text-decoration: none;
padding-top: 50px;
`

const Ellink = styled.a`
  color: white;
  font-family: Arial, Helvetica, san-serif;
  text-decoration: none;
`;







function App() {

  //State de frases
  const [frase, guardarFrase] = useState({})


  const consultarApi = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    let frase = await api.json()
    guardarFrase(frase[0])
  }

  //cargar una frase
  useEffect(()=>{
    consultarApi()
  }, [])


  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={() => consultarApi()}
      >Obtener Frase</Boton>




      <center>
        <Milink>
          Creado en React por{" "}
          <Ellink href="https://www.linkedin.com/in/chrystian-fabian-lozano-ramirez/">
            Chrystian Fabian Lozano Ramirez
          </Ellink>
        </Milink>
      </center>
    </Contenedor>
  );
}

export default App;
