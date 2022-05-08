import React from "react";

import charimg from '../assets/c-w.png'

// import charimg from "../assets/c-w.png";
import charimg2 from "../assets/g-desk.png";

const ChartGraph = () => {
  return (
    <>
    
     <div  data-aos="fade-up"
        data-aos-duration="3000">
     <div className="contact_title token text-center mb-3">
              <span>Token Value</span>
        </div>
     <div
       
        className="offer_section_button orangecolor "
      >
        
        <button>TOKENOMICS</button>
      </div>
     </div>

    
    <div className="chart_Section">
    <div className="window_image">
        <img src={charimg2} alt="okay" />
      </div>

      <div className="mobile_image">
        <img src={charimg} alt="okay" />
        </div>


      <div className="chart">
        <div className="chartText-list d-lg-none ">
          <h3>40% liquidity pool</h3>
          <h3>30% staking</h3>
          <h3>20% development</h3>
          <h3>10% nft $ game</h3>
        </div>
      </div>
    </div>

     
    </>
  );
};

export default ChartGraph;
