'use client'
import { UserContext } from "@/context/user.context";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useContext } from "react";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const { currentUser, isLoading } = useContext(UserContext);

    //if(currentUser) redirect('/')

    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div className="auth-asset" >
            <div>
              <Image 
                src='/icons/auth-image.svg'
                width={500}
                height={500}
              />
            </div>
          </div>
      </main>
    );
  }
  