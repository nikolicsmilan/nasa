import React from 'react'

const BottomConsole = ({buttons,handleClick}) => {
  return (
 <>

{buttons?.map((item) => (
                    <div
                      className="text-3xl text-info m-2 flex  flex-col justify-center items-center shadow-xl text-primary"
                      onClick={() => handleClick(item)}
                    >
                      <p className="border-0 flex justify-center items-center flex-col">
                      {<item.icon />}
                      <p className='text-sm'>{item.title}</p>
                      </p>
                    
                    </div>
                  ))}
 </>
  )
}

export default BottomConsole