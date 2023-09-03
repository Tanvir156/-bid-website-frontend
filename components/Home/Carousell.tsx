import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import img1 from "./../../public/caro1.jpg";
import img2 from "./../../public/caro2.jpg";
import img3 from "./../../public/caro3.jpg";
import img4 from "./../../public/caro4.jpg";

function Carousell() {
  const carouselImages = [
    {
      id: "1",
      image: img1,
      value: "$500",
    },
    {
      id: "2",
      image: img2,
      value: "$500",
    },
    {
      id: "3",
      image: img3,
      value: "$500",
    },
    {
      id: "4",
      image: img4,
      value: "$500",
    },
  ];
  return (
    <Carousel>
      {carouselImages.map((image, index) => (
        <Carousel.Item key={index}>
          <Image
            src={image.image}
            alt="Picture of the author"
            placeholder="blur" // Optional blur-up while loading
            sizes="100vw"
            className="caropic"
            style={{
              width: "100%",

              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <Button variant="light">Bid Now</Button>
            <p>Base Value={image.value}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carousell;
