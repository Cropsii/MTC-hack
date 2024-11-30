import React, { useState, useEffect } from 'react';
import Header from './components/Header';
// import Main from './components/Main';
import Card from './componentsKirill/Card'; // Импортируем компонент Card
// import { personInfo } from './data'; // Убедитесь, что путь правильный
import "./componentsKirill/Card.css";

function App() {
  const [data, setData] = useState([]); // Используем personInfo.result
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:8008/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const columnsToSearch = [
    'Подразделение 1', 'Функциональный блок', 'Подразделение 2', 'Подразделение 3', 'Подразделение 4', 'Должность', 'Роль', 'Фамилия', 'Имя', 'Телефон', 'Город', 'Адрес', 'Почта'
  ];

  // Проверка, что data определен и является массивом
const filteredData = data.filter(item =>
    columnsToSearch.some(column =>
      item[column] && item[column].toString().toLowerCase().includes(searchQuery.toLowerCase())
    ));

  return (
    <div>
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
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
      </div>
    </div>
  );
}

export default App;
