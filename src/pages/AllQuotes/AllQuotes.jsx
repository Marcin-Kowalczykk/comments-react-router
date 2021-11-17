import React from 'react';
// import { Link } from 'react-router-dom';

import { Wrapper } from '.';

import { quotesArray } from '../../../data/dummyData';
import QuotesList from '../../quotes/QuotesList';

const AllQuotes = () => {
  return (
    <Wrapper>
      <QuotesList quotes={quotesArray} />
    </Wrapper>
  );
};

export default AllQuotes;
