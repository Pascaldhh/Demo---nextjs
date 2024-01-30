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
    <div className="mt-6">
      <div className='flex flex-col gap-4'>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="text" text="Username" placeholder="Username"/>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="email" text="Email" placeholder="name@email.com"/>
        <Input className="flex flex-col gap-2" inputType={InputType.Auth} type="password" text="Password" placeholder="Password"/>
      </div>
      <button className='btn btn-outline-primary uppercase w-full block mt-14'>Sign up</button>
      <p className='text-center mt-8 font-medium'>Already have an account? <Link href="/auth/login" className='text-enveus-primary hover:text-opacity-75 transition-opacity'>Sign in</Link></p>
    </div>
  )
}
