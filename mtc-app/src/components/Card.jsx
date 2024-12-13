import React from "react";
import "../componentsStyle/Card.css";
import Tag from "./Tags";
import { FaPhoneAlt } from 'react-icons/fa';  // Иконка телефона
import { FaEnvelope } from 'react-icons/fa';  // Иконка почты

const Card = ({ name, surname, position, depart, subdivision, city, workProfile, telephone, email, image }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          src={`profileplaceholder.jpg`}
          alt={`${name} ${surname}`}
          className="card-avatar"
        />
        <div className="card-info">
          <h3>{`${name} ${surname}`}</h3>
          <p className={"position"}>{position}</p>
        </div>
      </div>
      <div className="card-body">
          Отдел:
          <p> {depart}</p>
      </div>
      <div className="card-tags">
          <Tag text={city}/>
          <Tag text={depart}/> {/*Пока нету*/}
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