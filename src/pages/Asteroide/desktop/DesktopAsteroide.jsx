import React from 'react'
import MainConsole from '../../../components/consoles/views/MainConsole'
import LeftConsolesAside from '../components/LeftConsolesAside'
import RightConsolesAside from '../components/RightConsolesAside'
import MainConsoleFrame from '../components/MainConsoleFrame'
const DesktopAsteroide = ({toggle}) => {
  return (
    <div
        className={`flex flex-row  w-full 
        ${
          toggle ? "opacity-0" : "opacity-70"
        } relative z-50`}
      >
        <LeftConsolesAside />
        <MainConsoleFrame />
        <RightConsolesAside />
      </div>
  )
}

export default DesktopAsteroide