import React from 'react'

import AuthForm from '@/components/auth-form'  

const SignUp = () => {
  return (
    <section  className='flex-center size-full max-sm:px-6' >
      <AuthForm type='sign-up' />
    </section>
  )
}

export default SignUp;