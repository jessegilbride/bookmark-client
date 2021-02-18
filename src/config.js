export default {
  API_ENDPOINT: `https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks`,
  // API_KEY: '$2a$10$ra1z0n2XnSnbMP/ipTMHeOqqrI7i8Rssm/z8MHTxgb7LamV7LpfXu', // someone else's API key
  // API_KEY: '$2a$10$wcrZ3Ot1HUycCuZLdnTiDu2YmpmnywtxjaN6dz0S5U765AHRof2.u', // Jesse's API key
  API_KEY: process.env.REACT_APP_API_KEY,
}
