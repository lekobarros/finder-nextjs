import styled from 'styled-components'

import { Pulse } from 'src/css/keyframes';

const Button = styled.button`
  padding: 0;
  width: 6rem;
  height: 6rem;
  color: rgba(255, 255, 255, 0.8);
  background: linear-gradient(180deg, #FF6633 0%, #FF0E83 100%);
  border-radius: 100%;
  border: 0;
  transition: transform 0.2s ease;

  &:hover {
    cursor: pointer;
    /* animation-name: ${Pulse};
    animation-delay: 0s;
    animation-duration: 3600ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out; */
  }
`

export default Button;