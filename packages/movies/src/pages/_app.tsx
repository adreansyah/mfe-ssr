// import 'contai/'
import '../../../shared/globals.css'
// import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}
