# **Mountain Treks**

Mountain Treks is an eco-adventure booking platform that showcases various adventure experiences and allows users to explore detailed information about each. Users can log in, register, and update their profiles while enjoying a seamless and interactive interface.



## **Key Features**

1. **Single Column Layout:**
    - **Navbar:**
        - Displays website name, navigation links, user profile picture (if logged in), and Login/Logout buttons.
    - **Footer:**
        - Informative footer with essential links and social icons.
2. **Home Page:**
    - **Banner Section:**
        - A dynamic slider showcasing eco-adventure images.
    - **Adventure Experiences Section:**
        - Cards displaying adventure details (title, image, eco-friendly features, and an “Explore Now” button).
    - **Two Extra Sections:**
        - Designed for additional relevant content (customizable).
3. **Authentication:**
    - **Login:**
        - Form for logging in with email/password.
        - Google Social Login option.
        - Redirects users to their intended or home route upon success.
    - **Register:**
        - Form for new users with password validation.
        - Google Social Login option.
        - Navigates users to the home page upon success.
    - **Forgot Password:**
        - Users can reset passwords via email.
4. **Adventure Details Page (Private Route):**
    - Displays detailed information about a selected adventure.
    - Includes a "Talk with Expert" button:
        - Opens a Google Meet link if accessed between 10:00 AM - 8:00 PM.
        - Displays a consultation schedule modal if accessed outside these hours.
5. **User Profile (Private Route):**
    - Displays logged-in user details (image, name, email).
    - Includes an "Update" button to navigate to the profile update page.
6. **Error Handling:**
    - A 404 error page for invalid routes with a button to navigate back home.
7. **Dynamic Features:**
    - **Dynamic Titles:**
        - Page titles change dynamically based on routes.
    - **Animations:**
        - Smooth animations using `AOS` or `Animate.css`.

## **Technologies Used**

### **Frontend:**

- **React.js:** For building the application.
- **Tailwind CSS:** For responsive and modern UI design.
- **Swiper.js:** For creating a dynamic banner slider.
- **AOS/Animate.css:** For adding smooth animations.
- **React Router:** For navigation and routing.

### **Backend:**

- **Firebase Authentication:**
    - For user authentication (email/password and Google login).
    - Password reset functionality.

## **How It Works**

1. **Homepage:**
    - Displays a banner slider and adventure cards.
    - Clicking “Explore Now” redirects logged-in users to the adventure details page or non-logged-in users to the login page.
2. **Authentication:**
    - **Login:** Users log in using email/password or Google authentication.
    - **Register:** New users sign up with email/password, validated against specific criteria.
    - **Forgot Password:** Users reset their passwords via email.
3. **Adventure Details Page:**
    - Displays all adventure details dynamically based on the selected adventure.
    - Includes a "Talk with Expert" button for consultation.
4. **Private Routes:**
    - **Adventure Details** and **Profile pages** are only accessible to logged-in users.
