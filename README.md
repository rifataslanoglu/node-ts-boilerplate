# Node.js & TypeScript API Boilerplate

A minimalist, production-ready foundation for building scalable RESTful APIs using Node.js, Express, TypeScript, and MongoDB.
Unopinionated beyond core structural concerns.
This boilerplate focuses on clean architecture, strict type safety, and strong developer experience without unnecessary abstractions.


---

## 🚀 Features

- **TypeScript Ready:** Fully configured with `ts-node` and strict type checking.
- **Minimalist Architecture:** Clean MVC-inspired folder structure (`controllers`, `models`, `routers`, `middlewares`).
- **MongoDB & Mongoose:** Pre-configured database connection with a sample model and `bcryptjs` pre-save hooks.
- **Global Error Handling:** Centralized error middleware that hides stack traces in production.
- **Security & Standards:** Integrated CORS and modern ESLint flat config setup.
- **Environment Management:** Ready-to-use `dotenv` configuration.

---

## 📦 Prerequisites

Make sure you have:

- Node.js v18.0.0 or higher (LTS recommended)
- A running MongoDB instance (local or cloud)



## 🛠 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/rifataslanoglu/node-ts-boilerplate.git
cd node-ts-boilerplate
npm install
```

---

## ⚙️ Environment Configuration

Create your environment file:

```bash
cp .env.example .env
```

Update `.env` with:

```
NODE_ENV=development
PORT=3000
MONGO_URI=mongodb://localhost:27017/boilerplate_db
```

---

## ▶️ Running the Application

### Development Mode

```bash
npm run dev
```

Uses `ts-node` for fast development without manual compilation.

---

### Production Mode

```bash
npm run build
npm start
```

⚠️ Always compile TypeScript before running in production.

---

## 📜 Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Compile TypeScript to `/dist`
- `npm start` — Run compiled production build
- `npm run lint` — Analyze code with ESLint
- `npm run lint:fix` — Auto-fix ESLint issues

---

## 📡 API Endpoint Example

The boilerplate includes a sample `/items` route demonstrating routing, controller logic, and database interaction.

### Create a New Item

```bash
curl -X POST http://localhost:3000/items \
-H "Content-Type: application/json" \
-d '{"item": "My secret item"}'
```

The `item` value is automatically hashed using `bcryptjs` before being saved.

---

### Get All Items

```bash
curl http://localhost:3000/items
```

Example response:

```json
{
  "success": true,
  "count": 1,
  "data": [
    {
      "_id": "64b5...",
      "item": "$2a$08$...",
      "__v": 0
    }
  ]
}
```

---

## 📁 Project Structure

```
src/
 ├── config/        # Database configuration
 ├── controllers/   # Business logic
 ├── middlewares/   # Custom middleware (error handler, etc.)
 ├── models/        # Mongoose schemas
 ├── routers/       # Express route definitions
 └── app.ts         # Application entry point

package-lock.json
package.json
tsconfig.json
eslint.config.mjs
```

---

## 🛡 Production Notes

- Stack traces are hidden when `NODE_ENV=production`.
- Ensure environment variables are properly configured in your hosting environment.
- Use a managed MongoDB instance in production.

---

## 📄 License

Distributed under the MIT License.
