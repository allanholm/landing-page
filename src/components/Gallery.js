import Carousel from "react-grid-carousel";
import GalleryItem from "./GalleryItem";

export default function Gallery() {
  return (
    <Carousel
      cols={1}
      rows={1}
      gap={0}
      autoplay={3000}
      loop>
      <Carousel.Item>
        <GalleryItem 
          image="https://picsum.photos/1920/1080?random=1" 
          copy="Køb vores lort!" 
          ctaLink="/buythisthing" 
          ctaCopy="Klik her"/>
      </Carousel.Item>
      <Carousel.Item>
        <GalleryItem 
          image="https://picsum.photos/1920/1080?random=2" 
          copy="Køb vores lort!" 
          ctaLink="/buythisthing2" 
          ctaCopy="Klik her"/>
      </Carousel.Item>
      <Carousel.Item>
        <GalleryItem 
          image="https://picsum.photos/1920/1080?random=3" 
          copy="Køb vores lort!" 
          ctaLink="/buythisthing3" 
          ctaCopy="Klik her"/>
      </Carousel.Item>
    </Carousel>
  );
}