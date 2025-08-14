// Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>🎬 MovieScope © {new Date().getFullYear()} - Tous droits réservés</p>
      <p>
        Développé avec ❤️ par <a href="#" target="_blank" rel="noreferrer">Votre Nom</a>
      </p>
    </footer>
  );
}
