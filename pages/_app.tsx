import type { FC } from "react";
import type { AppProps } from "next/app";

import "../styles.css"; // global styles

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
