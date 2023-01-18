import { Mermaid } from 'mdx-mermaid/Mermaid'

const Diagram = ({ code }) => {
  return <Mermaid config={{ mermaid: { theme: 'dark' } }} chart={code} />
}

export default Diagram
