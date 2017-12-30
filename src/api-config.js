let backendHost
const hostname = window && window.location && window.location.hostname
console.log(hostname)
if (hostname === 'ear-worm.com') {
  backendHost = 'https://spotify-viz-api.herokuapp.com'
} else if (hostname === 'spotify-viz-frontend.herokuapp.com') {
  backendHost = 'https://spotify-viz-api.herokuapp.com'
} else if (hostname === 'localhost') {
  backendHost = 'http://localhost:3001'
}

export const API_ROOT = backendHost
