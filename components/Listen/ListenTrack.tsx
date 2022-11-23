import React, { ComponentPropsWithoutRef, forwardRef } from 'react'
import styled from 'styled-components'

const ListenTrack = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
  line-height: 1;
  text-align: center;

  h2,
  p {
    margin: 0;
  }

  h2 {
    margin-bottom: 0.5rem;
  }
`
export type Ref = HTMLElement;

interface Props extends ComponentPropsWithoutRef<'div'> {
  artistName?: string;
  musicName?: string;
}

export default forwardRef<Ref, Props>(({ artistName, musicName }, ref) => (
  <ListenTrack ref={ref as any} >
    <h2>{artistName}</h2>
    <p>{musicName}</p>
  </ListenTrack>
));
