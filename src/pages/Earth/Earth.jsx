import React, { useState, useRef, useEffect } from "react";
import $ from "jquery";
import axios from "axios";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function Earth() {
  const [activeButton, setActiveButton] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showObjectInfo, setShowObjectInfo] = useState(false);
  const [contentData, setContentData] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedEarth, setSelectedEarth] = useState("");
  const [earths, setEarths] = useState([]);

  const hide1Ref = useRef(null);
  const hide2Ref = useRef(null);
  const hide3Ref = useRef(null);
  const hide4Ref = useRef(null);
  const objectInfoRef = useRef(null);
  const canvasRef = useRef(null);
  const objectContentRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/earths/")
      .then((response) => {
        const earthData = response.data;
        setEarths(earthData.map((item) => item.earth.title));
        if (earthData.length > 0) {
          setSelectedEarth(earthData[0].earth.title);
          updateContentData(earthData[0]);
        }
      })
      .catch((error) => {
        console.error("Ошибка при загрузке списка Земель:", error);
      });
  }, []);

  const updateContentData = (data) => {
    const { earth, video, articles, gallery } = data;
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
      {
        id: earth.id,
        type: "model",
        title: earth.title,
        modelSrc: `http://localhost:8000/media/models/${earth.time}.glb`,
        text: earth.text,
        time: earth.time_ago,
        photo: earth.baseMap
          ? `http://localhost:8000/media/${earth.baseMap}`
          : "http://localhost:8000/media/models/default.jpg",
        textures: {
          ambientMap: earth.ambientMap,
          baseMap: earth.baseMap,
          heightMap: earth.heightMap,
          metallicMap: earth.metallicMap,
          normalMap: earth.normalMap,
          roughnessMap: earth.roughnessMap,
          cloudMap: earth.cloudMap,
        },
      },
    ];
    setContentData(newContentData);
  };

  const handleEarthChange = (event) => {
    const earthName = event.target.value;
    setSelectedEarth(earthName);
    setActiveButton(0);
    setSelectedArticle(null);
    setSelectedModel(null);
    setShowObjectInfo(false);

    axios
      .get(
        `http://localhost:8000/api/earths/?title=${encodeURIComponent(
          earthName
        )}`
      )
      .then((response) => {
        if (response.data && response.data.earth) {
          updateContentData(response.data);
        } else {
          console.error("Данные для Земли не найдены:", response.data);
          setContentData([]);
        }
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных Земли:", error);
        setContentData([]);
      });
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowObjectInfo(true);
    setSelectedModel(null);
  };

  const handleModelClick = (model) => {
    setSelectedModel(model);
    setShowObjectInfo(false);
  };

  const handleBackClick = () => {
    setShowObjectInfo(false);
    setSelectedArticle(null);
    setSelectedModel(null);
  };

  const handleButtonClick = (buttonNumber) => {
    setActiveButton((prevActiveButton) =>
      prevActiveButton === buttonNumber ? 0 : buttonNumber
    );
    setSelectedModel(null);
    setShowObjectInfo(false);
  };

  useEffect(() => {
    $(".hidearticles").hide();
    if (activeButton === 1) {
      $(hide1Ref.current).slideToggle("slow");
    } else if (activeButton === 2) {
      $(hide2Ref.current).slideToggle("slow");
    } else if (activeButton === 3) {
      $(hide3Ref.current).slideToggle("slow");
    } else if (activeButton === 4) {
      $(hide4Ref.current).slideToggle("slow");
    }
    if (showObjectInfo) {
      $(objectInfoRef.current).show();
    } else {
      $(objectInfoRef.current).hide();
    }
  }, [activeButton, showObjectInfo]);
  useEffect(() => {
    if (!selectedModel || !canvasRef.current) return;

    let scene, camera, renderer, earthmesh, controls;

    const init = () => {
      let width = window.innerWidth;
      let height = window.innerHeight;
      if (width <= 450) {
        width = 367;
        height = 400;
      }
      if (width >= 1680) {
        width = 1168;
      }

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(0, 0, 2);
      camera.lookAt(0, 0, 0);
      scene.add(camera);

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.autoClear = false;

      const earthgeometry = new THREE.SphereGeometry(0.6, 32, 32);

      const textureLoader = new THREE.TextureLoader();
      const baseMap = selectedModel.textures.baseMap
        ? `http://localhost:8000/media/${selectedModel.textures.baseMap}`
        : null;
      const heightMap = selectedModel.textures.heightMap
        ? `http://localhost:8000/media/${selectedModel.textures.heightMap}`
        : null;
      const ambientMap = selectedModel.textures.ambientMap
        ? `http://localhost:8000/media/${selectedModel.textures.ambientMap}`
        : null;
      const metallicMap = selectedModel.textures.metallicMap
        ? `http://localhost:8000/media/${selectedModel.textures.metallicMap}`
        : null;
      const normalMap = selectedModel.textures.normalMap
        ? `http://localhost:8000/media/${selectedModel.textures.normalMap}`
        : null;
      const roughnessMap = selectedModel.textures.roughnessMap
        ? `http://localhost:8000/media/${selectedModel.textures.roughnessMap}`
        : null;

      const earthmaterial = new THREE.MeshStandardMaterial({
        roughness: 1,
        metalness: 0,
        color: new THREE.Color(0xffffff),
        map: baseMap ? textureLoader.load(baseMap) : null,
        bumpMap: heightMap ? textureLoader.load(heightMap) : null,
        bumpScale: 1,
        aoMap: ambientMap ? textureLoader.load(ambientMap) : null,
        metalnessMap: metallicMap ? textureLoader.load(metallicMap) : null,
        normalMap: normalMap ? textureLoader.load(normalMap) : null,
        roughnessMap: roughnessMap ? textureLoader.load(roughnessMap) : null,
      });

      earthmesh = new THREE.Mesh(earthgeometry, earthmaterial);
      earthmesh.position.set(0, 0, 0);
      scene.add(earthmesh);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 0.5);
      pointLight.position.set(5, 3, 5);
      scene.add(pointLight);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0, 0);
      controls.enableZoom = false;
      controls.update();

      const animate = () => {
        requestAnimationFrame(animate);
        earthmesh.rotation.y -= 0.006;
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      const onWindowResize = () => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        if (width <= 450) {
          width = 367;
          height = 400;
        }
        if (width >= 1680) {
          width = 1600;
        }
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener("resize", onWindowResize);
    };

    init();

    return () => {
      if (scene) {
        scene.remove(earthmesh);
        earthmesh.geometry.dispose();
        earthmesh.material.dispose();
        scene.clear();
      }
      if (renderer) {
        renderer.dispose();
      }
      if (controls) {
        controls.dispose();
      }
      window.removeEventListener("resize", () => {});
    };
  }, [selectedModel]);

  const renderContent = () => {
    if (activeButton === 1) {
      const videoItem = contentData.find((item) => item.type === "video");
      if (videoItem && videoItem.src) {
        return (
          <div className="video-container hidearticles" ref={hide1Ref}>
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
        <div className="articles center hidearticles" ref={hide2Ref}>
          {contentData
            .filter((item) => item.type === "article")
            .map((article) => (
              <a
                key={article.id}
                className="article"
                onClick={() => handleArticleClick(article)}
              >
                <img className="article-photo" src={article.photo} alt="card" />
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
        <div className="articles center hidearticles" ref={hide3Ref}>
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

    if (activeButton === 4) {
      return (
        <div className="articles center hidearticles" ref={hide4Ref}>
          {contentData
            .filter((item) => item.type === "model")
            .map((model) => (
              <a
                key={model.id}
                className="article"
                onClick={() => handleModelClick(model)}
              >
                <img className="article-photo" src={model.photo} alt="card" />
                <div className="article-title article-title-2">
                  {model.title}
                </div>
              </a>
            ))}
        </div>
      );
    }
    return null;
  };

  const renderHTML = (text) => {
    return { __html: text.replace(/\r\n/g, "<br />") };
  };

  return (
    <>
      <div className="top top-1">
        <div className="top-bottom center">
          <h1 className="title title-1">ИСТОРИЯ ЗЕМЛИ</h1>
          <div className="top-bottom-text">
            <div className="top-bottom-text-sub">
              <p className="title-sub title-sub-1">
                Выберите Землю и инструмент для изучения.
              </p>
              <div className="earth-selector">
                <select value={selectedEarth} onChange={handleEarthChange}>
                  {earths.map((earth) => (
                    <option key={earth} value={earth}>
                      {earth}
                    </option>
                  ))}
                </select>
              </div>
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
            <div
              id="myButton4"
              className={`button-format ${
                activeButton === 4 ? "clicked-btn" : ""
              }`}
              onClick={() => handleButtonClick(4)}
            >
              <a
                id="textButton4"
                href="#"
                className={`btn-format ${
                  activeButton === 4 ? "clicked-text" : ""
                }`}
              >
                3D-ЗЕМЛЯ
              </a>
            </div>
          </div>
          <div
            className="content"
            id="content"
            style={{
              display: showObjectInfo || selectedModel ? "none" : "block",
            }}
          >
            {renderContent()}
          </div>
        </div>
      </div>
      <div
        className="object center"
        id="object-info"
        ref={objectInfoRef}
        style={{ display: showObjectInfo ? "block" : "none" }}
      >
        <div className="object-general">
          <h2 className="object-title" id="title-content">
            {selectedArticle ? selectedArticle.title : "Информация об объекте"}
          </h2>
          <div className="object-time" id="info-time">
            {selectedArticle ? selectedArticle.time : ""}
          </div>
          <div
            className="object-content"
            id="info-content"
            dangerouslySetInnerHTML={
              selectedArticle ? renderHTML(selectedArticle.text) : undefined
            }
          />
          <button
            className="object-button"
            id="back-button"
            onClick={handleBackClick}
          >
            Назад
          </button>
        </div>
      </div>
      <div
        className="model-viewer-container center"
        style={{ display: selectedModel ? "block" : "none" }}
      >
        {selectedModel && (
          <div className="model-viewer-content">
            <canvas
              ref={canvasRef}
              style={{ width: "100%", height: "500px" }}
            />
            <div
              className="object-content"
              dangerouslySetInnerHTML={renderHTML(selectedModel.text)}
            />
            <button className="object-button" onClick={handleBackClick}>
              Назад
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Earth;
