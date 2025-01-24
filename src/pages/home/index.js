import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  

);
};

// Crear el contenedor principal
const div = document.createElement('div');

// Crear y añadir el título
const h1 = document.createElement('h1');
h1.textContent = 'Newsletter';
div.appendChild(h1);

// Crear y añadir el campo de texto para el nombre
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Name';
nameInput.name = 'name';
nameInput.required = true;
div.appendChild(nameInput);

// Crear y añadir el campo de texto para el correo electrónico
const emailInput = document.createElement('input');
emailInput.type = 'text';
emailInput.placeholder = 'Email address';
emailInput.name = 'mail';
emailInput.required = true;
div.appendChild(emailInput);

// Crear y añadir la casilla de verificación
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = true;
checkbox.name = 'subscribe';
div.appendChild(checkbox);

// Crear y añadir el texto para la casilla de verificación
const checkboxLabel = document.createElement('span');
checkboxLabel.textContent = ' Daily Newsletter';
div.appendChild(checkboxLabel);

// Crear y añadir el botón de suscripción
const submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Subscribe';
div.appendChild(submitButton);

// Añadir el contenedor al body del documento
document.body.appendChild(div);