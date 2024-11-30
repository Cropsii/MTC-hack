import React from "react";
import "./Card.css";
import { FaPhoneAlt } from 'react-icons/fa';  
import { FaEnvelope } from 'react-icons/fa';  

const CardCEO = ({ name, patronymic, position, project, telephone, email, image }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src={image}
          alt={`${name} ${patronymic}`}
          className="card-avatar"
        />
        <div className="card-info">
          <h3>{`${name} ${patronymic}`}</h3>
          <p>{position}</p>
        </div>
      </div>
      <div className="card-body">
      <div>
          <p>Текущий проект: <br/> {project}</p>
      </div>
      </div>
      <div className="card-tags">
         
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