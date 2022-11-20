import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import Button from './style'
import IconMicrophone from 'src/icons/microphone.svg';
import IconCheck from 'src/icons/check.svg';

export type Ref = HTMLElement;
interface Props extends ComponentPropsWithoutRef<'div'> {
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLElement>,
}

const ButtonListen = forwardRef<Ref, Props>(({ onClick, disabled }, ref) => (
  <Button onClick={onClick} ref={ref as any} disabled={disabled}><IconMicrophone width={48} height={48} /></Button>
));


export default ButtonListen;