export const metadata = {
  title: "MMR Portfolio",
  description: "Professional Portfolio of Md. Moshiur Rahman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
