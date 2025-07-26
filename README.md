# 🔐 SecureSight


---

## 🔗 Live Demo

👉 [Visit SecureSight](https://securesight.vercel.app)

---

## 📦 Tech Stack

- **Frontend**: Next.js App Router, React, TypeScript  
- **Styling**: Tailwind CSS, Shadcn/UI  
- **Backend**: Supabase (PostgreSQL), Prisma ORM  
- **3D Visualization**: React Three Fiber (Three.js)  
- **Hosting**: Vercel  

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/abhayyyy24/SecureSight.git
cd SecureSight
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Generate Prisma Client

```bash
npx prisma generate
```

### 4. Start Development Server

```bash
npm run dev
```

---

## 🗂️ Routes Overview

| Path | Description |
|------|-------------|
| `/` | Home Page |
| `/dashboard` | Incident dashboard with video player and incident list |
| `/3d` | 3D camera visualization using React Three Fiber |

---

## 💡 Tech Decisions

### Supabase
- **Real-time database** to store and update incidents live
- **File storage** for incident video recordings
- Seamless integration with Next.js

### Prisma ORM
- Provides **schema safety** and simplifies complex database queries
- Ensures clean, maintainable backend access
- Type-safe database operations

### Tailwind CSS + Shadcn/UI
- Enables **fast and responsive** UI development
- Clean and reusable component system
- Consistent design patterns

### React Three Fiber (Three.js)
- Used for rendering **3D environments** like camera locations and views
- Interactive 3D visualization of surveillance systems

---


## 🎯 Future Improvements

Given more time, the following enhancements would be implemented:

- [ ] **User Authentication** - Restrict access with secure login system
- [ ] **Enhanced Timeline UI** - Complete and polish the incident timeline interface
- [ ] **Full Responsiveness** - Optimize for all device sizes and orientations
- [ ] **Camera View Switching** - Enable switching camera views via thumbnail clicks in the incident player


---


---

## 📧 Contact

Created by [@abhayyyy24](https://github.com/abhayyyy24)

Hope you like it! 🚀