import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>James Higginbotham IV</h2>
        <p>
          <a href="mailto:jimmyhiggs337@gmail.com">jimmyhiggs337@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Jimmy. I am a{' '}
        <a href="https://computing.louisiana.edu/informatics">
          University of Louisiana At Lafayette Informatics
        </a>{' '}
        graduate.
      </p>
      <p>
        I have experience leading development on a project at a
        larger company as well as working as a full stack mid level developer on
        a small team where I was expected to &quot;wear many hats&quot;.
      </p>
      <p>
        I&apos;m easy going and friendly and I enjoy working with
        others. I&apos;m always ready to buckle down and put in extra hours for a
        project; I find that seeing a project come to fruition is incredibly
        satisfying.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            // <Link to="/about" className="button">
            //   About Me
            // </Link>
            ''
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; James Higginbotham IV <Link to="/">profile.jimmyserv.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
