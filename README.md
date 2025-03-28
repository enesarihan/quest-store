# Quest Store

Quest Store is a web application built with Next.js that allows users to complete quests, earn points, and redeem rewards.

## 🚀 Features

- Fast and scalable architecture with Next.js
- Database management using Prisma ORM
- User authentication and management
- Quest completion and reward system
- Modern and stylish UI/UX design

## 🛠 Technologies Used

- **Next.js** – A React-based framework
- **TypeScript** – For safer and more scalable code
- **Prisma** – ORM for easy database management
- **MongoDB / PostgreSQL** – Database management
- **Tailwind CSS** – A fast and customizable styling library

## 📦 Installation

Follow these steps to set up the project locally.

### 1. Clone the Repository

```bash
  git clone https://github.com/enesarihan/quest-store.git
  cd quest-store
```

### 2. Install Dependencies

```bash
  npm install
  # or
  yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and configure it as follows:

```env
DATABASE_URL=<Your Database Connection String>
NEXTAUTH_SECRET=<Your Secret Key>
NEXTAUTH_URL=http://localhost:3000
```

### 4. Set Up the Database

```bash
  npx prisma migrate dev
```

### 5. Start the Development Server

```bash
  npm run dev
  # or
  yarn dev
```

Visit `http://localhost:3000` in your browser to access the application.

## 🤝 Contributing

If you’d like to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Submit a pull request.

## 📜 License

This project is licensed under the MIT License.

---

For more information, visit the [GitHub repository](https://github.com/enesarihan/quest-store).
