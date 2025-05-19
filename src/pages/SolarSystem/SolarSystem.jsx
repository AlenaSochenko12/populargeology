import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
import videoFile from '../../../img-video/videos/Solar_Creation_2.mp4';   

function SolarSystem() {
    const [activeButton, setActiveButton] = useState(0);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [showObjectInfo, setShowObjectInfo] = useState(false);

    const hide1Ref = useRef(null);
    const hide2Ref = useRef(null);
    const hide3Ref = useRef(null);

    const objectInfoRef = useRef(null);
    const contentData = [
        {
            id: 1,
            type: 'video',
            src: videoFile,
        },
        {
            id: 2,
            type: 'article',
            title: 'Образование Солнечной системы',
            time: '4.567 Млрд. лет назад',
            text: 'Новые исследования редкого типа метеоритов показывают, что вещество, находящееся вблизи Солнца, достигло внешней Солнечной системы, как раз когда планета Юпитер очистила дыру в диске от пыли и газа, из которых образовались планеты. Результаты, опубликованные в журнале Proceedings of the National Academy of Sciences, добавляют к новому пониманию того, как формировалась наша Солнечная система и как планеты формируются вокруг других звезд. Общепринятая теория о том, как формируются планеты, состоит в том, что они образуются из диска пыли и газа, который вращается вокруг новообразованной звезды. Данные о составе этого протопланетного диска в нашей собственной Солнечной системе получены из хондритов, типа метеоритов, состоящих из более мелких частиц, или хондр, которые собирались вместе подобно космическому пыльному зайчику. "Если мы понимаем транспорт, мы можем понять свойства диска и сделать вывод о том, как были построены планеты", - сказал Цинчжу Инь, профессор наук о земле и планетах Калифорнийского университета в Дэвисе и соавтор статьи. Материал в хондритах чрезвычайно стар, представляя собой остатки пыли и мусора, которые остались от очень ранней Солнечной системы. Дополнительные доказательства получены из горных пород Земли и Луны, а также образцов космической пыли и кометного материала, собранных миссией "Звездная пыль" и другими космическими зондами. Исследователи могут приблизительно определить, где и когда образовались эти метеориты, измеряя соотношения изотопов таких элементов, как кислород, Титан и хром внутри них. Предыдущие работы лаборатории Инь и других ученых показали, что метеориты по своему составу делятся на две большие группы. Считается, что углеродистые метеориты возникли во внешней Солнечной системе. Не углеродистые метеориты образовались из диска ближе к Солнцу, где были испечены углеродные и другие летучие соединения. Почему не произошло большего перемешивания, если все планеты образовались из одного и того же протопланетного диска? Объяснение заключается в том, что, когда Юпитер сформировался раньше, он пропахал брешь в диске, создавая барьер для движения пыли, сказал Инь. Астрономы с помощью радиотелескопа ALMA в Чили наблюдали то же явление в протопланетных дисках вокруг других звезд. Однако некоторые метеориты, по-видимому, являются исключением из этого общего правила с более широкой смесью компонентов. Инь, научный сотрудник Калифорнийского университета в Дэвисе Кертис Уильямс и их коллеги провели детальное исследование изотопов из 30 метеоритов. Они подтвердили, что они делятся на две различные группы: неуглеродистые хондриты, а также другие, более распространенные типы метеоритов; и углеродистые метеориты. Затем они изучили отдельные хондры из двух хондритных метеоритов: метеорита Альенде, упавшего в Мексике в 1969 году, и метеорита Кароонда, упавшего в Австралии в 1930 году. Оказалось, что эти метеориты содержат хондры как из внутренней, так и из внешней Солнечной системы. Какой-то материал из внутренней Солнечной системы, должно быть, сумел пересечь барьер Юпитера, чтобы срастись с внешними хондрами Солнечной системы в метеорит, который миллиарды лет спустя упадет на Землю. Как же так? Есть несколько возможных механизмов, сказал Уильямс. - Во-первых, движение по средней плоскости диска продолжалось, хотя его должен был остановить Юпитер, - сказал он. - Во-вторых, ветры во внутренней Солнечной системе могли переносить частицы через юпитерианский промежуток. Любой из этих механизмов также может быть ответственен за материал внутренней Солнечной системы, который также был обнаружен в кометах миссией "Звездная пыль".',
            photo: 'img-video/articles/formation3.png',
        },
        {
            id: 3,
            type: 'gallery',
            title: 'Метеорит Альенде',
            photo: 'img-video/exhibits/pic108_4_3.png',
        },
        {
            id: 4,
            type: 'gallery',
            title: 'Хондриты',
            photo: 'img-video/exhibits/pic109_4_3.png',
        },
        {
            id: 5,
            type: 'gallery',
            title: 'Метеорит Ивуна',
            photo: 'img-video/exhibits/pic110_4_3.png',
        },
        {
            id: 6,
            type: 'gallery',
            title: 'Метеорит Имилак',
            photo: 'img-video/exhibits/pic111_4_3.png',
        },
        {
            id: 7,
            type: 'gallery',
            title: 'Железный метеорит',
            photo: 'img-video/exhibits/pic112_4_3.png',
        },
        {
            id: 8,
            type: 'gallery',
            title: 'Челябинский хондрит',
            photo: 'img-video/exhibits/pic113_4_3.png',
        },
        {
            id: 9,
            type: 'gallery',
            title: 'Матрица',
            photo: 'img-video/exhibits/pic114_16_9.png',
        },
        {
            id: 10,
            type: 'gallery',
            title: 'Модель Солнечной системы',
            photo: 'img-video/exhibits/pic115_4_3.png',
        },
        {
            id: 11,
            type: 'gallery',
            title: 'Метеорит Уилламетт',
            photo: 'img-video/exhibits/pic116_4_3.png',
        },        
    ];
    const handleArticleClick = (article) => {
        setSelectedArticle(article);
        setShowObjectInfo(true);
    };
    
    const handleBackClick = () => {
        setShowObjectInfo(false);
        setSelectedArticle(null);
    };

    const handleButtonClick = (buttonNumber) => {
        setActiveButton(prevActiveButton => (prevActiveButton === buttonNumber ? 0 : buttonNumber));
    };
    
    useEffect(() => {
        $(".hidearticles").hide();

        if (activeButton === 1) {
          $(hide1Ref.current).slideToggle('slow');
        } else if (activeButton === 2) {
          $(hide2Ref.current).slideToggle('slow');
        } else if (activeButton === 3) {
          $(hide3Ref.current).slideToggle('slow');
        }

        if (showObjectInfo) {
            $(objectInfoRef.current).show();
        } else {
            $(objectInfoRef.current).hide();
        }

    }, [activeButton, showObjectInfo]);

    const renderContent = () => {
        if (activeButton === 1) {
            const videoItem = contentData.find(item => item.type === 'video');
            if (videoItem) {
                return (
                <div className="video-container">
                    <video
                    className="video1"
                    controls
                    src={videoItem.src}
                    type="video/mp4"
                    onError={(e) => console.error("Video error:", e)}
                    />
                </div>
                );
            } else {
                return <p>Видео не найдено.</p>;
            }
        }

        if (activeButton === 2) {
            return (
                <div className="articles center">
                {contentData
                    .filter((item) => item.type === 'article')
                    .map((article) => (
                    <a
                        key={article.id}
                        className="article"
                        onClick={() => handleArticleClick(article)}
                    >
                        <img className="article-photo" src={article.photo} alt="card" />
                        <div className="article-title article-title-2">{article.title}</div>
                    </a>
                    ))}
                </div>
            );
        }

        if (activeButton === 3) {
            return (
                <div className="articles center">
                {contentData
                    .filter((item) => item.type === 'gallery')
                    .map((galleryItem) => (
                    <a key={galleryItem.id} className="article">
                        <img
                        className="article-photo"
                        src={galleryItem.photo}
                        alt="card"
                        />
                        <div className="article-title article-title-2">
                        {galleryItem.title}
                        </div>
                    </a>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <>
        <div className="top top-1">
            <div className="top-bottom center">
                <h1 className="title title-1">СОЛНЕЧНАЯ СИСТЕМА</h1>
                <div className="top-bottom-text">
                    <div className="top-bottom-text-sub">
                        <p className="title-sub title-sub-1">
                            Выберите инструмент, с помощью которого хотите изучить данный отрезок
                            времени.
                        </p>
                    </div>
                </div>
                <div className="formats">
                    <div
                    id="myButton1"
                    className={`button-format ${activeButton === 1 ? 'clicked-btn' : ''}`}
                    onClick={() => handleButtonClick(1)}
                    >
                        <a id="textButton1" href="#" className={`btn-format ${activeButton === 1 ? 'clicked-text' : ''}`}>
                            ВИДЕО
                        </a>
                    </div>
                    <div
                    id="myButton2"
                    className={`button-format ${activeButton === 2 ? 'clicked-btn' : ''}`}
                    onClick={() => handleButtonClick(2)}
                    >
                        <a id="textButton2" href="#" className={`btn-format ${activeButton === 2 ? 'clicked-text' : ''}`}>
                            СТАТЬИ
                        </a>
                    </div>
                    <div
                    id="myButton3"
                    className={`button-format ${activeButton === 3 ? 'clicked-btn' : ''}`}
                    onClick={() => handleButtonClick(3)}
                    >
                        <a id="textButton3" href="#" className={`btn-format ${activeButton === 3 ? 'clicked-text' : ''}`}>
                            ГАЛЕРЕЯ
                        </a>
                    </div>
                </div>
                <div className="content" id="content" style={{ display: showObjectInfo ? 'none' : 'block' }}>{renderContent()}</div>
            </div>
        </div>
        <div className="object center" id="object-info" style={{ display: showObjectInfo ? 'block' : 'none' }}>
            <div className="object-general">
                <h2 className="object-title" id="title-content">{selectedArticle ? selectedArticle.title : 'Object Information'}</h2>
                <div className="object-time" id="info-time">{selectedArticle ? selectedArticle.time : ''}</div>
                <div className="object-content" id="info-content">{selectedArticle ? selectedArticle.text : ''}</div>
                <button className="object-button" id="back-button" onClick={handleBackClick}>
                    Назад
                </button>
            </div>
        </div>
        </>
    );
}

export default SolarSystem;
