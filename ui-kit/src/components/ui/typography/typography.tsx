import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from "react";

import clsx from "clsx";

import s from "./typography.module.scss";
export type TypographyProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  variant?:
    | "bold_text_14"
    | "bold_text_16"
    | "h1"
    | "h2"
    | "h3"
    | "large"
    | "medium_text_14"
    | "regular_link"
    | "regular_text_14"
    | "regular_text_16"
    | "semi_bold_small_text"
    | "small_link"
    | "small_text";
};
export const Typography = <T extends ElementType = "p">({
  as,
  className,
  variant = "regular_text_16",
  ...rest
}: Omit<TypographyProps<T>, keyof ComponentPropsWithoutRef<"p">> &
  TypographyProps<T>) => {
  const classNames = clsx(s.text, s[variant], className);
  const Component = as || "p";

  return <Component className={classNames} {...rest} />;
};
