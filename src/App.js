import Cabecera from './components/Cabecera.js'
import Listado from './components/Listado.js'
import React from 'react'
import { useState } from 'react'

// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App(){
  const [carrito, setCarrito]= useState(0)
  const [acumulado, setAcumulado] = useState(0)

  const actualizar= (cantCompra) => {
    setAcumulado(cantCompra+acumulado)
    setCarrito(acumulado)
  }

  return (
    <div className="App">
      <Cabecera carrito={carrito} />
      <Listado actualizar={actualizar}/>
    </div>
  );
}

export default App;
