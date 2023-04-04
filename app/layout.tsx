import "../styles/globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Spoofy | Spotify Clone",
  description:
    "Spoofy | A Spotify Clone created to practice Front End Developer skills and use technologies: Next.js13, TailwindCSS, NextAuth.js etc...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable} font-poppins`}>{children}</body>
    </html>
  );
}
