import { deleteSnippet } from '@/actions'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

type props = {
    params: Promise<{ id: string }>
}
const SnippetPage = async ({ params }: props) => {
    const id = parseInt((await params).id)

    const snippet = await prisma.snippet.findUnique({
        where: { id }
    })

    const deleteSnippett = deleteSnippet.bind(null, id)
    return snippet ? (
        <div>
            <div className="flex justify-between items-center">
                <h2>{snippet.title}</h2>
                <div className="flex items-center gap-3">
                    <Link href={`/snippet/${snippet.id}/edit`}><Button>Edit</Button></Link>
                    <form action={deleteSnippett}>
                        <Button type='submit' variant={'destructive'}>Delete</Button>

                    </form>
                </div>
            </div>
            <div className='bg-zinc-300 p-4 rounded-md mt-4'>
                <pre>
                    <code>
                        {snippet.code}
                    </code>
                </pre>
            </div>
        </div>
    ) : 'no snippet'
}

export default SnippetPage