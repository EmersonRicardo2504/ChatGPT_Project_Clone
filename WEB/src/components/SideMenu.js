/// realizando importações e construindo buttom para o novo chat
import React from 'react'
import './SideMenu.css'


const SideMenu = ()=> {
    return(
      <aside className='sidemenu'>
        <div className='sidemenu-button'>
          <span>+</span>
            Novo chat
        </div>
      </aside>
    )
  }
  
export default SideMenu

