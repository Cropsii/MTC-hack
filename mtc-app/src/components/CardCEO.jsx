import React from "react";
import "../componentsStyle/Card.css";
import "../componentsStyle/AllCards.css";
import { FaPhoneAlt } from 'react-icons/fa';  
import { FaEnvelope } from 'react-icons/fa';
import Tag from "./Tags";

const CardCEO = ({ name, surname, position, subdivision, project, city, telephone, email, image }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src={"profileplaceholder.jpg"}
          alt={`${name} ${surname}`}
          className="card-avatar"
        />
        <div className="card-info">
          <h3>{`${name} ${surname}`}</h3>
          <p>{position}</p>
        </div>
      </div>
      <div className="card-body">
          Текущий проект: 
          <p>{project}</p>
      </div>
      <div className="card-tags">
          <Tag text={city}/>
          <Tag text={subdivision}/>
          <Tag text={position}/>
      </div> 
      <div className="card-footer">
        <p><strong>Контакты:</strong></p>
        <div className="contact-info">
        <p>
            <FaPhoneAlt /> {telephone} 
          </p>
          <p>
            <FaEnvelope /> {email} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCEO;