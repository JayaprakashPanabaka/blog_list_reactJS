// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsList} = props

  return (
    <>
      <div>
        <ul>
          {blogsList.map(eachItem => (
            <li className="blogs-container" key={eachItem.id}>
              <div>
                <h3 className="title">{eachItem.title}</h3>
                <p className="description">{eachItem.description}</p>
              </div>
              <div>
                <span className="published-date">{eachItem.publishedDate}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default BlogItem
