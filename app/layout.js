export const metadata = {
  title: "Aaryanex Technology",
  description: "SAP Mobility and IT Consulting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
