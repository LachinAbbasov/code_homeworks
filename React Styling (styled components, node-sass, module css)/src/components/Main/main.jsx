import React from 'react';
import SectionOne from '../Sectionone/SectionOne';
import Sectiontwo from '../Sectiontwo/Sectiontwo';
import PropTypes from 'prop-types';

function Main({ books }) {
  return (
    <main>
      <SectionOne />
      <Sectiontwo books={books} />
    </main>
  );
}

Main.propTypes = {
  book: PropTypes.array,
  index: PropTypes.number,
};

export default Main;
