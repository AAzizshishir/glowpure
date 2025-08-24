# 🌸 GlowPure — Cosmetics E-commerce Platform

A modern, responsive cosmetics e-commerce site built with **Next.js**, **TailwindCSS**, and **shadcn/ui**. Designed for clean UI, dual-theme support, and scalable product management. This project is actively evolving with new features and integrations.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Database**: MongoDB (native driver)
- **Auth**: NextAuth.js (Credentials Provider)

---

## 📦 Features

- ✅ Product listing with dynamic filtering
- ✅ Authenticated product submission
- ✅ Clean, mobile-first design
- ✅ Modular component structure
- 🔜 Coming Soon:
  - Review & rating system
  - Stripe checkout integration
  - Admin dashboard
  - Image upload via Cloudinary or Firebase Storage

---

## 🛠️ Getting Started

```bash
git clone https://github.com/AAzizshishir/glowpure
cd glowpure
npm install
npm run dev
```

## 🧭 Route Summary

| Route         | Purpose                                          | Access        |
| ------------- | ------------------------------------------------ | ------------- |
| `/`           | Homepage with hero section and featured products | Public        |
| `/products`   | Displays all listed products                     | Public        |
| `/addProduct` | Form to submit new product (with validation)     | Authenticated |
| `/login`      | User login via NextAuth (Credentials Provider)   | Public        |
| `/register`   | New user registration form                       | Public        |
| `/api/auth`   | NextAuth authentication handler                  | Internal      |
