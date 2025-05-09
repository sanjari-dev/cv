import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import Script from 'next/script';

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
  const tawkToWidgetId = process.env.NEXT_PUBLIC_TAWK_TO_WIDGET_ID || '1iqpofe8r';
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Script id="tawk-to-script" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/681d93626d119d1911b85f94/${tawkToWidgetId}';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
