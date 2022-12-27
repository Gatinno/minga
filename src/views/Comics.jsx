import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
const Comics = ({setTitle, setButtons}) => {
  useEffect(()=> {
    setTitle('Los mejores comics! Aqui!')
    setButtons(false)
  },[])
  return (<>
    <h1 style={{color: 'black'}}>Comics</h1>
    <Link to='/details/asda'>Comic Random</Link>
  </>)
}
export default Comics