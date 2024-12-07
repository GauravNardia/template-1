import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section className="w-full min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="w-full p-4 flex justify-between">
          <nav className="w-full max-w-7xl flex items-center justify-center">
            {/* Replace 'Navbar' with actual navbar components */}
            <div className="font-bold text-lg">
                <Navbar/>
            </div>
          </nav>
        </header>
  
        {/* Main Content */}
        <main className="w-full flex-grow flex justify-center">
          <div className="w-full">{children}</div>
        </main>
      </section>
    );
  }
  