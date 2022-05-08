import React from 'react'
import S1 from '../assets/images/slouation/s1.png'
import S2 from '../assets/images/slouation/s2.png'
import S3 from '../assets/images/slouation/s3.png'
export default function about() {
  return (
    <>
     <div className="about_section mt-5">
          <div className="container">
               <div className="about_area">
                    <div className="about_content  ">
                         <h5 className='text-center' data-aos="fade-up"  data-aos-duration="2000">About Ourself</h5>
                         <div className="button_Section m-auto mb-5 mt-3" data-aos="fade-up"  data-aos-duration="2000">
                              <button>Who are we?</button>
                         </div>
                         <p className='text-center mx-3' data-aos="fade-up"   data-aos-duration="2000">SolanVerse is a team of professionals, changing the crypto space through hard work, ingenuity and trust. We have built a strong community and offer our clients and investors what they deserve: THE BEST!</p>
                    </div>
               </div>
          </div>
     </div>

     {/* new section */}
     <div className="soluation_section mt-0 mt-md-5">
          <div className="container">
               <div className="soluation_area" data-aos="fade-up"  data-aos-duration="2000">
                    <div className="row">
                         <div className="col-md-4">
                              <div className="soluation_item">
                                   <img src={S1} alt="image"/>
                                   <p>We are solution-driven.The crypto world can be a daunting place that often causes significant losses for both rookie and experienced investors.</p>
                              </div>
                         </div>
                         <div className="col-md-4">
                              <div className="soluation_item">
                                   <img src={S2} alt="image"/>
                                   <p className="first_para"> Products are designed and tested by the best developers in the industry. </p>
                                   <p>Our knowledgeable team is here to educate you, so that you can make the investment choice that is right for you.</p>
                              </div>
                         </div>
                         <div className="col-md-4">
                              <div className="soluation_item">
                                   <img src={S3} alt="image"/>
                                   <p>At SolanVerse we pride ourselves on our integrity and on our drive to offer our investors the safest environment possible in the crypto space.</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
    </>
  )
}
