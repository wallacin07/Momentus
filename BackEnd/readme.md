Comando para criar usuario e banco no Mysql

CREATE USER 'juan'@'localhost' IDENTIFIED BY 'juan';
GRANT ALL PRIVILEGES ON * . * TO 'juan'@'localhost';
create database juan;

# Momentus Backend API

This is the backend API for the Momentus project. Below is a list of all available routes, their parameters, and responses.

---

## **Index Routes (`/`)**
### **GET `/`**
- **Description**: Renders the home page.
- **Parameters**: None
- **Response**: `{ title: "Express" }`

---

## **Ceremonialist Routes (`/ceremonialist`)**
### **POST `/ceremonialist`**
- **Description**: Creates a new ceremonialist.
- **Body Parameters**:
  - `name` (string)
  - `email` (string)
  - `password` (string)
- **Response**: Newly created ceremonialist object.

### **GET `/ceremonialist`**
- **Description**: Retrieves all cerimonialists.
- **Response**: List of cerimonialists.

### **GET `/ceremonialist/:id`**
- **Description**: Retrieves a ceremonialist by ID.
- **Path Parameters**:
  - `id` (integer)
- **Response**: Ceremonialist object.

### **POST `/ceremonialist/login`**
- **Description**: Authenticates a ceremonialist.
- **Body Parameters**:
  - `email` (string)
  - `password` (string)
- **Response**: Authentication token.

### **GET `/ceremonialist/verifyToken`**
- **Description**: Verifies the authentication token.
- **Headers**:
  - `Authorization` (string)
- **Response**: Token verification status.

---

## **Client Routes (`/client`)**
### **POST `/client`**
- **Description**: Creates a new client.
- **Body Parameters**:
  - `name` (string)
  - `email` (string)
  - `password` (string)
  - `CPF` (string)
  - `birthDate` (date)
  - `address` (string)
  - `number` (string)
  - `ceremonialistId` (integer)
- **Response**: Newly created client object.

### **GET `/client`**
- **Description**: Retrieves all clients.
- **Response**: List of clients.

### **GET `/client/:id`**
- **Description**: Retrieves a client by ID.
- **Path Parameters**:
  - `id` (integer)
- **Response**: Client object.

### **POST `/client/login`**
- **Description**: Authenticates a client.
- **Body Parameters**:
  - `email` (string)
  - `password` (string)
- **Response**: Authentication token.

### **GET `/client/verifyToken`**
- **Description**: Verifies the authentication token.
- **Headers**:
  - `Authorization` (string)
- **Response**: Token verification status.

---

## **Supplier Routes (`/supplier`)**
### **POST `/supplier`**
- **Description**: Creates a new supplier.
- **Body Parameters**:
  - `name` (string)
  - `email` (string)
- **Response**: Newly created supplier object.

### **GET `/supplier`**
- **Description**: Retrieves all suppliers.
- **Response**: List of suppliers.

### **GET `/supplier/:id`**
- **Description**: Retrieves a supplier by ID.
- **Path Parameters**:
  - `id` (integer)
- **Response**: Supplier object.

### **PUT `/supplier/update`**
- **Description**: Updates a supplier.
- **Body Parameters**:
  - `id` (integer)
  - `name` (string)
  - `email` (string)
- **Response**: Updated supplier object.

### **GET `/supplier/verifyToken`**
- **Description**: Verifies the authentication token.
- **Headers**:
  - `Authorization` (string)
- **Response**: Token verification status.

---

## **Task Routes (`/task`)**
### **POST `/task`**
- **Description**: Creates a new task.
- **Body Parameters**:
  - `title` (string)
  - `description` (string)
  - `eventId` (integer)
- **Response**: Newly created task object.

### **GET `/task`**
- **Description**: Retrieves all tasks.
- **Response**: List of tasks.

### **GET `/task/:id`**
- **Description**: Retrieves a task by ID.
- **Path Parameters**:
  - `id` (integer)
- **Response**: Task object.

### **PUT `/task/update`**
- **Description**: Updates a task.
- **Body Parameters**:
  - `id` (integer)
  - `title` (string)
  - `description` (string)
- **Response**: Updated task object.

---

## **Event Routes (`/event`)**
### **POST `/event`**
- **Description**: Creates a new event.
- **Body Parameters**:
  - `name` (string)
  - `date` (date)
  - `clientId` (integer)
  - `ceremonialistId` (integer)
- **Response**: Newly created event object.

### **GET `/event`**
- **Description**: Retrieves all events.
- **Response**: List of events.

### **GET `/event/:id`**
- **Description**: Retrieves an event by ID.
- **Path Parameters**:
  - `id` (integer)
- **Response**: Event object.

### **PUT `/event/:id`**
- **Description**: Updates an event.
- **Body Parameters**:
  - `name` (string)
  - `date` (date)
- **Response**: Updated event object.

---

## **Deliveres Routes (`/deliveres`)**
### **POST `/deliveres`**
- **Description**: Creates a new delivery.
- **Body Parameters**:
  - `supplierId` (integer)
  - `eventId` (integer)
  - `description` (string)
- **Response**: Newly created delivery object.

### **GET `/deliveres`**
- **Description**: Retrieves all deliveries.
- **Response**: List of deliveries.

### **GET `/deliveres/:id`**
- **Description**: Retrieves a delivery by ID.
- **Path Parameters**:
  - `id` (integer)
- **Response**: Delivery object.

### **PUT `/deliveres/:id`**
- **Description**: Updates a delivery.
- **Body Parameters**:
  - `description` (string)
- **Response**: Updated delivery object.

---

## **Authentication**
- **All routes requiring authentication must include the `Authorization` header with a valid token.**

---