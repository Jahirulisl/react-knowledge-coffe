import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/BLOGS/Blogs'
import Bookmark from './components/Bookmarks/Bookmark'
import { useState } from 'react'


function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const handleAddToBookmark = blog =>{
    console.log(blog)
  }

  return (
    <>
       < Header></Header>
       <div className='md:flex max-w-7xl mx-8'>
           <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>  
          <Bookmark></Bookmark>
       </div>
    </>
  )
}

export default App


