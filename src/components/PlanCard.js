import "./PlanCard.scss";

export default function PlanCard({ heading, summary, price, link, getfrom, features }) {
  return(
    <article className="planCard">
      <section className="planCard__title">
        <h1 className="title__heading">{heading}</h1>
        <p className="title__summary">{summary}</p>
        <p className="title__price">{price}</p>
        <p className="title__conditions">/user/month*<br/>(billed annually)</p>
        <a href={link} className="title__link"
          // eslint-disable-next-line
          onClick= {() => gtag("event", "select_content", { "content_type": heading, "test-type": "A"})}
        >Try for <span className="title__link--caps">free</span> &gt;</a>
      </section>
      
      <section className="planCard__features">
        { getfrom 
        ? <><p className="features__getfrom">Get all {getfrom} features</p><h2 className="features__heading">Plus</h2></> 
        : <h2 className="features__heading">Features</h2> }
        <ul className="features__list">
          {features.map(feature => <li key={feature} className="list__item">{feature}</li>)}
        </ul>
      </section>
    </article>
  );
}