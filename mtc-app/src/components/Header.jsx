import "../componentsStyle/Header.css"
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';

export default function Header({searchQuery, onSearchChange}) {

    return (
        <div>
            <header className='header'>
                <Link to="/" className={"logolink"}>
                    <img src="/MTC_Logo.svg" className='header-logo' alt=""/>
                    <h1>Focus</h1>
                </Link>
                <div className='searchbar'>
                    <img src="/searchLoop.svg" className='searchimg' alt=""/>
                    <input type="text"
                           placeholder="Поиск"
                           className="searchtype"
                           value={searchQuery}
                           onChange={onSearchChange}
                    />
                </div>
            </header>
            <div>
                <Navbar/>
            </div>
        </div>
    )
}
