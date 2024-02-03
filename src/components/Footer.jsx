import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer>
    <ul className="footer__categories">
        <li><Link to="/posts/categories/:Isekai">Isekai</Link></li>
        <li><Link to="/posts/categories/:Josei">Josei</Link></li>
        <li><Link to="/posts/categories/:Mecha">Mecha</Link></li>
        <li><Link to="/posts/categories/:Romance">Romance</Link></li>
        <li><Link to="/posts/categories/:Action">Action</Link></li>
        <li><Link to="/posts/categories/:Adventure">Adventure</Link></li>
        <li><Link to="/posts/categories/:Dark Shonen">Dark Shonen</Link></li>
        <li><Link to="/posts/categories/:Action Dark Fantasy">Action Dark Fantasy</Link></li>
    </ul>
     <div className="footer__copyright">
      <small>All Rights Reserved &copy; Copyright, EGATOR Tutorials.</small>
     </div>


   </footer>
  )
}

export default Footer
