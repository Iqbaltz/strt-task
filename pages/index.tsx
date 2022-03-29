import type { NextPage } from 'next'
import { useWeb3, useSwitchNetwork } from '@3rdweb/hooks';
import Layout from '../components/common/Layout';
import Step from '../components/home/Step';
import Forms from '../components/home/Forms';



const ButtonConnect = () => {
  const web3 = useWeb3()

  const { address, connectWallet, disconnectWallet } = web3

  return (
    <>
      {address ? <button onClick={disconnectWallet}>{address}</button> : <button onClick={() => connectWallet('injected')}>Connect</button>}
    </>
  )

}

const Home: NextPage = () => {
  return (
    <Layout>
      <Step />
      <Forms />
    </Layout>
  )
}

export default Home
