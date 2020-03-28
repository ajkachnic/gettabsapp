import React, { Children } from "react";
import styled from "@emotion/styled";

import breakpoints from "../../utils/breakpoints";
const Button = ({ bg = "#FF5F8F", fg = "#FFFFFF", children }) => {
  const Button = styled.button`
    background: ${bg};
    color: ${fg};
    padding: 0.75em 1.5em;
    font-size: 1.25rem;
    font-weight: 600;
    border: none;
    border-radius: 2px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
    transition: box-shadow 0.4s;
    :hover {
      box-shadow: 0 6px 5px rgba(0, 0, 0, 0.25);
    }

    ${breakpoints.medium} {
      font-size: 1rem;
    }
    ${breakpoints.small} {
      font-size: .8rem;
    }
  `;
  return (
    <>
      <Button>{children}</Button>
    </>
  );
};

export default Button;
