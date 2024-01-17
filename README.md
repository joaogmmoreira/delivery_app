# Delivery App

This project is a web application built using React.js. It appears to be an e-commerce platform with different user roles such as customer, seller, and admin. The application uses react-router-dom for routing.
The backend of this project is structured around a MSC architecture, where each controller handles a specific part of the application's functionality.

## Features

- **Login Page**: A page where users can enter their name and email to login.
- **Recipes Page**: A page that displays a list of food or drink recipes.
- **Recipe Details Page**: A page that shows the details of a specific recipe.
- **Profile Page**: A page that displays the user's profile information.
- **Favorite Recipes Page**: A page that shows the user's favorite recipes.
- **Done Recipes Page**: A page that shows the user's completed recipes.
- **Recipe In Progress Page**: A page that shows the current recipe the user is working on.

## Installation

Follow these steps to install and run the project:

Here are the steps to install and run both the frontend and backend of this project:

1. **Backend**

   1. **Clone the repository**

      First, you need to clone the repository to your local machine. You can do this using the following command in your terminal:
      `git clone https://github.com/joaogmmoreira/delivery_app.git`

   2. **Navigate to the backend directory**

      Use the following command to navigate into the backend directory:
      `cd back-end`

   3. **Install Node.js**

      This project requires Node.js version 16.0.0 or higher. If you don't have Node.js installed, you can download it from the official Node.js website.

   4. **Install the dependencies**

      The project dependencies are listed in the package.json file. You can install these dependencies using the following command:
      `npm install`

   5. **Set up the environment variables**

      This project uses environment variables stored in a `.env` file. You need to create this file in the root directory of the project and define the necessary variables. Refer to the `.env.example` file in the project to know which environment variables are needed.

   6. **Reset the database**

      This project uses Sequelize for database management. You can reset the database using the following command:
      `npm run db:reset`

   7. **Start the server**

      Finally, you can start the server using the following command:
      `npm start`
      For development purposes, you can use the following command to start the server with nodemon:
      `npm run dev`

      This will start the server and automatically restart it whenever you make changes to the code.

2. **Frontend**
   1. Navigate to the frontend directory: Use the following command to navigate into the frontend directory:
      `cd front-end`
      cd <frontend-directory>
   2. Install the dependencies: The project dependencies are listed in the package.json file. You can install these dependencies using the following command:
      Start the application: Finally, you can start the application using the following command:
      This will start the application and open it in your default web browser.

Please note that you need to replace <repository-url>, <backend-directory>, and <frontend-directory> with the actual URL of the repository and the names of the backend and frontend directories respectively.

## Usage

Once you have the project running, you can use it as follows:

1. **Login**
   Open your web browser and navigate to `http://localhost:3000`. You should see a login page. Enter your name and email to login.

2. **Browse Recipes**
   After logging in, you'll be taken to the recipes page. Here you can browse through a list of food or drink recipes.

3. **View Recipe Details**
   Click on a recipe to view its details. This includes the ingredients, instructions, and a video tutorial.

4. **Track Your Recipes**
   You can mark recipes as favorites or as completed. To do this, navigate to the recipe details page and click on the corresponding button.

5. **View Your Profile**  
   Click on the profile icon in the top right corner to view your profile. Here you can see your favorite and completed recipes.

Remember, this is a development server, so changes you make will not persist after the server is stopped.

## Contributing

This project was created for study purposes and is not currently accepting contributions. However, you're welcome to fork the repository and make changes for your own purposes. If you have any questions or feedback, feel free to open an issue.

## License

This project is currently not under any license

## Contact Information

[WebPage](https://www.joaomoreira.net/)
[Linkedin](https://www.linkedin.com/in/joao-moreira-dev/)

- João Moreira
  [joaogmmoreira](https://github.com/joaogmmoreira)

- Erik Yamamoto
  [erik-ymmt](https://github.com/erik-ymmt)

- João Gustavo
  [João Gustavo](https://github.com/Joaogustavo789)

- Silvério Moraes
  [Silverio Moraes](https://github.com/SilverioMoraes)

- Victor Yuri Tavares de Camargo
  [VictorYuriTC](https://github.com/VictorYuriTC)
