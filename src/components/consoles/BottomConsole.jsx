import React from 'react'

const BottomConsole = ({buttons,handleSubMenuChange}) => {
  return (
 <>

{buttons?.map((item) => (
                    <div
                      className="text-3xl text-info m-2 flex flex-col justify-center"
                      onClick={() => handleSubMenuChange(item.property,item.name)}
                    >
                      <span className="border-0 flex justify-center">
                        {item.icon}
                      </span>
                      <p className="text-base">{item.displayname}</p>
                    </div>
                  ))}
 </>
  )
}

export default BottomConsole