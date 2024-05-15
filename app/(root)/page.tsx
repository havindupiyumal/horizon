import React from 'react'

import HeaderBox from '@/components/header-box'
import TotalBalanceBox from '@/components/total-balance-box'
import RightSidebar from '@/components/right-sidebar'

const Home = () => {

  const loggedIn = {firstName: 'Havindu', lastName: 'Dissanayake', email: 'hello@gmail.com'}

  return (
   <section className='home' >
    <div className='home-content' >
      <header className='home-header' >
        <HeaderBox
          type='greeting'
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
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
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 1250.23, mask: 1234},{ currentBalance: 1000.50, mask: 1234 }]}
    />

   </section>
  )
}

export default Home