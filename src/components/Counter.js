import React, {Component, PropTypes} from 'react';
import { increment } from '../AC/counter'
import { connect } from 'react-redux'

class Counter extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.count}</h3>
        <a href="#" onClick={this.handleIncrement}>increment me</a>
      </div>
    );
  }

  handleIncrement = ev => {
    ev.preventDefault()
    this.props.increment()
  }
}

Counter.propTypes = {

};

export default connect(state => ({
  count: state.count
}), { increment })(Counter);