import React from "react";
import "../styles/Landing.css";
import BannerCarousel from "../components/BannerCarousel";
import ServiceGrid from "../components/ServiceGrid";
import StepsViews from "../components/StepsView";
import { Button } from "react-bootstrap";
import ServiceBanner from "../components/ServiceBanner";
import ClavesSteps from "../components/ClavesSteps";
import ContactUs from "../components/ContactUs";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-page">
      <BannerCarousel />

      <section className="section-shell">
        <p className="text-center eyebrow-text">Que ofrecemos</p>
        <h2 className="text-center landing-custom-header2">
          <span className="secondary-color-span landing-din-alternate-bold-font">
            Nuestros Servicios
          </span>
        </h2>

        <div className="landing-paragraph">
          <p>
            <span className="third-color-span p-font">
              Somos un pequeño grupo de dispatchers con amplia experiencia en
              cargas secas, refrigeradas y flatbed, enfocados en buscar y
              negociar el mejor precio con los brokers para que usted pueda
              crecer sin complicaciones.
            </span>
            <br />
            <span className="third-color-span p-font">
              Al trabajar con su propia authority, usted mantiene el control del
              servicio, recibe confirmaciones directas y decide cuándo seguir o
              dejar nuestro apoyo.
            </span>
          </p>
        </div>

        <div className="spacer-25" />
        <ServiceGrid />
      </section>

      <section className="section-shell section-shell-compact">
        <h2 className="text-center landing-custom-header2">
          <span className="landing-din-alternate-bold-font">Comenzar es muy fácil</span>
        </h2>

        <div className="start-step-div">
          <StepsViews />

          <div className="comenzar-button-div">
            <Link to="/create-account">
              <Button variant="primary" className="comenzar-button">
                COMENZAR YA!
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell section-shell-banner">
        <ServiceBanner />
      </section>

      <section className="section-shell">
        <div className="claves-para-exito-div">
          <ClavesSteps />
        </div>
      </section>

      <div className="contact-banner">
        <h1 className="contact-banner-title-h2">CARGUE SU CAMIÓN</h1>
      </div>

      <section className="section-shell contact-us-div">
        <ContactUs />
      </section>
    </div>
  );
}
