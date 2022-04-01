import type { NextPage } from 'next'
import Layout from '../components/common/Layout';
import LaunchpadForms from '../components/launchpad/LaunchpadForms';
import FormProvider from '../libs/context/FormContext';

const Home: NextPage = () => {
  return (
    <Layout>
      <FormProvider>
        <LaunchpadForms />
      </FormProvider>
    </Layout>
  )
}

export default Home
