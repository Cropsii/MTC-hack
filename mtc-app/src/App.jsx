import React, { useState, useEffect } from "react";
import Header from "./components/Header";
// import Main from "./components/Main";
import CardCEO from "./components/CardCEO"; // Импортируем компонент для руководителей
import Card from "./components/Card"; // Импортируем компонент Card
import Tabs from "./components/Tabs"; // Импортируем компонент Tabs
import "./componentsStyle/AllCards.css"
import Depart from "./components/CardDepart";
import "./componentsStyle/Tabs.css"
// import "./components/Card.css";

function App() {
  const [data, setData] = useState([]); // Используем personInfo.result
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Сотрудники");

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
    )
  );

  const tabs = ["Сотрудники", "Руководители", "Департаменты"];

  return (
    <div>
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      {/* Инлайн стиль который поправляет карточки */}
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
    </div>
  );
}

export default App;
