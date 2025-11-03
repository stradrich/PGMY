## GENERAL APP FLOW 

[![Watch the video on YouTube](https://img.youtube.com/vi/r5N7Nv2SkNA/0.jpg)](https://youtu.be/r5N7Nv2SkNA)

# Property Genie

A **property listing search results page** built with **Next.js (Page Router)**.  
This project demonstrates your ability to create a responsive, functional property marketplace interface with **API integration**, **search and filters**, and **infinite scrolling**.

---

## Features

### Search & Filtering
- Search by **city** or **state**
- Filter by **price range**
- Select **multiple property types**

### Sorting
- Default (earliest created date)
- Price (low → high)
- Price (high → low)

### Property Display
- Property cards showing key information
- **Infinite scroll** to load more properties dynamically
- **Responsive layout** across all devices

### API Integration
- Fetches property data from the provided API
- Handles **loading**, **empty state**, and **error** conditions gracefully

---

## Tech Stack

| Category | Tools |
|-----------|--------|
| Framework | Next.js (Page Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State Management | React Context API |
| API Handling | Custom React Hook (useFetchProperties) |


## 📁 Folder Structure

```
/Users/drichintoshed/Desktop/property-genie/
├── .gitignore
├─] .next/ (ignored)
├── README.md
├── components/
│   ├── Header.tsx
│   ├── PropertyCard.tsx
│   ├── PropertyGrid.tsx
│   ├── SearchFilters.tsx
│   └── Sidebar.tsx
├── context/
│   └── PropertyContext.tsx
├── data/
│   └── mockProperties.ts
├── eslint.config.mjs
├── hooks/
│   └── useFetchProperties.tsx
├─] next-env.d.ts (ignored)
├── next.config.ts
├─] node_modules/ (ignored)
├── package-lock.json
├── package.json
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api/
│   │   └── hello.ts
│   └── index.tsx
├── postcss.config.js
├── public/
├── styles/
│   └── globals.css
├── tailwind.config.js
├── tsconfig.json
├── types/
│   └── types.ts
└── utils/
    ├── filterProperties.ts
    └── formatPrice.ts
```

## Core Functionality

- **PropertyContext** manages state, filters, pagination, and API data  
- **Infinite Scrolling** implemented using `IntersectionObserver` in `PropertyGrid.tsx`  
- **Responsive UI** built with TailwindCSS  
- **Error Handling** and placeholder images for broken or missing property photos or unaccessible photos

---

## Getting Started

zsh terminal
npm install
npm run dev

Then open: http://localhost:3000

# Check which process is using port 3000
lsof -i :3000

# Kill the process (replace <PID> with the actual process ID)
kill -9 PID


