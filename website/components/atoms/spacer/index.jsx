import React from "react";
import styled from "@emotion/styled";

const Spacer = ({margin, children}) => {
  const Spacer = styled.div`
    margin: ${margin ? margin : "1em 0"};
  `;
  return <Spacer>{children}</Spacer>;
};

export default Spacer;
