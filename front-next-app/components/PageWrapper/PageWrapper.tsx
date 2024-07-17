import { PropsWithChildren } from "react";
import {HeadMeta} from '../HeadMeta/HeadMeta';


export const PageWrapper = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <>
      <HeadMeta />
      <main>{children}</main>
    </>
  );
};

