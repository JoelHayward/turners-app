import React from "react";
import styles from "./FormTwo.module.css";
import CheckGrey from "../../icons/CheckVectorGrey.svg";
import GreyMark from "../../icons/greyQuestionMark.svg";
import redAsterix from "../../icons/redStar.svg";
import crash from "../../icons/crash.svg";
import towing from "../../icons/towing.svg";

export default function () {
  return (
    <div>
      {/* LOAD BAR JSX */}
      <div className={styles.loadBar}>
        <div className={styles.Line21}></div>
        <div className={styles.Ellipse4}></div>
        <div className={styles.Line22}></div>
        <div className={styles.Ellipse10}></div>
        <div className={styles.Line23}></div>
        <div className={styles.Ellipse11}></div>
        <div className={styles.Line24}></div>
        <div className={styles.Ellipse12}></div>
        <div className={styles.Line25}></div>
      </div>
      <div className={styles.Quotetitle}>
          <span class={styles.YourQuote}>Your Quote</span>
          <img className={styles.redAsterix} src={redAsterix}></img>
          <div class={styles.Rectangle3609}>
            <span class={styles.MostPopular}>Most Popular</span>
          </div>
          </div>
      <div className={styles.mainPage}>
        <div>
          <div className={styles.Ellipse6}>
            <img className="CheckVector" src={CheckGrey}></img>
          </div>
          <div className={styles.Arrow1}></div>
          <div className={styles.Ellipse7}>
            <img className="CheckVector" src={CheckGrey}></img>
          </div>
          <div className={styles.Arrow2}></div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.chooseQuote}>
            <div class={styles.Frame90}>
              <div class={styles.Ellipse22}></div>
              <span class={styles.ThirdParty}>Third Party</span>
              <span class={styles.textstyle1}>$55</span>
              <span class={styles.Permonth}>Per month</span>
              <div className={styles.details}>
                <div className={styles.packageDetailsImg}>
                  <img
                    class={styles.Ellipse29}
                    src={towing}
                    alt="car being towed"
                  ></img>
                  <img
                    class={styles.Ellipse29}
                    src={crash}
                    alt="two cars crashing"
                  ></img>
                </div>
                <div className={styles.packageDetails}>
                  <span class={styles.Vehicleremoval}>
                    Vehicle removal from accident site
                  </span>
                  <span class={styles.DamangeOthersCar}>
                    Damange to someone else’s car
                  </span>
                </div>
              </div>
            </div>

            <div class={styles.Frame90}>
              <div class={styles.Ellipse42}></div>
              <span class={styles.Comprehensive}>Comprehensive</span>
              <span class={styles.textstyle1}>$68</span>
              <span class={styles.Permonth}>Per month</span>
              <div className={styles.details}>
                <div className={styles.packageDetailsImg}>
                  <img
                    class={styles.Ellipse29}
                    src={towing}
                    alt="car being towed"
                  ></img>
                  <img
                    class={styles.Ellipse29}
                    src={crash}
                    alt="two cars crashing"
                  ></img>
                  <img
                    class={styles.Ellipse29}
                    src={crash}
                    alt="two cars crashing"
                  ></img>
                  <img
                    class={styles.Ellipse29}
                    src={crash}
                    alt="two cars crashing"
                  ></img>
                  <img
                    class={styles.Ellipse29}
                    src={crash}
                    alt="two cars crashing"
                  ></img>
                  <img
                    class={styles.Ellipse29}
                    src={crash}
                    alt="two cars crashing"
                  ></img>
                </div>
                <div className={styles.packageDetails2}>
                  <span class={styles.Accidentaldamage}>
                    Accidental loss or damage to your car
                  </span>
                  <span class={styles.DamangeOthersCar}>
                    Damange to someone else’s car
                  </span>
                  <span class={styles.Naturaldisaster}>
                    Natural disaster damage
                  </span>
                  <span class={styles.freekeys}>
                    Excess free keys and locks
                  </span>
                  <span class={styles.Firedamage}>Fire damage to your car</span>
                  <span class={styles.Vehicleremoval}>
                    Vehicle removal from accident site
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class={styles.Frame90}>
          <div class={styles.Ellipse26}></div>
          <span class={styles.ThirdParty2}>
  Third Party
Fire & Theft
</span>
<span class={styles.textstyle2}>$60</span>
<span class={styles.Permonth}>
  Per month
</span>
<div className={styles.details}>
<div className={styles.packageDetailsImg}>
                  <img
                    class={styles.Ellipse29}
                    src={towing}
                    alt="car being towed"
                  ></img>
                  <img
                    class={styles.Ellipse29}
                    src={crash}
                    alt="two cars crashing"
                  ></img>
                  <img
                    class={styles.Ellipse29}
                    src={crash}
                    alt="two cars crashing"
                  ></img>
                  </div>
                  <div className={styles.packageDetails2}>
                  <span class={styles.Accidentaldamage}>
                    Accidental loss or damage to your car
                  </span>
                  <span class={styles.DamangeOthersCar}>
                    Damange to someone else’s car
                  </span>
                  <span class={styles.Naturaldisaster}>
                    Natural disaster damage
                  </span>
                  </div>
                  </div>

          </div>
          
        </div>
        
      </div>
      <div className={styles.confirm}>
          <div class={styles.ConfirmationButton}></div>
          <span class={styles.Confirmselectedplan}>
  Confirm selected plan
</span>
          </div>
    </div>
  );
}
