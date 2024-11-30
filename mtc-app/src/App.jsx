import React, { useState } from 'react';
import Header from './components/Header';
import Card from './componentsKirill/Card';
import CardCEO from './componentsKirill/CardCEO'; // Импортируем компонент для руководителей
import { personInfo } from './data';
import './componentsKirill/Card.css';
import Tabs from './componentsKirill/Tabs'; // Импортируем компонент Tabs
import Depart from "./componentsKirill/departments";
import Main from './components/Main';

function App() {
  const [data] = useState(personInfo.result);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Сотрудники');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    console.log('Search Query:', event.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredData = Array.isArray(data)
    ? data.filter((item) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
          (item.name && item.name.toLowerCase().includes(lowerCaseQuery)) ||
          (item.surname && item.surname.toLowerCase().includes(lowerCaseQuery)) ||
          (item.city && item.city.toLowerCase().includes(lowerCaseQuery)) ||
          (item.workProfile && item.workProfile.toLowerCase().includes(lowerCaseQuery)) ||
          (item.telephone && item.telephone.toLowerCase().includes(lowerCaseQuery)) ||
          (item.department && item.department.toLowerCase().includes(lowerCaseQuery))
        );
      })
    : [];

  console.log('Filtered Data:', filteredData);

  const tabs = ['Сотрудники', 'Руководители', 'Департаменты'];

  return (
    <div>
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="app-container">
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
