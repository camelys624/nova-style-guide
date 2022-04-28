import React, {useEffect} from "react"
import {graphql} from "gatsby"
import {MDXRenderer} from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import {initHighlight} from "../utils"

const BlogPost = ({data}: any) => {
    useEffect(() => {
        initHighlight()
    })

    const href = 'https://dev.azure.com/hp-csrd-validation/MIMIR/_git/nova-style-guide?path=/doc/'
    const {mdx: { slug }} = data

    return (
        <Layout>
            <h2>{data.mdx.frontmatter.title}</h2>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            <p>
              发现错误？想参与编辑？
              <a href={href + slug + '.mdx'} rel="noopener" target="_blank">在 ADO 上修改此文档！</a>
            </p>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      slug
      body
    }
  }
`

export default BlogPost
