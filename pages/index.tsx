import type { NextPage } from 'next'
import Layout from '../components/common/Layout';
import LaunchpadForms from '../components/launchpad/LaunchpadForms';

const Home: NextPage = () => {
  return (
    <Layout>
      <LaunchpadForms />
    </Layout>
  )
}

export default Home
