import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      {/* Sección Hero */}
      <header className="hero">
        <h1>FULL BODY. LOW-IMPACT. ROWING INSPIRED FITNESS</h1>
        <button>FIRST CLASS FREE</button>
      </header>

      {/* Sección de Beneficios */}
      <section className="benefits">
        <h2>PUSH YOURSELF. PULL TOGETHER.</h2>
        <p>
          Our energetic, music-driven group classes combine rowing intervals
          with floor-based strength exercises for maximum performance. An
          all-in-one, low-impact, cardio-boosting, full-body strength workout
          for all fitness levels.
        </p>
        <button>FIRST TIMERS</button>
      </section>

      {/* Sección de Tipos de Entrenamiento */}
      <section className="workouts">
        <h2>
          SAY GOODBYE TO BORING WORKOUTS AND HELLO TO ROWING INSPIRED FITNESS
        </h2>
        <div className="icons">
          <div>💪 CARDIO WORKOUT</div>
          <div>🔥 FULL BODY</div>
          <div>🦵 LOW-IMPACT</div>
          <div>👥 ALL LEVELS</div>
        </div>
        <button>WHY IT WORKS</button>
      </section>

      {/* Sección de Clases */}
      <section className="classes">
        <div className="class-card">
          <h3>SIGNATURE</h3>
          <p>
            Improve cardiovascular health, muscle tone, mobility, & alignment
            with our most popular blend of rowing & floor exercise..
          </p>
        </div>
        <div className="class-card">
          <h3>STRENGTH</h3>
          <p>
            Grab your weights & feel the burn! Build strength through floor
            exercises to increase powe on the rower.
          </p>
        </div>
        <div className="class-card">
          <h3>FULL ROW</h3>
          <p>
            Cardio endurance at its finest! Keep your heart rate in the aerobic
            zone by rowing for a majority of the workout.
          </p>
        </div>
      </section>

      {/* Sección de Ubicación */}
      <section className="location">
        <h2>FIND A ROW HOUSE NEAR YOU</h2>
        <p>
          Your favorite new workout is just a click away. Nex locations opening
          throughout the U.S and Canada.
        </p>
        <button>BOOK THIS STUDIO</button>
        <button>ALL LOCATIONS</button>
      </section>

      {/* Footer */}
      <footer>
        <p>©2023 Row House</p>
      </footer>
    </div>
  );
}
