import sliderImage1 from "../assets/Images/slider image (1).jpg";
import sliderImage2 from "../assets/Images/slider image (2).jpg";
import sliderImage3 from "../assets/Images/slider image (3).jpg";
import sliderImage4 from "../assets/Images/slider image (4).jpg";
import sliderImage5 from "../assets/Images/slider image (5).jpg";
import sliderImage6 from "../assets/Images/slider image (6).jpg";
import sliderImage7 from "../assets/Images/slider image (7).jpg";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const images = [
  {
    id: 1,
    url: sliderImage1,
  },
  {
    id: 2,
    url: sliderImage4,
  },
  {
    id: 3,
    url: sliderImage3,
  },
  {
    id: 4,
    url: sliderImage5,
  },
  {
    id: 5,
    url: sliderImage2,
  },
  {
    id: 6,
    url: sliderImage6,
  },
  {
    id: 7,
    url: sliderImage7,
  },
];

const leftPress = () => {
  console.log("leftPress");
  const slider = document.getElementById("slider");
  const width = slider.clientWidth;
  slider.scrollLeft = slider.scrollLeft - width;
};

const rightPress = () => {
  console.log("rightPress");
  const slider = document.getElementById("slider");
  const width = slider.clientWidth;
  slider.scrollLeft = slider.scrollLeft + width;
};

const Slider = () => {
  return (
    <>
      <div className="relative flex flex-row slider-container w-full h-[92vh] justify-center items-end">
        <div className="absolute button-container bottom-[10px] flex flex-row gap-2">
          <button className="p-2 rounded-full bg-gradient-to-t from-slate-500 to-white min-w-[50px] h-[50px] border-y-white border-y-2 border-l-white border-l-2 font-bold flex justify-center items-center active:scale-[80%]" onClick={leftPress}>
            <ArrowLeftIcon />
          </button>
          <button className="p-2 rounded-full bg-gradient-to-t from-slate-500 to-white min-w-[50px] h-[50px] border-y-white border-y-2 border-r-white border-r-2 font-bold flex justify-center items-center active:scale-[80%]" onClick={rightPress}>
            <ArrowRightIcon />
          </button>
        </div>
        <div id="slider" className="image-container w-full h-[92vh] flex flex-row gap-1 overflow-hidden scroll-smooth">
          {images.map(image => (
            <img key={image.id} className="min-w-[25vw] h-[92vh]" src={image.url} alt="Failed to load image" />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
