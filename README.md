# KinOcr

## Instructions

Your Kin recruiting contact should have sent you a set of instructions for this test.

## How to use this boilerplate

We are a Typescript-first shop and value your understanding of TS/JS over Angular. If you have never used Angular before, you can find the framework documentation here: https://angular.dev/overview.

All of our applications are using the modern versions of Angular, so feel free to use [standalone components](https://angular.dev/essentials/components) and the [new control flow syntax](https://blog.angular.io/meet-angulars-new-control-flow-a02c6eee7843) to make it feel more like React, Vue or Svelt if that's what you are used to.

Feel free to remove routing or upgrade any of the dependencies if you need to.

Please use the `./sample.csv` file as input into your application.

## Running this boilerplate

The app will default to running on localhost:4200.

To run the app, enter the command ```npm start``` in the terminal. 

To run tests, enter the command ```npm test```.


## Architecture Outline
- Sections - contains sections or pages of the application. This will allow it to be scalable.
  - OCR Dashboard - this section contains the functionality for the UI based on the following requirements: "Kin has just recently purchased a machine to assist in reading policy report documents. The machine scans the paper documents for policy numbers, and produces a csv file containing all the policy numbers."
      - Components - this directory contains components specifically related to the OCR dashboard, like the `policy-table`. If in the future a component like a table were to be used in multiple sections or pages, this could be abstracted out into a global components directory that exists in the root of the `app` directory.
- Services - this contains any api requests. If there were a use case of creating an Angular service, a separate directory could be created within the `services` directory to house those. Currently since there is only one api request, the api service file exists within the `services` directory.
- Utils - this directory only contains enums currently - something that was set up to contain validation messages. In the future, this could contain any type of reusable utility functions. This also contains the `checksums` file, where utility functions like a checksum, could be accessed from other components within the application.

## CSS
Currently all CSS, except for the policy table, is contained in the `styles.scss` file. These are global headings, color variables, vertical spacing, error and success message styles. This also includes breakpoints for responsive design. The `policy-table.scss` is specific to that component, however, as mentioned before, if this becomes a more global component, it can be abstracted out into a global components directory.


## Enhancements
Depending on the scalability of the application, feature flags for specific permission UI accessibility and environment variables could be used/added.




