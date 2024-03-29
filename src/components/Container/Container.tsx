import React, { PropsWithChildren } from "react";
import c from "classnames";
import styles from "./Container.module.scss";

export interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const Container = ({ children, className }: PropsWithChildren<ContainerProps>) => {
  return <div className={c(styles.root, className)}>{children}</div>;
};

export default Container;
