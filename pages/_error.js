import Layout from '../components/Layout';

export default({statusCode}) => (
  <Layout title="Error!!">
    {statusCode ? `could not load your user data: statusCode${statusCode}`: `page not found`}
    <p>Sorry could not load the page</p>

  </Layout>
)