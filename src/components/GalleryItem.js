import "./GalleryItem.scss";

export default function GalleryItem({image, copy, ctaLink, ctaCopy}) {
  return(
        <div className="carouselItem">
          <img src={image} alt="of something"className="carouselItem__image"/>
          <div className="carouselItem__content">
            <p className="carouselItem__copy">{copy}</p>
            <a href={ctaLink} className="carouselItem__CTA">{ctaCopy}</a>
          </div>
        </div>
  );
}