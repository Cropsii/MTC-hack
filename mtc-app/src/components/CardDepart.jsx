import React from "react";
import "../componentsStyle/department.css"

const Depart = ({ tags, option, name, adress, inn, kpp, ogrn, email, img }) => {
  return (
    <div className={"depart"}>
      <div className="depart-header">
        <img src={"Exolve2.svg"} alt={name} className="depart-image" />
      </div>
      <div className="depart-body">
        <p className="depart-option">{option}</p>
        <p className="depart-title">Реквизиты:</p>
        <ul className="depart-details">
          <li><strong>Название компании:</strong> {name}</li>
          <li><strong>Фактический адрес:</strong> {adress}</li>
          <li><strong>ИНН:</strong> {inn}</li>
          <li><strong>КПП:</strong> {kpp}</li>
          <li><strong>ОГРН:</strong> {ogrn}</li>
          <li><strong>Email:</strong> {email}</li>
        </ul>
      </div>
    </div>
  );
};

export default Depart;