# ⛰️ Mountain Treks

Mountain Treks is an eco-adventure booking platform that allows users to explore and book adventure experiences seamlessly. It offers a user-friendly interface, authentication, and detailed adventure listings.

![Mountain Treks](https://i.ibb.co.com/FbjP2dVS/image.png)

## 🌐 Live Demo  
🔗 **Live Site:** [Mountain Treks](https://stalwart-naiad-1fa745.netlify.app/)

---

## 📌 Table of Contents

- [🚀 Features](#-features)
- [🛠 Technologies Used](#-technologies-used)
- [📥 Installation](#-installation)
- [📦 Dependencies](#-dependencies)
- [📖 Usage](#-usage)
- [🔑 Admin Credentials](#-admin-credentials)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🚀 Features

✅ **Single Column Layout**  
   - **Navbar:** Displays website name, navigation links, user profile (if logged in), and login/logout options.  
   - **Footer:** Contains useful links and social icons.  

✅ **Home Page**  
   - **Banner Section:** Dynamic image slider showcasing eco-adventures.  
   - **Adventure Listings:** Cards displaying adventure details with an “Explore Now” button.  
   - **Extra Sections:** Additional customizable content.  

✅ **Authentication System**  
   - **Login/Register:** Email/password authentication and Google Sign-In.  
   - **Password Reset:** Users can reset their passwords via email.  

✅ **Adventure Details Page (Private Route)**  
   - Displays complete adventure information.  
   - "Talk with Expert" button connects to Google Meet (available from 10 AM - 8 PM).  

✅ **User Profile (Private Route)**  
   - Shows user details with an "Update" button.  

✅ **Error Handling**  
   - Custom 404 page with navigation options.  

✅ **Dynamic Enhancements**  
   - Dynamic page titles and animations using AOS/Animate.css.  

---

## 🛠 Technologies Used

### **Frontend:**
- **React.js** – Frontend framework  
- **Tailwind CSS** – Responsive and modern UI design  
- **Swiper.js** – Dynamic banner slider  
- **AOS / Animate.css** – Smooth animations  
- **React Router** – Navigation and routing  

### **Backend:**
- **Firebase Authentication** – User authentication (email/password and Google login)  

---

## 📥 Installation

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/mountain-treks.git
cd mountain-treks
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Start the Development Server**
```sh
npm run dev
```
The app should now be running at `http://localhost:3000/`

### **4️⃣ Set Up Firebase Authentication**
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)  
- Enable **Email/Password Authentication** and **Google Sign-In**  
- Get your Firebase config and add it to `.env`:
  ```env
  REACT_APP_FIREBASE_API_KEY=your_api_key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
  REACT_APP_FIREBASE_PROJECT_ID=your_project_id
  ```

---

## 📦 Dependencies

```json
{
  "react": "^18.0.0",
  "react-router-dom": "^6.0.0",
  "tailwindcss": "^3.0.0",
  "firebase": "^9.0.0",
  "swiper": "^8.0.0",
  "aos": "^2.3.4"
}
```

---

## 📖 Usage

1. **Homepage:**  
   - Displays a banner slider and adventure cards.  
   - Clicking “Explore Now” redirects logged-in users to the adventure details page.  
   - Non-logged-in users are prompted to log in first.  

2. **Authentication:**  
   - **Login:** Users log in using email/password or Google authentication.  
   - **Register:** New users sign up with email/password, validated against specific criteria.  
   - **Forgot Password:** Users reset their passwords via email.  

3. **Adventure Details Page:**  
   - Displays adventure details dynamically based on the selected experience.  
   - Includes a "Talk with Expert" button for consultation via Google Meet.  

4. **Private Routes:**  
   - Users need to be logged in to access adventure details and profile pages.  




---


Enjoy your adventure with **Mountain Treks**! 🚀🌿
