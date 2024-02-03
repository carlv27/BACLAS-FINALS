import React from 'react'
import Thumbnail from '../images/anime.jpeg'
import PostAuthor from '../components/PostAuthor'
const HomePage = () => {
    return (
        <section className="post-detail">
      <div className="container post detail__container">
         <div className="post-detail_header">
          <PostAuthor/>
         <div className="post-detail__buttons">
        
          
        </div>
     </div>
     <h1>Anime</h1>
     <div className="post-detail__thumbnail">
      <img src={Thumbnail} alt="" />
     </div>
     <p>
     Anime is hand-drawn and computer-generated animation originating from Japan. Outside Japan and in English, anime refers specifically to animation produced in Japan. However, in Japan and in Japanese, anime describes all animated works, regardless of style or origin.
     </p>
     <p>
     It is typically used to refer to animation created in Japanese animation. Their bright colors and intricate animation represent many genres, including action, adventure, fantasy, science fiction, and romance. Anime originated in the early 20th century when Japanese animation emerged as a distinct art form
     </p>
 
      </div>
    </section>
    )
}

export default HomePage