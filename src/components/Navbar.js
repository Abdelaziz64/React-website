import { click } from '@testing-library/user-event/dist/click'
import React, {useState, userState} from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    const[click,setClick] = useState(false);
    const hancdleClick = () => setClick(!click);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
               <Link to ="/" className='navbar-logo'>
                GYMBRO <i className="fab fa-typo3"/>
                </Link>   
                <div className='menu-icon' onClick={hancdleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
