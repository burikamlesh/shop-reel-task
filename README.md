# shop-reel-task
A modern Shop Reel eCommerce frontend project built with React/Vite featuring API integration, product listing, product details page, add to cart functionality, responsive UI, and smooth user experience. Designed with scalable architecture and clean component-based structure.



## Features

- Product listing page
- Dynamic product detail page
- Add to cart
- Remove from cart
- Cart total calculation
- Category filter
- URL-based filter persistence
- Local storage cart persistence
- Responsive UI
- Toast notifications
- Dynamic routing using React 

## Tech Stack

- React JS
- TypeScript
- Vite
- React Router DOM
- Context API
- CSS
- React Toastify

---
## API Used

https://fakeapi.platzi.com

---
## Installation

Clone the repository:

```bash
git clone <your-github-repo-url>
```


Go to project folder:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

```bash
npm start
```

Build for production:

```bash
npm run build
```
---

## Folder Structure

```bash
src/
 ├── api/
 ├── components/
 ├── context/
 ├── pages/
 ├── routes/
 ├── types/
 ├── App.tsx
 └── main.tsx
```

---
## Implemented Features

- Category filter with URL params
- Dynamic product detail page
- Cart management using Context API
- Persistent cart using localStorage
- Responsive mobile-friendly UI
- Toast notifications for cart actions

---

## Assumptions

- Only one quantity per product allowed in cart
- Fake API product data may vary
- Images are loaded from API

---

## E2E Testing

Basic Playwright setup added.

Run tests:

```bash
npx playwright test
```