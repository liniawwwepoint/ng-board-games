// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyDdlqp42YGF8_2rXIMWqKs5h2eC-fgdwU0',
    authDomain: 'local-board-games-dblaszczak.firebaseapp.com',
    databaseURL: 'https://local-board-games-dblaszczak.firebaseio.com',
    projectId: 'local-board-games-dblaszczak',
    storageBucket: 'local-board-games-dblaszczak.appspot.com',
    messagingSenderId: '936781378478'
  }
};
