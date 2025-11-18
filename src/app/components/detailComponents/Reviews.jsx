import { TiStarFullOutline } from "react-icons/ti";

const Reviews = ({ product }) => {
  return (
    <div className="bg-(--secondary) text-(--primary) mt-8 full-bleed pb-[100px]">
      <div className="grid grid-cols-[1fr_1fr_1fr] py-[4rem] px-[2rem] px-[15%]">
        {product.reviews.map((review) => {
          return (
            <div className="flex flex-col items-center h-[150px]">
              <h2 className="text-center text-2xl">"{review.comment}"</h2>

              <p> - {review.reviewerName}</p>

              <h1 className="text-4xl flex gap-1 mt-6 text-(--blue)">
                {review.rating} <TiStarFullOutline className="scale-[0.8]" />
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
