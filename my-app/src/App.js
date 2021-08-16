import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
    <div class="header">
      <h1>Todd Kelly</h1>
      <div>
        <ul>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#about-me">About Me</a>
          </li>
        </ul>
      </div>

      <div class="title">
        <h3>Full Stack Developer</h3>
      </div>
    </div>

    <div class="content">
      <section id="about-me">
        <img src="./images/me.jpg" class="float-right" />
        <h3>About Me</h3>
        <p>
          I am a carpenter turned developer. I am attending Carleton Univerity's
          Coding Boot Camp to become a Full Stack Web Developer.
        </p>
      </section>

      <section id="work" class="mb-3 p-5 d-flex flex-column flex-wrap">
        <h2>Work</h2>
        <p>These are some examples of my work.</p>

        <div class="project d-flex leftovervariables row">
          <div
            class="
              col-sm-12 col-md-6
              d-flex
              flex-column
              justify-content-between
            "
          >
            <h3>LeftOver Variables-project</h3>
            <div class="d-flex flex-column">
              <a href="https://toddkelly.github.io/left-over-variables/"
                ><u
                  >Deployed Link:
                  https://toddkelly.github.io/left-over-variables/</u
                ></a
              >
              <br />
              <a href="https://toddkelly.github.io/left-over-variables/"
                ><u
                  >Repo: https: //toddkelly.github.io/left-over-variables/</u
                ></a
              >
            </div>
          </div>
          <div class="col-sm-12 col-md-6 d-flex flex-column">
            <img src="./images/lovariables.jpg" />
            <p>
              This is the first group project that I participated in during my
              time in the Carleton University's Full Stack Development Boot
              Camp.
            </p>
          </div>
        </div>
        https://github.com/ToddKelly/Code-Quiz.git
        https://toddkelly.github.io/Code-Quiz/
        <div class="project d-flex leftovervariables row">
          <div
            class="
              col-sm-12 col-md-6
              d-flex
              flex-column
              justify-content-between
            "
          >
            <h3>Code Quiz</h3>
            <div class="d-flex flex-column">
              <a href="https://toddkelly.github.io/Code-Quiz/"
              ><u
                >Deployed Link:
                https://toddkelly.github.io/Code-Quiz/</u
              ></a
            >
            <a href="https://github.com/ToddKelly/Code-Quiz.git"
              ><u
                >Repo: https://github.com/ToddKelly/Code-Quiz.git</u
              ></a
            >
            </div>
          </div>
          <div class="col-sm-12 col-md-6 d-flex flex-column">
            <img src="C:\Git\Code-Quiz\images\game.png" />
            <p>
              Code Quiz: This application alows a user to complete a timed
              multiple choice quiz. When the user enters a question correctly a
              point is added to their total score and time is added to the quiz
              timer. When the user answers a question incorrectly, time is
              subtracted from the quiz timer. If the timer runs out completely,
              the quiz ends. When the quiz ends the user is able to enter their
              name. Their name is then posted to the list of high scores along
              with the score they achieved.
            </p>
          </div>
        </div>

        <div class="project d-flex leftovervariables row">
          <div
            class="
              col-sm-12 col-md-6
              d-flex
              flex-column
              justify-content-between
            "
          >
            <h3>Password Generator</h3>
            <div class="d-flex flex-column">
              <a href="https://toddkelly.github.io/PassWord-Generator/"
                ><u
                  >Deployed Link:
                  https://toddkelly.github.io/PassWord-Generator/</u
                ></a
              >
              <a href="https://github.com/ToddKelly/PassWord-Generator.git"
                ><u
                  >Repo: https://github.com/ToddKelly/PassWord-Generator.git</u
                ></a
              >
            </div>
          </div>
          <div class="col-sm-12 col-md-6 d-flex flex-column">
            <img src="C:\Git\PassWord-Generator\Passcodegenerator.png" />
            <p>
              Pass Word Generator:This application is a Password Generator which
              creates a random password and returns it to the user using
              lettters, numbers and special characters.
            </p>
          </div>
        </div>

        <div class="project d-flex leftovervariables row">
          <div
            class="
              col-sm-12 col-md-6
              d-flex
              flex-column
              justify-content-between
            "
          >
            <h3>Techbook</h3>
            <div class="d-flex flex-column">
              <a href="https://techbook-organization.github.io/techbook/"
                ><u
                  >Deployed Link:
                  https://techbook-organization.github.io/techbook/</u
                ></a
              >
              <a href="https://github.com/Techbook-Organization/techbook.gitt"
                ><u
                  >Repo:
                  https://github.com/Techbook-Organization/techbook.git</u
                ></a
              >
            </div>
          </div>
          <div class="col-sm-12 col-md-6 d-flex flex-column">
            <img src="C:\Git\techbook\assets\signup.PNG" />
            <p>
              This is a project worked on during my time in the Carleton
              University Coding Boot Camp. Techbook allows people from the Tech
              industry to connect with each other and gives recruiters the
              ability to connect and interact with people, enables students to
              improve their work.
            </p>
          </div>
        </div>
      </section>

      <section id="resume" class="resume">
        <img src="./images/resume.jpg" />
        <h2>
          Resume : <a href="Resume.pdf"><u>Deployed Link</u></a>
        </h2>
        <p>Follow the link to my Resume</p>
      </section>
    </div>

    <footer>
      <div id="contact-me" class="contact-me">
        <h3>Contact Me</h3>
        <p>Phone: (613)298-3933</p>
        <p>
          <a href="mailto:donkeyskates21@gmail.com"
            >Email: donkeyskates21@gmail.com</a
          >
        </p>
        <p>
          <a href="https://github.com/ToddKelly"
            >Git: https://github.com/ToddKelly</a
          >
        </p>
        <p>
          <a href="https://www.linkedin.com/in/toddkelly21/"
            >LinkedIn: www.linkedin.com/in/ToddKelly21</a
          >
        </p>
      </div>
    </footer>
      </div>
    );
  }
}

export default App;
