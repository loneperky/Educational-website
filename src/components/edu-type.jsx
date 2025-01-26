import React from 'react'


function Type (props){
  return(
    <>
      <div className="type">
        <div className="best">
          <img src={props.img} alt={props.alt} />
          <h3>{props.head}</h3>
          <p>{props.details}</p>
        </div>

      </div>
    </>
  )
}


function Meetings(props){
  return(
    <>
      <div className="overview">
        <img src={props.img} alt={props.alt} />
          <div className="lect-details">
            <span>{props.date}</span>
            <span>{props.day}</span>
            <div className="lecture-title">
              <h3>{props.type}</h3>
              <p>{props.entails}</p>
              <p>{props.entails2}</p>
            </div>
          </div>
      </div> 
    </>
  )
}

function Application(props){
  return(
    <>
    <div className="apply">
      <h2>{props.apply}</h2>
      <p>{props.p1}</p>
      <p>{props.p2}</p>
      <p>{props.p3}</p>
      <button>{props.btn}</button>
    </div>
    </>
  )
}

function Courses(props){
  return(
    <>
    <div className="price-coureser">
    <img src={props.img} alt={props.alt} />
    <div className="course-exp">
    <h2>{props.title}</h2>
         <p>{props.detail1}</p>
         <p>{props.detail2}</p>
         <p>{props.price}</p>
    </div>

    </div>
    

    </>
  )
}

function Count(props){
  return(
    <>
    <div className="county">
    <h1>{props.per}</h1>
    <p>{props.para}</p>
    </div>
    </>
  )
}

function Inputs(props){
  return(
    <>
      <input type={props.type} placeholder={props.place}/>
    </>
  )
}

function Metcat(){
  return(
    <>
      
    </>
  )
}




export default Type
export {Meetings,Application,Courses,Count,Inputs}