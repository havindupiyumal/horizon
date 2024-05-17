"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import CustomFormField from './custom-form-field'
import { authFormSchema } from '@/lib/utils'
import { Loader } from 'lucide-react'


function AuthForm({ type }: AuthFormProps) {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    })
   
    // 2. Define a submit handler.
    const onSubmit = (values: z.infer<typeof formSchema>) => {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      setIsLoading(true);
      setTimeout(() => {
        console.log(values);
        setIsLoading(false);
      }, 1000);
    }

  return (
    <section className='auth-form' >

        <header className='flex flex-col gap-5 gpa-8' >
            <Link href="/" className='flex cursor-pointer items-center gap-1'>
                <Image src='/icons/logo.svg' alt='logo' width={34} height={34} />
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1' >Horizon</h1>
            </Link>
            <div className='flex flex-col gap-1 md:gap-3' >
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900' >
                    {
                        user ? 'Link Account' : (type === 'sign-in' ? 'Sign In' : 'Sign Up')
                    }
                    <p className='text-16 font-normal text-gray-600' >
                        {
                            user ? 'Link your account to get started' : 'Please enter your details'
                        }
                    </p>
                </h1>
            </div>
        </header>
        {
            user ? (
                <div className='flex flex-col gap-4' >
                    {/* Plaid Link  */}
                </div>
            ) : (
                <>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {
                                type === 'sign-up' && (
                                    <>
                                        <div className='flex gap-4'>
                                            <CustomFormField 
                                                name='firstName' 
                                                control = {form.control} 
                                                placeHolder = 'Enter your first name' 
                                                formLabel = 'First Name'
                                                type='text'
                                            />
                                            <CustomFormField 
                                                name='lastName' 
                                                control = {form.control} 
                                                placeHolder = 'Enter your last name' 
                                                formLabel = 'Last Name'
                                                type='text'
                                            />
                                        </div>
                                        <CustomFormField 
                                            name='address' 
                                            control = {form.control} 
                                            placeHolder = 'Enter your specific address' 
                                            formLabel = 'Address'
                                            type='text'
                                        />
                                        <div className='flex gap-4'>
                                            <CustomFormField 
                                                name='city' 
                                                control = {form.control} 
                                                placeHolder = 'Enter your city' 
                                                formLabel = 'city'
                                                type='text'
                                            />
                                            <CustomFormField 
                                                name='state' 
                                                control = {form.control} 
                                                placeHolder = 'ex : VIC' 
                                                formLabel = 'State'
                                                type='text'
                                            />
                                        </div>
                                        <div className='flex gap-4'>
                                            <CustomFormField 
                                                name='postalCode' 
                                                control = {form.control} 
                                                placeHolder = 'ex : 3000' 
                                                formLabel = 'Postal Code'
                                                type='text'
                                            />

                                            <CustomFormField 
                                                name='dateOfBirth' 
                                                control = {form.control} 
                                                placeHolder = 'yyyy-mm-dd' 
                                                formLabel = 'Date of Birth'
                                                type='text'
                                            />
                                        </div>
                                        <CustomFormField 
                                            name='ssn' 
                                            control = {form.control} 
                                            placeHolder = 'ex : 1234' 
                                            formLabel = 'SSN'
                                            type='text'
                                        />
                                    </>
                                )
                            }
                            <CustomFormField 
                                name='email' 
                                control = {form.control} 
                                placeHolder = 'Enter your email' 
                                formLabel = 'Email'
                                type='text'
                            />
                            <CustomFormField 
                                name='password' 
                                control = {form.control} 
                                placeHolder = 'Enter your password' 
                                formLabel = 'Password'
                                type='password'
                            />
                            <div className='flex flex-col gap-4'>
                                <Button type="submit" disabled={isLoading} className='form-btn'>
                                    {
                                        isLoading ? 
                                            (<>
                                                <Loader size={20} className='animate-spin' />
                                                &nbsp; Loading...
                                            </>)
                                            : type === 'sign-in' ? 'Sign in' : 'Sign up'
                                    }
                                </Button>
                            </div>
                        </form>
                    </Form>

                    <footer  className='flex justify-center gap-1'>
                        <p className='text-14 font-normal text-gray-600' >
                            {
                                type === 'sign-in' ? "Don't have an account?" : 'Already have an account?'
                            }
                        </p>
                        <Link className='form-link' href={type === 'sign-in' ? "/sign-up" : '/sign-in' } >
                            {type === 'sign-in' ? "Sign up" : 'Sign in' }
                        </Link>
                    </footer>
                </>
            )
        }
    </section>
  )
}

export default AuthForm