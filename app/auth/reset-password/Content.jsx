import Input from '@components/Input'
import { InputType } from '@components/Types'
import Link from 'next/link'
import React from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

export default function Content() {
  return (
    <div className="">
      <Link href="/auth/login" className="mt-4 text-enveus-primary hover:text-opacity-80 transition-all flex items-center font-medium"><HiOutlineArrowNarrowLeft size={20}/> back</Link>
      <div className=' min-h-[364px] flex flex-col justify-end'>
        <Input className="flex flex-col gap-2 mb-6" inputType={InputType.Auth} type="email" text="Email" placeholder="Email"/>
        <button className='btn btn-outline-primary mt-6 uppercase w-full'>Reset password</button>
      </div>
    </div>
  )
}
