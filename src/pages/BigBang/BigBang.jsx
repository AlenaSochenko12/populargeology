import React, { useState, useRef, useEffect } from 'react';
import $ from 'jquery';
import videoFile from '../../../img-video/videos/Big_Bang_2.mp4';
import './BigBang.scss';

function BigBang() {
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
            title: 'У звёзд есть жизненные циклы',
            time: '13.7 Млрд лет назад',
            text: 'Они рождаются, когда частицы пыли и газа, парящие в пространстве, находят друг друга, сжимаются и нагреваются. Они горят миллионы или миллиарды лет, а потом умирают. Когда они умирают, они выбрасывают частицы, образовавшиеся в их ветрах, в космос, и эти частицы звездной пыли в конечном итоге образуют новые звезды, а также новые планеты, Луны и метеориты. А в метеорите, упавшем пятьдесят лет назад в Австралии, ученые обнаружили звездную пыль, которая образовалась 5-7 миллиардов лет назад-самый древний твердый материал, когда-либо найденный на Земле."Это одно из самых захватывающих исследований, над которым я работал", - говорит Филипп Хек, куратор Музея Филда, адъюнкт-профессор Чикагского университета и ведущий автор статьи, описывающей результаты в Трудах Национальной академии наук. - "Это самые древние твердые материалы, когда-либо найденные, и они рассказывают нам о том, как формировались звезды в нашей галактике."Материалы, которые исследовали Хек и его коллеги, называются пресолярными зернами-минералами, образовавшимися еще до рождения Солнца. -Это твердые образцы звезд, настоящая звездная пыль, - говорит Хек. Эти кусочки звездной пыли попали в ловушку метеоритов, где они оставались неизменными в течение миллиардов лет, что сделало их капсулами времени до Солнечной системы.',
            photo: 'img-video/articles/big_bang_background.png',
        },
        {
            id: 3,
            type: 'gallery',
            title: '«Свечение» газопылевого кольца',
            photo: 'img-video/exhibits/pic101_4_3.png',
        },
        {
            id: 4,
            type: 'gallery',
            title: 'Микроволновый фон',
            photo: 'img-video/exhibits/pic102_4_3.png',
        },
        {
            id: 5,
            type: 'gallery',
            title: 'Эдвин Хаббл',
            photo: 'img-video/exhibits/pic103_4_3.png',
        },
        {
            id: 6,
            type: 'gallery',
            title: 'Туманность Тарантул',
            photo: 'img-video/exhibits/pic104_4_3.png',
        },
        {
            id: 7,
            type: 'gallery',
            title: 'Досолнечное зерно',
            photo: 'img-video/exhibits/pic105_4_3.png',
        },
        {
            id: 8,
            type: 'gallery',
            title: 'Фотография',
            photo: 'img-video/exhibits/pic106_4_3.png',
        },
        {
            id: 9,
            type: 'gallery',
            title: 'Большой взрыв',
            photo: 'img-video/exhibits/pic107_4_3.png',
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
                <h1 className="title title-1">БОЛЬШОЙ ВЗРЫВ</h1>
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

export default BigBang;
