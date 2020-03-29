import React from "react";
import Head from 'next/head';
import styled from "@emotion/styled";

const Layout = ({children}) => {
  const Layout = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins;
  }
  :root,body {
    width: 100%;
    height: 100%;
  }
  `;
  return (
  <Layout>
    <Head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
    </Head>
    {children}
  </Layout>
  );
};

export default Layout;
