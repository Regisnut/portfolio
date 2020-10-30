import React from 'react'
import {Link} from "gatsby"
import {
FaArrowRight
} from 'react-icons/fa';
import Title from "./Title"

function FinalSection({title}) {
    return (
        <section className="section bg-grey">
             <Title title={title} />
           <main
           className="section-center finalSection">
{/* left article */}
<article className="finalSection__left">
<div className="finalSection__line"></div>
<div className="finalSection__left__details">
    <h3>
        Let me know if you want to talk about your potential project. I’m available for freelance work.
    </h3>
      <div >
              <Link to="/contact" className="btn">
                contact me
              </Link>
            </div>
  
</div>
</article>
{/* right */}
          <article className="finalSection__right"> 
<h3>
    GOT A PROJECT ?
</h3>
<div className="finalSection__footer">
       <div className="round__icon"> 
  <FaArrowRight className="rotate" />
  </div>
<h4>
   { `100% SATISFIED`}
</h4>
</div>
          </article>
        
                
           </main>
        </section>
    )
}

export default FinalSection
