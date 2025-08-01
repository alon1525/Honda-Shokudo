# Honda Shokudō - Restaurant Website 🍜

A responsive, multilingual restaurant website built for **Honda Shokudō**, a small local restaurant in Suwa, Japan. The site allows users to explore the atmosphere and **reserve tables** for lunch and dinner through a clean, mobile-friendly interface.

👉 **Live Preview**: [honda-shokudo.vercel.app](https://honda-shokudo.vercel.app)

> ⚠️ **Note**: The reservation system is still in development and not yet active.

---

## ✨ Features

- 📱 Fully responsive (desktop, tablet, mobile)
- 🌐 Language toggle (🇯🇵 Japanese / 🇺🇸 English)
- 📸 Photo gallery to showcase the food and location
- 🧑‍🍳 About section introducing the restaurant
- 📅 Reservation form with validation and availability checking
- 🔥 Integrated with Firebase Firestore for backend storage
- 🚀 Deployed with Vercel

---

## 🔧 Tech Stack

- **React.js** – Frontend framework
- **Firebase Firestore** – Stores reservation data
- **CSS** – Custom styling with responsive design
- **Swiper.js** – Carousel for customer reviews
- **Vercel** – For hosting and deployment

---

## 📁 Folder Overview
/public
└─ index.html
/src
├─ /components
├─ /images
├─ App.js
├─ index.js
└─ firebase.js

Reservations (WIP)
Table reservation logic includes:

Automatic seat/table assignment

Capacity tracking by time slot

Firestore-based booking system

🚫 Currently inactive: form submissions won't go through until the backend is finalized.

🌍 Languages
The interface supports:

🇯🇵 Japanese (日本語)

🇺🇸 English (EN)

Users can toggle language via a simple context-based switch.


🧑‍💻 Author
Developed by Alon Krumer for a friend’s restaurant in Japan.
Made with ❤️ and React.
