// Write your JS code here
import BlogItem from '../BlogItem/index'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <>
      <div>
        {/* <h1>BlogList</h1> */}
        <BlogItem blogsList={blogsList} />
      </div>
    </>
  )
}

export default BlogList
