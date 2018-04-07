import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import React, { Component } from 'react'

import { loadPoducts } from '../actions'

import loader from '../img/throbber_13.gif'

class HomePage extends Component {

  handleClick() {
    this.props.loadPoducts();
  }


  componentDidMount() {

    this.props.loadPoducts();

  }
  
  render() {

    if (!this.props.products.length == 0) {
        return (
          <div>
            <ul>
              { this.props.products.map((product) => <li>{product.name}</li>) }
            </ul>
          </div>
        );
    }

    return <h3 className="loader"><img src={loader} width="100" height="100" alt="loading..." /></h3>;
    
  }
}

export default connect(
  (state) => {return {products: state.products};},
  (dispatch) => bindActionCreators({loadPoducts}, dispatch)
)(HomePage);
