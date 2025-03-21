import Header from "@/components/Header";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`bg-Jet `}>
        <LenisProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
