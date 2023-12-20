import { Button } from '@/components/ui/button';
import Footer from '@/layout/footer';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {

    const router = useRouter();

  return (
    <>
    <div className="flex h-screen lg:bg-none bg-cover bg-iman text-black lg:text-white">
      <div className='mx-auto flex justify-center lg:w-full lg:h-screen lg:grid lg:grid-cols-3'>
        <div className='lg:m-auto lg:col-span-2 lg:w-3/5 grid grid-rows-4 lg:grid-rows-none'>
          <div></div>
          <div className=''>
            <h1 className='mb-2 text-8xl flex justify-center'>作品集</h1>
            <h1 className='flex justify-center mb-2 text-2xl italic'>Sakuhin-shū</h1>
            <p className='flex justify-center my-4 lg:my-5 text-xl italic'>Collection of Works</p>
          </div>
          <div className='flex flex-col mt-8 lg:m-0 row-span-2 space-y-2 items-center lg:space-y-0 lg:flex-row lg:justify-center'>
            <Button className="mx-2 lg:bg-custom-primary lg:hover:bg-primary/90">
              <p className='text-xl'>Details</p>
            </Button>
            <Button className="mx-2 lg:bg-custom-primary lg:hover:bg-primary/90">
              <p className='text-xl'>Resume</p>
            </Button>
            <Button className="mx-2 lg:bg-custom-primary lg:hover:bg-primary/90">
              <p className='text-xl'>
                <Link href='/projects'>
                  Projects
                </Link>
              </p>
            </Button>
            <Button className="mx-2 lg:bg-custom-primary lg:hover:bg-primary/90">
              <p className='text-xl'>Contact</p>
            </Button>
          </div>
        </div>
        <div className='hidden lg:block lg:col-span-1 lg:bg-iman lg:bg-cover'></div>
      </div>
      <Footer />
    </div>
    </>
  )
}