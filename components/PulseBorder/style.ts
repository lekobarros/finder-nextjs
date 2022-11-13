import styled from 'styled-components'

interface Props {
  width: number;
  height: number;
}

const PulseBorder = styled.div<Props>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => props.width ? `${props.width}px` : '0px'};
  height: ${props => props.width ? `${props.height}px` : '0px'};
  border-radius: 100%;
  border: 1px solid #ff6533;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%);
`

export default PulseBorder;