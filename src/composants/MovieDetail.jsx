// MovieDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as XLSX from "xlsx";
import "./MovieDetail.css"; // Assuming you have a CSS file for styling

export default function MovieDetail() {
  const { id } = useParams(); // جلب id من الرابط
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/data.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const foundMovie = jsonData.find(
          (m) => String(m.id) === String(id)
        );
        setMovie(foundMovie);
      })
      .catch((err) => console.error("Erreur chargement Excel:", err));
  }, [id]);

  if (!movie) {
    return <p>Chargement des détails...</p>;
  }

  return (
    <div className="movie-detail">
      <h1>{movie.title} ({movie.year})</h1>
      <img src={movie.image_url} alt={movie.title} className="detail-img" />
      <p><strong>Genre:</strong> {movie.genre}</p>
      
      <p><strong>Description:</strong> {movie.summary}</p>
      <p><strong>Runtime:</strong> {movie.runtime} min</p>

      <Link to="/movies" className="back-button">← Back to Movies</Link>
    </div>
  );
}
