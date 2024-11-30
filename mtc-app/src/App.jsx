import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Card from './componentsKirill/Card'; // Импортируем компонент Card
import { personInfo } from './data'; // Убедитесь, что путь правильный
import "./componentsKirill/Card.css";

function App() {
  const [data] = useState(personInfo.result); // Используем personInfo.result
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Проверка, что data определен и является массивом
  const filteredData = Array.isArray(data) ? data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.subdivision.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.workProfile.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.telephone.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.depart.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <div>
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <div className="app-container">
        {filteredData.map((person, index) => (
          <Card
            key={index}
            name={person.name}
            surname={person.surname}
            position={person.position}
            depart={person.depart}
            subdivision={person.subdivision}
            city={person.city}
            workProfile={person.workProfile}
            telephone={person.telephone}
            email={person.email}
            image={person.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
