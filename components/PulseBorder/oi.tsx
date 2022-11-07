import { forwardRef, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  type: "submit" | "button";
}
export type Ref = HTMLButtonElement;

export const FancyButton = forwardRef<Ref, Props>((props, ref) => (
  <button ref={ref} className="MyClassName" type={props.type}>
    {props.children}
  </button>
));