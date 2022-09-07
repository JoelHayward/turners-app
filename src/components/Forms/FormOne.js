import React from "react";
import FormCSS from "./FormOne.module.css";
import CheckVectorGrey from "../icons/CheckVectorGrey.svg";

export default function FormOne() {
  return (
    <div className={FormCSS.mainForm}>
      {/* CHECK MARKS */}
      <div>
        <div class={FormCSS.Ellipse5}>
          <img class="CheckVector" src={CheckVectorGrey}></img>
        </div>
        <div class={FormCSS.Arrow3}></div>
      </div>
      {/* FORM */}
      <div>
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
      </div>
    </div>
  );
}
