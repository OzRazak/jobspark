import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "JobSpark - Your AI Career Co-Pilot",
  description: "Accelerate your job search with AI-powered tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
