import React from 'react';

import SingleQuote from '../SingleQuote';

const QuotesList = ({ quotes }) => {
  return (
    <ul>
      {quotes.map((element) => (
        <SingleQuote
          key={element.id}
          id={element.id}
          author={element.author}
          text={element.quote}
        />
      ))}
    </ul>
  );
};

export default QuotesList;
