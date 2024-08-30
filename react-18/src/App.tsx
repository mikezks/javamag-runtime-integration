import React from "@esm/react";
import ReactDOM from "@esm/react-dom/client";
import Checkin from "./checkin";
import './app.css'


class MfeCheckinElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <React.StrictMode>
        <Checkin />
      </React.StrictMode>
    )
  }
}

customElements.define('mfe-checkin', MfeCheckinElement);