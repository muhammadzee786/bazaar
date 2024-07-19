import Support from '@component/Support'
import { URLS } from '@config/url'
import { store } from '@store'
import http from '@utility/http'
import { navigate } from '@navigation/'
import { __ } from '@utility/translation'
import { compile } from 'path-to-regexp'

export const updateImportantMessage = async (id, isImportant) => {
  let b = false
  await Support.showLoading()
  try {
    const url = compile(URLS.THREADS_BULK)({ ids: id })
    const r = (await http.post(url, { type: isImportant ? 'markAsImportant' : 'markAsNotImportant' })).data

    if (r.success) {
      b = true
    }
  } catch (e) {
    await Support.showServerError(e)
  }
  await Support.hideLoading()

  return b
}

export const deleteMessage = async (id, cb) => {
  const deletion = async () => {
    let b = false
    await Support.showLoading()
    try {
      const r = (await http.delete(URLS.THREADS + '/' + id)).data

      if (r.success) {
        b = true
      }
    } catch (e) {
      await Support.showServerError(e)
    }
    await Support.hideLoading()
    cb(b)
  }
  Support.showConfirm({
    title: __('Delete'),
    message: __('Are you sure you want to delete this?'),
    onYes: () => deletion()
  })
}
