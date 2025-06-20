import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { Label } from '@radix-ui/react-label'
import { redirect } from 'next/navigation'
import React from 'react'

const Snippet = () => {

    const createSnippet = async (formData: FormData) => {
        "use server"
        const title = formData.get('title') as string
        const code = formData.get('code') as string

        const snippet = await prisma.snippet.create({
            data: {
                title, code
            }
        })
        console.log(snippet)
        redirect('/')
    }

    return (
        <form action={createSnippet} className='space-y-3'>
            <div>
                <Label>Title</Label>
                <Input type='text' name='title' id='title' />
            </div>
            <div>
                <Label>Code</Label>
                <Textarea name='code' id='code'></Textarea>
            </div>
            <Button type='submit'>Create</Button>
        </form>
    )
}

export default Snippet