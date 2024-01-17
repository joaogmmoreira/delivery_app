# Delivery App

This project is a comprehensive web application designed to facilitate the process of online food ordering and delivery. It is built using React.js for the frontend and Node.js for the backend, providing a full-stack solution for an e-commerce platform.

The application supports different user roles, including customers, sellers, and administrators, each with their own unique functionalities and views. This allows for a wide range of interactions and transactions within the platform, from placing and managing orders to overseeing the entire operation.

Frontend
The frontend of the application is built with React.js, a popular JavaScript library for building user interfaces. It uses react-router-dom for routing, allowing for seamless navigation between different components and views.

Backend
The backend of the application is structured around a Model-Service-Controller (MSC) architecture. Each controller handles a specific part of the application's functionality, ensuring a clean and organized codebase. The backend handles tasks such as user authentication, data management, and server responses.

The backend also interacts with a database to store and retrieve data. This includes user information, product details, order statuses, and more. The backend uses Sequelize, a promise-based Node.js ORM, for easy data manipulation and query execution.

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

      ```bash
      git clone https://github.com/joaogmmoreira/delivery_app.git
      ```

   2. **Navigate to the backend directory**

      Use the following command to navigate into the backend directory:

      ```bash
      cd back-end
      ```

   3. **Install Node.js**

      This project requires Node.js version 16.0.0 or higher. If you don't have Node.js installed, you can download it from the official Node.js website.

   4. **Install the dependencies**

      The project dependencies are listed in the package.json file. You can install these dependencies using the following command:

      ```bash
      npm install
      ```

   5. **Set up the environment variables**

      This project uses environment variables stored in a `.env` file. You need to create this file in the root directory of the project and define the necessary variables. Refer to the `.env.example` file in the project to know which environment variables are needed.

   6. **Reset the database**

      This project uses Sequelize for database management. You can reset the database using the following command:

      ```bash
      npm run db:reset
      ```

   7. **Start the server**

      Finally, you can start the server using the following command:

      ```bash
      npm start
      ```

      For development purposes, you can use the following command to start the server with nodemon:

      ```bash
      npm run dev
      ```

      This will start the server and automatically restart it whenever you make changes to the code.

2. **Frontend**

   1. **Navigate to the frontend directory**

      Use the following command to navigate into the frontend directory:

   ```bash
   cd front-end
   ```

   2. **Install the dependencies**

      The project dependencies are listed in the package.json file. You can install these dependencies using the following command:

      ```bash
      npm install
      ```

   3. **Start the application**

      Finally, you can start the application using the following command:

      ```bash
      npm start
      ```

      This will start the application and open it in your default web browser.

## Usage

Once both the server and the application are running, you can access the application in your web browser at http://localhost:3000 (or whatever port you have configured).

The application includes several pages, each with its own route:

1. **Home Page** (/index): The landing page of the application where users are introduced to the platform.
2. **Login Page** (/login): A page for users to log into their accounts.
3. **Products Page** (/customer/products): A page where customers can view the list of products available for purchase.
4. **Register Page** (/register): A page for new users to create an account.
5. **Seller Orders Page** (/seller/orders): A page where sellers can view all their orders.
6. **Order Details Page** (/seller/orders/:id): A page where sellers can view the details of a specific order.
7. **Admin Page** (/admin/manage): A page where admins can manage the platform.
8. **Checkout Page** (/customer/checkout): A page where customers can finalize their purchases and proceed to payment.
9. **Customer Order Details Page** (/customer/orders/:id): A page where customers can view the details of a specific order.
10. **Customer Page** (/customer/orders): A page where customers can view all their orders.

You can navigate to these pages by appending the route to the base URL. For example, to access the Products Page, you would go to `http://localhost:3000/customer/products.`

Please note that some pages may require you to be logged in, and some may require you to have a specific user role (such as admin or seller).

## Contributing

This project was created for study purposes and is not currently accepting contributions. However, you're welcome to fork the repository and make changes for your own purposes. If you have any questions or feedback, feel free to open an issue.

## License

This project is currently not under any license

## Authors

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

## Contact Information

[WebPage](https://www.joaomoreira.net/)
[Linkedin](https://www.linkedin.com/in/joao-moreira-dev/)
