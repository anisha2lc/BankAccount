# Banking App

This application simulates a basic banking system which uses localstorage for storing data. It allows users to view their account balance, and perform deposit and withdrawal transactions. The main purpose of the app is to provide a simple and user-friendly interface for managing a bank account. The application is successfully setup for testing using jest and react-testing-library.

### Account Creation
Allows users to create a new bank account with their name, email, and initial deposit. To create the account user needs to feel required information in the form.

### Sign In
Allows users to enter the app after validating the credentials and check if the user's credential exists.

### Balance Inquiry
Displays the current account balance in the dashboard after user signs in to the app.

### Deposit
There is deposit page where users can deposit funds into their account.

### Withdrawal
There is deposit page where users can withdraw amount, with validation against their current balance.


## How can we install the application? - Step by Step Guide

1. Clone using the following repo link

   ```md
   git clone https://github.com/anisha2lc/Banking-App.git for https.

   git clone "git@github.com:anisha2lc/Banking-App.git" for ssh.
   
   ```

2. Go to the project folder

   ```md
   cd banking-app
   ```

## How can we run the project?

First you can enter the following command to install required packages and dependencies used in the app
   ```md
   npm install
   ```

Then, you can run:

   ```md
   npm run dev
   ```

Runs the app in the development mode.
 Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

You may also see any lint errors in the console.

## Important message for developer

Make sure to clear you localstorage if any redux data is already present.

## What are libraries and stack used within the application?

- **React:** For building dynamic user interfaces.
- **Redux toolkit:** For storing and persisting data in local storage. 
- **Routing:** Utilize react-router-dom for navigation.
- **Axios:** For fetching data from API.
- **Jest:** For testing.
- **Styling:** Tailwind ensures responsive designs.
- **Icons:** Integrate React-Icon for customizable icons.
- **Linting & Formatting:** eslint.
- **CSS Enhancement:** Leverage Sass for powerful styling.
- **bcryptjs:** For hashing the password.
- **qrcode.react:** For qr generation.


