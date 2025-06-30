import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platform Features - JobSpark',
  description: 'Discover all the powerful AI-driven features that make JobSpark the ultimate career companion for South African job seekers.',
  keywords: 'JobSpark features, AI interview coach, CV builder, career tools, South Africa, unemployment, voice coaching, gamification',
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}