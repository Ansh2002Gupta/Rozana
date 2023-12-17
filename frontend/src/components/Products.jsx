import product_image1 from "../assets/Images/product_image (1).jpg";
import product_image2 from "../assets/Images/product_image (2).jpg";
import product_image3 from "../assets/Images/product_image (3).jpg";
import product_image4 from "../assets/Images/product_image (4).jpg";
import product_image5 from "../assets/Images/product_image (5).jpg";
import product_image6 from "../assets/Images/product_image (6).jpg";
import product_image7 from "../assets/Images/product_image (7).jpg";
import product_image8 from "../assets/Images/product_image (8).jpg";
import product_image9 from "../assets/Images/product_image (9).jpg";
import product_image10 from "../assets/Images/product_image (10).jpg";
import { useState } from "react";

const items = [
  {
    id: 1,
    title: "Long Sleeve Graphic T-shirts",
    prevCost: "$19",
    currCost: "$12",
    primaryImageUrl: product_image10,
    secondaryImageUrl: product_image5,
    season: "New Arrivals",
  },
  {
    id: 2,
    title: "Warm Fluffy Coats",
    prevCost: "$19",
    currCost: "$12",
    primaryImageUrl: product_image9,
    secondaryImageUrl: product_image2,
    season: "Old Season",
  },
  {
    id: 3,
    title: "Hot Dashing Mini Skirts",
    prevCost: "$19",
    currCost: "$12",
    primaryImageUrl: product_image7,
    secondaryImageUrl: product_image4,
    season: "New Arrivals",
  },
  {
    id: 4,
    title: "Round Robin Hats",
    prevCost: "$19",
    currCost: "$12",
    primaryImageUrl: product_image3,
    secondaryImageUrl: product_image8,
    season: "Old Season",
  },
  {
    id: 5,
    title: "Tight Mens Jeans",
    prevCost: "$19",
    currCost: "$12",
    primaryImageUrl: product_image1,
    secondaryImageUrl: product_image6,
    season: "Old Season",
  },
];

const Products = () => {
  const [hoverImageId, setHoverImageId] = useState(-1);
  return (
    <>
      <div className="product-brochure flex flex-col justify-center px-32 py-20 gap-8">
        <div className="title-container  flex flex-row space-between gap-60 items-center p-1">
          <h1 className="text-2xl font-bold">Featured&nbsp;Products</h1>
          <p className="text-sm text-gray-400 text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam possimus deserunt cupiditate aliquam eum! Corrupti officiis modi reiciendis harum a, quae libero voluptas, nemo numquam beatae explicabo, nihil inventore.</p>
        </div>
        <div className="productShowcase flex flex-wrap justify-center items-center gap-4 py-2 px-6">
          {items.map(item => (
            <div key={item.id} className="product-container flex flex-col gap-2">
              <div className="image-container relative">
                <img
                  className="w-[250px] h-[300px]"
                  src={(hoverImageId === item.id ? item.secondaryImageUrl : "") || item.primaryImageUrl}
                  alt="couldn't image"
                  onMouseOver={() => {
                    setHoverImageId(item.id);
                  }}
                  onMouseOut={() => {
                    setHoverImageId(-1);
                  }}
                />
                {item.season === "New Arrivals" && <div className="season-showcase rounded-lg bg-white text-teal-400 absolute top-[5px] left-[5px] text-bold p-1">New Arrivals</div>}
              </div>
              <h1>{item.title}</h1>
              <div className="cost-showcase flex flex-row gap-2">
                <h3 className="text-sm text-slate-500 line-through">{item.prevCost}</h3>
                <h3>{item.currCost}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
