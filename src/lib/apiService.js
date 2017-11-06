import axios from 'axios'

let uri = 'https://spotify-viz-api.herokuapp.com'
// let uri = 'http://localhost:3001'
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
