'use client'
import React, { useContext, useEffect } from 'react'

import HeaderBox from '@/components/header-box'
import TotalBalanceBox from '@/components/total-balance-box'
import RightSidebar from '@/components/right-sidebar'

import { UserContext } from '@/context/user.context'
import Loading from '@/components/loading'
import { redirect } from 'next/navigation'

const Home = () => {

  const { currentUser, isLoading } = useContext(UserContext);
  
  if(isLoading) {
    return (
      <Loading />
    )
  }else{

    if(!currentUser) redirect('/sign-in')

    return (
    <section className='home' >
      <div className='home-content' >
        <header className='home-header' >
          <HeaderBox
            type='greeting'
            title="Welcome"
            user={currentUser?.name || 'Guest'}
            subtext="Access and manage your account and transaction efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.25}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={currentUser}
        transactions={[]}
        banks={[{currentBalance: 1250.23, mask: 1234},{ currentBalance: 1000.50, mask: 1234 }]}
      />

    </section>
    )
  }
}

export default Home