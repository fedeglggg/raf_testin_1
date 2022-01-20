import './App.css';
import React from 'react';
import CardRafam from './CardRafam.js'

/* 
  --Dudas--
  Donde poner el divider
  
  --Otras Cosas--
  Se podría pedir el contenido del modal en props tmb para hacerlo dinamico o simplemente pedir el modal
  o en el link del header pasarle el handle que abra un modal, este estaria afuera, aca suponemos que
  todos las card van a abrir un modal
*/
  /* Props que recibe, iría en el story y despues agregar arriba en App({}) */
  

  const headerProps = {
    title:"Datos de usuario*",
    linkText:"+Asignar Persona",
  }
  const content = "Aca va un form"; /* aca podría ir una tabla u otra cosa */
  const buttonProps = {}

  const headerProps2 = {
    title:"Datos de persona*",
    linkText:"+Asignar Persona",
  }
  const content2 = "Aca iria perfil de datos id y todo eso"; /* aca podría ir una tabla u otra cosa */
  const buttonProps2 = {
    text:"Designar Persona",
    variant:"outlined",
    color:"secondary",
    disabled:true,
    clickHandle: alertar => (alert('Boton Final Clickeado')),
  }
  
  /* Fin Props */

function App() {

  return (
    <div>
      <CardRafam headerProps={headerProps} content={content} buttonProps={buttonProps}/>
      <CardRafam headerProps={headerProps2} content={content2} buttonProps={buttonProps2}/>
    </div>
  );
}

export default App;
