import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import FadeWrapper from '../../hoc/FadeWrapper'

class OtherPage extends Component {

    render() {
      const { params } = this.props.match
  
      return (<div>
            <h1>This is {params.contentId} page !!</h1>
            <br />
            <br />
            <Link to='/'>Back</Link>
            </div>
      )
    }
  }

export default FadeWrapper(OtherPage)

/*
const OtherPage = () => (

    const { path, params } = this.props.match;
    
    return (
          <h1>This is {params.contentId} page !!</h1>
          <br />
          <br />
          <Link to='/'>Back</Link>
    );
);
*/
