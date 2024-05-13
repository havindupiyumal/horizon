import React from 'react'

import HeaderBox from '@/components/header-box'
import TotalBalanceBox from '@/components/total-balance-box'

const Home = () => {

  const loggedIn = {firstName: 'Havindu'}

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
    </div>
   </section>
  )
}

export default Home