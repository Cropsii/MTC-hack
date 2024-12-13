import React from "react";
import "../componentsStyle/About.css"

function About({activeTab}) {
    if (activeTab === "О нас") {
        return (
            <div className="about-cards">
                <div className={"card-about"}>
                    <div className="card-about-header">
                        <h3>Что это?</h3>
                    </div>
                    <div className="card-about-body">
                        <p><strong>МТС Focus</strong> — это MVP веб-приложения с интуитивным UX и современным UI-дизайном для
                            визуализации
                            структуры компании</p>
                    </div>
                </div>
                <div className={"card-about"}>
                    <div className="card-about-header">
                        <h3>Проблема</h3>
                    </div>
                    <div className="card-about-body">
                        <p>Современным компаниям <strong>сложно быстро найти информацию</strong> о коллегах из-за
                            отсутствия подходящих
                            инструментов</p>
                    </div>
                </div>
                <div className={"card-about"}>
                    <div className="card-about-header">
                        <h3>Решение</h3>
                    </div>
                    <div className="card-about-body">
                        <p>Наше приложение предлагает <strong>гибкий поиск и интуитивный интерфейс</strong>, позволяя легко находить
                            нужных
                            сотрудников и управлять данными о компании</p>
                    </div>
                </div>
                <div className={"card-about"}>
                    <div className="card-about-header">
                        <h3>Функции</h3>
                    </div>
                    <div className="card-about-body">
                        <li>Визуализация сотрудников компании</li>
                        <li>Поиск сотрудников по ключевой информации (тэгам)</li>
                        <li>Удобный инструмент для упрощения коммуникации и управления структурами в компании</li>
                    </div>
                </div>
                <div className={"card-about"}>
                    <div className="card-about-header">
                        <h3>Стэк технологий</h3>
                    </div>
                    <div className="card-about-body">
                        <li><strong>Python (Flask, Pandas)</strong> - для реализации backend-части и обеспечения передачи информации с
                            сервера
                        </li>
                        <li><strong>React/JavaScript</strong> - для реализации лаконичного интерфейса и возможности поиска сотрудников
                        </li>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="about-cards">
                <div className={"card-about"}>
                    <div className="card-about-header">
                        <h3>Under construction</h3>
                    </div>
                    <div className="card-about-body">
                        <p>Привет, приложение все еще в разработке, поэтому тут пока ничего нет :)</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;