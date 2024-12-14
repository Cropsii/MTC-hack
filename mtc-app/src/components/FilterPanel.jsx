import React, { useEffect, useRef, useCallback } from 'react';
import '../componentsStyle/FilterPanel.css'; // Импортируем CSS для стилизации модального окна

const FilterPanel = ({ isOpen, onClose, onApplyFilters, cities, departments, roles, positions, currentFilters, onResetFilters }) => {
  const [filters, setFilters] = React.useState(currentFilters);
const panelRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
    onApplyFilters({ ...currentFilters, [name]: value });
  };

  const handleReset = (filter1, filter2, filter3, filter4) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter1]: "",
      [filter2]:"",
      [filter3]:"",
        [filter4]:"",
    }));
    onResetFilters();
    onClose();
  };

   const handleClickOutside = useCallback((event) => {
    if (panelRef.current && !panelRef.current.contains(event.target)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);  // Добавляем handleClickOutside в зависимости


  if (!isOpen) return null;

  return (
      <div className="filter-panel" ref={panelRef}>
          <div className={"filter-panel-header"}>
              <h2>Фильтры</h2>
              <button onClick={() => handleReset('city', 'role', 'department', "position")}
                      className="reset-filters-button">Сбросить фильтры
              </button>
          </div>
          <label>
              Город:
              <select name="city" value={filters.city} onChange={handleChange}>
                  <option value="">Все</option>
                  {cities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                  ))}
              </select>
              <button onClick={() => handleReset('city')}>Сбросить</button>
          </label>
          <label>
              Отдел:
              <select name="department" value={filters.department} onChange={handleChange}>
                  <option value="">Все</option>
                  {departments.map((department, index) => (
                      <option key={index} value={department}>{department}</option>
                  ))}
              </select>
              <button onClick={() => handleReset('department')}>Сбросить</button>
          </label>
          <label>
              Роль:
              <select name="role" value={filters.role} onChange={handleChange}>
                  <option value="">Все</option>
                  {roles.map((role, index) => (
                      <option key={index} value={role}>{role}</option>
                  ))}
              </select>
              <button onClick={() => handleReset('role')}>Сбросить</button>
          </label>
          <label>
              Должность:
              <select name="position" value={filters.position} onChange={handleChange}>
                  <option value="">Все</option>
                  {positions.map((position, index) => (
                      <option key={index} value={position}>{position}</option>
                  ))}
              </select>
              <button onClick={() => handleReset('position')}>Сбросить</button>
          </label>
          <div className="filter-buttons">
              <button onClick={onClose}>Закрыть</button>
          </div>

      </div>
  );
};

export default FilterPanel;
