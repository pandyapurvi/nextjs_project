import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({slug, title}) => (
  <li>
    <Link as={`${slug}`}href={`/post?title=${title}`}><a>{title}</a></Link>
  </li>
);


export default () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" title="React"/>
      <PostLink slug="next-post" title="Next"/>
      <PostLink slug="vue-post" title="Vue"/>
      <PostLink slug="angular-post" title="angular"/>

        

    </ul>
  </Layout>
)