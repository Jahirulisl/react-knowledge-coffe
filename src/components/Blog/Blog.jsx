import PropTypes from 'prop-types'; 
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark}) => {
    // console.log(blog)
    const {title,cover,author,posted_date,athor_img,hashtags,reading_time} = blog;

    return (
       <div className='mb-20'>
          <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
          <div className='flex justify-between mb-4'>
             <div className='flex'>
                <img className='w-14 ' src={athor_img} alt="" />
                <div className='ml-6'>
                   <h3 className='text-2xl'>{author}</h3>
                   <p>{posted_date}</p> 
                </div>
             </div>
             <div>
                <span>{reading_time}min read</span>

                <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-600'><FaRegBookmark></FaRegBookmark></button>
             </div>
          </div>

          <h2>{title}</h2>
             <p>
                {
                  hashtags.map((has,idx) => <span key={idx}> <a hirf=""></a>#{has}</span>)  
                }
             </p>
            
       </div>
    );
};
Blog.PropTypes = {
   blog:PropTypes.object.isRequired,
   handleAddToBookmark:propTypes.func
}
export default Blog;

