import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/top3.png'

const PostDetail = () => {
  return (
    
    <section className="post-detail">
      <div className="container post detail__container">
         <div className="post-detail_header">
          <PostAuthor/>
         <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          
        </div>
     </div>
     <h1> MY TOP 3 ANIME</h1>
     <h3>This is my top 3 anime of 2023</h3>
     <div className="post-detail__thumbnail">
      <img src={Thumbnail} alt="" />
     </div>
     <p>
      <h3>TOP 1 : Jujutsu Kaisen</h3>
      Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 25 tankōbon volumes as of January 2024
     </p>
     <p>
     <h3>TOP 2 : Attack On Titan</h3>
     When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the humans' safe zone. During the carnage that follows, soldier Eren Jaeger sees one of the creatures devour his mother, which leads him to vow that he will kill every Titan. He enlists some friends who survived to help him, and that group is humanity's last hope for avoiding extinction at the hands of the monsters.

     </p>
     <p>
     <h3>TOP 3 : Bleach</h3>
     Ichigo Kurosaki never asked for the ability to see ghosts -- he was born with the gift. When his family is attacked by a Hollow -- a malevolent lost soul -- Ichigo becomes a Soul Reaper, dedicating his life to protecting the innocent and helping the tortured spirits themselves find peace.
     </p>
      </div>

    </section>
  )
}

export default PostDetail
