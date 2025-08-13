// MoviesFromExcel.jsx
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./movies.css";

import {BrowserRouter, Link } from "react-router-dom";


export default function Movie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/data.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setMovies(jsonData);
      })
      .catch((err) => console.error("Erreur chargement Excel:", err));
  }, []);

  return (
  <div className="list_mov">
  <h1 className="titre_bien" >Bienvenue</h1>
  <ul  className="list_img">
    {movies.map((movie, index) => (
      <li key={index} style={{ marginBottom: "10px" }}>
        
        <strong className="titre_movie">{movie.title}  ({movie.year}) </strong>
        <br />
        <img className="img" src={movie.image_url} alt={movie.title} />
        <br />
      <link rel="stylesheet" href="MovieDitail" />
      </li>
    ))}
  </ul>
</div>

  );
}
