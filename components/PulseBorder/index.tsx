import { forwardRef, ReactNode } from 'react';
import styled from 'styled-components'

interface PropChilds {
  children?: ReactNode;
  width: string;
  height: string;
}

export type Ref = HTMLElement;

const PulseBorder = styled.div<PropChilds>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${props => props.width ? `${props.width}px` : '0px'};
  height: ${props => props.width ? `${props.height}px` : '0px'};
  // color: rgba(255, 255, 255, 0.5);
  // background: linear-gradient(180deg, #ff6533 0%, #fc2244 100%);
  border-radius: 100%;
  border: 1px solid #ff6533;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%);
`

const ElPulseBorder = forwardRef<Ref, PropChilds>(({ children, width, height }, ref) => (
  <PulseBorder width={width} height={height}>{children}</PulseBorder>
));

export default ElPulseBorder;