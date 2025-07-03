import localFont from "next/font/local";
import "./globals.css";
import { getDocuments } from "@/lib/doc";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Docucraft",
  description: "A Documentation App Generated mr.rafiqulthedev",
};

export default function RootLayout({ children }) {
  const allDocs = getDocuments();
  console.log(allDocs);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
