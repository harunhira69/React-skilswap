# 🎓 SkillSwap

**🌐 Live Project:** [https://react-skilswap.web.app](https://react-skilswap.web.app)

---

## 🪄 Overview

**SkillSwap** is an interactive learning and teaching platform built using **React** and **Firebase**.  
It connects learners with skill providers — allowing users to **browse**, **book**, and **learn** through an engaging, responsive, and secure web experience.

The platform supports user authentication, personalized dashboards, protected routes, and stunning animations — making learning both simple and enjoyable.

---

## 🚀 Purpose

The main purpose of **SkillSwap** is to empower people to share and gain skills within their community by offering a user-friendly platform to:
- **Learn** something new from local or global mentors.  
- **Teach** and share one’s own expertise.  
- **Collaborate** and grow together.

---

## 💡 Key Features

### 🔐 Authentication & User Management
- **Email/Password Registration & Login**
- **Google Sign-In Integration**
- **Update Profile (Name & Photo)**
- **Password Reset via Email**
- **Logout Functionality**

### 🛡️ Private & Protected Routes
- Only authenticated users can access certain pages.  
- Redirects unauthorized users to the login page.

### 🧭 Skill & Provider Features
- Dynamic skill cards loaded from JSON data.
- Each skill includes an image, provider details, price, rating, and description.
- Filtered display of **Top 3 Providers** by rating.

### 🧩 UI & UX Enhancements
- **Hero Slider:** Built with **Swiper.js** for a smooth and interactive banner.
- **How It Works Section:** Simple step-by-step guide with icons.
- **Responsive Design:** Powered by **TailwindCSS** for all screen sizes.
- **Animations:** Integrated **AOS (Animate On Scroll)** for smooth visual transitions.
- **Toast Alerts:** Real-time notifications using **React Toastify**.
- **Icons:** Clean and meaningful visuals via **React Icons**.
- **Global Loader:** Displays loading animation while fetching or verifying data.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js** | Component-based frontend framework |
| **Firebase Authentication** | Secure login, sign-up, and profile management |
| **React Router** | Client-side routing & protected routes |
| **Context API** | Global state management for authentication |
| **TailwindCSS** | Styling & responsive design |
| **AOS (Animate On Scroll)** | Smooth scroll-based animations |
| **Swiper.js** | Interactive hero slider |
| **React Toastify** | Toast notifications |
| **React Icons** | Icon components for UI enhancement |

---

## 📦 NPM Packages Used

```bash
npm install react-router-dom
npm install firebase
npm install aos
npm install react-icons
npm install swiper
npm install react-toastify
npm install tailwindcss
