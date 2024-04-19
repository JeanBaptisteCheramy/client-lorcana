import Navigation from "@/components/navigation/Navigation";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lorcana TCG",
  description:
    "Ceci est un projet de Jean-Baptiste Chéramy. Backend:Node.js / AdonisJs. Frontend: Next.js. DB: PostgreSQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <Navigation />
        <main className="flex">{children}</main>
      </body>
    </html>
  );
}
