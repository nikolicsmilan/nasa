
import React from 'react';
import AsideConsole from './AsideConsole';
import { MyConsoleContext } from '../../../context/ConsoleContext';
const RightConsolesAside = () => {

  const {rightasideconsole}=MyConsoleContext()
  return (
    <>
     <AsideConsole source ={rightasideconsole}/>
  
    </>
  )
}

export default RightConsolesAside