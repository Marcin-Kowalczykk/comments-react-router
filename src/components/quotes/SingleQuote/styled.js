import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.color.main};
  padding: 1em;
  margin-top: 1em;
  border-radius: 1em;
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  padding: 1em;
`;

export const Button = styled.button`
  color: ${(props) => props.theme.color.normal};
  border: none;
  cursor: pointer;
  background: #d15944;
  width: 10em;
  border-radius: 1em;
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.font.large};
  padding: 1em;
`;
