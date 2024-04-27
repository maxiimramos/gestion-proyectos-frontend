import React, { useState } from 'react'

export default function Cabecera() {
  const [miEstado, setMiEstado] = useState(false);
  return (
    <p>
        HOLA QUE
        {miEstado && (<p>Mi estado esta a true</p>)}
        <button onClick={()=>setMiEstado(!miEstado)}>Cambiar estado</button>
      
    </p>
  );
}
