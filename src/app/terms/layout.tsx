import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - JobSpark',
  description: 'Terms of Service for JobSpark - Your AI Career Co-Pilot. Learn about our terms and conditions.',
  openGraph: {
    title: 'Terms of Service - JobSpark',
    description: 'Terms of Service for JobSpark - Your AI Career Co-Pilot. Learn about our terms and conditions.',
    images: [
      {
        url: '/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'JobSpark Logo',
      },
    ],
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 