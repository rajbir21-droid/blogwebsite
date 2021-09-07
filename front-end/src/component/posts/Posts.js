import Post from '../post/Post'
import './posts.css';

export default function Posts({posts}){
    return(
        <div className=" container-fluid posts">
            {posts.map((p)=>(
                <Post post={p}/>
            ))}
        </div>
    )
}