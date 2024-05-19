# Secure Password Generator with Auth0 Authentication
A React-based web application for secure password generation with user authentication using Auth0. This project includes functionality for user registration, login, logout, and password generation with options for including numbers and symbols.


# name - DILSHAN M.A.D.A.
# IT number - IT21155116



# Description
This project is a secure password generator and authentication system using React and Auth0. It allows users to register, log in, and generate secure passwords with customizable length and character types. The application ensures that only authenticated users can access the password generation functionality.

# Features
User registration with form validation
User login and logout using Auth0
Secure password generation with customizable length and character types
Responsive design
Technologies Used
React
Auth0 for authentication
Axios for API requests
FontAwesome for icons

# Usage
Registration:

Users can register by filling out the registration form with a valid username and password.

# Login:

Users can log in using the Auth0 authentication system.

# Password Generation:

Users can generate a secure password by specifying the length and whether to include numbers and symbols.

# Authentication
This project uses Auth0 for authentication. Follow these steps to set up Auth0:

Go to the Auth0 website and create an account.
Create a new application in your Auth0 dashboard.
Copy the domain and client ID from your Auth0 application settings.
Add these values to your .env file as shown in the Setup and Installation section.


# Components
LoginButton.js: Handles user login using Auth0.
LogoutButton.js: Handles user logout using Auth0.
Form.js: Generates secure passwords based on user inputs.
form.utils.js: Contains utility functions for password generation.
App.js: The main application component that ties everything together.
Register.js: Handles user registration with form validation.

# Acknowledgements
Thanks to Auth0 for providing the authentication solution.
Thanks to the React community for their valuable resources and support.


