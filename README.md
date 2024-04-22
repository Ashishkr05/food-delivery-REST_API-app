# Food Delivery Backend App

This project is a REST API backend for a food delivery app developed using Node.js. It focuses on a dynamic pricing module to calculate the total cost of food delivery based on various factors such as distance and item type.

## Key Features

- **Dynamic Pricing Module**: Calculates delivery costs for different types of food items across various zones based on distance and item type.
- **Database Relations**: Includes Organization, Item, and Pricing tables linked to define pricing structures based on zone and item type.
- **Price Calculation**: Implemented as a service object to calculate prices in cents to avoid decimal issues.
- **Coding Standards**: Follows recognized linting standards (e.g., Airbnb's style guide).

## Database Schema

This project uses PostgreSQL for the database. The schema includes the following tables:

- Organization: Stores information about organizations providing food delivery services.
- Item: Represents different types of food items.
- Pricing: Defines pricing structures based on zone, item type, and distance.

## Technical Specifications

- **API Request and Response Format**: Requests include zone, organization ID, total distance, and item type. Responses contain the total price for the delivery.
- **API Documentation**: Detailing endpoints, request/response formats, and error handling.
- **Error Handling**: Implemented robust error handling and input validation.
- **Setup Guide**: Instructions for setting up the project and database locally.

## Usage

1. Clone the repository: `git clone <https://github.com/Ashishkr05/food-delivery-REST_API-app>`
2. Install dependencies: `npm install`
3. Set up PostgreSQL and configure the database connection in `config.js`.
4. Run the application: `npm start`
5. Access the API endpoints using tools like Postman or through your frontend application.



