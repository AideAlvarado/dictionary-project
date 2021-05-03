import dotenv from "dotenv";
import "./App.css";
import Dictionary from "./Dictionary";
import "./index.css";
import Stars from "./stars";
import Title from "./Title";
dotenv.config();
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="moon animated infinite rubberBand delay-2s"></div>
          <Title titulo="dictionary" />
        </header>
        <Stars />
        <main>
          <Dictionary defaultKeyword="heaven" />
        </main>
        <footer className="signature">
          This project was coded by{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/maribel-alvarado/"
            target="_blank"
            rel="noreferrer"
          >
            Aide Alvarado.
          </a>{" "}
          It is{" "}
          <a
            className="link"
            href="https://www.github.com"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            className="link"
            href="https://www.netlify.com"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
