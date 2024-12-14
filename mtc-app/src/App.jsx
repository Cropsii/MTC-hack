import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Main from "./components/Main";
import CardCEO from "./components/CardCEO"; // Импортируем компонент для руководителей
import Card from "./components/Card"; // Импортируем компонент Card
import Tabs from "./components/Tabs"; // Импортируем компонент Tabs
import "./componentsStyle/AllCards.css"
import Depart from "./components/CardDepart";
import "./componentsStyle/Tabs.css"
import HomePage from "./components/HomePage"
import Footer from "./components/Footer"
import FilterPanel from "./components/FilterPanel";

// import "./components/Card.css";

function App() {
    const [data, setData] = useState([]); // Используем personInfo.result
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("Сотрудники");
    const [filterTag, setFilterTag] = useState("");
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
    const [filters, setFilters] = useState({city: '', department: '', role: '', position: ''});

    useEffect(() => {
        fetch("http://localhost:8008/data")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setFilterTag("");
    };

    const handleTagClick = (tag) => {
        setFilterTag(tag); // Обновляем состояние фильтрации при нажатии на тэг
    };

    const handleOpenFilterPanel = () => {
        setIsFilterPanelOpen(true);
    };

    const handleCloseFilterPanel = () => {
        setIsFilterPanelOpen(false);
    };

    const handleApplyFilters = (filters) => {
        setFilters(filters);
    };

    const handleResetFilters = () => {
    setFilterTag("");
    setFilters({ city: "", department: "", role: "", position: "" });
  };

    const columnsToSearch = [
        "Подразделение 1",
        "Функциональный блок",
        "Подразделение 2",
        "Подразделение 3",
        "Подразделение 4",
        "Должность",
        "Роль",
        "Фамилия",
        "Имя",
        "Телефон",
        "Город",
        "Адрес",
        "Почта",
    ];

    // Проверка, что data определен и является массивом
    const filteredData = data.filter((item) =>
        columnsToSearch.some(
            (column) =>
                item[column] &&
                item[column]
                    .toString()
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
        ) && (filterTag ? item["Город"] === filterTag || item["Подразделение 3"] === filterTag || item["Роль"] === filterTag || item["Должность"] === filterTag : true)
        && (filters.city ? item["Город"] === filters.city : true)
        && (filters.department ? item["Подразделение 3"] === filters.department : true)
        && (filters.role ? item["Роль"] === filters.role : true)
        && (filters.position ? item["Должность"] === filters.position : true)
        && (activeTab === "Руководители" ? item["Роль"] === "руководство " : true)
        && (activeTab === "Сотрудники" ? !(item["Роль"] === "руководство ") && !(item["Роль"] === "depart") : true)
        && (activeTab === "Департаменты" ? item["Роль"] === "depart" : true)
    );

    const tabs = ["Сотрудники", "Руководители", "Департаменты"];

    const getUniqueValues = (data, key, currentFilters) => {
        const filteredByTab = data.filter((item) =>
            (activeTab === "Руководители" ? item["Роль"] === "руководство " : true) &&
            (activeTab === "Сотрудники" ? !(item["Роль"] === "руководство ") && !(item["Роль"] === "depart") : true) &&
            (activeTab === "Департаменты" ? item["Роль"] === "depart" : true) &&
            (currentFilters.city ? item["Город"] === currentFilters.city : true) &&
            (currentFilters.department ? item["Подразделение 3"] === currentFilters.department : true) &&
            (currentFilters.role ? item["Роль"] === currentFilters.role : true) &&
            (currentFilters.position ? item["Должность"] === currentFilters.position : true)
        );
        return [...new Set(filteredByTab.filter(item => item[key]).map(item => item[key]))];
    };

    const cities = getUniqueValues(data, "Город", filters);
    const departments = getUniqueValues(data, "Подразделение 3", filters);
    const roles = getUniqueValues(data, "Роль", filters);
    const positions = getUniqueValues(data, "Должность", filters);

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/employees" element={
                        <>
                            <Header searchQuery={searchQuery}
                                    onSearchChange={handleSearchChange}
                                    isFilterPanelOpen={isFilterPanelOpen}
                                    onOpenFilterPanel={handleOpenFilterPanel}
                                    onCloseFilterPanel={handleCloseFilterPanel}
                                    onApplyFilters={handleApplyFilters}
                                    onResetFilters={handleResetFilters}
                                    cities={cities}
                                    departments={departments}
                                    roles={roles}
                                    positions={positions}
                                    currentFilters={filters}/>

                            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange}/>
                            <div className={"cards-grid"}>
                                {filteredData.map((person, index) => {
                                    if (
                                        activeTab === "Руководители" &&
                                        person["Роль"] === "руководство "
                                    ) {
                                        return (
                                            <CardCEO
                                                name={person["Имя"]}
                                                surname={person["Фамилия"]}
                                                position={person["Должность"]}
                                                subdivision={person["Подразделение 3"]}
                                                city={person["Город"]}
                                                workProfile={person["Роль"]}
                                                telephone={person["Телефон"]}
                                                email={person["Почта"]}
                                                image={["Фото"]}
                                                project={person["Подразделение 2"]}
                                                onTagClick={handleTagClick}
                                            />
                                        );
                                    } else if (
                                        activeTab === "Сотрудники" &&
                                        !(person["Роль"] === "руководство ") && !(person["Роль"] === "depart")
                                    ) {
                                        return (
                                            <Card
                                                name={person["Имя"]}
                                                surname={person["Фамилия"]}
                                                position={person["Должность"]}
                                                depart={person["Подразделение 3"]}
                                                city={person["Город"]}
                                                workProfile={person["Роль"]}
                                                telephone={person["Телефон"]}
                                                email={person["Почта"]}
                                                image={""}
                                                onTagClick={handleTagClick}
                                            />
                                        );
                                    } else if (
                                        activeTab === "Департаменты" &&
                                        person["Роль"] === "depart"
                                    ) {
                                        return (
                                            <div key={index} className="depart-grid">
                                                <Depart
                                                    tags={person["Подразделение 4"]}
                                                    option={person["Должность"]}
                                                    name={person["Фамилия"]}
                                                    adress={person["Подразделение 3"]}
                                                    inn={person["Телефон"]}
                                                    kpp={person["Город"]}
                                                    ogrn={person["Адрес"]}
                                                    email={person["Почта"]}
                                                    img={person["Фото"]}
                                                />
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                            <Footer/>
                        </>
                    }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
