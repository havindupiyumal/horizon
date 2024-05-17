import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Loading() {
  return (
    <div className='h-screen flex items-center justify-center gap-2' >
        <Image className='size-[46px] max-xl:size-14' src='/icons/logo.svg' alt='logo' width={34} height={34} />
        <h1 className='sidebar-logo text-20' >Horizon</h1>
        <Loader2 size={80} className='animate-spin' />
    </div>
  )
}

export default Loading