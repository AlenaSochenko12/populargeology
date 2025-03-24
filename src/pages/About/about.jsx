import './About.scss'
import React from "react";
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function About() {

  return (
    <>
    <div className="top top-1">
        <Header />
        <div className="top-bottom center">
            <h1 className="title title-1">PopularGeology.ru</h1>
            <div className="top-bottom-text">
                <div className="top-bottom-text-sub">
                    <p className="title-sub title-sub-3">
                        Государственный геологический музей им. В.И.Вернадского РАН при
                        партнерском участии Башкирского государственного университета
                        (кафедра геологии и полезных ископаемых).
                    </p>
                    <p className="team team-3">
                        Научно-популярный портал "История Земли: геологический ракурс"
                    </p>
                    <p className="title-sub title-sub-3">
                        Портал ставит своей основной целью популяризацию современных научных
                        геологических знаний по истории Земли. В основе технологических
                        решений - концепция динамического времени и пространства,
                        позволяющая осуществлять интерактивное взаимодействие различных
                        видов геологической информации как во времени, так и в пространстве.
                    </p>
                    <div className="team">
                        Исполнители проекта:
                        <br />
                        <br />
                        <a href="http://data.sgm.ru/pages/naumova_v_v" className="people">
                        Наумова В.В., д.г.-м.н., г.н.с., зав. отделом, ГГМ РАН,
                        руководитель Проекта
                        </a>
                        <br />
                        <br />
                        <a href="http://data.sgm.ru/pages/eremenko_a_s" className="people">
                        Еременко А.С., к.т.н., н.с., ГГМ РАН, ИАПУ ДВО РАН, ответственный
                        исполнитель
                        </a>
                        <br />
                        <br />
                        <a
                        href="http://data.sgm.ru/pages/zagumennov_a_a"
                        className="people"
                        >
                        Загуменнов А.А., н.с., ГГМ РАН, ИАПУ ДВО РАН
                        </a>
                        <br />
                        <br />
                        <a href="http://data.sgm.ru/pages/eremenko_v_s" className="people">
                        Еременко В. С., м.н.с., ГГМ РАН
                        </a>
                        <br />
                        <br />
                        <a
                        href="https://www.bashedu.ru/ru/sotrudniki-kafedry-geologii-gidrometeorologii-i-geoekologii"
                        className="people"
                        >
                        Злобина А.Н., к.г.-м.н., старший преподаватель БашГУ
                        </a>
                    </div>
                    <div className="team team-2">
                        Финансирование проекта
                        <p className="title-sub title-sub-3">
                        Проект выполняется в рамках Государственного задания ГГМ РАН по
                        Теме № 0140-2019-0005 «Разработка информационной среды интеграции
                        данных естественнонаучных музеев и сервисов их обработки для наук
                        о Земле».
                        </p>
                        <p className="title-sub title-sub-4">
                        Создано при партнёрском участии ПАО ГМК „Норильский никель“.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>

  )
}

export default About