import React from "react";
import styled from "@emotion/styled";

import breakpoints from '../../utils/breakpoints';

const Text = ({
  size = "3rem",
  color = "#151515",
  type = "h2",
  children,
  align = "left"
}) => {
  let Text;
  const style = `
    font-size: ${size};
    color: ${color};
    text-align: ${align};
    ${[breakpoints.large]} {
      font-size: calc(${size} * .95);
    };
    ${[breakpoints.medium]} {
      font-size: calc(${size} * .8);
    };
    ${[breakpoints.small]} {
      font-size: calc(${size} * .7);
    };
    ${[breakpoints.extraSmall]} {
      font-size: calc(${size} * .5);
    };
  `;
  if (type === "h1") {
    Text = styled.h1`${style}`;
  } else if (type === "h2") {
    Text = styled.h2`${style}`;
  } else if (type === "h3") {
    Text = styled.h3`${style}`;
  } else if (type === "h4") {
    Text = styled.h4`${style}`;
  } else if (type === "h5") {
    Text = styled.h5`${style}`;
  } else if (type === "h6") {
    Text = styled.h6`${style}`;
  } else if (type === "p") {
    Text = styled.p`${style}`;
  }
  return <Text>{children}</Text>;
};

export default Text;
