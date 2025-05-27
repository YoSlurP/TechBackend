# Tech Support – Under Development

This is the backend for the Tech Support website, developed in JavaScript. The goal of this project is to provide core backend functionalities such as data handling, API routes, and middleware.

## Purpose and Functionality

The main purpose is to communicate with the Tech Support frontend. It primarily handles the creation, management, and closure of support tickets. Additionally, it keeps track of Tech Support admins. When a new ticket is created, it is randomly assigned to one of the admins. Admins can then respond to the assigned tickets. All of this happens via API requests. The system supports updating the status of tickets and provides an easy way to handle questions and answers through API calls.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/YoSlurP/TechBackend.git
    ```

2. Navigate into the directory:
    ```bash
    cd TechBackend
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

## File Structure

- **controllers/**: Contains the application's controllers which handle business logic.
- **errors/**: Error-handling functions.
- **middlewares/**: Middleware layers such as authentication or logging.
- **routes/**: API routes of the application.
- **services/**: Services that support the business logic.

## Running

To run the application, use the following command:

```bash
npm start
```
## Database
![Database](https://github.com/YoSlurP/TechBackend/blob/main/Database%20diagram.png)
## C4 model of the backend
![C4 model](https://github.com/YoSlurP/TechBackend/blob/main/C4model.png)

