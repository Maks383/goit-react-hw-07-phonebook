import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  top: 460px;
  max-width: 800px;
  width: 80%;
  padding: 0 6%;
  min-width: 300px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Input = styled.input`
  padding: 6px 0;
  min-width: 300px;
  display: flex;
  gap: 16px;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const Button = styled.button`
  padding: 5px;
  border-radius: 4px;
  width: 120px;
  cursor: pointer;
`;