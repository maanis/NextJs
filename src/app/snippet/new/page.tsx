import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import React from 'react'

const Snippet = () => {

    
    return (
        <form className='space-y-3'>
            <div>
                <Label>Title</Label>
                <Input type='text' />
            </div>
            <div>
                <Label>Code</Label>
                <Textarea></Textarea>
            </div>
            <Button type='submit'>Create</Button>
        </form>
    )
}

export default Snippet