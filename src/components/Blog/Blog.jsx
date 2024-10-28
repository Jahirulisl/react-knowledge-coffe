
import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {
    // console.log(blog)
    const {title,cover,author,posted_date,athor_img,hashtags,reading_time} = blog;

    return (
       <div>
          <img src={cover} alt={`cover picture of the title ${title}`} />
          <div className='flex justify-between'>
             <div className='flex'>
                <img className='w-14 ' src={athor_img} alt="" />
                <div className='ml-6'>
                   <h3 className='text-2xl'>{author}</h3>
                   <p>{posted_date}</p> 
                </div>
             </div>
             <div>
                <span>{reading_time}min read</span>
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
   blog:PropTypes.object.isRequired
}
export default Blog;
