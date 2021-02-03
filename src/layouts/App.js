import "../styles/App.css";
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

//impport all main components of the main view
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import Page from "./Page.js";
import Footer from "./Footer.js";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <Header />
          </header>
          <main>
            <aside>
              <NavBar />
            </aside>
            <section className="page">
              <Page />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
