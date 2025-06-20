import { Button } from '@/components/ui/button'
import type { Snippet } from '@/generated/prisma'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

const page = async () => {

  const snippets = await prisma.snippet.findMany()
  if (!snippets) return <h2>Loading...</h2>
  return (
    <div className='text-red-500'>
      <div className="flex justify-between items-center">
        <h2 className='text-2xl font-bold'>Snippets</h2>
        <Link href={'/snippet/new'}><Button>Create Snippet</Button></Link>
      </div>
      {snippets.map((e: Snippet) => (
        <div key={e.id} className='bg-zinc-300 mt-4 p-4 rounded-md flex items-center justify-between'>
          <h2>{e.title}</h2>
          <Link href={`/snippet/${e.id}`}><Button variant={'link'}>view</Button></Link>
        </div>
      ))}
    </div>
  )
}

export default page