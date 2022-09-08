import styles from './Details.module.css'
import { useNavigate } from 'react-router-dom'

export default function Details() {

    //navigate functions to the pages

    const navigate = useNavigate(); 

    const navigateFinalise = () => {
        navigate('/finalise')
    }; 

    const navigateProposal = () => {
        navigate('/proposal')
    }; 


    return (
        <>
        <div className={styles.headBanner}></div>
        <div className={styles.formContainer}>
            <div className={styles.formOneContainer}>
               <div className={styles.formOne}>
                   <form> 
                    <div className={styles.formOneTopRow}>
                      <div className={styles.firstName}>
                        <label> <b> First Name: </b> </label>
                        <input type='text' name='First-Name' />
                      </div>
                      <div className={styles.lastName}>
                    <label> <b>Last Name: </b>
                        <input type='text' name='Last-Name' />
                    </label>
                    </div>
                    </div>
                    <br />
                    <div className={styles.mobNumber}>
                    <label> <b> Mobile Number:</b>
                        <input type='number' name='mob-number' /> 
                    </label>
                    </div>
                    <br />
                    <div className={styles.emailAddress}>
                    <label> <b> Email Adddress: </b> 
                        <input type='email' name='email' />
                    </label>
                    </div>

                    </form>
               </div>
            </div>
            
            <div className={styles.formTwoContainer}>
               <div className={styles.formTwo}>
                  <div className={styles.textbox}>
                  <span>
                  By agreeing to these terms and conditions you agree to the following. Please read these terms and conditions carefully before using Our Service. 
                  <br />
                  <br />
                1. Agreement to terms:
                <br />
                These Terms of Use constitue a legally binding agreement made between you, 
                whether personally or on behalf of an entity (“you”) and Turners Car Insurance 
                (“Company”, “We”, “Us”, or “Our”), concerning the purchasing of car insurance 
                and all Terms and Conditions. The words of which the initial letter is capitalized 
                have meanings defined under the following conditions. The following definitions 
                shall have the same meaning regardless of whether they appear in singular or in plural. 
                For the purposes of these Terms and Conditions:
                  </span>
                  </div>
            
               </div>
            </div>
        </div>
        <div className={styles.confirmButton}>
            <input type='checkbox' />
            <span> 
                I have read and agree to the terms and conditions.
            </span>
        </div>

        <div className={styles.buttonContainer}>
            <button className={styles.backButton} onClick={navigateProposal}> Back
             </button>
            <button className={styles.nextButton} onClick={navigateFinalise}> Next  
            </button>
        </div>
        <div className={styles.footer} />
     
        </> 
    )
}