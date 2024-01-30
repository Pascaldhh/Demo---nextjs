"use client";
import Input from '@components/Input'
import { ThemeContext } from '@components/ProviderWrapper';
import { InputType } from '@components/Types'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'


export default function Content() {
  const { getImages } = useContext(ThemeContext);
  useEffect(() => getImages(), []);

  return (
    <div className="mt-[7.5rem]">
      <div className='flex flex-col gap-4'>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="email" text="Email" placeholder="name@email.com"/>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="password" text="Password" placeholder="Password"/>
      </div>
      <Link href="/auth/reset-password" className='mt-3 font-medium block text-enveus-primary text-sm hover:text-opacity-75 transition-opacity'>Forgot your password?</Link>
      <button className='btn btn-outline-primary mt-6 uppercase w-full'>Sign in</button>
      <p className='text-center mt-8 font-medium'>Need a account? <Link href="/auth/register" className='text-enveus-primary hover:text-opacity-75 transition-opacity'>Sign up</Link></p>
    </div>
  )
}
