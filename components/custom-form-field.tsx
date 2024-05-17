import React from 'react'
import { z } from "zod"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"

import { Control, FieldPath } from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up');

interface CustomFormField {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    formLabel: string,
    placeHolder: string,
    type: string,
}

function CustomFormField({name, control, formLabel, placeHolder, type} : CustomFormField) {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className='form-item' >
                <FormItem>
                    <FormLabel className='form-label' >{formLabel}</FormLabel>
                    <div className='flex w-full flex-col' >
                        <FormControl>
                            <Input 
                                className='input-class' 
                                placeholder={placeHolder} 
                                {...field} 
                                type={type}
                            />
                        </FormControl>
                        <FormMessage className='form-message mt-2' />
                    </div>
                </FormItem>
            </div>
        )}
    />
  )
}

export default CustomFormField