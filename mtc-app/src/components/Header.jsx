import "../componentsStyle/Header.css"

export default function Header({searchQuery, onSearchChange}) {

    return (
        <div className='header'>
            <img src="/MTC_Logo.svg" className='header-logo' alt=""/>
            <div className='searchbar'>
                <img src="/searchLoop.svg" className='searchimg' alt=""/>
                <input type="text"
                       placeholder="Поиск"
                       className="searchtype"
                       value={searchQuery}
                       onChange={onSearchChange}
                />
            </div>
            <div></div>
        </div>
    )
}
