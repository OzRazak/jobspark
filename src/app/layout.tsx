import { Inter } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/ui/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // Primary SEO for browser tab and search results
  title: "JobSpark ZA | AI Career Readiness for South African Professionals",
  description:
    "JobSpark ZA is South Africa's leading AI platform tackling youth unemployment. Get ATS-optimised CVs, real-time AI interview coaching, and tailored job matches for the SA market.",

  // Open Graph (OG) metadata for social media sharing
  openGraph: {
    title: "JobSpark ZA | AI Career Readiness for South African Professionals",
    description:
      "JobSpark ZA is South Africa's leading AI platform tackling youth unemployment. Get ATS-optimised CVs, real-time AI interview coaching, and tailored job matches for the SA market.",
    url: "https://www.jobspark.co.za", // Replace with your actual domain
    siteName: "JobSpark ZA",
    images: [
      {
        url: "/jobspark.png",
        width: 630,
        height: 630,
        alt: "JobSpark ZA - AI Career Platform for South Africa",
      },
    ],
    locale: "en_ZA", // South African English locale
    type: "website",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@JobSparkZA",
    creator: "@YourDevTeam",
    title: "JobSpark ZA | AI Career Readiness for South African Professionals",
    description:
      "JobSpark ZA is South Africa's leading AI platform tackling youth unemployment. Get ATS-optimised CVs, real-time AI interview coaching, and tailored job matches for the SA market.",
    images: ["/jobspark.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Set language to South African English for better localisation
    <html lang="en-ZA">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
