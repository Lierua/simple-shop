import Image from "next/image";

const ImageSelection = ({ product, imageSelection, setImageSelection }) => {
  return (
    <div className="grid grid-cols-3 mt-3 gap-3">
      {product.images.map((image) => {
        return (
          <Image
            onClick={() => setImageSelection(image)}
            loading="eager"
            src={image}
            width={300}
            height={200}
            className="object-cover bg-[#4ed2c0] rounded-[5px]"
            alt={product.title}
          />
        );
      })}
    </div>
  );
};

export default ImageSelection;
