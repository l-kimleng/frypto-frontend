// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl: "http://localhost:50488",
  firebase: {
    apiKey: "AIzaSyDVfpXehA9HYdVBdr9TakgfAMh-o2Ir__w",
    authDomain: "frypto-frontend.firebaseapp.com",
    databaseURL: "https://frypto-frontend.firebaseio.com",
    projectId: "frypto-frontend",
    storageBucket: "frypto-frontend.appspot.com",
    messagingSenderId: "1007627491578"
  }
};
