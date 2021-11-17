import React from 'react';

import { Wrapper, Label, TextArea, Button } from '.';

const Comment = () => {
  return (
    <Wrapper>
      <Label htmlFor="com">Comments</Label>
      <TextArea name="" id="com" cols="30" rows="5"></TextArea>
      <Button>Add comment</Button>
    </Wrapper>
  );
};

export default Comment;
