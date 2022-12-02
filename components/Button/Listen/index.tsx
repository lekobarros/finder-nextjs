import React, { forwardRef } from 'react'

import Button from './style'
import IconMicrophone from 'src/icons/microphone.svg';
import IconCheck from 'src/icons/check.svg';

export type Ref = HTMLElement;
interface Props {
  isMatch: boolean,
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>,
}

const ButtonListen = forwardRef<Ref, Props>(({ isMatch, onClick, disabled }, ref) => (
  <Button onClick={onClick} ref={ref as any} disabled={disabled}>
    {!isMatch ? <IconMicrophone className='inline-block' width={48} height={48} /> : <IconCheck className='inline-block' width={48} height={48} />}
  </Button>
));


export default ButtonListen;