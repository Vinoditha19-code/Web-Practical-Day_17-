# Web-Practical-Day_17-

01. errorHandle:
 The errorHandle function is a centralized Express middleware used to catch and handle errors that occur during the request-response cycle. By placing it at the end of all route handlers, it ensures that any unhandled exceptions or errors are properly captured and returned to the client with a meaningful message and HTTP status code. This improves the reliability, security, and maintainability of the application.

02. models:
* Project:
    This schema defines a Project model where each project has a name, an optional description, and is associated with a required manager referenced from the User collection.

* Task:
This schema defines a Task model where each task has a title, optional description, belongs to a specific project, is assigned to a user, and may have a due date.

* User:
 This schema defines a User model where each user must have a name, a unique email, and a password. It's used to manage authentication and user-related data in the application.

03. Routes:
* ProjectRoute:
*This Express route handles GET requests to fetch all projects from the database. It uses Mongoose to query the Project model and returns the results in JSON format. If no data is found, it responds with a 404 status; if an error occurs, it returns a 500 status with a server error

* UserRoute:
 This Express route is designed to handle GET requests for retrieving all user records from the MongoDB database. It uses Mongoose's User.find() method to fetch the data. If users exist, it returns them with a 200 status code in JSON format. If no users are found, it responds with a 404 error, and for any server-side errors, it returns a 500 status with an appropriate error message.

*TaskRoute:
This Express route handles GET requests to retrieve all tasks from the MongoDB database using Mongoose's Task.find() method. If tasks are found, they are returned as a JSON response with a 200 OK status. If no data is found, it sends a 404 Not Found message. Any server-side errors during the request are caught and returned with a 500 Internal Server Error status.

![Screenshot 2025-06-02 100716](https://github.com/user-attachments/assets/4b155e71-bbc6-453f-8dfa-f3c345c0ee79)

![Screenshot 2025-06-02 100704](https://github.com/user-attachments/assets/eea3ec90-7109-40d0-a5b6-a85dd4fb0428)

![Screenshot 2025-06-02 100623](https://github.com/user-attachments/assets/8a4f758b-be51-4f9e-8ade-633115127e47)

![Screenshot 2025-06-02 100555](https://github.com/user-attachments/assets/40435956-79d5-47f6-88db-8093ec07c909)

![Postman User](https://github.com/user-attachments/assets/f15d8506-a497-4dc7-a806-57e4b44ac791)

![Postman task](https://github.com/user-attachments/assets/37d16dba-ae99-44d6-870e-aa8727c6f40d)

![postman Project](https://github.com/user-attachments/assets/19ef1985-c6c1-4860-bcd5-8852659972e2)

![connected](https://github.com/user-attachments/assets/fd3df734-047c-415a-a396-2d92686f3bef)

 * message.

    
