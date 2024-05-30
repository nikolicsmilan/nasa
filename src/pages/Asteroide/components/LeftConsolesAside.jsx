import React from 'react';
import AsideConsole from './AsideConsole';
// Csak szét választja az adatokat jelezve melyik komponens kapja meg
import {leftasideconsole}from "../../../locales/localdata"
const LeftConsolesAside = () => {

  return (
    <>
     <AsideConsole source ={leftasideconsole}/>
  
    </>
  )
}

export default LeftConsolesAside