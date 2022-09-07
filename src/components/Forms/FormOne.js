import React from "react";
import FormCSS from "./FormOne.module.css";
import CheckGrey from "../../icons/CheckVectorGrey.svg";

export default function FormOne() {
  return (
    <div className={FormCSS.mainForm}>
      {/* CHECK MARKS */}
      <div>
        <div class={FormCSS.Ellipse5}>
          <img class="CheckVector" src={CheckGrey}></img>
        </div>
      </div>
      {/* FORM */}
      <div>
        {/* FIRST RECTANGLE */}
        <span class={FormCSS.Alreadyamember}>Already a member?</span>

        <div class={FormCSS.Rectangle3609}>
          <span class={FormCSS.Areyouanexistingcustomer}>
            Are you an existing customer?
          </span>
          <div className={FormCSS.answer}>
            <div class={FormCSS.Rectangle3610}>
              <span class={FormCSS.Yes}>Yes</span>
            </div>
            <div class={FormCSS.Rectangle3611}>
              <span class={FormCSS.No}>No</span>
            </div>
          </div>
        </div>
        {/* SECOND RECTANGLE */}
        <span class={FormCSS.CarDetails}>Car Details</span>
        <div class={FormCSS.Rectangle3608}>
          <div className={FormCSS.QuestionColumn}>
            <span class={FormCSS.Enteryoucarsregistrationnumber}>
              Enter you car’s registration number
            </span>
            <span class={FormCSS.DidyoubuythiscarfromTurners}>
              Did you buy this car from Turners?
            </span>
            <span class={FormCSS.Whatisthemainuseofthiscar}>
              What is the main use of this car?
            </span>
            <span class={FormCSS.Whereisthecarmainlyparked}>
              Where is the car mainly parked?
            </span>
          </div>
          <div className={FormCSS.QuestionColumn}>
            <div class={FormCSS.Rectangle1234}>
              <span class={FormCSS.ABC123}>ABC123</span>
            </div>
            <div className={FormCSS.answer}>
              <div class={FormCSS.Rectangle4610}>
                <span class={FormCSS.Yes}>Yes</span>
              </div>
              <div class={FormCSS.Rectangle4611}>
                <span class={FormCSS.No}>No</span>
              </div>
            </div>
            <div className={FormCSS.PersonalORBusiness}>
              <div class={FormCSS.Rectangle3612}>
                <span class={FormCSS.Personal}>Personal</span>
              </div>
              <div class={FormCSS.Rectangle3613}>
                <span class={FormCSS.Business1}>Business</span>
              </div>
            </div>
            <div class={FormCSS.CarParked}>
            <span class={FormCSS.location}>
  10 Garnet Road, Auckland, 1022
</span>
            </div>
            <span class={FormCSS.EnterManually}>
  Enter Manually
</span>
          </div>
        </div>
      </div>
    </div>
  );
}
