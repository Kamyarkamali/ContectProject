//component-layout-wrapper in all programmer
import Layout from "@/components/layout/Layout";
import { DarkModeProvider } from "@/context/DarkModeContext";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  );
}
