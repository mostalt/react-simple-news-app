import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

  componentWillMount() {
    console.log('mounting');
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentWillUnmount() {
    console.log('unmounting');
  }

  state = {
    isOpen: false
  }

  render() {
    const { article } = this.props
    const { isOpen } = this.state

    const body = isOpen ? 
      <section>
        { article.text }
         <CommentList comments = { article.comments } />
      </section> 
      : null

    return (
      <div>
        <h3 onClick = { this.toggleOpen } >{ article.title} </h3>
        { body }
      </div>
    )

  }

  toggleOpen = ev => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}