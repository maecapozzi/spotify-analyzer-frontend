let backendHost
const hostname = window && window.location && window.location.hostname

if (hostname === 'https://www.ear-worm.com' || hostname === 'https://www.spotify-viz-frontend.herokuapp.com') {
  backendHost = 'https://spotify-viz-api.herokuapp.com'
} else {
  backendHost = 'http://localhost:3001'
}

export const API_ROOT = backendHost
