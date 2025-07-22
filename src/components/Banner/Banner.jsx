import React, { useEffect, useRef, useState } from 'react'
import "./Banner.scss"
import H1 from '../../ui/h1'

function Banner() {
    const imgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), 100); 
                }
            },
            { threshold: 0.3 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) observer.unobserve(imgRef.current);
        };
    }, []);
    return (
        <section className="banner-container">
            <div className="banner-container-content">
                <div className="banner-container-content-img"><img src="https://fulfillment.kg/img/logo/36bd519f-0cee-4635-9.svg" alt="" /></div>
                <div className="banner-container-content-text">
                    <h3>Полный спектр услуг для <br />
                        поставщиков на маркетплейсы
                    </h3>
                    <H1
                        h1={`Возьмём на себя рутинную работу по подготовке <br /> ваших товаров для поставки на маркетплейсы`}
                        color="#fff"
                        size="22px"
                        items="left "
                    />
                </div>
                <img className='banner-container-content-img-2' src="https://fulfillment.kg/img/logo/image_3.png" alt="" />
            </div>
            <div className={`banner-container-down_info ${isVisible ? 'visible' : ''}`} ref={imgRef}></div>
            <img
                ref={imgRef}
                className={`banner-container-img_3 ${isVisible ? 'visible' : ''}`}
                src="https://optim.tildacdn.one/tild6265-3637-4266-b134-376534323337/-/format/webp/banner-2.jpg"
                alt=""
            />
        </section>
    )
}

export default Banner