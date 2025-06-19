import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='text-red-500'>
      <div className="flex justify-between items-center">
        <h2 className='text-2xl font-bold'>Snippets</h2>
        <Link href={'/snippet/new'}><Button>Create Snippet</Button></Link>
      </div>
    </div>
  )
}

export default page