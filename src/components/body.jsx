import Type from "./edu-type"
import { Meetings,Application,Courses,Inputs } from "./edu-type"
import '../styles/index.css'
import { Video } from "./header"
import Header from "./header"
import { Count } from "./edu-type"
function Body(){
  return(
    <>
      <div className="intro">
        <div className="collective">
        <Video />
        <Header />

        <div className="front-intro">
          <h3>HELLO STUDENTS</h3>
          <h2>WELCOME TO EDUCATION</h2>
          <p>This is an edu meeting page developed by OtaxyTechnologies.</p>
           <p> This is an Educational website that portrays a   meeting </p>
           <p>schedule for students in their University days.</p>
          <div className="join-btn">
        <button>JOIN US NOW</button>
        </div>
        </div>
       
      </div>
      </div>
      <div className="total-cover-meetings">
        <div className="edu-type">
          <Type img="/Images/service-icon-01.png" alt="" head="Online Meeting" details="We are going to be having Online Classes For Our Final year Brethrem"/>
          <Type img="/Images/service-icon-02.png" alt="" head="Best Networking" details="Studyimg in Our campus helps to boost your Study Morale and Principles"/>
          <Type img="/Images/service-icon-03.png" alt="" head="Best Teachers" details="Over at our University we have some of the most Intelligent and qualified teachers in the world!"/>
        </div>

          <div className="upcoming-meetings">
            <div className="">
              <div className="hr-h3">
              <h3>UPCOMING MEETINGS </h3>
              <hr />
              <div className="combine-lect">
              <Meetings img="/Images/meeting-03.jpg" alt="" date="DEC" day="11" type="Higher Education Conference" entails="We are Organising a conference that teches  " entails2="attain development goals in Life."/>
                  <Meetings img="/Images/meeting-01.jpg" alt="" date="NOV" day="10" type="Appplied Statistics" entails="The course basically entails" entails2="How to use Statistics to Solve complex problems"/>
                  <Meetings img="/Images/meeting-02.jpg" alt="" date="NOV" day="24" type="Online Teaching Technique" entails="We are comitted to" entails2="Bring Education Into your Home and Ensuring "/>

                    <Meetings img="/Images/meeting-04.jpg" alt="" date="DEC" day="15" type="Student Training Meetup" entails="The Campus offers an intensive training to its student" entails2="Which helps to shapen the student"/>
                    <Meetings img="/Images/meeting-03.jpg" alt="" date="DEC" day="11" type="Higher Education Conference" entails="We are Organising a conference that teches student" entails2="attain development goals in Life."/>
                    <Meetings img="/Images/meeting-04.jpg" alt="" date="DEC" day="15" type="Student Training Meetup" entails="The Campus offers an intensive training to its student" entails2="Which helps to shapen the student"/>
              </div>
            
              </div>
            </div>

          </div>
      </div>


      <div className="apply-about">
        <div className="application">
          <Application apply="APPLY FOR BACHELOR DEGREE" p1="Here in this prstigious university we have different " p2="types of Degrees among which is the Bachelor's Degree" p3="" btn="JOIN US NOW"/>
          <Application apply="APPLY FOR MASTERS DEGREE" p1="We offer one of the best research facilities for further" p2="stydies which has helped to build our reputation in the past Decade" p3="" btn="JOIN US NOW"/>
       </div>
       <div className="about-edu">
        <h3>About Edu Meetings</h3>
        <p>If you want to get the latest News on the school Campus meetings and timetables tou</p>
        <p>should try to visite the Dean office or the HOD offices respectively.</p>
        <p>should try to visite the Dean office or the HOD offices respectively.</p>
        <h3>About Edu Meetings</h3>
        <p>If you want to get the latest News on the school Campus meetings and timetables tou</p>
        <p>If you want to get the latest News on the school Campus meetings and timetables tou</p>
        <p> should try to visite the Dean office or the HOD offices respectively.</p>
        <h3>About Edu Meetings</h3>
        <p>If you want to get the latest News on the school Campus meetings and timetables tou </p>
        <p>If you want to get the latest News on the school Campus meetings and timetables tou </p>
        <p> should try to visite the Dean office or the HOD offices respectively.</p>
        <h3>About Edu Meetings</h3>
        <p>If you want to get the latest News on the school Campus meetings and timetables tou</p>
        <p> should try to visite the Dean office or the HOD offices respectively.</p>
       </div>
      </div>

<div className="popular-course">
   <h2 className="our">OUR POPULAR COURSES</h2>
       <hr />
       <div className="course-details">
        <div className="course1">
        <Courses img="/Images/course-01.jpg" alt=""title="Bio-Chemistry" detail1="Learn Chemistry with The Best"detail2="In a well Equip Laboratory" price="$400"/>
        </div>

        <div className="course2">
        <Courses img="/Images/course-02.jpg" alt=""title="Computer Science" detail1="Our Computer laboratory is equip " detail2=" to meet today ICT demands"price="$350"/>
        </div>
   
        <div className="course3">
        <Courses img="/Images/course-03.jpg" alt=""title="Statistics" detail1="We have Qulaified Statistician to make  " detail2="ensure your ward learns from the best" price="$400"/>
        </div>
      
        <div className="course4">
        <Courses img="/Images/course-04.jpg" alt=""title="Physics" detail1="Our Physics facilities is the best In the " detail2="To ensure quick learning."  price="$560"/>
        </div>

       </div>

</div>
       
      <div className="few-facts">
          <div className="few1">
          <h1>A Few Facts About Our University</h1>
          <div className="countdown">
            <div className="join-course1">
              <div className="count1">
                <Count per="94%" para="Sucessed Students" img="" alt=""/>
              </div>
              <div className="count2">
                <Count per="126" para="Current Teachers" img="" alt=""/>
              </div>
            </div>

            <div className="join-course2">
              <div className="count3">
                <Count per="2345" para="New Student" img="" alt=""/>
              </div>
              <div className="count4">
                <Count per="32" para="Awards" img="" alt=""/>
              </div>
            </div>
          
            
           </div>
          </div>
       <img src="/Images/video-item-bg.jpg" alt="" />
      </div>

      <div className="contact-info">
        <div className="contact-details">
        <h2>LET'S GET IN TOUCH</h2>
        <hr />
        <br />
        <div className="inputs">
          <Inputs type="text" place="YOURNAME...*"/>
          <Inputs type="email" place="YOUR EMAIL..."/>
          <Inputs type="text" place="SUBJECT...*"/><br />
          <textarea name="" id="" placeholder="YOUR MESSAGE..."></textarea><br />
          <button className="send-btn">SEND MESSAGE NOW</button>
        </div>
        </div>
        <div className="footer">
        <hr />
        <h3>COPYRIGHT &copy; 2025 EDU MEETING CO LTD,ALL RIGHTS RESERVED.</h3>
        <h4>OTAX-TECHNOLOGIES</h4>
      </div>
      </div>

    </>
  )
}
export default Body