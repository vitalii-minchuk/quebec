"use client";

import { forwardRef, type ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  caption: string;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { isLoading, caption, ...rest } = props;

  return (
    <button ref={ref} type="button" {...rest}>
      {isLoading && "Loading...."}
      {!isLoading && caption}
    </button>
  );
});

Button.displayName = "Button";
