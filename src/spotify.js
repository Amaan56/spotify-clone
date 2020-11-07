// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 'edce39d950914d45881a3291ff1dfe3b';
const redirectUri = 'http://localhost:3000/';
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      var parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

// http://localhost:3000/#access_token=BQDR08-wejfG_7XUY7IrpU-j2PFt4tW2SlRsiSAv3WXUqWMCZp0XtoESCfYcGQsFi15oWXbppKL8ZxQitTnq_cEFg1twf2AUC7YvGK0stIhs7fGDA2SHkvBmpR7YaOqHX6KEN7LNkUKqTvb4R9QN8OqWOCDtuHm0NGHTqqlmkYUwuclTk2H0&token_type=Bearer&expires_in=3600

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
