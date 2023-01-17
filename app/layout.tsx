import "../styles/globals.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="gradient-01 bg-no-repeat text-main-dark">
        <Navbar />
        <div className="px-4">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
