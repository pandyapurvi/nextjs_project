import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import Nprogress from 'nprogress';

Router.onRouteChangeStart = url => {
  console.log(url);
  Nprogress.start();
};

Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();

const Layout = ({ children, title }) => (
  <div className="root">
    <Head>
      <title>Next.js Project</title>
      
    </Head>
    <header>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/hireme"><a>Hire Me</a></Link>
      <Link href="/blog"><a>Blog</a></Link>
    </header>

    <h1>{title}</h1>
    {children}
   

    <footer>&copy; {new Date().getFullYear()} </footer>

    <style jsx>{`
    .root {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    header {
      display:flex;
      width: 100%;
      justify-content: space-around;
      padding: 1em;
      font-size: 1.2rem;
      background: indigo;
    }
    header a {
      text-decoration: none;
      color: grey;
    }
    header a:hover {
      color: orange;
      font-weight: bold;
    }
    footer {
      padding: 1em;
    }
    `}
    </style>
    <style global jsx>{`
      body {
      margin: 0;
      font-size: 110%;
      background: #f0f0f0;
      }`}</style>
  </div>
 

);
export default Layout;