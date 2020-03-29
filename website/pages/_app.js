import React from 'react';
import App from 'next/app';
import { NextSeo } from 'next-seo'
import Head from 'next/head';
import ReactGA from 'react-ga';
import { UserContextProvider } from '../components/'
export default class MyApp extends App {
  componentDidMount() {
    if(!window.GA_INITIALIZED) {
      ReactGA.initialize('UA-158973361-2');
      window.GA_INITIALIZED = true;
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserContextProvider>
      <style jsx global>{`
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
      `}</style>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" /> 
      </Head>
        <NextSeo
          title="Get Tabs App"
          description="An open source bookmark manager"
          canonical="https://gettabs.app"
          
          openGraph={{
            type: 'website',
            url: 'https://andrewkachnic.now.sh',
            site_name: 'Get Tabs App',
            locale: 'en_US',
            title: 'Get Tabs App',
            description: 'An open source bookmark manager',
          }}
          twitter={{
            handle: '@GetTabsApp',
            site: "@GetTabsApp",
            cardType: 'summary_large',
          }}
          additionalMetaTags={{
            name: 'keywords',
            content: 'get tabs,bookmark,open-source'
          }}
        />
      <Component {...pageProps} />
      </UserContextProvider>
    );
  }
}
