import { BasicTemplate } from 'src/templates'

import BlogPostTop from './BlogPostTop'
import BlogPostContent from './BlogPostContent'
import BlogPostReadMore from './BlogPostReadMore'

const BlogPostPage = () => {
  return (
    <BasicTemplate color="basic">
        <BlogPostTop />

        <BlogPostContent />

        <BlogPostReadMore />
    </BasicTemplate>
  )
}

export default BlogPostPage