# docspot
DocSpot is a full-stack doctor appointment booking web application built using the MERN stack . It allows patients to register, find doctors by specialization, and book appointments seamlessly, while doctors can manage their availability and admins can oversee platform activities. Designed to streamline healthcare access and improve user experience
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


# 🩺 DocSpot – A Seamless Doctor Appointment Booking App

DocSpot is a full-stack web application built using the MERN stack to simplify doctor appointment scheduling. It helps patients connect with trusted doctors, manage bookings efficiently, and provides admins with tools to maintain control over the system.

---

## ✅ Features

### 👤 User (Patient)
- 🔐 Sign up and log in securely
- 🔍 Browse doctors by specialization or name
- 📅 Book appointments based on doctor availability
- 🗓️ View upcoming and past appointments
- 🔔 Receive status updates (Pending, Approved, Rejected)

### 👨‍⚕️ Doctor
- 🔐 Doctor registration and login
- 📝 Create and manage profile (specialty, experience, etc.)
- 📥 View and respond to appointment requests
- ✔️ Approve or reject bookings
- ✏️ Update appointment status (Completed, Cancelled, etc.)

### 🛡️ Admin
- 🔐 Secure admin login
- ✅ Verify or reject doctor profiles
- 📋 View and manage all users and doctors
- 🚫 Block/unblock users or doctors
- 📊 Monitor all appointments in the system

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Axios
- Bootstrap / Tailwind CSS

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)

### Others:
- JWT (Authentication)
- Bcrypt.js (Password Hashing)
- Cloudinary (Optional - image handling)
- Postman (for API testing)

---

## 🌐 Live Demo

> 🔗 https://drive.google.com/file/d/1GGZiVJUmHw7-XH69VtVszrgRaRb3yV0Q/view?usp=drivesdk
> _Deploy your frontend on Vercel or Netlify and backend on Render or Railway._

---

## 📡 API Endpoints Overview

### Auth Routes
- `POST /api/user/signup` – User Registration  
- `POST /api/user/login` – User Login  

### Doctor Routes
- `POST /api/doctor/signup` – Doctor Registration  
- `GET /api/doctor/appointments` – Get Doctor Appointments  
- `PUT /api/doctor/appointment/:id` – Update Appointment Status  

### Admin Routes
- `GET /api/admin/doctors` – View All Doctors  
- `PUT /api/admin/verify-doctor/:id` – Verify/Reject Doctor  
- `GET /api/admin/users` – View All Users  

---

## 📚 What I Learned

- Built a full-stack MERN project from scratch
- Implemented secure JWT authentication with role-based access
- Designed RESTful APIs for user/doctor/admin flows
- Gained hands-on experience with MongoDB and Mongoose relationships
- Practiced UI design and state management in React

---

## 🚀 Future Enhancements

- 📩 Email/SMS notifications for booking updates
- 🔍 Advanced filters for doctor search
- 🧠 AI-based doctor recommendations (by rating/specialty)
- 📅 Calendar sync with Google Calendar
- 💬 Live chat between patient and doctor
- 📱 Fully mobile-optimized layout

---

## 📦 Folder Structure

```bash
DocSpot/
├── client/          # React frontend
├── server/          # Express backend
├── .env             # Environment variables
└── README.md
