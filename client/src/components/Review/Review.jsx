import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './Review.css';
import Navbar from '../Navbar/Navbar'

function Review() {

    const [code, setCode] = useState(` function sum() {
        return 1 + 1
    }`)
    const [review, setReview] = useState(``)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        prism.highlightAll()
    }, [])
    
    async function reviewCode() {
        setLoading(true)
        try {
        const response = await axios.post('http://localhost:3000/ai/get-review', { code })
        console.log(response)
        setReview(response.data)
        } catch (error) {
        setReview("Error fetching review")
        console.log(error);
        }
        setLoading(false)
    }

    return (
        <main>
            <Navbar />
            <div className="left">
            <div className="code">
                <Editor
                value={code}
                onValueChange={code => setCode(code)}
                highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    height: "100%",
                    width: "100%"
                }}
                />
            </div>
            <div onClick={reviewCode} className="review">Review</div>
            </div>
            <div className="right">
            {loading ? (
                <div className="spinner"></div>
            ) : (
                <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
            )}
            </div>
        </main>
    )
}

export default Review