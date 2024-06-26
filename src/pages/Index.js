import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"James Higginbotham IV's personal website. Louisiana based University of Louisiana At Lafayette Informatics graduate, "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to check out my <Link to="/resume">resume</Link> {' '}
        {/* Please feel free to read more <Link to="/about">about me</Link>, */}
        {/* or you can check out my {' '} */}
        {/* <Link to="/projects">projects</Link>, {' '} */}
        {/* view <Link to="/stats">site statistics</Link>, {' '} */}
        or <Link to="/contact">contact  me</Link>.
      </p>
      <p> Source available <a href="https://github.com/jimmyhiggs337/resume-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
