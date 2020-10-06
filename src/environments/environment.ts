// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  defaultRoute: 'users',
   firebaseConfig: {
    apiKey: "AIzaSyAZsOClNSBNXh_vwRDgBdFYVxsoN3KYjps",
    authDomain: "user-roles-demo-a5b45.firebaseapp.com",
    databaseURL: "https://user-roles-demo-a5b45.firebaseio.com",
    projectId: "user-roles-demo-a5b45",
    storageBucket: "user-roles-demo-a5b45.appspot.com",
    messagingSenderId: "297911015661",
    appId: "1:297911015661:web:cf8a53b7e54ae70c1654e4"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
