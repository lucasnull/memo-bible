import React from "react";
import type { AppProps } from "next/app";

import "@/antd.less";
import "@/modules/App/fonts.css";

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}

export default MyApp;
