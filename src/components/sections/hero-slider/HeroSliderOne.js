import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "antd";
import Slider from "react-slick";
import Link from "next/link";
import classNames from "classnames";

import { formatCurrency } from "../../../common/utils";
import { NextArrow, PrevArrow } from "../../other/SliderArrow";
import Container from "../../other/Container";

function HeroSliderOne({ data }) {
  const [currentSlideIndex, setNextSlideIndex] = useState(0);
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const beforeChange = (oldIndex, newIndex) => {
    setNextSlideIndex(newIndex);
  };
  useEffect(() => {
    const currentSlide = document.querySelector(
      `.hero-slider.-style-one .slick-slide[data-index="${currentSlideIndex}"]`
    );
    const animationItems = currentSlide.querySelectorAll("[data-animation]");
    animationItems.forEach((item, index) => {
      const animationName = item.dataset.animation;
      const animationDelay = item.dataset.delay;
      console.log(animationName);
      item.classList.add("animate__animated", animationName);
      item.style.animationDelay = animationDelay + "s";
      item.addEventListener("animationend", function () {
        this.classList.remove("animate__animated", animationName);
        this.removeEventListener("animationend", function () {
          return;
        });
      });
    });
  }, [currentSlideIndex]);

  return (
    <div className="hero-slider -carousel -style-one">
      <Slider
        beforeChange={beforeChange}
        className="arrow-center"
        {...settings}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`slick-slider-item ${classNames({
              active: index === currentSlideIndex,
            })}`}
          >
            <div className="hero-slider-background">
              <img
                src={process.env.PUBLIC_URL + item.background}
                alt="Hero slider background image"
              />
            </div>
            <Container>
              <div className="hero-slider-content-wrapper">
                <Row align="middle" gutter={30}>
                  <Col sm={12}>
                    <div className="hero-slider-content">
                      
                    </div>
                  </Col>
                  <Col sm={12}>
                    <div
                      data-delay="0.8"
                      data-animation="animate__zoomInRight"
                      className="hero-slider-image"
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/hero-slider/one/1.png"
                        }
                        alt="Hero slider image"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default React.memo(HeroSliderOne);
