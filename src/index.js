import React from "react";
import { render } from "react-dom";

import "./assets/fonts/Arial/Arial.ttf";
import "./assets/fonts/Arial/Arial Bold.ttf";
import "./assets/fonts/DIN Alternate/DIN Alternate Bold.ttf";
import "./assets/fonts/DIN Condensed/DIN Condensed Bold.ttf";
import "./assets/fonts/Futura/Futura.ttc";
import "./assets/fonts/MyriadPro/MyriadPro-Regular.otf";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

reportWebVitals();
