'use client'
import Image from 'next/image';
import React, { useContext } from 'react'

import { signOut } from '@/lib/server/actions/user.actions';
import { UserContext } from '@/context/user.context';

const Footer = ({ user, type }: FooterProps) => {

  const { isLoading, setIsLoading } = useContext(UserContext)  

  const logoutHandler = async () => {
    try {
        setIsLoading(true);
        await signOut()
    } catch (error) {
        console.log("logout error", error)
    }finally{
        setIsLoading(false);
    }
  };

  return (
    <footer className='footer' >
        <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
            <p className='text-xl font-bold text-gray-700'>
                {user?.name[0]}
            </p>
        </div>
        <div className={type === 'mobile' ? 'footer_email-mobile' : 'email'} >
            <h1 className='text-14 truncate text-gray-500 font-semibold' >
                {user?.name}
            </h1>
            <p  className='text-14 truncate font-normal text-gray-600'>
                {user?.email}
            </p>
        </div>
        <div className='footer_image' onClick={logoutHandler} >
            <Image className='size-[24px] max-xl:size-14' src='/icons/logout.svg' alt='logo' width={34} height={34} />
        </div>
    </footer>
  )
}

export default Footer;
