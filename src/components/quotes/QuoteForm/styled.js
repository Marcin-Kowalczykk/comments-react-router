import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin: 5em;
  width: 60%;
  border-radius: 0.5em;
  background: ${(props) => props.theme.color.main};
`;

export const Label = styled.label`
  font-size: ${(props) => props.theme.font.small};
  margin: 0.5em;
`;

export const Input = styled.input`
  border-radius: 1em;
  border: none;
  padding: 0.5em;
`;

export const TextArea = styled.textarea`
  border-radius: 1em;
  border: none;
`;

export const Button = styled.button`
  border: none;
  border-radius: 1em;
  padding: 1em;
  width: 5em;
  margin-top: 1em;
  cursor: pointer;
`;
