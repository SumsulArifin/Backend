# 🧳 Tour Management System

A full-featured **Tour Management System** built with **Node.js**, **TypeScript**, **Express**, and **MongoDB**, featuring **secure authentication**, **admin/user role management**, and **SSLCommerz** payment gateway integration for booking tours online.

## 🚀 Live Preview

🌐 [Live Site](https://backend-gamma-opal-49.vercel.app/)  
📂 [Backend GitHub Repo](https://github.com/SumsulArifin/Backend)

---

## 📦 Tech Stack

### 🖥️ Backend

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB** + Mongoose
- **Zod** (Schema validation)
- **Passport.js** (Authentication)
- **Cloudinary** (Image uploads)
- **SSLCommerz** (Payment Integration)
- **Redis** (Session caching)
- **JWT** (Authentication)

### 🎨 Frontend

- **React.js**
- **Tailwind CSS**
- **Shadcn/UI**
- **Responsive Layout**

---

## 💡 Features

- 🧑‍💼 Admin & User Roles
- 🗺️ Tour Listings and Booking
- 💳 Online Payment via SSLCommerz
- 🔐 Auth (Register/Login) with JWT
- 📄 PDF Invoice Generation
- ☁️ Cloud Image Uploads (Cloudinary)
- 📬 Email Booking Confirmations
- ⚙️ Environment Config Management with `dotenv`

---

## ⚙️ Project Structure

```bash
├── src
│   ├── app
│   │   ├── config       # Env config, Redis setup
│   │   ├── middlewares  # Error handler, Auth middlewares
│   │   ├── modules      # Feature modules (tours, auth, booking)
│   │   └── utils        # Helper functions (PDF, email, etc.)
│   ├── server.ts
│   └── ...
├── .env
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🔐 SSLCommerz Integration

Integrated via REST API using their hosted checkout. Payment details and order confirmation are securely handled using callback URLs and webhooks.

---

## 🛠️ Installation

```bash
git clone https://github.com/your-repo/tour-management.git
cd tour-management
npm install
```

Set up your `.env`:

```env
PORT=5000
DB_URL=mongodb+srv://...
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
SSL_STORE_ID=...
SSL_STORE_PASSWORD=...
SSL_SUCCESS_URL=http://localhost:5000/payment/success
SSL_FAIL_URL=http://localhost:5000/payment/fail
```

Run the server in dev mode:

```bash
npm run dev
```

Build and start:

```bash
npm run build
npm start
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

**Author:** MD. Sumsul Arifin  
**Email:** [s.arifinoriginal@gmail.com]  


---

`