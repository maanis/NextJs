"use client"

import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { editSnippet } from '@/actions'

type props = {
    snippet: {
        code: string;
        title: string;
        id: number;
    }
}
const EditCodeSnippet = ({ snippet }: props) => {
    const [code, setCode] = useState<string>(snippet.code)

    const handleEditorChange = (value: string = '') => {
        setCode(value)
    }

    // const saveSnippet = async () => {
    //     editSnippet(snippet.id, code)
    //     console.log('hey')
    // }

    const saveSnippet = editSnippet.bind(null, snippet.id, code)



    return (
        <div>
            <form action={saveSnippet} className="flex items-center justify-between">
                <h2 className='text-2xl font-semibold'>{snippet.title}:</h2>
                <Button type='submit'>Save</Button>
            </form>
            <Editor
                height="40vh"
                defaultLanguage="javascript"
                theme='vs-dark'
                defaultValue={code}
                className='mt-4'
                onChange={handleEditorChange}
            />
        </div>
    )
}

export default EditCodeSnippet