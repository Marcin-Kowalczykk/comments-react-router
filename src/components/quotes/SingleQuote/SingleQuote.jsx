import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, ContentSection, Button, Text } from '.';

const SingleQuote = ({ author, text, id }) => {
  return (
    <Wrapper>
      <ContentSection>
        <Text>{text}</Text>
        <h1>{author}</h1>
      </ContentSection>
      <Button>
        <Link to={`/all-quotes/${id}`}>show more</Link>
      </Button>
    </Wrapper>
  );
};

export default SingleQuote;
