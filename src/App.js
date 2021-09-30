import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesDB = {
  hollywood: [
    {
      name: "The Shawshank Redemption",
      rating: "9.2",
      desc:
        "Andy Dufresne, a successful banker, is arrested for the murders, and is sentenced to life imprisonment."
    },
    {
      name: "The Godfather",
      rating: "9.1",
      desc:
        "The Godfather is an American film series that consists of three crime films"
    },
    {
      name: "The Dark Knight",
      rating: "9.0",
      desc:
        "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker"
    }
  ],

  bollywood: [
    {
      name: "Shershaah",
      rating: "8.8",
      desc:
        "The life of Indian army captain Vikram Batra, awarded with the Param Vir Chakra"
    },
    {
      name: "Black Friday",
      rating: "8.5",
      desc:
        "After the 1993 Mumbai bomb blasts rip the city apart, the police force launches a massive drive."
    },
    {
      name: "Dangal",
      rating: "8.4",
      desc:
        "Mahavir Singh Phogat, a former wrestler, decides to fulfil his dream of winning a gold medal for his country"
    }
  ],
  anime: [
    {
      name: "Fullmetal Alchemist: Brotherhood",
      rating: "9.1",
      desc:
        "In the fictitious country of Amestris, two young brothers,  are bestowed with the gift of alchemy"
    },
    {
      name: "Attack on Titan",
      rating: "9.0",
      desc:
        "Attack on Titan is a Japanese dark fantasy anime television series adapted from the manga"
    },
    {
      name: "Death Note",
      rating: "9.0",
      desc:
        "The core plot device of the story is the Death Note itself, a black notebook with instructions"
    }
  ]
};

export default function App() {
  const [selectedTypeOfMovie, setTypeOfMovie] = useState("hollywood");
  function typeOfMovieClickHandler(typeOfMovie) {
    setTypeOfMovie(typeOfMovie);
  }
  return (
    <div className="App">
      <h1>Movies to watch</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout top movies based on IMDb ratings. Select from list available to
        get started{" "}
      </p>

      <div>
        {Object.keys(moviesDB).map((typeOfMovie) => (
          <button
            key={typeOfMovie}
            onClick={() => typeOfMovieClickHandler(typeOfMovie)}
            style={{
              cursor: "pointer",
              background: "#ffaa00",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {typeOfMovie}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left", margin: "auto" }}>
        {
          <ul style={{ paddingInlineStart: "0", textAlign: "center" }}>
            {moviesDB[selectedTypeOfMovie].map((movie) => {
              return (
                <li
                  key={movie.name}
                  style={{
                    listStyle: "none",
                    textAlign: "center",
                    padding: "1rem",
                    border: "1px solid #888",
                    width: "70%",
                    margin: "2rem auto",
                    borderRadius: "0.5rem"
                  }}
                >
                  {" "}
                  <div style={{ fontSize: "larger" }}> {movie.name} </div>
                  <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
                  <div style={{ fontSize: "smaller" }}> {movie.desc} </div>
                </li>
              );
            })}
          </ul>
        }
      </div>
    </div>
  );
}
