
# 📘 README.md (Updated for Your Project)

## 🚀 Cooee Signup Flow (React + Vite + Tailwind)

This project is a **technical assessment** to rebuild the **Cooee signup flow** from [callcooee.com](https://callcooee.com) using **React, Vite, and Tailwind CSS**.
It simulates the onboarding experience for purchasing a virtual phone number, selecting a plan, registering details, and completing payment.

---

## 📂 Project Overview

### Features Implemented

1. **Number Selection**

   * Choose a country (USA, Canada, Australia, Netherlands).
   * See available virtual phone numbers (mocked list).
   * Select one to proceed.

2. **Plan Selection**

   * Display different subscription plans (Basic, Premium).
   * User selects one to continue.

3. **Registration**

   * Capture user details (name, email, password).
   * Mock validation.

4. **Payment Simulation**

   * Simulate a payment step (fake API call with timeout).

5. **Confirmation**

   * Show assigned number and plan after signup.

### Bonus Features

* ✅ **Dark mode toggle**
* ✅ **Stepper navigation UI** for progress tracking
* ✅ **Animations** 

---

## 🛠️ Tech Stack

* **React (Hooks + React Router)** → for UI & navigation
* **Vite** → development build tool
* **Tailwind CSS** → styling system
* **Zustand** → lightweight global state management (for order data)
* **Mock APIs (setTimeout)** → simulate async responses

---

## 📁 Project Structure

```
src/
 ├── components/        # Stepper, DarkModeToggle, PageHeader
 ├── pages/             # Number, Plan, Register, Payment, Confirmation
 ├── store/             # Zustand store for global state
 ├── App.jsx            # Router & stepper layout
 ├── main.jsx           # React entry point
 └── index.css          # Tailwind + custom styles
```

---

## ⚙️ Setup Instructions

1. Clone repo:

   ```bash
   git clone https://github.com/ndiya13/cooee-signupflow.git
   cd cooee-signup
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run dev server:

   ```bash
   npm run dev
   ```

4. Open in browser:

   ```
   http://localhost:5173
   ```

---

## 🌍 Deployment

This app is deployed on \[Vercel / Netlify / GitHub Pages].
https://cooee-signupflow.netlify.app/

---

## 🎥 Walkthrough Video

A 5–10 minute Loom walkthrough is available here:https://www.loom.com/share/5c5f24a59663437695198909d83a31bd?sid=a23a81b4-3c48-4010-8a16-3062e30dbfb7
---

## 📌 Assumptions Made

* Mock data used for numbers & plans (no real API).
* Payment is simulated with `setTimeout`.
* User data is not stored persistently (local state only).

---

## 📄 License

This project is for **educational/assessment purposes** only. All rights to the original product (Cooee) belong to [callcooee.com](https://callcooee.com).

---



