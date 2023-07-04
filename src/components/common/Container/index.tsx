import React, { ReactNode, CSSProperties } from "react";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  classes?: string;
  style?: CSSProperties;
}

const Container: React.FC<ContainerProps> = ({
  children,
  classes,
  style = {},
}) => {
  const containerClasses = `${styles.container} ${classes}`;
  return (
    <div className={containerClasses} style={style}>
      {children}
    </div>
  );
};

export default Container;
