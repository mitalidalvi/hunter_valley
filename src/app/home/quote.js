import Image from "next/image";
import quoteBg from "../../../public/imgs/quote-bg.jpg"


export default function QuoteSection() {
  return (
    <section className="quote-section">

      <Image
        src={quoteBg}
        alt="facility image"
        fill
        className="quote-bg"
      />

      <div className="quote-overlay"></div>

      <div className="quote-content">

        <h2 className="quote-text">
          ‘’ We have created an environment ideal for building craft.
          Our goal is to be recognized as the best tennis performance
          centre in the world. ’’
        </h2>

        <div className="quote-line"></div>

        <div className="quote-author">
          <h4>John Doe</h4>
          <p>Chairman</p>
        </div>

      </div>

    </section>
  );
}