# 🛒 E-Commerce Product Landing Page

A modern, fully mobile-responsive product landing page built with **React**, **Tailwind CSS**, and containerized using **Docker**. Features interactive real-time category and price filtering with persistent user settings via custom React hooks.

---

## ✨ Features

- **Interactive Product Filtering:** Filter products dynamically by category and maximum price range in real-time.
- **State Persistence:** Custom `useLocalStorage` React hook preserves user filter selections even after browser refreshes.
- **Mobile Responsive Design:** Clean, modern layout constructed with Tailwind CSS that adapts seamlessly across mobile, tablet, and desktop viewports.
- **Modular Codebase:** Clean separation of concerns featuring reusable components (`Header`, `FilterSidebar`, `ProductGrid`, `ProductCard`), central mock data, and custom hooks.
- **Containerized Deployment:** Production-ready multi-stage Docker build served via Nginx for high performance and easy deployment.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **State Management:** Custom React Hooks (`useLocalStorage`)
- **Containerization & Web Server:** Docker, Docker Compose, Nginx

---

## 📁 Project Structure

```text
ecommerce-landing-page/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── FilterSidebar.jsx
│   │   ├── ProductGrid.jsx
│   │   └── ProductCard.jsx
│   ├── data/
│   │   └── products.js
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── Dockerfile
├── docker-compose.yml
├── README.md
└── package.json
