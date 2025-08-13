import { useState } from "react"
import {navLinks} from '../constants/index.js'

function NavItems(){
  return (
    <ul className="nav-ul">
      {/* {
        ['Home','About','Projects','Contact'].map((item,index)=>(
          <li key={index} className="nav-li">
            <a href="/" className="nav-li_a">{item}</a>
          </li>
        ))
      } */
      
          navLinks.map(({id,href,name})=>(
              <li key={id} className="nav-li">
                  <a href={href} className="nav-li_a">
                    {name}
                  </a>
              </li>
          ))
      }
    </ul>
  )
}


function Navbar() {

  const [isOpen,setIsOpen] = useState(true);

  function toggleMenu()
  {
      setIsOpen(prevIsOpen=>!prevIsOpen)
  }

  return (
   <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
            <a href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
              Pratibha
            </a>
            <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none flex sm:hidden" aria-label="Toggle Menu">
               <img src={isOpen?'assets/close.svg':'assets/menu.svg'} alt="toggle" className='w-6 h-6' />
            </button>
            <nav className="sm:flex hidden" onClick={()=>{}}>
                <NavItems/>
            </nav>

        </div>
      </div>

      <div className={`nav-sidebar ${isOpen?'max-h-screen' : 'max-h-0'}`}>
          <nav className="p-5">
              <NavItems/>
          </nav>
      </div>
   </header>
  )
}

export default Navbar