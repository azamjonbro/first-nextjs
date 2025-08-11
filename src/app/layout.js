import './globals.css';

export const metadata = {
  title: 'Business Dashboard',
  description: 'Professional dashboard for business people',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#1a202c" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
