import { BasicTemplate } from 'src/templates'

import BlogTop from './BlogTop'
import BlogPreviews from './BlogPreviews'

const BlogPage = () => {
  return (
    <BasicTemplate color="basic">
      <BlogTop />

      <BlogPreviews />
    </BasicTemplate>
  )
}

export default BlogPage