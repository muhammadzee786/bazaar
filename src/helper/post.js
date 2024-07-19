import sanitizeHtml from 'sanitize-html'

import Support from '@component/Support'
import { URLS } from '@config/url'
import { store } from '@store'
import http from '@utility/http'
import { navigate } from '@navigation/'
import { __ } from '@utility/translation'

export const refinePost = post => {
  const state = store.getState()

  post.description = sanitizeHtml(post.description, { allowedTags: [] })

  let formattedAddress = ''
  if (post.address) {
    formattedAddress =
      formattedAddress + (formattedAddress ? ', ' : '') + post.address
  }
  if (post.city?.id) {
    formattedAddress =
      formattedAddress +
      (formattedAddress ? ', ' : '') +
      post.city.name +
      ', ' +
      post.city.country_code
  }
  post.formatted_address = formattedAddress

  post.is_favourite = false
  if (state.session.isLoggedIn && post?.savedByLoggedUser?.length) {
    post.is_favourite = post.savedByLoggedUser.findIndex(r => (r.user_id == state.session.user.id)) > -1
  }

  return post
}

export const addToFavourite = async productId => {
  const state = store.getState()
  if (!state.session.isLoggedIn) {
    await Support.showError({
      message: __('Please login to add wishlist'),
      onHide: () => {
        navigate('UserLogin')
      },
      hideDelay: 2500
    })
    return
  }

  let b = false
  await Support.showLoading()
  try {
    await http.post(URLS.SAVED_POSTS, { post_id: productId })

    b = true
  } catch (e) {
    await Support.showServerError(e)
  }
  await Support.hideLoading()

  return b
}

export const removeFromFavourite = async productId => {
  let b = false
  await Support.showLoading()
  try {
    await http.delete(URLS.SAVED_POSTS + '/' + productId)

    b = true
  } catch (e) {
    await Support.showServerError(e)
  }
  await Support.hideLoading()

  return b
}
