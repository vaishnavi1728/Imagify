# 🖼️ AI SaaS Platform – Text-to-Image Generator (MERN + ClipDrop + Razorpay)

This project is a **full-stack AI SaaS platform** that allows users to generate images from text prompts using the **ClipDrop API**.  
It includes a **credit system**, **Razorpay-powered payments**, and **secure authentication**.  

Built with the **MERN stack (MongoDB, Express, React, Node.js)** and deployed on **Render** with MongoDB Atlas.  

---

## ✨ Features
- 🔐 **User Authentication & Security**  
  - JWT-based authentication with HTTP-only cookies.  
  - Passwords hashed using bcrypt.  
  - Middleware for protected routes.  

- 🤖 **Text-to-Image Generation**  
  - Integrated **ClipDrop API** for AI-based image generation.  
  - Error handling with retries & fallback messages.  
  - Secure API key storage in environment variables.  

- 💳 **Credit System & Payments**  
  - Users purchase credits via **Razorpay Checkout**.  
  - Each image request deducts 1 credit.  
  - Atomic credit updates in MongoDB to prevent misuse.  
  - Razorpay webhook verification ensures credits are only added after successful payment.  

- 📊 **User Dashboard**  
  - Track credits, payment history, and generated images.  
  - Responsive UI with Tailwind CSS.  

- ☁️ **Deployment & Scalability**  
  - Deployed on **Render** (frontend + backend).  
  - Cloud-hosted **MongoDB Atlas** database.  
  - Ready for scaling with caching (Redis), queuing (RabbitMQ), and AWS/GCP integration.  

---

## 🛠️ Tech Stack
- **Frontend:** React, Context API, Axios, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **AI API:** ClipDrop (text-to-image generation)  
- **Payments:** Razorpay  
- **Deployment:** Render (Full-Stack Deployment)  

---

