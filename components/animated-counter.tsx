"use client"
import React from 'react'


import CountUp from 'react-countup';

function AnimatedCounter({ amount = 0.0 } : {amount : number}) {
  return (
    <div className='w-full' >
        <CountUp
            end={amount}
            duration={2.75}
            decimals={2}
            decimal=","
            prefix="$"
        />
    </div>
  )
}

export default AnimatedCounter