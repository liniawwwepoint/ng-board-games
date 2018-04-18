// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB5vC7gpNR0VZtoJAZQQOR9Iex_rLiHvsU",
    authDomain: "local-board-games-placzycki.firebaseapp.com",
    databaseURL: "https://local-board-games-placzycki.firebaseio.com",
    projectId: "local-board-games-placzycki",
    storageBucket: "local-board-games-placzycki.appspot.com",
    messagingSenderId: "195009016009"
  }
};
