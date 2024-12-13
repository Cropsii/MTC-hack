import React from 'react';
import '../componentsStyle/FilterModal.css'; // Импортируем CSS для стилизации модального окна

const FilterModal = ({ isOpen, onClose, onApplyFilters, cities, departments, roles }) => {
  const [filters, setFilters] = React.useState({
    city: '',
    department: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Фильтры</h2>
        <label>
          Город:
          <select name="city" value={filters.city} onChange={handleChange}>
            <option value="">Все</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </label>
        <label>
          Отдел:
          <select name="department" value={filters.department} onChange={handleChange}>
            <option value="">Все</option>
            {departments.map((department, index) => (
              <option key={index} value={department}>{department}</option>
            ))}
          </select>
        </label>
        <label>
          Роль:
          <select name="role" value={filters.role} onChange={handleChange}>
            <option value="">Все</option>
            {roles.map((role, index) => (
              <option key={index} value={role}>{role}</option>
            ))}
          </select>
        </label>
        <div className="modal-buttons">
          <button onClick={onClose}>Закрыть</button>
          <button onClick={handleApply}>Применить</button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
