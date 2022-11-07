import { forwardRef, ReactNode } from "react";
import styled from 'styled-components'

import { NextPage } from 'next'

import { expansiveCircle } from 'src/css/keyframes';

interface Props {
  width?: string;
  height?: string;
  delay?: string;
  opacity?: string;
  props?: object;
  userAgent?: string;
}

export type Ref = HTMLButtonElement;

const Button = styled.div`
  --opacity: ${props => props.opacity ? `${props.opacity}` : '1'};
  position: absolute;
  top: 50%;
    left: 50%;
  width: ${props => props.width ? `${props.width}px` : '0px'};
  height: ${props => props.width ? `${props.height}px` : '0px'};
  color: rgba(255, 255, 255, 0.5);
  // background: linear-gradient(180deg, #ff6533 0%, #fc2244 100%);
  border-radius: 100%;
  border: 1px solid #ff6533;
   pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -50%);

  /* animation-name: ${expansiveCircle};
  animation-duration: 3400ms;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: backwards;
  animation-play-state: running;
  animation-delay: calc(500ms + ${props => props.delay ? `${props.delay}s` : "0s"}); */
`

// const Posts: NextPage<Props> = ({ width, height, delay, opacity }) => (
//   React.forwardRef((props, ref) => (
//     <Button width={width} height={height} delay={delay} opacity={opacity} />
//   ))
// )

const Posts = forwardRef<Ref, Props>(({ width, height, delay, opacity }, ref) => (
  <Button ref={ref} width={width} height={height} delay={delay} opacity={opacity}>      </Button>
));

export default Posts;