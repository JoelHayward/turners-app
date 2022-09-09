import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormCSS from "./FormOne.module.css";
import CheckGrey from "../../icons/CheckVectorGrey.svg";
import GreyMark from "../../icons/greyQuestionMark.svg";
import redAsterix from "../../icons/redStar.svg";

export default function FormOne() {
  // NAVIGATE TO NEXT PAGE
  const navigate = useNavigate();
  const navigateFormPage2 = () => {
    navigate("/FormPage2");
  };
  // SET ACTIVE BUTTON
  const [fillSelected1, setFillSelected1] = useState("");
  const [fillSelected2, setFillSelected2] = useState("");

  const activeBackground = "#0071c4";
  // FIRST YES AND NO
  const confimYes1 = () => {
    if (fillSelected1 === activeBackground) {
      setFillSelected1("");
    } else {
      setFillSelected1(activeBackground);
      setFillSelected2("");
    }
  };

  const confimNo1 = () => {
    if (fillSelected2 === activeBackground) {
      setFillSelected2("");
    } else {
      setFillSelected2(activeBackground);
      setFillSelected1("");
    }
  };

  // SECOND YES AND NO
  const [fillSelected3, setFillSelected3] = useState("");
  const [fillSelected4, setFillSelected4] = useState("");

  const confimYes2 = () => {
    if (fillSelected3 === activeBackground) {
      setFillSelected3("");
    } else {
      setFillSelected3(activeBackground);
      setFillSelected4("");
    }
  };

  const confimNo2 = () => {
    if (fillSelected4 === activeBackground) {
      setFillSelected4("");
    } else {
      setFillSelected4(activeBackground);
      setFillSelected3("");
    }
  };

  // PERSONAL OR BUSINES QUESTION
  const [fillSelected5, setFillSelected5] = useState("");
  const [fillSelected6, setFillSelected6] = useState("");

  const confimPersonal = () => {
    if (fillSelected5 === activeBackground) {
      setFillSelected5("");
    } else {
      setFillSelected5(activeBackground);
      setFillSelected6("");
    }
  };

  const confimBusiness = () => {
    if (fillSelected6 === activeBackground) {
      setFillSelected6("");
    } else {
      setFillSelected6(activeBackground);
      setFillSelected5("");
    }
  };

  // FEMALE, MALE, OR OTHER
  const [fillSelected7, setFillSelected7] = useState("");
  const [fillSelected8, setFillSelected8] = useState("");
  const [fillSelected9, setFillSelected9] = useState("");

  const confimFemale = () => {
    if (fillSelected7 === activeBackground) {
      setFillSelected7("");
    } else {
      setFillSelected7(activeBackground);
      setFillSelected8("");
      setFillSelected9("");
    }
  };

  const confimMale = () => {
    if (fillSelected8 === activeBackground) {
      setFillSelected8("");
    } else {
      setFillSelected8(activeBackground);
      setFillSelected9("");
      setFillSelected7("");
    }
  };
  const confimOther = () => {
    if (fillSelected9 === activeBackground) {
      setFillSelected9("");
    } else {
      setFillSelected9(activeBackground);
      setFillSelected8("");
      setFillSelected7("");
    }
  };

  const [fillSelected10, setFillSelected10] = useState("");
  const [fillSelected11, setFillSelected11] = useState("");

  const confimYes3 = () => {
    if (fillSelected10 === activeBackground) {
      setFillSelected10("");
    } else {
      setFillSelected10(activeBackground);
      setFillSelected11("");
    }
  };

  const confimNo3 = () => {
    if (fillSelected11 === activeBackground) {
      setFillSelected11("");
    } else {
      setFillSelected11(activeBackground);
      setFillSelected10("");
    }
  };

  const [fillSelected12, setFillSelected12] = useState("");
  const [fillSelected13, setFillSelected13] = useState("");

  const confimYes4 = () => {
    if (fillSelected12 === activeBackground) {
      setFillSelected12("");
    } else {
      setFillSelected12(activeBackground);
      setFillSelected13("");
    }
  };

  const confimNo4 = () => {
    if (fillSelected13 === activeBackground) {
      setFillSelected13("");
    } else {
      setFillSelected13(activeBackground);
      setFillSelected12("");
    }
  };

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
            <img
              className="CheckVector"
              src={CheckGrey}
              alt="form progress bar"
            ></img>
          </div>
          <div className={FormCSS.Ellipse6}>
            <img
              className="CheckVector"
              src={CheckGrey}
              alt="form progress bar"
            ></img>
          </div>
          <div className={FormCSS.Arrow1}></div>
          <div className={FormCSS.Ellipse7}>
            <img
              className="CheckVector"
              src={CheckGrey}
              alt="form progress bar"
            ></img>
          </div>
          <div className={FormCSS.Arrow2}></div>
        </div>

        {/* FORM */}
        <div>
          {/* FIRST RECTANGLE */}
          <div>
            <span className={FormCSS.Alreadyamember}>Already a member?</span>
            <img
              className={FormCSS.RedStar}
              src={redAsterix}
              alt="red asterix"
            ></img>
          </div>
          <div className={FormCSS.Rectangle3609}>
            <span className={FormCSS.Areyouanexistingcustomer}>
              Are you an existing customer?
            </span>
            <div className={FormCSS.answer}>
              <button
                className={FormCSS.Rectangle3610}
                style={{ background: fillSelected1 }}
                onClick={confimYes1}
              >
                <span className={FormCSS.Yes}>Yes</span>
              </button>
              <button
                className={FormCSS.Rectangle3611}
                style={{ background: fillSelected2 }}
                onClick={confimNo1}
              >
                <span className={FormCSS.No}>No</span>
              </button>
            </div>
          </div>
          {/* SECOND RECTANGLE */}
          <div>
            <span className={FormCSS.CarDetails}>Car Details</span>
            <img
              className={FormCSS.RedStar}
              src={redAsterix}
              alt="red asterix"
            ></img>
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
              <input
                className={FormCSS.Rectangle1234}
                placeholder="ABC123"
              ></input>

              <div className={FormCSS.answer}>
                <button
                  className={FormCSS.Rectangle4610}
                  style={{ background: fillSelected3 }}
                  onClick={confimYes2}
                >
                  <span className={FormCSS.Yes}>Yes</span>
                </button>
                <button
                  className={FormCSS.Rectangle4611}
                  style={{ background: fillSelected4 }}
                  onClick={confimNo2}
                >
                  <span className={FormCSS.No}>No</span>
                </button>
              </div>
              <div className={FormCSS.PersonalORBusiness}>
                <button
                  className={FormCSS.Rectangle3612}
                  style={{ background: fillSelected5 }}
                  onClick={confimPersonal}
                >
                  <span className={FormCSS.Personal}>Personal</span>
                </button>
                <button
                  className={FormCSS.Rectangle3613}
                  style={{ background: fillSelected6 }}
                  onClick={confimBusiness}
                >
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
            <img
              className={FormCSS.RedStar}
              src={redAsterix}
              alt="red asterix"
            ></img>
          </div>
          <div className={FormCSS.Frame89}>
            <div className={FormCSS.column1}>
              <span className={FormCSS.DateofBirth}>Date of Birth</span>
              <span className={FormCSS.gender}>
                What gender do you identify as?
              </span>
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
              <span className={FormCSS.reason}>
                If yes, what was the reason?
              </span>
              <div className={FormCSS.GreyMark}>
                <div className={FormCSS.addingDriver}>
                  <span className={FormCSS.adddriver}>Add another driver?</span>
                </div>

                <img src={GreyMark} alt="form progress bar"></img>
              </div>
            </div>
            <div className={FormCSS.column2}>
              <input
                className={FormCSS.RectangleDOB}
                placeholder="DD/MM/YYYY"
              ></input>
              <div className={FormCSS.maleFemaleOther}>
                <button
                  className={FormCSS.Rectanglefemale}
                  style={{ background: fillSelected7 }}
                  onClick={confimFemale}
                >
                  <span className={FormCSS.Female}>Female</span>
                </button>
                <button
                  className={FormCSS.Rectanglemale}
                  style={{ background: fillSelected8 }}
                  onClick={confimMale}
                >
                  <span className={FormCSS.Male}>Male</span>
                </button>
                <button
                  className={FormCSS.Rectangleother}
                  style={{ background: fillSelected9 }}
                  onClick={confimOther}
                >
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
                <button
                  className={FormCSS.Rectangle46}
                  style={{ background: fillSelected10 }}
                  onClick={confimYes3}
                >
                  <span className={FormCSS.Yes}>Yes</span>
                </button>
                <button
                  className={FormCSS.Rectangle47}
                  style={{ background: fillSelected11 }}
                  onClick={confimNo3}
                >
                  <span className={FormCSS.No}>No</span>
                </button>
              </div>
              <select className={FormCSS.accidentReason}>
                <option value="none"></option>
                <option value="thierfault">It was their Fault</option>
                <option value="random">It was just kinda random</option>
                <option value="Dog">The dog did it</option>
                <option value="Honestly">
                  Honestly I didn't see, I was asleep
                </option>
                <option value="Superman">
                  It was Superman or some other hero guy
                </option>
              </select>
              <div className={FormCSS.driverAdd}>
                <button
                  className={FormCSS.Rectangle26}
                  style={{ background: fillSelected12 }}
                  onClick={confimYes4}
                >
                  <span className={FormCSS.Yes}>Yes</span>
                </button>
                <button
                  className={FormCSS.Rectangle27}
                  style={{ background: fillSelected13 }}
                  onClick={confimNo4}
                >
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

            <button onClick={navigateFormPage2} className={FormCSS.NextForm}>
              <span className={FormCSS.Next}>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
