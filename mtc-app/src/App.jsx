import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import CardCEO from './componentsKirill/CardCEO'; // Импортируем компонент для руководителей
import Card from './componentsKirill/Card'; // Импортируем компонент Card
import Tabs from './componentsKirill/Tabs'; // Импортируем компонент Tabs
import Depart from "./componentsKirill/departments";
import "./componentsKirill/Card.css";

function App() {
  const [data, setData] = useState([]); // Используем personInfo.result
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Сотрудники');

  useEffect(() => {
    fetch('http://localhost:8008/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const columnsToSearch = [
    'Подразделение 1', 'Функциональный блок', 'Подразделение 2', 'Подразделение 3', 'Подразделение 4', 'Должность', 'Роль', 'Фамилия', 'Имя', 'Телефон', 'Город', 'Адрес', 'Почта'
  ];

  // Проверка, что data определен и является массивом
const filteredData = data.filter(item =>
    columnsToSearch.some(column =>
      item[column] && item[column].toString().toLowerCase().includes(searchQuery.toLowerCase())
    ));

const tabs = ['Сотрудники', 'Руководители', 'Департаменты'];

  return (
    <div>
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="app-container">
        {filteredData.map((person, index) => (
          <Card
            key={index}
            name={person['Имя']}
            surname={person['Фамилия']}
            position={person['Должность']}
            depart={person['Подразделение 3']}
            city={person['Город']}
            workProfile={person['Роль']}
            telephone={person['Телефон']}
            email={person['Почта']}
            image={['Фото']}
          />
        ))}
        {filteredData.map((person, index) => {
          if (activeTab === 'Руководители' && person.role === 'ceo') {
            return (
              <div key={index}>
                <CardCEO
                  name={person.name}
                  surname={person.surname}
                  project={person.project}
                  subdivision={person.subdivision}
                  city={person.city}
                  workProfile={person.workProfile}
                  telephone={person.telephone}
                  email={person.email}
                  image={person.image}
                />
              </div>
            );
          } else if (activeTab === 'Сотрудники' && person.role === 'employee') {
            return (
              <div key={index}>
                <Card
                  name={person.name}
                  surname={person.surname}
                  depart={person.depart}
                  subdivision={person.subdivision}
                  city={person.city}
                  workProfile={person.workProfile}
                  telephone={person.telephone}
                  email={person.email}
                  image={person.image}
                />
              </div>
            );
          } else if (activeTab === 'Департаменты' && person.role === 'depart') {
            return (
              <div key={index} className="card-grid">
                <Depart
                  tags={person.tags}
                  option={person.options}
                  name={person.name}
                  adress={person.adress}
                  inn={person.inn}
                  kpp={person.kpp}
                  ogrn={person.ogrn}
                  email={person.email}
                  img={person.img}
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
