import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  background: ${(props) => props.theme.color.main};
  margin: 0 5em 0 5em;
  border-radius: 0.5em;
`;

export const Label = styled.label`
  font-size: ${(props) => props.theme.font.large};
`;

export const TextArea = styled.textarea`
  border: none;
  border-radius: 0.5em;
  margin: 1em;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;
`;
