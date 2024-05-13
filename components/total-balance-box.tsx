
"use client"
import React from 'react'


import { formatAmount } from '@/lib/utils'
import AnimatedCounter from './animated-counter'
import DoughnutChart from './doughnut-chart'

function TotalBalanceBox({ accounts = [], totalBanks = 0, totalCurrentBalance = 0.0 }: TotalBalanceBoxProps) {
  return (
    <section className='total-balance' >
        <div className='total-balance-chart' >
            <DoughnutChart  accounts={accounts} />
        </div>

        <div className='flex flex-col gap-6' >
            <h2 className='header-2' >
                 Bank Accounts: {totalBanks}
            </h2>
            <div className='flex flex-col gap-6' >
                <p className='total-balance-label' >
                    Total Current Balance
                </p>
                <div className='total-balance-amount flex-center gap-2' >
                    <AnimatedCounter amount={totalCurrentBalance} />
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default TotalBalanceBox