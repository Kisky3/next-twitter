import React from 'react'


function SidebarLink({ Icon, text, active }) {
  return (
    <div className={`text-[#d9d9d9] flex items-center justify-center xl:justify-start`}>
      <Icon className="h-7"></Icon>
      <span>{text}</span>
    </div>
  )
}

export default SidebarLink
