import styled from 'styled-components'

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  padding: 0;
  width: 6rem;
  height: 6rem;
  color: rgba(255, 255, 255, 1);
  background: linear-gradient(180deg, #FF6633 0%, #FF0E83 100%);
  border-radius: 100%;
  border: 0;
  transform: translate(-50%,-50%);

  &:hover {
    cursor: pointer;
  }
`

export default Button;