import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import * as React from 'react'

const Home = () => {
    const [text, setText] = useState("")

    return (
        <div className="flex h-full w-full items-end justify-center">
            <Textarea placeholder="Enter text here" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

export default Home