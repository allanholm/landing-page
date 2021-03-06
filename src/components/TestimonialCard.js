import "./TestimonialCard.scss";

export default function TestimonialCard({image, copy}) {
  return(
    <article className="testimonialCard">
      <img src={image} alt="" className="testimonialCard__image" />
      <p className="testmonialCard___copy">{copy}</p>
    </article>
  );
}

