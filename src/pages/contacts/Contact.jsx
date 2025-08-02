import { useState, useEffect } from "react";
import styles from './Contact.module.scss';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setChatVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section 
        className={`${styles.hero} ${isVisible ? styles.visible : styles.hidden}`}
        style={{
          background: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url('/placeholder.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <div className={`${styles.heroText} ${isVisible ? styles.visibleText : styles.hiddenText}`}>
            <div className={styles.titleWrapper}>
              <div className={styles.titleAccent}></div>
              <h1 className={styles.title}>
                Контакты
              </h1>
            </div>
          </div>
        </div>

        {/* Floating elements animation */}
        <div className={styles.floatingCircle1}></div>
        <div className={styles.floatingCircle2}></div>
      </section>

      {/* Contact Info Section */}
      <section className={`${styles.contactInfo} ${isVisible ? styles.visibleSection : styles.hiddenSection}`}>
        <div className={styles.contactCard}>
          {/* Background decoration */}
          <div className={styles.contactBgCircle1}></div>
          <div className={styles.contactBgCircle2}></div>

          <div className={styles.contactGrid}>
            {/* Questions Section */}
            <div className={`${styles.questionsSection} ${isVisible ? styles.visibleContent : styles.hiddenContentLeft}`}>
              <h2 className={styles.sectionTitle}>
                Есть вопросы?
              </h2>
              <p className={styles.sectionSubtitle}>
                Напишите нам и мы ответим на любые вопросы
              </p>
              
              {/* Contact Methods */}
              <div className={styles.contactMethods}>
                <div className={`${styles.contactMethod} ${isVisible ? styles.visibleMethod1 : styles.hiddenMethod1}`}>
                  <div className={`${styles.methodIcon} ${styles.phoneIcon}`}>
                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.methodLabel}>Телефон</p>
                    <p className={styles.methodValue}>+996709996900</p>
                  </div>
                </div>

                <div className={`${styles.contactMethod} ${isVisible ? styles.visibleMethod2 : styles.hiddenMethod2}`}>
                  <div className={`${styles.methodIcon} ${styles.emailIcon}`}>
                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.methodLabel}>Email</p>
                    <p className={styles.methodValue}>info@fulfillment.kg</p>
                  </div>
                </div>

                <div className={`${styles.contactMethod} ${isVisible ? styles.visibleMethod3 : styles.hiddenMethod3}`}>
                  <div className={`${styles.methodIcon} ${styles.addressIcon}`}>
                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.methodLabel}>Адрес</p>
                    <p className={styles.methodValue}>г. Бишкек, Кыргызстан</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Widget */}
            <div className={`${styles.chatWidget} ${chatVisible ? styles.visibleChat : styles.hiddenChat}`}>
              <div className={styles.chatContainer}>
                <div className={styles.chatHeader}>
                  <div className={styles.chatAvatar}>
                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={styles.chatName}>Иван</h3>
                    <p className={styles.chatRole}>Онлайн консультант</p>
                  </div>
                </div>
                
                <div className={styles.chatMessage}>
                  <p className={styles.messageText}>
                    Здравствуйте! Будем рады ответить на ваши вопросы. 
                    Напишите нам, если у вас появятся вопросы.
                  </p>
                </div>

                <button className={styles.chatButton}>
                  Начать чат
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Form Section */}
      <section className={`${styles.contactFormSection} ${isVisible ? styles.visibleSection : styles.hiddenSection}`}>
        <div className={styles.formContainer}>
          <div className={styles.formWrapper}>
            <h3 className={styles.formTitle}>
              Свяжитесь с нами
            </h3>
            <p className={styles.formSubtitle}>
              Отправьте нам сообщение и мы свяжемся с вами в ближайшее время
            </p>

            <form className={styles.contactForm}>
              <div className={styles.formGrid}>
                <div>
                  <label className={styles.formLabel}>
                    Имя
                  </label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className={styles.formLabel}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={styles.formInput}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className={styles.formLabel}>
                  Телефон
                </label>
                <input
                  type="tel"
                  className={styles.formInput}
                  placeholder="+996 xxx xxx xxx"
                />
              </div>

              <div>
                <label className={styles.formLabel}>
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className={styles.formTextarea}
                  placeholder="Расскажите нам о вашем вопросе..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={styles.submitButton}
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}