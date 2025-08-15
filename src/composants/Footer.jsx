
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>🎬 MovieScope © {new Date().getFullYear()} - Tous droits réservés</p>
      <p>
        Développé avec ❤️ par{" "}
        <a href="#" target="_blank" rel="noreferrer">
        MORCHID
        </a>
      </p>

      
      <div className="social-icons">
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
}
