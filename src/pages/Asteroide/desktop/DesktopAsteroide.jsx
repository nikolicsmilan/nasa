import React from 'react'
import MainConsole from '../../../components/consoles/views/MainConsole'
import LeftConsolesAside from '../components/LeftConsolesAside'
import RightConsolesAside from '../components/RightConsolesAside'
import MainConsoleFrame from '../components/MainConsoleFrame'
const DesktopAsteroide = ({}) => {
  return (
    <div
        className={`flex flex-row  w-full 
       relative z-50`}
      >
        <LeftConsolesAside />
        <MainConsoleFrame />
        <RightConsolesAside />
      </div>
  )
}

export default DesktopAsteroide