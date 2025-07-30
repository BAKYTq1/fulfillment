import React, { useState, useEffect, useRef } from "react";
import "./PersonalAccount.scss";
import raxs from '../../assets/img/raxs.png'

const raxsLogoUrl = "https://static.tildacdn.one/tild3133-3164-4265-b731-306461663030/RAXS.png";

const laptopBaseUrl = "https://optim.tildacdn.one/tild6537-3434-4566-b163-313264386239/-/format/webp/laptop_2.png";

const carouselImages = [
  { src: "https://static.tildacdn.one/tild6164-6532-4730-b063-623663623162/20.png", alt: "Экран 1", link: "/dashboard/stats" },
  { src: "https://static.tildacdn.one/tild3439-3035-4966-b330-333934366266/09.png", alt: "Экран 2", link: "/dashboard/orders" },
  { src: "https://static.tildacdn.one/tild3865-6436-4437-a536-646137343966/18.png", alt: "Экран 3", link: "/dashboard/inventory" },
  { src: "https://static.tildacdn.one/tild3363-3539-4262-a234-633730306266/04.png", alt: "Экран 4", link: "/dashboard/reports" },
  { src: "https://static.tildacdn.one/tild6263-3538-4935-a436-666435303531/01.png", alt: "Экран 5", link: "/dashboard/tasks" },
];

export function PersonalAccount() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [zoomLevel, setZoomLevel] = useState(1);
  const carouselIntervalRef = useRef(null);

  useEffect(() => {
    carouselIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 10000);

    return () => clearInterval(carouselIntervalRef.current);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    clearInterval(carouselIntervalRef.current);
    carouselIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    clearInterval(carouselIntervalRef.current);
    carouselIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
  };

  const handleImageClick = (link, imgSrc) => {
    setModalImageSrc(imgSrc);
    setIsModalOpen(true);
    setZoomLevel(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 0.5));
  };

  return (
    <section className="personal-account-section">
      <div className="personal">
        <div className="personal-hero">
          <div className="line"></div>
          <h1>Личный кабинет</h1>
        </div>
        <div className="personal-hero-text">
          <img src={raxs} alt="RAXS Logo" />
          <h2>
            Наш фулфилмент центр использует самое передовое ИТ-решение для
            фулфилментов RAXS.
          </h2>
        </div>
        <div className="personal-nav">
          <h3>Все что вам нужно, находится в Личном кабинете клиента.</h3>
          <ul>
            <li>Интеграция с Wildberries и Ozon</li>
            <li>Синхронизация онлайн каталогов</li>
            <li>Подача заявок на услуги фулфилмента</li>
            <li>Счета и Акты за услуги фулфилмента</li>
            <li>Акты сверок по взаиморасчётам с фулфилментом</li>
            <li>Подсказки по работе в Личном кабинете</li>
          </ul>
        </div>

        <div className="personal-carousel-wrapper">
          <img src={laptopBaseUrl} alt="Laptop Base" className="personal-carousel__laptop-base" />
          <div className="personal-carousel__screen-content">
            <div className="personal-carousel__track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {carouselImages.map((slide, index) => (
                <div key={index} className="personal-carousel__slide">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="personal-carousel__image"
                    onClick={() => handleImageClick(slide.link, slide.src)}
                  />
                </div>
              ))}
            </div>
            <button className="personal-carousel__arrow personal-carousel__arrow--left" onClick={prevSlide}>
              &lt;
            </button>
            <button className="personal-carousel__arrow personal-carousel__arrow--right" onClick={nextSlide}>
              &gt;
            </button>
          </div>
        </div>

        <div className="personal-account__bottom-cta-card">
          <button className="personal-account__register-button">Зарегистрироваться</button>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-image-wrapper">
              <img src={modalImageSrc} alt="Zoomed In" style={{ transform: `scale(${zoomLevel})` }} />
            </div>
            <div className="modal-controls">
              <button onClick={handleZoomOut}>-</button>
              <button onClick={handleZoomIn}>+</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}