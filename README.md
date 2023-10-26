# Forms for the European Small Claims Procedure

## Description

This repository contains the code of the four forms used in the European Small Claims Procedure. Each form has been developed as an Angular project and is available in two distinct versions:

- a single page application (SPA), which is contained within the folder bearing the form's name (e.g. `/form_a`);

- a page that integrates the application through the iframe element and contains a menu position at the top of the page, that allows the user to choose and change the language and is common to all four forms. This version is contained, within the `/iframes` folder, in the subfolder with the form's name (e.g. `/iframes/form_a`)

In addition to these folders, there is also a JavaScript file (`script.js`), which contains the simplification script.

## Prerequisites

To use one of the four SPAs available on your local system, you need:

- Node.js 18.13.0

- npm 8.3.1 as package manager

- Python

## Installation

To use one of the four SPAs available on your local system, you need to follow these steps:

1. Clone the repository on your local system

2. Open a terminal and navigate to the folder containing the Angular project (e.g. `/form_a`) and run the commands `npm install` and `npm start`. This will install all the dependencies and start the application.

3. Open a new terminal and run command `python3 -m http.server 3000` to start a local server on port 3000. This allows the application to access the simplification script.

4. Open the browser and navigate to:

   - `http://localhost:4200` to reach form A;
   - `http://localhost:4300` to reach form B;
   - `http://localhost:4400` to reach form C;
   - `http://localhost:4500` to reach form D.

In the case you want to use the second version, you need to follow these steps after having completed the previous ones:

1. Open a new terminal and run the command `python3 -m http.server 3500`

2. Open the browser and navigate to:

   - `http://localhost:3500/iframes/form_a` to reach form A;
   - `http://localhost:3500/iframes/form_b` to reach form B;
   - `http://localhost:3500/iframes/form_c` to reach form C;
   - `http://localhost:3500/iframes/form_d` to reach form D.
