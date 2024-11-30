import React from "react";
import "./department.css";
import Tag from "./tag";

const Depart = ({ tags, option, name, adress, inn, kpp, ogrn, email, img }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={img} alt={name} className="card-image" />
        <div className="card-tags" >
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
      <div className="card-body">
        <p className="card-option">{option}</p>
        <p className="card-title">Реквизиты:</p>
        <ul className="card-details">
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