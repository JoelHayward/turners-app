import Styles from './Purchase.module.css' 


export default function Purchase() {
    return ( 
        <>
        <div className={Styles.headBanner}></div>
        <div className={Styles.PhotoContainer}>
           <div className={Styles.ApplicationPhoto}></div>
           <div className={Styles.FamilyAd}>
               <span className={Styles.FamilyPhoto}></span>
               <span className={Styles.textContainerOne}>
               <span className={Styles.textContainerHeader}>Get your Family Onboard!</span>
               <span className={Styles.textContainerText}>Friends and Family of Turners customers get discounted car insurance </span>
               <span className={Styles.textContainerQuestion}>What are you waiting for?</span>
               <span className={Styles.textContainerLink}>Get a reference code now!</span>
               </span>
        </div>
        <div className={Styles.HireAd}>
               <span className={Styles.HirePhoto}></span>
               <span className={Styles.textContainerOne}>
               <span className={Styles.textContainerHeader}> Hire a car from Turners</span>
               <span className={Styles.textContainerText}> Simply choose a vehicle, pay on subscription and add petrol!</span>
               <span className={Styles.textContainerQuestion}>We'll sort out the rest!</span>
               <span className={Styles.textContainerLink}>Find out more</span>
               </span>
               <span className={Styles.textContainerOnePhoto}></span> 
        </div>
        <div className={Styles.AuctionAd}>
               <span className={Styles.auctionPhoto}></span>
               <span className={Styles.textContainerOne}>
               <span className={Styles.textContainerHeader}>Check out our Auction deals!</span>
               <span className={Styles.textContainerText}>Cars, Motorcycles, trucks and Machinery, Buses, Caravans and Motorhomes!</span>
               <span className={Styles.textContainerQuestion}>We have it all!</span>
               <span className={Styles.textContainerLink}>Find out more</span>
               </span>
               <span className={Styles.textContainerOnePhoto}></span> 
        
        </div>
        </div>
        
        <div className={Styles.footer} />
        
        
        
        </> 
    )
}