import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";

import {
  titleString,
  headerLinksObjects,
  homeTitleObject,
  aboutTitleObject,
  projectsTitleObject,
  skillsTitleObject,
  contactTitleObject,
} from "./constants";
import { Footer } from "./components/Footer.js";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage.js";
import { AboutPage } from "./pages/AboutPage.js";
import { ProjectsPage } from "./pages/ProjectsPage.js";
import { SkillsPage } from "./pages/SkillsPage.js";
import { ContactPage } from "./pages/ContactPage.js";
import "./App.css";

const App = () => {
  //TODO: create hashing method to generate ids for keys that React requires
  return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navigation title={titleString} headerLinks={headerLinksObjects} />

        <Switch>
          <Route
            path={headerLinksObjects.about.path}
            exact
            render={() => <AboutPage title={aboutTitleObject} />}
          />
          <Route
            path={headerLinksObjects.projects.path}
            exact
            render={() => <ProjectsPage title={projectsTitleObject} />}
          />
          <Route
            path={headerLinksObjects.skills.path}
            exact
            render={() => <SkillsPage title={skillsTitleObject} />}
          />
          <Route
            path={headerLinksObjects.contact.path}
            exact
            render={() => <ContactPage title={contactTitleObject} />}
          />
          <Route
            path={headerLinksObjects.home.path}
            render={() => (
              <HomePage
                title={homeTitleObject.title}
                text={homeTitleObject.text}
              />
            )}
          />
        </Switch>

        <Footer />
      </Container>
    </Router>
  );
};

export default App;
