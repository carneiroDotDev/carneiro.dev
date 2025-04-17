# Carneiro.dev - Personal Blog

my main sandbox where I share thoughts on software development. I also use it to test new things in web development. 

## 🚀 Features

- Built with [Next.js](https://nextjs.org) for rendering of static pages and cache management (SEO optimized).
- Fully responsive design, and of course, Dark Mode because it is 2025.
- Optimized for SEO with custom `robots.txt` and sitemap generation.
- Dynamic routing with static site generation for blazing-fast performance.
- Styled with TailwindCSS because I need to get better at it. 

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: Tailwind CSS
- **Hosting**: [Vercel](https://vercel.com)
- **Content**: Markdown-based blog posts - No CDN and not planning to implement one.
- **Database**: Postgres + Prisma ORM (hosted on Neon - serverless)

## 📂 Project Structure

```
src/
├── app/                # Application routes and pages
├── components/         # Reusable UI components
├── styles/             # Global and component-specific styles
├── public/             # Static assets (images, icons, etc.)
└── utils/              # Utility functions and helpers
```

## ⚠️ Important Note

Some features of this application, such as database-related functionality, require a `.env` file with the correct PostgreSQL connection details. Without this file, certain features fail, but most of the application should be available.

### Example `.env` File

Here’s an example of the required `.env` file structure:

```properties
DATABASE_URL=postgres://<username>:<password>@<host>/<database>?sslmode=require
```

Make sure to replace `<username>`, `<password>`, `<host>`, and `<database>` with your actual database credentials.

## 🚧 Development

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/carneiro.dev.git
   cd carneiro.dev
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your database credentials.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the blog.

## 🌍 Deployment

This blog is deployed on [Vercel](https://vercel.com). To deploy your own version:

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Vercel will automatically build and deploy your site.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📖 License

This project is open-source and available under the [MIT License](LICENSE).

---

Thank you for visiting **Carneiro.dev**! Feel free to let me know what you think, and connect with me :)
