import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About Me</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I like <span className="highlight">Coding</span> and
              everything web.
            </p>
            <p>
              Hello, my name is Heber Jimenez. I am a currently attending the Kansas University Coding Bootcamp.
              I am eager to start my career in web develpment and obtain a position which uses my skills in
              creating, testing, and maintaining a web service.
            </p>
            <p>
              I am known to be a Supportive and Enthusiastic team player
              dedicated to helping resolve project issues with a willingness to take on new projects which will
              expand my skills and knowledge of this ever elvoving field of Software Development.
            </p>
            <p className="text-emoji" style={{ color: colorPrimary }}>
              \ (•◡•) /
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
