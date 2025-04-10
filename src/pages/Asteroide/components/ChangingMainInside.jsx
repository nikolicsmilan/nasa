import { useDataVisualization } from '../../../hooks/use-datavisualization'
import { MyConsoleContext } from '../../../context/ConsoleContext';
const ChangingMainInside = () => {
    const { leftasideconsole, actualMainConsole, animationVariants,info } =
    MyConsoleContext();
    const { updateConsole } = useDataVisualization();
  return (
    <div className='border-2 border-red-400'>{updateConsole(actualMainConsole)}</div>
  )
}

export default ChangingMainInside