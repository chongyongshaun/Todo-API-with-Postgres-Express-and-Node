This project provides a RESTful API for managing a basic todo list. It utilizes Express.js for server-side routing and interaction with a PostgreSQL database.

Features

    Create new todo items
    Retrieve all existing todos
    Get a specific todo by its ID
    Update the description of a todo
    Delete a todo

Technologies

    Node.js
    Express.js
    PostgreSQL

Installation

    Clone the repository: git clone https://github.com/your-username/todo-api.git
    Navigate to the project directory: cd todo-api
    Install dependencies: npm install (or yarn install if using yarn)

Environment Variables

Create a .env file in the root directory with the following content, replacing the placeholders with your actual database credentials:

DB_USER=postgres
DB_PASSWORD=qwertyuiop
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=pernstack_db

Running the Application
node server.js

API Endpoints

    Create a Todo (POST /todos)
        Request Body:
        JSON

        {
          "description": "Your todo description"
        }
    Response:
        Success: {"message": "Todo was created!"}
        Error: Console logs the error message

Get All Todos (GET /todos)

    Response: An array of todo objects, each with todo_id and description properties.
    Error: Console logs the error message

Get a Todo by ID (GET /todos/:id)

    Path Parameter: id (the ID of the todo)
    Response:
        Success: The requested todo object
        Error: Console logs the error message

Update a Todo (PUT /todos/:id)

    Path Parameter: id (the ID of the todo)
    Request Body:
    JSON

    {
      "description": "The updated description"
    }

    Response:
        Success: {"message": "updated todo"}
        Error: Console logs the error message

Delete a Todo (DELETE /todos/:id)

    Path Parameter: id (the ID of the todo)
    Response:
        Success: {"message": "todo has been deleted"}
        Error: Console logs the error message
