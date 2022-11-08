import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({profilePhoto, name, username, date, children, like, comments, rt}) => {
  return (
    <div className="post">
        <div className="post__col-1">
            <Link to={`/${username}`}>
                <img src={profilePhoto} alt="profile photo" />
            </Link>
        </div>
        <div className="post__col-2">
            <div className="post__header">
                <div className='post__header-user'>
                    <span>{name}</span>
                    <span>{`@${username}`}</span>
                    &#8226;
                    <span>{date}</span>
                </div>
                <div className='post__header-btn'>
                    <button><i class="bi bi-three-dots"></i></button>
                </div>
            </div>
            <div className="post__main">
                {children}
            </div>
            <div className="post__footer">
                {/* comment */}
                <button>
                    <i class="bi bi-chat"></i>
                    <span>{comments}</span>
                </button>

                {/* retweet */}
                <button>
                    <i class="bi bi-arrow-repeat"></i>
                    <span>{rt}</span>
                </button>

                {/* like */}
                <button>
                    <i class="bi bi-heart"></i>
                    <span>{like}</span>
                </button>
                
                {/* share */}
                <button>
                    <i class="bi bi-upload"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Post