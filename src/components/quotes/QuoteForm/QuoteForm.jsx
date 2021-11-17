import React, { useRef, useState, Fragment } from 'react';
import { Prompt } from 'react-router-dom';

import { Wrapper, Label, Input, TextArea, Button } from '.';

const QuoteForm = ({ addQuote }) => {
  const [isEntered, setIsEntered] = useState(false);

  const inputAuthorRef = useRef();
  const inputTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const dataFromForm = {
      inputAuthorValue: inputAuthorRef.current.value,
      inputTextValue: inputTextRef.current.value,
    };

    addQuote(dataFromForm);
  };

  const onClickAdd = () => {
    setIsEntered(false);
  };

  const focusFormHandler = () => {
    setIsEntered(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntered}
        message={() => 'are you sure to close? you can lost all of the information'}
      />
      <form onFocus={focusFormHandler} onSubmit={submitFormHandler}>
        <Wrapper>
          <Label htmlFor="author">Author</Label>
          <Input type="text" id="author" ref={inputAuthorRef} />
          <Label htmlFor="quote">Write your quote</Label>
          <TextArea
            name=""
            id="quote"
            cols="30"
            rows="10"
            ref={inputTextRef}
          ></TextArea>
          <Button onClick={onClickAdd}>add</Button>
        </Wrapper>
      </form>
    </Fragment>
  );
};

export default QuoteForm;
