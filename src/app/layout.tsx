import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sanjari Alfian',
  description:
    'An experienced Software Developer with in-depth expertise in Full Stack Web Development. Proficient in building scalable and efficient web applications, from Backend development using Node.js and SQL/NoSQL databases, to implementing responsive and interactive user interfaces with React and Tailwind CSS. Possesses a proven track record in leading technical teams (Tech Leader), collaborating in Agile environments, and a strong passion for learning new technologies and contributing to innovative projects.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
