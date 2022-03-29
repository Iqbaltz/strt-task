import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import { ThirdwebProvider } from "@3rdweb/react";

function MyApp({ Component, pageProps }: AppProps) {
  const supportedChainIds = [1, 3, 4, 42, 97, 80001];

  const connectors = {
    injected: {},
  }

  return (
    <ThirdwebProvider connectors={connectors} supportedChainIds={supportedChainIds}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
