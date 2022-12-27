import React, { useEffect } from "react";
const Details = ({setTitle, setButtons}) => {
  useEffect(()=> {
    setTitle('Aquí veras el detalle del comic seleccionado!')
    setButtons(false)
  }, [])
  return <p>Detalles</p>
}
export default Details