import React from 'react';
import AsideConsole from './AsideConsole';
// Csak szét választja az adatokat jelezve melyik komponens kapja meg
//import {leftasideconsolesource}from "../../../locales/localdata"
import { MyConsoleContext } from '../../../context/ConsoleContext';
const LeftConsolesAside = () => {
const {leftasideconsole}=MyConsoleContext()
  return (
    <>
     <AsideConsole source ={leftasideconsole}/>
  
    </>
  )
}

export default LeftConsolesAside