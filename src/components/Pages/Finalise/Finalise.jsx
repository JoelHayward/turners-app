import Styles from './Finalise.module.css';
import { useNavigate } from 'react-router-dom';

export default function Finalise() {

    const navigate = useNavigate(); 

    const navigateFinalise = () => {
        navigate('/Purchase')
    }; 

    const navigateProposal = () => {
        navigate('/Details')
    }; 



    return ( 
        <> 
        <div className={Styles.headBanner}></div>
        <div className={Styles.FinaliseBody}>

            <div className={Styles.FinaliseProgressBar}>1</div>

            <div className={Styles.InformationTables}>
                <div className={Styles.SummaryHeaderExternal}> Summary</div>
            <div className={Styles.SummaryTable}>
                <div className={Styles.summaryPart1}>
                    <div className={Styles.SummaryHeaderInternal}>
                        <span> Your Details</span>
                        <button> Edit These Details</button>
                    </div>
                    
                    <div className={Styles.summaryDisplay}>
                        <label> <b> First Name: </b> </label>
                        <input type='text' name='Name' disabled value='John Smith'/>
                    </div>
                    <div className={Styles.summaryDisplay}>
                        <label> <b> Date of Birth </b> </label>
                        <input type='Date' name='Date' />
                    </div>
                    <div className={Styles.summaryDisplay}>
                        <label> <b> Mobile Number </b> </label>
                        <input type='Number' name='Mobile-Number' />
                    </div>
                    <div className={Styles.summaryDisplay}>
                        <label> <b> Email Address </b> </label>
                        <input type='email' name='Email Address'/>
                    </div>
                    <div className={Styles.summaryDisplay}>
                        <label> <b> Home Address </b> </label>
                        <input type='text' name='Address' />
                    </div>

                    <div className={Styles.SummaryHeaderInternal}>
                        <span> Car Details </span>
                        <button> Edit These Details</button>
                    </div>

                    <div className={Styles.summaryDisplay}>
                        <label> <b> Registration Number </b> </label>
                        <input type='text' name='Rego' />
                    </div>
                    <div className={Styles.summaryDisplay}>
                        <label> <b> Main Use Of Car </b> </label>
                        <input type='text' name='useOfCar' />
                    </div>
                    <div className={Styles.summaryDisplay}>
                        <label> <b> Incident Histroy </b> </label>
                        <input type='text' name='History' />
                    </div>

                    <div className={Styles.SummaryHeaderInternal}>
                        <span> Insurance Plan </span>
                        <button> Edit These Details</button>
                    </div>
                    <div className={Styles.summaryDisplay}>
                        <label> <b> Plan Type </b> </label>
                        <input type='text' name='type' />
                    </div>
                    <div className={Styles.summaryDisplay}>
                        <label> <b> Optional Benefits </b> </label>
                        <input type='text' name='Benefits' />
                    </div> 
                </div>
            </div>
                <div className={Styles.summaryCheckbox}>
                    <input type='checkbox' />
                    <span> I confirm that these details are correct </span>
                </div>

                <div className={Styles.paymentPlanHeader}> Choose your payment plan </div>


            <div className={Styles.paymentPlan}>
                <div className={Styles.paymentPlanLeft}>
    
                    <div className={Styles.SaveMoneyBanner}> <b> Save $50 </b> </div>
                    <span className={Styles.PaymentDot}></span>
                    <span className={Styles.paymentHeader}><b>Annually</b></span>
                    <span className={Styles.paymentPrice}>$765 </span>
                    <span className={Styles.paymentTimeline}>Every Year</span>
                </div>
                
                <div className={Styles.PaymentPlanCentre}>
                    <span className={Styles.PaymentDot}></span>
                    <span className={Styles.paymentHeader}> <b> Quarterly</b></span>
                    <span className={Styles.paymentPrice}>$204</span>
                    <span className={Styles.paymentTimeline}>Every 3 Months</span>
                </div>
                <div className={Styles.PaymentPlanRight}>
                    <span className={Styles.PaymentDot}></span>
                    <div className={Styles.paymentHeader}><b>Monthly</b></div>
                    <div className={Styles.paymentPrice}>$68</div>
                    <div className={Styles.paymentTimeline}>Every Month</div>
                </div>
            </div>

            <div className={Styles.PaymentDetailsCard}> Payment Details </div>

            <div className={Styles.PaymentDetails}>
                <div className={Styles.paymentDetailsLeft}>
                    <span className={Styles.PaymentLeftHeader}> Card Details </span>
                    <input type='text' placeholder='Name on Card' className={Styles.paymentName} />
                    <input type='numer' placeholder='Credit Card Number' className={Styles.paymentNumber} />
                    <input type='date' placeholder='Expiring MM/YYYY' className={Styles.paymentCardYear} />
                    <input type='number' placeholder='CVV code' className={Styles.paymentCardCVV} />

                    <div className={Styles.paymentTypes}> You can pay securely by VISA, Mastercard, or AMEX </div>
                    <div className={Styles.paymentTypesPhotos}>
                        <span className={Styles.cardPhoto1}></span>
                        <span className={Styles.cardPhoto2}></span>
                        <span className={Styles.cardPhoto3}></span>
                    </div>

                </div>
                <div className={Styles.paymentDetailsRight}>
                    <span className={Styles.paymentDetailsRightHeader}> Bill Summary</span>
                    <span className={Styles.PaymentDetailsRightBorders}></span>
                    <span className={Styles.paymentPlanType}> Comprehensive Plan (Annual Bill)</span>
                    <span className={Styles.PaymentDetailsRightBorders}></span>
                    <span className={Styles.paymentPlanReference}> Have a reference code? </span>
                    <div className={Styles.PaymentTotal}>  
                        <span className={Styles.paymentTotal}> Total: </span>
                        <span className={Styles.paymentTotalPrice}> $765 </span>
                    </div>
                    <span className={Styles.PaymentDetailsRightBordersSmall}></span>
                    <span className={Styles.paymentNextBill}> Next Bill: 01/09/2023 </span>
                </div>
            </div>
            <div className={Styles.buttonContainer}>
            <button className={Styles.backButton} onClick={navigateProposal}> Back
             </button>
            <button className={Styles.nextButton} onClick={navigateFinalise}> Next  
            </button>
        </div>
            </div> 
            </div>
        <div className={Styles.footer} />

        </>
    )
}