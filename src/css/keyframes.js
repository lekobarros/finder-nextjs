import { keyframes } from 'styled-components'

export const expansiveCircle = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  40%,
  50% {
    opacity: var(--opacity, 1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
  }
`;

export const Pulse = keyframes`
  from {
    transform: scale(1);
  }

  40% {
    transform: scale(0.95);
  }

  60% {
    transform: scale(1.05);
  }

  70% {
    transform: scale(0.95);
  }

  80% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
`;


export default { Pulse, expansiveCircle }