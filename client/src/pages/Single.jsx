import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../components/Menu'
import moment from 'moment/moment'
import { AuthContext } from '../context/authContext'

function Single() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const postId = location.pathname.split('/')[2];
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect( ()=> {
    const fetchData = async () =>{
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [postId])

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/api/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err)
    }

  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className='single'>
      <div className="content">
        <img src={`../upload/${post?.img}`} alt='post image' />

        <div className="user">
          { post.userImage &&
            <img src={post.userImage} alt='user image' />
          }
          <div className="info">
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser.username === post.username &&
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="edit icon" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="delete icon" />
            </div>
          }
        </div>

        <h1>{post.title}</h1>
        <p>{getText(post.desc)}</p>

      </div>
      <div className="menu">
        <Menu cat={post.cat}/>
      </div>
    </div>

  )
}

export default Single


