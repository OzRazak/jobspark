import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - JobSpark',
  description: 'Terms of Service for JobSpark - Your AI Career Co-Pilot',
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 