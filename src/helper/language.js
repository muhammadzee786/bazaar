
import { store } from '@store'
import http from '@utility/http'
import { URLS } from '@config/url'
import { updateLanguages } from '@store/reducers/setting'

export const fetchLanguages = async () => {
  try {
    const r = (await http.get(URLS.LANGUAGES)).data
    if (Array.isArray(r?.result?.data) && r.result.data.length) {
      await store.dispatch(updateLanguages({ languages: r.result.data }))
    }
  } catch (e) {}
}
