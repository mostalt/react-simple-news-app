import { ADD_COMMENT, LOAD_COMMENTS_FOR_PAGE, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS } from '../constants'



export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: {
      articleId, comment
    },
    generateId: true
  }
}

export function loadCommentsForArticle(articleId) {
  return {
    type: LOAD_COMMENTS_FOR_ARTICLE,
    payload: { articleId },
    callAPI: `/api/comment?article=${articleId}`
  }
}

export function loadCommentsForPage(page) {
  return {
    type: LOAD_COMMENTS_FOR_PAGE,
    payload: { page },
    callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
  }
}