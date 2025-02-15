# MERN CRUD Application with Location Fetching

This is a full-stack CRUD (Create, Read, Update, Delete) web application built with **React.js**, **Node.js**, and **MongoDB**. The application allows users to manage their data and displays the user's current location (city, country, and pincode) in the footer.

---

## Features

✅ User Management (CRUD Operations) ✅ Fetch and display the user's current location ✅ Responsive UI with modern styling ✅ MongoDB database integration ✅ RESTful API with Express.js

---

## Technologies Used

### **Frontend:**

- React.js
- Axios
- CSS

### **Backend:**

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

## Installation and Setup

### **1. Clone the Repository**

```sh
git clone https://github.com/your-username/project-name.git
cd project-name
```

### **2. Install Dependencies**

#### **Backend:**

```sh
cd backend
npm install
```

#### **Frontend:**

```sh
cd frontend
npm install
```

### **3. Set Up Environment Variables**

Create a `.env` file inside the `backend` folder and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### **4. Start the Backend Server**

```sh
cd backend
npm start
```

### **5. Start the Frontend**

```sh
cd frontend
npm start
```

The application will run at `http://localhost:3000`.

---

## API Endpoints

### **User Routes**

| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| GET    | /api/users      | Get all users       |
| POST   | /api/users      | Add a new user      |
| PUT    | /api/users/\:id | Update user details |
| DELETE | /api/users/\:id | Delete a user       |

---

## Location Fetching

The app uses the **Geolocation API** to get the user's latitude and longitude, then fetches location details from the following API:

```
https://maps.devsecit.com/introduce?lat=latitude&lon=longitude
```

---

## Project Structure

```
📂 project-name
 ├── 📂 backend
 │   ├── 📂 models
 │   ├── 📂 routes
 │   ├── index.js
 │   ├── .env
 │   ├── package.json
 │
 ├── 📂 frontend
 │   ├── 📂 components
 │   ├── 📂 pages
 │   ├── src/App.js
 │   ├── src/index.js
 │   ├── src/styles.css
 │   ├── package.json
 │
 ├── README.md
```

---

## Contributing

Feel free to fork this repository and contribute to its improvement! 🚀

---

## License

This project is licensed under the **MIT License**.

---

## Contact

For any queries, reach out at: [your-email@example.com](mailto\:your-email@example.com)

