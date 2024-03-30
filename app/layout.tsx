import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: `Appalachian Trial Logbuch 2024`,
  description: `Ein kleiner Waldspaziergang`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body>
        <section className="min-h-screen">
          <main>{children}</main>
        </section>
      </body>
    </html>
  );
}
