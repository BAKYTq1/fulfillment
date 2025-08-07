import { useState, useEffect } from "react";
import styles from './Contact.module.scss';
import Section1 from "../../components/Section1/Section1";

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
      <Section1 img={"https://optim.tildacdn.one/tild3731-3836-4766-b234-373334636536/-/format/webp/contacts-bg.jpg"} text={"Контакты"} />

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
                    className={`${styles.formInput} ${styles.phoneInput}`}
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

            {/* Chat Widget */}
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
        </div>
      </section>

      <iframe
        title="Yandex Map"
        src="https://yandex.ru/map-widget/v1/?ll=38.056094%2C55.628785&z=20"
        width="100%"
        height="550"
        frameBorder="0"
        allowFullScreen
        style={{ display: 'block' }}
      />

    </div>
  );
}