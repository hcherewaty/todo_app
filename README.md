# Todo App
A simple to do app built with node and mondoDB.

### Links and Resources
* [repo](https://github.com/hcherewaty/API-Server)

### Modules
#### `index.js`

### Setup
#### `.env` requirements
* `PORT` - Defined in ENV.
* `MONGODB_URI` - Defined in ENV.

##### Exported Values and Methods
* Connection to server established from `index.js`.
* Connection to MongoDB established from `models/index.js`.
* Routes to defined in `routes/todos.js`.
* Schemas defined in `models/todo.js`.  

#### Running the app
* After cloning this repo, `npm i` to install dependencies
* `nodemon`
* Endpoint: `localhost://<PORT#>`
  * Renders Todo app. 
* Endpoint (get): `/api/todos`
  * Returns all stored todos in json.
* Endpoint (post): `/api/todos`
  * Returns created todo in json.
* Endpoint (get): `/api/todos/:id`
  * Returns todo by id in json.
* Endpoint (put): `/api/todos/:id`
  * Updates todo by id in json.
* Endpoint (delete): `/api/todos/:id`
  * Deletes todo by id.
 
#### Tests
 -- In Progress --