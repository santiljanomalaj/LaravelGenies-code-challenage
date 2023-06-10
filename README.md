# Laravel - Backend

This guide provides step-by-step instructions for installing Laravel, a PHP web application framework, on your local machine.

## Installation

- **git clone**
- **Once the project is created, navigate to its directory using the cd command:**

```bash
cd <project-name>
```
- **Next, run the following command to start the development server:**
```
php artisan serve
```
- **Finally, open your web browser and go to http://localhost:8000 to see your Laravel application in action!
## Configuration
 To use MySQL, update the DB_* variables in the .env file to match your MySQL database credentials:

```notepad
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=my_database
DB_USERNAME=my_username
DB_PASSWORD=my_password
```

## Conclusion

Congratulations! You have successfully installed Laravel on your local machine. Now you can start building your own web applications using this powerful PHP framework.

# React-Frontend

This project was bootstrapped with Create React App.
## Available Scripts

In the project directory, you can run:

```bash
npm start
```
Runs the app in the development mode.

Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

```bash
npm test
```
Launches the test runner in the interactive watch mode.

See the section about running tests for more information.

```bash
npm run build
```
Builds the app for production to the build folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about deployment for more information.

```bash
npm run eject
```

Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the default configuration of Create React App, you can eject at any time. This command will remove the single build dependency from your project and copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature.

