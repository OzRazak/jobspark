# JobSpark Marketing Site

This is the marketing website for JobSpark - Your AI Career Co-Pilot. This site showcases the platform's features and directs users to the main application.

## Overview

JobSpark is an intelligent career platform that helps South African professionals accelerate their job search with AI-powered tools for CV building, interview practice, and direct connections to top employers.

## Architecture

- **Marketing Site**: `jobspark.co.za` (this repository)
- **Application**: `app.jobspark.co.za` (separate repository)

## Features Showcased

- 🤖 AI-powered CV generation
- 💬 Interview coaching with real-time feedback
- 🏢 Direct employer connections
- 📊 Career readiness scoring
- 🎯 Personalized job matching

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation & Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js 13+ app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page sections (Hero, Features, etc.)
│   └── ui/             # UI components
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Deployment

### Netlify (Recommended)

The easiest way to deploy this marketing site is to use Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy!

### Other Platforms

This site can be deployed to any platform that supports Next.js:
- Vercel
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ for South African professionals 🇿🇦