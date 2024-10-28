import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Header/BLOGS/Blogs'
import Bookmark from './components/Bookmarks/Bookmark'


function App() {
  

  return (
    <>
       < Header></Header>
       <div className='md:flex'>
       <Blogs></Blogs>  
       <Bookmark></Bookmark>
       </div>
    </>
  )
}

export default App


