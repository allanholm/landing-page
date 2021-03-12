import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";

export default function Testimonials() {
  return(
    <section className="testimonials">
      <TestimonialCard 
        image="https://picsum.photos/200/200?random=1"
        copy="&ldquo;I will refer everyone I know. SaaS is exactly what our business has been lacking. The best on the net!&rdquo; -Connie V"
      />
      <TestimonialCard 
        image="https://picsum.photos/200/200?random=2"
        copy="&ldquo;We've used SaaS for the last five years. SaaS is both attractive and highly adaptable. You guys rock! SaaS has got everything I need.&rdquo; -Johhny Q"
      />
      <TestimonialCard 
        image="https://picsum.photos/200/200?random=3"
        copy="&ldquo;SaaS saved my business. We were treated like royalty. Just what I was looking for.&rdquo; -Tim BL"
      />
    </section>
  );
}