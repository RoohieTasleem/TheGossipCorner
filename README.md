# TheGossipCorner

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Libaries used

Bootstrap v5.0.1

## Notable features

Login <br/>
    &nbsp; We get a Toast message on successfull login. Toast stays for 1 min and dismisses. <br/>
    &nbsp; Alter message in the modal for unsuccessfull login. <br/>
    &nbsp; User has a session timming of 60 mins. <br/>
Logout <br/>
Autologin <br/>
    &nbsp; User will be auto loggedin on every page refresh within 60 mins of their current session. And the session timming is reset to 60 mins. <br/>
Autologout <br/>
    &nbsp; After the session of 60 mins expires, the user is auto logged out. And they are notified of the same with a popup.<br/>
Gallery for private users <br/>
    &nbsp; The user can click on the tiles to see the detailed gossip in a popup.<br/>
Home ( different gossip for private and public user ). <br/>
About <br/>
