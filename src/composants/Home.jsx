// MoviesFromExcel.jsx
import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Home.css";  


export default function Home() {
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
    <>
     <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{ clickable: true }}
  autoplay={{ delay: 2000, disableOnInteraction: false }} // كل 1 ثانية
  modules={[EffectCoverflow, Pagination, Autoplay]}
  className="mySwiper"
>
  {movies.map((movie, index) => (
    
          <SwiperSlide key={index}>
            <Link to={`/MovieDetail/${movie.id}`} className="slide-link">
               <strong className="titre_movie">
              {movie.title} ({movie.year})
            </strong>
              <img src={movie.image_url} alt={movie.title} />
              </Link>
          </SwiperSlide>
        
        ))}
      </Swiper>
    </>
  );
}
