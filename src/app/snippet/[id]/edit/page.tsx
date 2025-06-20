import EditCodeSnippet from '@/components/EditCodeSnippet'
import { prisma } from '@/lib/prisma'
import React from 'react'


type props = {
    params: Promise<{ id: string }>
}

const EditPage = async ({ params }: props) => {
    const id = parseInt((await params).id)

    const snippet = await prisma.snippet.findUnique({
        where: { id }
    })
    return snippet ? (
        <div>
            <EditCodeSnippet snippet={snippet} />
        </div>
    ) : 'No snippet'
}

export default EditPage