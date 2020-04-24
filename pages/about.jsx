import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from './_error';

export default class About extends Component {
  // state = {
  //   user: null
  // }
  // componentDidMount() {
  //   fetch('https://api.github.com/users/purvipandya')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({user: data})
  //   })
  // }

  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/bhuvanmehra');
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    //console.log(data);
    return { user: data, statusCode }
    
  }
  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />
    }
     return (
       <Layout title="About">
        {/* <p> {JSON.stringify(this.props.user)}</p> */}
        <div>
           <h2>{user.name}</h2>
           <img src={user.avatar_url} />
           <h4>{user.location}</h4>
        </div>
      </Layout>
    );
  }
}