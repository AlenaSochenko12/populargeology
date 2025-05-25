import React, { useState, useRef, useEffect } from "react";
import $ from "jquery";
import axios from "axios";
import "./BigBang.scss";

function BigBang() {
  const [activeButton, setActiveButton] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showObjectInfo, setShowObjectInfo] = useState(false);
  const [contentData, setContentData] = useState([]);
  const [loading, setLoading] = useState(true);

  const hide1Ref = useRef(null);
  const hide2Ref = useRef(null);
  const hide3Ref = useRef(null);
  const objectInfoRef = useRef(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/bigbang/?time=bigBang")
      .then((response) => {
        const { video, articles, gallery } = response.data;

        const newContentData = [
          ...(video
            ? [
                {
                  id: video.id,
                  type: "video",
                  src: `http://localhost:8000/media/${video.video}`,
                },
              ]
            : []),
          ...articles.map((article) => ({
            id: article.id,
            type: "article",
            title: article.title,
            time: article.time_ago,
            text: article.text,
            photo: article.image
              ? `http://localhost:8000/media/${article.image}`
              : "http://localhost:8000/media/articles/default.jpg",
          })),
          ...gallery.map((exhibit) => ({
            id: exhibit.id,
            type: "gallery",
            title: exhibit.title,
            photo: exhibit.image
              ? `http://localhost:8000/media/${exhibit.image}`
              : "http://localhost:8000/media/exhibits/default.jpg",
            text: exhibit.text,
            time: exhibit.time_ago,
          })),
        ];

        setContentData(newContentData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
        setLoading(false);
      });
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowObjectInfo(true);
  };

  const handleBackClick = () => {
    setShowObjectInfo(false);
    setSelectedArticle(null);
  };

  const handleButtonClick = (buttonNumber) => {
    setActiveButton((prevActiveButton) =>
      prevActiveButton === buttonNumber ? 0 : buttonNumber
    );
  };

  useEffect(() => {
    $(".video-section").hide();
    $(".articles-section").hide();
    $(".gallery-section").hide();

    if (activeButton === 1) {
      $(hide1Ref.current).slideToggle("slow");
    } else if (activeButton === 2) {
      $(hide2Ref.current).slideToggle("slow");
    } else if (activeButton === 3) {
      $(hide3Ref.current).slideToggle("slow");
    }

    if (showObjectInfo) {
      $(objectInfoRef.current).show();
    } else {
      $(objectInfoRef.current).hide();
    }
  }, [activeButton, showObjectInfo]);

  const renderContent = () => {
    if (loading) {
      return <div className="loading">Загрузка...</div>;
    }

    if (activeButton === 1) {
      const videoItem = contentData.find((item) => item.type === "video");
      if (videoItem) {
        return (
          <div className="video-container video-section" ref={hide1Ref}>
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
        <div className="articles center articles-section" ref={hide2Ref}>
          {contentData
            .filter((item) => item.type === "article")
            .map((article) => (
              <a
                key={article.id}
                className="article"
                onClick={() => handleArticleClick(article)}
              >
                <img
                  className="article-photo"
                  src={article.photo}
                  alt={article.title}
                />
                <div className="article-title article-title-2">
                  {article.title}
                </div>
              </a>
            ))}
        </div>
      );
    }

    if (activeButton === 3) {
      return (
        <div className="articles center gallery-section" ref={hide3Ref}>
          {contentData
            .filter((item) => item.type === "gallery")
            .map((galleryItem) => (
              <a
                key={galleryItem.id}
                className="article"
                onClick={() => handleArticleClick(galleryItem)}
              >
                <img
                  className="article-photo"
                  src={galleryItem.photo}
                  alt={galleryItem.title}
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
    <div className="top top-1">
      <div className="top-bottom center">
        <h1 className="title title-1">СОЛНЕЧНАЯ СИСТЕМА</h1>
        <div className="top-bottom-text">
          <div className="top-bottom-text-sub">
            <p className="title-sub title-sub-1">
              Выберите инструмент, с помощью которого хотите изучить данный
              отрезок времени.
            </p>
          </div>
        </div>
        <div className="formats">
          <div
            id="myButton1"
            className={`button-format ${
              activeButton === 1 ? "clicked-btn" : ""
            }`}
            onClick={() => handleButtonClick(1)}
          >
            <a
              id="textButton1"
              href="#"
              className={`btn-format ${
                activeButton === 1 ? "clicked-text" : ""
              }`}
            >
              ВИДЕО
            </a>
          </div>
          <div
            id="myButton2"
            className={`button-format ${
              activeButton === 2 ? "clicked-btn" : ""
            }`}
            onClick={() => handleButtonClick(2)}
          >
            <a
              id="textButton2"
              href="#"
              className={`btn-format ${
                activeButton === 2 ? "clicked-text" : ""
              }`}
            >
              СТАТЬИ
            </a>
          </div>
          <div
            id="myButton3"
            className={`button-format ${
              activeButton === 3 ? "clicked-btn" : ""
            }`}
            onClick={() => handleButtonClick(3)}
          >
            <a
              id="textButton3"
              href="#"
              className={`btn-format ${
                activeButton === 3 ? "clicked-text" : ""
              }`}
            >
              ГАЛЕРЕЯ
            </a>
          </div>
        </div>
        <div
          className="content"
          id="content"
          style={{ display: showObjectInfo ? "none" : "block" }}
        >
          {renderContent()}
        </div>
        <div
          className="object center"
          id="object-info"
          ref={objectInfoRef}
          style={{ display: showObjectInfo ? "block" : "none" }}
        >
          <div className="object-general">
            <h2 className="object-title" id="title-content">
              {selectedArticle
                ? selectedArticle.title
                : "Информация об объекте"}
            </h2>
            <div className="object-time" id="info-time">
              {selectedArticle ? selectedArticle.time : ""}
            </div>
            <div className="object-content" id="info-content">
              {selectedArticle ? selectedArticle.text : ""}
            </div>
            <button
              className="object-button"
              id="back-button"
              onClick={handleBackClick}
            >
              Назад
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigBang;
