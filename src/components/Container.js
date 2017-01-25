import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { Link } from 'react-router'

class Container extends Component {

  static propTypes = {};

  static childContextTypes = {
    username: PropTypes.string
  }

  // getChildContext() {
  //   return {
  //     username: this.state.username
  //   }
  // }

  state = {
    username: ''
  }

  handleChange = ev => this.setState({
    username: ev.target.value
  })

  render() {

    const { articles } = this.props

    return (
      <Provider store = {store}>
        <div>
          <input value = {this.state.username} 
            onChange = {this.handleChange} 
          />
          <ul>
            <li><Link to = "/articles" activeClassName = "active" activeStyle = {{color: 'red'}}>Articles</Link></li>
            <li><Link to = "/counter" activeClassName = "active" activeStyle = {{color: 'red'}}>Counter</Link></li>
            <li><Link to = "/articles/new" activeClassName = "active" activeStyle = {{color: 'red'}}>New</Link></li>
            <li><Link to = "/filter" activeClassName = "active" activeStyle = {{color: 'red'}}>Filter</Link></li>
            <li><Link to = "/articles/1234" activeClassName = "active" activeStyle = {{color: 'red'}}>wrong article</Link></li>
          </ul>
          {this.props.children}
        </div>
      </Provider>
    )
  }
}

export default Container