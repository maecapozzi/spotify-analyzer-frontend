import axios from 'axios'

import { API_ROOT } from '../api-config'

let uri = API_ROOT
let url = `${uri}/search?`

export const getSong = value => {
  return axios.get(url, {
    withCredentials: true,
    params: {
      track: value
    }
  })
    .then(response => response)
}
