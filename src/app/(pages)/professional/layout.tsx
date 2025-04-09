import MobileNav from "@/app/components/MobileNav/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        <main id="main-content" className="main-content">
          {children}
        </main>
        <MobileNav />
    </>
  );
}
