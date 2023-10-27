# Forms for the European Small Claims Procedure

## Description

This repository contains the code of the four forms used in the European Small Claims Procedure. Each form has been developed as an Angular project and is available in two distinct versions:

- a single page application (SPA), which is contained within the folder bearing the form's name (e.g. `/form_a`);

- a page that integrates the application through the iframe element and contains a menu position at the top of the page, that allows the user to choose and change the language and is common to all four forms. This version is contained, within the `/iframes` folder, in the subfolder with the form's name (e.g. `/iframes/form_a`)

In addition to these folders, there is also a JavaScript file (`script.js`), which contains the simplification script.

## Prerequisites

To use one of the four SPAs available on your local system, you need:

- Node.js 18.13.0;

- npm 8.3.1 as package manager;

- Python, which is used to start two distinct local servers, one to make the semplication script available (port 3000) and the other to make the second version of each form reachable (port 3500).

## Installation

To use one of the four SPAs available on your local system, you need to follow these steps:

1. clone the repository on your local system or download the repository as a zip file and extract it;

2. open a terminal and navigate to the folder containing one of the Angular projects (for example if you would like to use Form A, you have to run the command `cd form_a`) and run the commands `npm install` and `npm start`. This will install all the dependencies and start the application;

3. open a new terminal and run the command `python -m http.server 3000` or `python3 -m http.server 3000` (depending on the operating system and the version of Python in use) to start a local server on port 3000. This will allow the application to access the simplification script;

4. open the browser and navigate to:

   - [http://localhost:4200](http://localhost:4200) to reach Form A;
   - [http://localhost:4300](http://localhost:4300) to reach Form B;
   - [http://localhost:4400](http://localhost:4400) to reach Form C;
   - [http://localhost:4500](http://localhost:4500) to reach Form D.

In the case you would like to use the second version, you need to follow these steps after having completed the previous ones:

1. open a new terminal and run the command `python -m http.server 3500` or `python3 -m http.server 3500` (depending on the operating system and the version of Python in use);

2. open the browser and navigate to:

   - [http://localhost:3500/iframes/form_a](http://localhost:3500/iframes/form_a) to reach Form A;
   - [http://localhost:3500/iframes/form_b](http://localhost:3500/iframes/form_b) to reach Form B;
   - [http://localhost:3500/iframes/form_c](http://localhost:3500/iframes/form_c) to reach Form C;
   - [http://localhost:3500/iframes/form_d](http://localhost:3500/iframes/form_d) to reach Form D.
