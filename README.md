# Techtrove 🛍️

**Techtrove** is a modern, AI-powered tech product discovery and review platform built with Next.js. It provides an intuitive browsing experience for discovering, comparing, and purchasing the latest technology products.

---

## 🎯 Features

- **Product Discovery**: Browse and discover the latest tech gadgets and products
- **Category Browsing**: Explore products organized by categories (smartphones, laptops, accessories, etc.)
- **Detailed Product Pages**: View comprehensive product information with specifications and pricing
- **AI-Powered Reviews**: Automated gadget reviews and ratings for products
- **Web Scraping**: Automated data collection from tech websites using Cheerio
- **Product Filtering**: Filter and search for products by various criteria
- **Beautiful UI**: Modern, responsive design with smooth animations using Framer Motion
- **Database Integration**: Supabase PostgreSQL for storing product data
- **API Endpoints**: RESTful API for scraping and data management

---

## 🏗️ Project Structure

```
tech-trove/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page with hero section
│   │   ├── layout.tsx            # Root layout component
│   │   ├── globals.css           # Global styling
│   │   ├── robots.ts             # SEO robots.txt
│   │   ├── sitemap.ts            # Dynamic sitemap
│   │   ├── api/
│   │   │   └── scrape/
│   │   │       └── route.ts      # Web scraping API endpoint
│   │   ├── category/
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Category page with products
│   │   └── product/
│   │       └── [slug]/
│   │           └── page.tsx      # Individual product detail page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx        # Navigation header
│   │   │   └── Footer.tsx        # Footer component
│   │   └── ui/
│   │       └── ProductCard.tsx   # Reusable product card component
│   ├── lib/
│   │   ├── data.ts               # Data fetching functions
│   │   ├── dummyData.ts          # Mock data for development
│   │   └── scraper.ts            # Web scraping utilities using Cheerio
│   ├── utils/
│   │   ├── proxy.ts              # API proxy utilities
│   │   └── supabase/
│   │       ├── client.ts         # Supabase client-side setup
│   │       ├── server.ts         # Supabase server-side setup
│   │       └── middleware.ts     # Authentication middleware
│   └── supabase/
│       └── schema.sql            # PostgreSQL database schema
├── public/                       # Static assets
├── package.json                  # Project dependencies
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS styling
└── eslint.config.mjs             # ESLint configuration
```

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.2.6](https://nextjs.org/) - React-based framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/) - Smooth React animations
- **Database**: [Supabase](https://supabase.com/) - PostgreSQL with real-time features
- **Web Scraping**: [Cheerio 1.2](https://cheerio.js.org/) - jQuery-like syntax for parsing HTML
- **Icons**: [Lucide React 1.16](https://lucide.dev/) - Beautiful React icons
- **Runtime**: React 19.2.4 with React DOM 19.2.4

---

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun package manager
- Supabase account and project
- GitHub account for version control

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Pavan711kumar/Techtrove.git
cd tech-trove
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 4. Set Up Database

1. Create a Supabase project
2. Run the SQL schema from `supabase/schema.sql` in the Supabase SQL editor
3. Configure Row Level Security (RLS) policies if needed

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

---

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

---

## 🔄 Key API Endpoints

### Scrape Products
```
POST /api/scrape
```
Triggers automated web scraping to collect product data from configured sources.

### Fetch Products
```
GET /api/products
```
Retrieves all products from the database.

### Fetch Categories
```
GET /api/categories
```
Retrieves all product categories.

---

## 📱 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with featured products and categories |
| `/category/[slug]` | Category page with filtered products |
| `/product/[slug]` | Detailed product information page |

---

## 🎨 Features in Detail

### Product Card Component
- Product image with placeholder support
- Brand and price display
- Star ratings
- Shopping cart action buttons
- Smooth hover animations

### Web Scraping
- Automated data collection from tech websites
- Respectful scraping with proper User-Agent headers
- HTML parsing using Cheerio
- Support for multiple product sources

### Database Schema
- Products table with specifications
- Categories for organization
- Reviews and ratings system
- User preferences and saved items

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

The easiest way to deploy is using [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push
4. Configure environment variables in Vercel dashboard

### Deploy to Other Platforms

- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Google Cloud Run](https://cloud.google.com/run)
- [Docker Container](https://docs.docker.com/get-started/)

---

## 🔐 Environment & Security

- Supabase Row Level Security (RLS) for data protection
- API route protection with middleware
- Authentication via Supabase Auth
- Environment variables for sensitive data
- CORS policies configured

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn Next.js features
- [Supabase Docs](https://supabase.com/docs) - Database setup and management
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling guide
- [Framer Motion](https://www.framer.com/motion/) - Animation library docs
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Type safety guide

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📧 Support & Contact

For issues, suggestions, or questions:
- GitHub Issues: [Create an Issue](https://github.com/Pavan711kumar/Techtrove/issues)
- Email: your-email@example.com
- Discord: [Join Our Community](https://discord.com)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Database powered by [Supabase](https://supabase.com/)
- Icons from [Lucide React](https://lucide.dev/)

---

**Made with ❤️ by the Techtrove Team**
