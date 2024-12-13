import "../componentsStyle/Header.css"
import Navbar from "./Navbar";

export default function Header() {
    return (
        <div>
            <div className='header'>
                <img src="/MTC_Logo.svg" className='header-logo' alt=""/>
                <h1 className={"home-title"}>Focus</h1>
            </div>
            <Navbar/>
        </div>
    )
}
