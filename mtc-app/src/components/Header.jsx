import "../componentsStyle/Header.css"
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
import FilterPanel from "./FilterPanel";
import React from "react";
import {postcss} from "tailwindcss";

export default function Header({
                                   searchQuery,
                                   onSearchChange,
                                   isFilterPanelOpen,
                                   onOpenFilterPanel,
                                   onCloseFilterPanel,
                                   onApplyFilters,
                                   onResetFilters,
                                   cities,
                                   departments,
                                   roles,
                                   positions,
                                   currentFilters
                               }) {
    const handleClearSearch = () => {
        onSearchChange({target: {value: ''}});
        onResetFilters();
    };

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
                    <img src={'/close.png'} alt={''} onClick={handleClearSearch} className={"cross-button"}/>
                    <img src={"/filter.svg"} alt={""} onClick={onOpenFilterPanel} className="button-filter"/>
                </div>
                <FilterPanel
                    isOpen={isFilterPanelOpen}
                    onClose={onCloseFilterPanel}
                    onApplyFilters={onApplyFilters}
                    cities={cities}
                    departments={departments}
                    roles={roles}
                    positions={positions}
                    currentFilters={currentFilters}
                    onResetFilters={onResetFilters}
                />
            </header>
            <div>
                <Navbar/>
            </div>
        </div>
    )
}
