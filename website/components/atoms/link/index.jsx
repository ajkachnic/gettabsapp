
  import React from 'react';
  import styled from '@emotion/styled';

  const Link = ({ color="#151515", href,children }) => {
    const Link = styled.a`
      color: ${color};
      text-decoration: none;
    `
    return (
      <Link href={href}>{children}</Link>
    )
  }

  export default Link
  