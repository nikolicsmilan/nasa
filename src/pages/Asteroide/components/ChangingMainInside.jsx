import React from 'react'
import { useDataVisualization } from '../../../hooks/use-datavisualization'
import { MyConsoleContext } from '../../../context/ConsoleContext';
const ChangingMainInside = () => {
    const { leftasideconsole, actualMainConsole, animationVariants,info } =
    MyConsoleContext();
    const { updateConsole } = useDataVisualization();
  return (
    <div>{updateConsole(actualMainConsole)}</div>
  )
}

export default ChangingMainInside