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

## Application purpose
Per the user story context: Kin has just recently purchased a machine to assist in reading policy report documents. The machine scans the paper documents for policy numbers, and produces a csv file containing all the policy numbers. Your first task is to build a user interface that allows a person to upload the csv file from the ingenious machine into the browser, read each policy number into an array that is displayed in a table.   The upload input should validate the file is a csv file type and it is no larger than 2 mb. 

The policy numbers must be validated to match the checksum or formula that meets the requirements for a standard policy. You will find this function in the `/src/app/utils` directory. 

Furthermore, once their csv is uploaded the policies are displayed in a table, the user then can submit these policies to an API endpoint. If the `post` request is successful, it will return a success in the response header and the response will contain an `id` which then is displayed to the user in a success message.

## Architecture Outline
- Sections - contains sections or pages of the application. This will allow it to be scalable.
  - OCR Dashboard - this section contains the functionality for the UI based on the following requirements: "Kin has just recently purchased a machine to assist in reading policy report documents. The machine scans the paper documents for policy numbers, and produces a csv file containing all the policy numbers."
      - Components - this directory contains components specifically related to the OCR dashboard, like the `policy-table`. If in the future a component like a table were to be used in multiple sections or pages, this could be abstracted out into a global components directory that exists in the root of the `app` directory.
- Services - this contains any API requests. If there were a use case of creating an Angular service, a separate directory could be created within the `services` directory to house those. Currently since there is only one API request, the API service file exists within the `services` directory.
- Utils - this directory only contains enums currently - something that was set up to contain validation messages. In the future, this could contain any type of reusable utility functions. This also contains the `checksums` file, where utility functions like a checksum, could be accessed from other components within the application.

## CSS
Currently all CSS, except for the policy table, is contained in the `styles.scss` file. These are global headings, color variables, vertical spacing, error and success message styles. This also includes breakpoints for responsive design. The `policy-table.scss` is specific to that component, however, as mentioned before, if this becomes a more global component, it can be abstracted out into a global components directory.

## Enhancements
Depending on the scalability of the application, feature flags for specific permissions or accessing specific parts of the UI could be added as well as environment variables or a system for adding and using API endpoints.

## Accessibility Smoke Test
Although there aren't any accessibility requirements, it's helpful to use semantic HTML and do a quick smoke test to check for accessibility compliance. Further functionality can be incorporated if deemed a requirement within the project.

This is a quick set of manual tests to perform prior to submitting a pull request. The tests should be time-boxed to 5 minutes and focused on the code that is up for review / deployment, not necessarily the whole page/screen (though the free version of aXe will run on the whole page).

1. **All interactive elements are navigable by keyboard and have clearly visible keyboard focus.** Reference the Webaim Form Examples or the WAI-Design Patterns for expected keyboard navigation for a component (note that the "menu" pattern is not meant for web).

2. **No information or functionality is lost when zooming up to 400% in a 1280x1040 window.** Verify that there are no layout issues at every step between 100% and 400%.

3. **The aXe browser plugin did not find any automated issues.** For our purposes, turn off "Enable Best Practices" in Settings > General. After running a scan, no need to look at "Guided Issues" either. Axe is checking for invalid code, so you may occasionally be breaking the rules in order to fix something, which is OK and can be ignored.

4. **All elements are navigable by a screen reader.** Utilize either NVDA in Chrome/Firefox (Windows) or Voiceover in Safari (macOS) with standard screen reader navigation via arrow keys: down in NVDA, ctrl+option+right/left in Voiceover. Elements should be described in a way that includes any important visuals or labels, and any relevant states such as expanded/collapsed or checked/unchecked.

5. **Form labels and errors are announced when using the tab keys to fill out and submit a form using a screen reader.** Utilize either NVDA or Voiceover with "Forms Mode" navigation via tab key: tab through every form field including the submit button. NVDA should change modes automatically when entering and exiting a form, indicated by a sound. VO does not have a Forms Mode but should still perform as if it does; all elements and information in the form should be announced using only the tab key.


