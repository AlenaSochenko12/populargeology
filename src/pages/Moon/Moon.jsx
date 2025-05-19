import React, { useState } from 'react';
import Accordion from '../../ui-kit/Accordion/Accordion';
import videoFile from '../../../img-video/videos/Earth_Theia_Collision_2.mp4';

function Moon() {
    const [selectedArticleId, setSelectedArticleId] = useState(null);

    const contentData = [
        {
            id: 1,
            type: 'video',
            src: videoFile,
        },
        {
            id: 2,
            type: 'article',
            title: 'Формирование Луны',
            time: '4.5 Млрд. лет назад',
            text: 'Когда наша Солнечная система формировалась почти четыре с половиной миллиарда лет назад, объект размером с планету столкнулся с ранней Землей, что привело к образованию Луны, возможно, из горячего вращающегося облака каменного пара, называемого синестией. [...]',
            photo: 'img-video/articles/moon1.png',
        },
        {
            id: 3,
            type: 'article',
            title: 'Миссия Аполлона-11',
            time: '20 июля 1969',
            text: 'Основной задачей Аполлона-11 было выполнение национальной цели: посадка на Луну с экипажем и возвращение на Землю. [...]',
            photo: 'img-video/articles/apollo.png',
        },
        {
            id: 4,
            type: 'gallery',
            title: 'Лунный метеорит ALHA 81005',
            photo: 'img-video/exhibits/pic117_4_3.png',
        },
        {
            id: 5,
            type: 'gallery',
            title: 'Лунный метеорит Дар аль Гани 400',
            photo: 'img-video/exhibits/pic118_4_3.png',
        },
        {
            id: 6,
            type: 'gallery',
            title: 'Великий Скотт (базальт)',
            photo: 'img-video/exhibits/pic119_4_3.png',
        },
        {
            id: 7,
            type: 'gallery',
            title: 'Дар аль Гани 400',
            photo: 'img-video/exhibits/pic120_4_3.png',
        },
        {
            id: 8,
            type: 'gallery',
            title: 'Лунный ахондрит',
            photo: 'img-video/exhibits/pic121_4_3.png',
        },
        {
            id: 9,
            type: 'gallery',
            title: '"Рождение" Луны',
            photo: 'img-video/exhibits/pic122_4_3.png',
        },
        {
            id: 10,
            type: 'gallery',
            title: 'Маре Базальт',
            photo: 'img-video/exhibits/pic123_4_3.png',
        },
    ];

    const handleArticleClick = (articleId) => {
        setSelectedArticleId(selectedArticleId === articleId ? null : articleId);
    };

    const accordionItems = [
        {
            key: 'video',
            title: 'ВИДЕО',
            content: (
                <video className="video1" controls src={videoFile} type="video/mp4" />
            ),
        },
        {
            key: 'articles',
            title: 'СТАТЬИ',
            content: (
                <div className="articles">
                    {contentData
                        .filter((item) => item.type === 'article')
                        .map((article) => (
                            <div key={article.id} className="article-wrapper">
                                <a className="article" onClick={() => handleArticleClick(article.id)}>
                                    <img className="article-photo" src={article.photo} alt="card" />
                                    <div className="article-title">{article.title}</div>
                                </a>
                                {selectedArticleId === article.id && (
                                    <div className="article-expanded">
                                        <h2>{article.title}</h2>
                                        <div className="article-time">{article.time}</div>
                                        <div className="article-content">{article.text}</div>
                                    </div>
                                )}
                            </div>
                        ))}
                </div>
            ),
        },
        {
            key: 'gallery',
            title: 'ГАЛЕРЕЯ',
            content: (
                <div className="articles">
                    {contentData
                        .filter((item) => item.type === 'gallery')
                        .map((item) => (
                            <div key={item.id} className="article">
                                <img className="article-photo" src={item.photo} alt="card" />
                                <div className="article-title">{item.title}</div>
                            </div>
                        ))}
                </div>
            ),
        },
    ];

    return (
        <div className="top top-1">
            <div className="top-bottom center">
                <h1 className="title title-1">ОБРАЗОВАНИЕ ЛУНЫ</h1>
                <p className="title-sub">Выберите инструмент, с помощью которого хотите изучить данный отрезок времени.</p>

                <Accordion items={accordionItems} />
            </div>
        </div>
    );
}

export default Moon;