// MoviesFromExcel.jsx
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import "./movies.css";
import MovieDetail from "./MovieDetail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function MoviesFromExcel() {
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
  <h2>Movies from Excel</h2>
  <ul  className="list_img">
    {movies.map((movie, index) => (
      <li key={index} style={{ marginBottom: "10px" }}>
        <strong>{movie.title}</strong> ({movie.year})
        <br />
        <img className="img" src={movie.image_url} alt={movie.title} />
        <br />
        <Router>
          <Link to={`/MovieDetail/${movie.id}`}>View Details</Link>  
        </Router>
      </li>
    ))}
  </ul>
</div>

  );
}
