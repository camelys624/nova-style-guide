import * as React from 'react'
import Layout from "../components/Layout"
import {graphql} from "gatsby";
import hljs from "highlight.js"
import {MDXRenderer} from "gatsby-plugin-mdx";

class IndexPage extends React.Component {
    componentDidMount() {
        document.querySelectorAll('pre code').forEach((block: any) => {
            hljs.highlightBlock(block);
        })
    }

    render () {
    // @ts-ignore
    const {data} = this.props

    return (
        <Layout>
          <MDXRenderer>{data.allMdx.nodes[0].body}</MDXRenderer>
        </Layout>
    )
  }
}

export const query = graphql`
    query {
      allMdx(filter: {slug: {regex: "/guide-summary/"}}) {
        nodes {
          body
          id
          slug
          frontmatter {
                        date(formatString: "MMMM D, YYYY")
            title
          }
        }
      }
    }
`

export default IndexPage
