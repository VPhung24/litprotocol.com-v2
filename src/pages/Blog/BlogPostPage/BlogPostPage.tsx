import { BasicTemplate } from 'src/templates'

import BlogPostTop from './BlogPostTop'
import BlogPostContent from './BlogPostContent'

const BlogPostPage = () => {
  return (
    <BasicTemplate color="basic">
        <BlogPostTop />

        <BlogPostContent />
    </BasicTemplate>
  )
}

export default BlogPostPage