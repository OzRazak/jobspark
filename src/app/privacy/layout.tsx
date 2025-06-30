import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - JobSpark',
  description: 'Privacy Policy for JobSpark - Your AI Career Co-Pilot',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}