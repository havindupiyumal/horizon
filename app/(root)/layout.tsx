'use client'
import Loading from "@/components/loading";
import MobileNav from "@/components/mobile-nav";
import Sidebar from "@/components/sidebar";
import { UserContext } from "@/context/user.context";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useContext } from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { currentUser, isLoading } = useContext(UserContext);

  if(isLoading) {
    return (
      <Loading />
    )
  }else{

    if(!currentUser) redirect('/sign-in')

    return (
      <main className="flex h-screen w-full font-inter" >
          <Sidebar user={currentUser} />

        <div className="flex size-full flex-col" >
          <div className="root-layout" > 
            <Image 
              src='/icons/logo.svg' 
              width={40}
              height={40}
              alt="logo"
            />
            <div>
              <MobileNav user={currentUser} />
            </div>
          </div>
          {children}
        </div>
      </main>
    );
  }
}
