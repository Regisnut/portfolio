import React from 'react'
import {
  FaArrowRight
} from 'react-icons/fa';
import Title from "./Title"
import { RoughNotation } from "react-rough-notation";
import { Link } from "gatsby"

function FinalSection({ title }) {

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
              Let me know if you want to talk about your potential project. I&#39;m available for freelance work.
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
              <RoughNotation type="highlight" show={true} color="#f3e5dd">{`100% SATISFIED`}</RoughNotation>
            </h4>
          </div>
        </article>
      </main>
    </section>
  )
}

export default FinalSection
