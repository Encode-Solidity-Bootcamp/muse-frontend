
import styles from '@/styles/Home.module.css'
import { Navbar, Footer,Hero } from '@/components'
import '@rainbow-me/rainbowkit/styles.css';
import { config } from 'process';
import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { sepolia, goerli, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const ALCHEMY_ID: string = process.env.ALCHEMY_ID || '';
const { chains, provider } = configureChains(
  [sepolia, goerli, polygonMumbai, ],
  [
    alchemyProvider({ apiKey: ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Muse',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


export default function Home() {
  

  return (
    <>
     <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider  theme={darkTheme({
      accentColor: '#7b3fe4',
      accentColorForeground: 'white',
      borderRadius: 'small',
      fontStack: 'system',
      overlayBlur: 'small',
    })}
    coolMode modalSize="compact" chains={chains}>
        
      <main className={styles.main}>
      <Navbar/>

      <Hero />
        
      <Footer />
      </main>
      </RainbowKitProvider>
    </WagmiConfig>
     
    </>
  )
}
