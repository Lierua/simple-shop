import Image from "next/image";

const ImageSelection = ({ product, imageSelection, setImageSelection }) => {
  return (
    <div className="grid grid-cols-3 mt-2 gap-2">
      {product.images.map((image) => {
        return (
          <Image
            onClick={() => setImageSelection(image)}
            loading="eager"
            src={image}
            width={300}
            height={200}
            className="object-cover bg-(--blue) p-2 shadow"
            alt={product.title}
          />
        );
      })}
    </div>
  );
};

export default ImageSelection;
