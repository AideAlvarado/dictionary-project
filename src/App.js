import dotenv from "dotenv";
import "./App.css";
import Dictionary from "./Dictionary";
import "./index.css";
import Stars from "./stars";
import Title from "./Title";
import Moon from "./Moon";
dotenv.config();

export default function App() {
  return (
    <div className="App">
      {" "}
      <div>
        {" "}
        <Moon />
      </div>
      <div className="container">
        <header className="App-header">
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
