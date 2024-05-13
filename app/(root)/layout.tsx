import Sidebar from "@/components/sidebar";
import Image from "next/image";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Havindu', lastName: 'Dissanayake' }

  return (
    <main className="flex h-screen w-full font-inter" >
        <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col" >
        <div className="root-layout" > 
          <Image 
            src='/icons/logo.svg' 
            width={40}
            height={40}
            alt="manu icon"
          />
        </div>
      </div>

        {children}
    </main>
  );
}
