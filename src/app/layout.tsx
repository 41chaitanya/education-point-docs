import "./globals.css";
import Header from "@/components/Header/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-[#1A1A1A] bg-[#FFFFFF] dark:text-[#FFFFFF] text-[#000000]">
        <Header/>
        {children}
        </body>
    </html>
  );
}
