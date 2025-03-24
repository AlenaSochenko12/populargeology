import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'

import bigv from "/img-video/bigv.jpeg";
import solarsystem from "/img-video/solarsystem.jpeg";
import moon from "/img-video/moon.jpeg";
import storyofearth from "/img-video/storyofearth.jpeg";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="custom-prev-arrow" onClick={onClick} />
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div className="custom-next-arrow" onClick={onClick} />
  );
};

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Передаём кастомные стрелки
    nextArrow: <NextArrow />,
    
  };

  const slidesData = [
    {
      image: bigv,
      title1: 'БОЛЬШОЙ',
      title2: 'ВЗРЫВ',
      description:
        'В самом начале пространство, энергия и материя возникли из непостижимой пустоты. Из ничего. Затем появилось нечто. Наша Вселенная появилась даже не из вакуума, поскольку до Большого взрыва не было ни пространства, ни времени.',
      link: '/bigbang',
    },
    {
      image: solarsystem,
      title1: 'СОЛНЕЧНАЯ',
      title2: 'СИСТЕМА',
      description:
        'Формирование Солнечной системы началось около 4,6 млрд лет назад с гравитационного коллапса небольшой части гигантского межзвёздного молекулярного облака. Большая часть вещества оказалась в гравитационном центре коллапса с последующим образованием звезды — Солнца.',
      link: '/solarsystem',
    },
    {
      image: moon,
      title1: 'ОБРАЗОВАНИЕ',
      title2: 'ЛУНЫ',
      description:
        'Около 4,5 млрд лет назад, когда Солнечная система насчитывала около 50 млн лет от роду, почерневшая Протоземля оказалась в тесном соседстве с соперницей, лишь слегка уступавшей ей по размерам. Закон астрофизики гласит, что две планеты не могут существовать вместе на одной орбите. В какой-то момент они неминуемо столкнутся.',
      link: '/moon',
    },
    {
      image: storyofearth,
      title1: 'ИСТОРИЯ',
      title2: 'ЗЕМЛИ',
      description:
        'История Земли включает в себя наиболее важные события и основные этапы развития планеты Земля с момента её образования и до наших дней. Почти все отрасли естествознания внесли свой вклад в понимание основных событий прошлого Земли. За время существования Земли произошло огромное количество биологических и геологических изменений.',
      link: '/earth',
    },
  ];

  return (
    <div id="wrapper" className="wrapper">
      <Slider {...settings} dotsClass="slick-dots">
        {slidesData.map((slide, index) => (
          <div key={index} className="slider__item">
            <img src={slide.image} alt="" />
            <div className="general-base center">
              <h1 className="general-title">{slide.title1}</h1>
              <h1 className="general-title general-title-2">{slide.title2}</h1>
              <p className="general-title-sub">{slide.description}</p>
              <Link className="general-buttons-href" to={slide.link}>
                <button className="general-buttons">УВИДЕТЬ БОЛЬШЕ</button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;