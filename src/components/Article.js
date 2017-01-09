import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    openArticle: PropTypes.func.isRequired
  }

  componentWillMount() {
    console.log('mounting');
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentWillUnmount() {
    console.log('unmounting');
  }


  render() {
    const { article, isOpen, openArticle } = this.props

    const body = isOpen ? 
      <section>
        { article.text }
         <CommentList comments = { article.comments } />
      </section> 
      : null

    return (
      <div>
        <h3 onClick = { openArticle } >{ article.title} </h3>
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