import React from 'react';
import App from 'next/app';
import { NextSeo } from 'next-seo'
import Head from 'next/head';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
      <Head>
        <link rel="icon" href="/favicon.png" />
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
      </>
    );
  }
}
