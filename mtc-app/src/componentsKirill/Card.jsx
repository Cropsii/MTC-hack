import React from "react";
import "./Card.css";
import Tag from "./tag";
import { FaPhoneAlt } from 'react-icons/fa';  // Иконка телефона
import { FaEnvelope } from 'react-icons/fa';  // Иконка почты

const Card = ({ name, surname, position, project, subdivision, city, workProfile, telephone, email, image }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src={image}
          alt={`${name} ${surname}`}
          className="card-avatar"
        />
        <div className="card-info">
          <h3>{`${name} ${surname}`}</h3>
          <p>{position}</p>
        </div>
      </div>
      <div className="card-body">
      <div>
          <p>Текущий проект: <br/> {project}</p>
      </div>
      </div>
      <div className="card-tags">
          <Tag text={subdivision}/>
          <Tag text={city}/>
          <Tag text={workProfile}/>
      </div>
      <div className="card-footer">
        <p><strong>Контакты:</strong></p>
        <div className="contact-info">
        <p>
            <FaPhoneAlt /> {telephone} {/* Иконка телефона рядом с номером */}
          </p>
          <p>
            <FaEnvelope /> {email} {/* Иконка почты рядом с email */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;