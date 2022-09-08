import React, { useState} from "react";
import FormCSS from "./FormOne.module.css";
import CheckGrey from "../../icons/CheckVectorGrey.svg";
import GreyMark from "../../icons/greyQuestionMark.svg";
import redAsterix from "../../icons/redStar.svg";

export default function FormOne() {
const [changeColor, setChangeColor] = useState(false);


const select = () => {
  setChangeColor(!changeColor);
}



  return (
    <div>
       {/* LOAD BAR JSX */}
       <div className={FormCSS.loadBar}>
        <div className={FormCSS.Line21}></div>
        <div className={FormCSS.Ellipse4}></div>
        <div className={FormCSS.Line22}></div>
        <div className={FormCSS.Ellipse10}></div>
        <div className={FormCSS.Line23}></div>
        <div className={FormCSS.Ellipse11}></div>
        <div className={FormCSS.Line24}></div>
        <div className={FormCSS.Ellipse12}></div>
        <div className={FormCSS.Line25}></div>
      </div>
    <div className={FormCSS.mainForm}>
      {/* CHECK MARKS */}
      <div>
        <div className={FormCSS.Ellipse5}>
          <img className="CheckVector" src={CheckGrey}></img>
        </div>
        <div className={FormCSS.Ellipse6}>
          <img className="CheckVector" src={CheckGrey}></img>
        </div>
        <div className={FormCSS.Arrow1}></div>
        <div className={FormCSS.Ellipse7}>
          <img className="CheckVector" src={CheckGrey}></img>
        </div>
        <div className={FormCSS.Arrow2}></div>
      </div>

      {/* FORM */}
      <div>
        {/* FIRST RECTANGLE */}
        <div>
          <span className={FormCSS.Alreadyamember}>Already a member?</span>
          <img className={FormCSS.RedStar} src={redAsterix} alt="red asterix"></img>
        </div>
        <div className={FormCSS.Rectangle3609}>
          <span className={FormCSS.Areyouanexistingcustomer}>
            Are you an existing customer?
          </span>
          <div className={FormCSS.answer}>
            <button className={FormCSS.Rectangle3610} onClick={select}>
              <span className={FormCSS.Yes}>Yes</span>
            </button>
            <button className={FormCSS.Rectangle3611}>
              <span className={FormCSS.No}>No</span>
            </button>
          </div>
        </div>
        {/* SECOND RECTANGLE */}
        <div>
        <span className={FormCSS.CarDetails}>Car Details</span>
        <img className={FormCSS.RedStar} src={redAsterix} alt="red asterix"></img>
        </div>
        <div className={FormCSS.Rectangle3608}>
          <div className={FormCSS.QuestionColumn}>
            <span className={FormCSS.Enteryoucarsregistrationnumber}>
              Enter you car’s registration number
            </span>
            <span className={FormCSS.DidyoubuythiscarfromTurners}>
              Did you buy this car from Turners?
            </span>
            <span className={FormCSS.Whatisthemainuseofthiscar}>
              What is the main use of this car?
            </span>
            <span className={FormCSS.Whereisthecarmainlyparked}>
              Where is the car mainly parked?
            </span>
          </div>
          <div className={FormCSS.QuestionColumn}>
            <input className={FormCSS.Rectangle1234} placeholder="ABC123">
          
            </input>

            <div className={FormCSS.answer}>
              <button className={FormCSS.Rectangle4610}>
                <span className={FormCSS.Yes}>Yes</span>
              </button>
              <button className={FormCSS.Rectangle4611}>
                <span className={FormCSS.No}>No</span>
              </button>
            </div>
            <div className={FormCSS.PersonalORBusiness}>
              <button className={FormCSS.Rectangle3612}>
                <span className={FormCSS.Personal}>Personal</span>
              </button>
              <button className={FormCSS.Rectangle3613}>
                <span className={FormCSS.Business1}>Business</span>
              </button>
            </div>
            <input
              className={FormCSS.CarParked}
              placeholder="10 Garnet Road, Auckland, 1022"
            ></input>
            <span className={FormCSS.EnterManually}>Enter Manually</span>
          </div>
        </div>
        {/* THIRD RECTANGLE */}
        <div>
        <span className={FormCSS.DriverDetails}>Driver Details</span>
        <img className={FormCSS.RedStar} src={redAsterix} alt="red asterix"></img>
        </div>
        <div className={FormCSS.Frame89}>
          <div className={FormCSS.column1}>
            <span className={FormCSS.DateofBirth}>Date of Birth</span>
            <span className={FormCSS.gender}>What gender do you identify as?</span>
            <span className={FormCSS.currentlicense}>
              What licence do you currently hold?
            </span>
            <span className={FormCSS.timelicnese}>
              How many years have you had your driver’s license?
            </span>
            <span className={FormCSS.incidents}>
              In the past 5 years have you had any incidents, including damage
              or theft?
            </span>
            <span className={FormCSS.reason}>If yes, what was the reason?</span>
            <div className={FormCSS.GreyMark}>
              <div className={FormCSS.addingDriver}>
                <span className={FormCSS.adddriver}>Add another driver?</span>
              </div>

              <img src={GreyMark}></img>
            </div>
          </div>
          <div className={FormCSS.column2}>
            <input
              className={FormCSS.RectangleDOB}
              placeholder="DD/MM/YYYY"
            ></input>
            <div className={FormCSS.maleFemaleOther}>
              <button className={FormCSS.Rectanglefemale}>
                <span className={FormCSS.Female}>Female</span>
              </button>
              <button className={FormCSS.Rectanglemale}>
                <span className={FormCSS.Male}>Male</span>
              </button>
              <button className={FormCSS.Rectangleother}>
                <span className={FormCSS.Other}>Other</span>
              </button>
            </div>
            <select className={FormCSS.Group5181}>
              <option value="none"></option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <select className={FormCSS.howLong}>
              <option value="none"></option>
              <option value="0 > 5">0-5</option>
              <option value="6 > 10">6-10</option>
              <option value="6 > 10">11-15</option>
              <option value="6 > 10">16-20</option>
              <option value="6 > 10">20+</option>
            </select>
            <div className={FormCSS.accidents}>
              <button className={FormCSS.Rectangle46}>
                <span className={FormCSS.Yes}>Yes</span>
              </button>
              <button className={FormCSS.Rectangle47}>
                <span className={FormCSS.No}>No</span>
              </button>
            </div>
            <select className={FormCSS.accidentReason}>
              <option value="none"></option>
              <option value="thierfault">It was their Fault</option>
              <option value="random">It was just kinda random</option>
              <option value="Dog">The dog did it</option>
              <option value="Honestly">Honestly I didn't see, I was asleep</option>
              <option value="Superman">It was Superman or some other hero guy</option>
            </select>
            <div className={FormCSS.driverAdd}>
              <button className={FormCSS.Rectangle26}>
                <span className={FormCSS.Yes}>Yes</span>
              </button>
              <button className={FormCSS.Rectangle27}>
                <span className={FormCSS.No}>No</span>
              </button>
            </div>
          </div>
        </div>
        {/* SAVE AND NEXT BUTTONS */}
        <div className={FormCSS.EndForm}>
          <button className={FormCSS.SaveData}>
            <span className={FormCSS.Save}>Save</span>
          </button>
          <button className={FormCSS.NextForm}>
            <span className={FormCSS.Next}>Next</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
