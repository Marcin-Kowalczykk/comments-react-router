import React from 'react';
import { useHistory } from 'react-router-dom';

import { Wrapper } from '.';

import QuoteForm from '../../quotes/QuoteForm';

const NewQuote = () => {
  const history = useHistory();

  const addNewQuoteHandler = (dataFromForm) => {
    console.log(dataFromForm);

    history.push('/all-quotes');
  };

  return (
    <Wrapper>
      <QuoteForm addQuote={addNewQuoteHandler} />
    </Wrapper>
  );
};

export default NewQuote;
