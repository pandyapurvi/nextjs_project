import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({router}) => (
  <Layout title={router.query.title}>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quaerat eligendi voluptates enim vero. Provident nisi a beatae aspernatur unde atque officia excepturi eaque, qui quaerat, officiis corrupti adipisci dolore!</p>
  </Layout>
);
export default withRouter(Post);

// NOTE: sometimes we get an error like URL is DEPRICATED
// So to avoid it we have to use withRouter 
// previously it was #################
// const Post = ({url}) => (
//   <Layout title={url.query.title}>
//     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quaerat eligendi voluptates enim vero. Provident nisi a beatae aspernatur unde atque officia excepturi eaque, qui quaerat, officiis corrupti adipisci dolore!</p>
//   </Layout>
// );
// export default Post;