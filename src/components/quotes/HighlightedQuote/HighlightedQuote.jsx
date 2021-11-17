import React from 'react';
import { Wrapper, Text } from '.';

const HighlightedQuote = ({ text, author }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <p>{author}</p>
    </Wrapper>
  );
};

export default HighlightedQuote;
