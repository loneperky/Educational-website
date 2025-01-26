import '../styles/index.css'
import { Link,NavLink } from 'react-router-dom'

function Header (){
  return(
    <>
    <div className="nav">
       <div className="heading">
          <h1 className='logo'>EDU MEETING</h1>
        </div>
       <div className="heading-links">
          <ul>
            <li className='hide'>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className='hide'>
             <NavLink> APPLY NOW</NavLink>
             </li>
            <li className='hide'>
             <NavLink>PAGES</NavLink>
             </li>
            <li className='hide'>
             <NavLink> COURSES</NavLink>
             </li>
            <li className='hide'>
             <NavLink> CONTACT US</NavLink>
             </li>
            <li> 
             <div className="nav-btn">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
             </div>
           </li>
          </ul>
       </div>
    </div>

    </>
  )
}



{/* <h3>UPCOMING MEETINGS </h3>
<hr /> */}

function Video(){
  return(
    <>
      <video autoPlay="on" muted loop id="bg-video">
      <source src="/Images/course-video.mp4" type="video/mp4" />
      </video>
    </>
  )
}
const num = Math.random() * 10
{num?'hello':'jdjj'}
export default Header
export {Video}