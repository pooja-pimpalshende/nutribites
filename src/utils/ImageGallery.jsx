import { useEffect, useState } from "react";

const ImageGallery = ({ images, className }) => {
  const [imageUrls, setImageUrls] = useState([]);
  // console.log(images);
  useEffect(() => {
    Promise.all(
      Object.values(images).map((importFn) =>
        importFn().then((mod) => mod.default)
      )
    ).then(setImageUrls);
  }, [images]);

  return (
    <div className={className}>
      {imageUrls.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGallery;
