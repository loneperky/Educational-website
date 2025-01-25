import Header from "./header"
import { Meetings } from "./edu-type"
function MEET(){
  return(
    <>
    <div className="heading">

      <h3>HERE ARE OUR UPCOMING MEETINGS</h3>
      <h1>UPCOMING MEEETINGS</h1>
    </div>
    <div className="body">
      <button>ALL MEETINGS</button>
      <button>SOON</button>
      <button>IMPORTANT</button>
      <button>ATTRACTIVE</button>
    </div>
    <div className="meet-1">
      <Meetings img="" alt="" date="" day="" type="" entails="" entails2=""/>
      <Meetings img="" alt="" date="" day="" type="" entails="" entails2=""/>
      <Meetings img="" alt="" date="" day="" type="" entails="" entails2=""/>
    </div>
    <div className="meet-2">
      <Meetings img="" alt="" date="" day="" type="" entails="" entails2=""/>
      <Meetings img="" alt="" date="" day="" type="" entails="" entails2=""/>
      <Meetings img="" alt="" date="" day="" type="" entails="" entails2=""/>
    </div>
    <div className="meet-3">
      <Meetings img="" alt="" date="" day="" type="" entails="" entails2=""/>
      <Meetings img="" alt="" date="" day="" type="" entails="" entails2=""/>
      <Meetings img="" alt="" date="" day="" type="" entails="" entails2=""/>
    </div>
    <div className="button-nip">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>&leth;</button>
    </div>
    <div className="footer">
        <hr />
        <h3>COPYRIGHT &copy; 2024 EDU MEETING CO, LTD.ALL RIGHTS RESERVED.</h3>
        <h3>OTAX-TECHNOLOGIES</h3>
    </div>
    </>
  )
}
export default MEET