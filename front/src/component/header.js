import {NavLink} from 'react-router-dom';
import './css/header.css';

function Header() {
    return (
        <header>
            <div className='header'>
                <h1><NavLink to='/'>짧은 대본</NavLink></h1>
                <div className='nav-container'>
                    <div className='header-sns'>
                        <a id='header-sns-yt' href='/'>유튜브</a>
                        <a id='header-sns-in' href='/'>인스타그램</a>
                        <a id='header-sns-fb' href='/'>페이스북</a>
                    </div>
                    <nav>
                        <NavLink className='header-nav' to='/about'>짧은 대본</NavLink>
                        <NavLink className='header-nav' to='/world'>세계관</NavLink>
                        <NavLink className='header-nav' to='/actors'>배우</NavLink>
                        <NavLink className='header-nav' to='/news'>소식</NavLink>
                        <NavLink className='header-nav' to='/shop'>굿즈</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;