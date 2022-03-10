import hljs from "highlight.js"

export const initHighlight = () => {
    document.querySelectorAll('pre code').forEach((block: any) => {
        hljs.highlightBlock(block);
    })
}
