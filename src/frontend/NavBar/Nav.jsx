import logoIGL from '../../assets/IGL_Logo.png';
import './styles/navbar.css';
import { SearchBar } from './Atoms/Searchbar';
import { ButtonExit } from './Atoms/ButtonExit';

export function Navbar () {
    return (
        <nav className="__Navbar-Container">
            <div className="__Navbar-Content">
                <p>Menu Hamburguesa</p>
                <img src={logoIGL} alt='Logo' className='logoIGL'/>
                <div className='__Navbar-Content-Controls'>
                    <SearchBar />
                    <ButtonExit />
                </div>
            </div>
        </nav>
    )
}