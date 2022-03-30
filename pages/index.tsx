import type { NextPage } from 'next'
import Layout from '../components/common/Layout';
import Step from '../components/home/Step';
import Forms from '../components/home/Forms';

const Home: NextPage = () => {
  return (
    <Layout>
      <Step />
      <Forms />
    </Layout>
  )
}

export default Home
