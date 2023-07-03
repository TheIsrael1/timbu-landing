import { CollectionEntry } from "astro:content";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 740, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

interface IPeopleSayCarousel {
  title: string;
  data: CollectionEntry<"customers">[];
}

const PeopleSayCarousel = ({ title, data }: IPeopleSayCarousel) => {
  return (
    <div className="flex flex-col py-[2.5rem] gap-[5.5rem]">
      <h4 className="px-container-base lg:px-container-lg max-w-[40.25rem] text-secondary-10 text-[3rem] leading-[4rem] -tracking-[0.04688rem]">
        {title}
      </h4>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all 3"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={""}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className=""
      >
        {data?.map((i, idx) => (
          <div
            key={idx}
            className="p-[3rem] bg-success-1 rounded-[1.13rem] flex flex-col mx-[1.375rem] "
          >
            <h6 className="text-white text-[1.5rem] font-[600] leading-[150%] -tracking-[0.035rem] mb-[1.45rem]">
              {i?.data?.shortSentence}
            </h6>
            <p className="text-secondary-11 text-[1.2rem] leading-[150%] font-[500] -tracking-[0.03rem] mb-[3.33rem]">
              {i?.data?.longSentence}
            </p>

            <div className="flex items-center gap-[1.89rem] border-t border-t-secondary-12/[0.2] pt-[3rem]">
              <div className="h-[6rem] w-[6rem] rounded-[23px] overflow-hidden">
                <img
                  src={i?.data?.image}
                  alt=""
                  className="w-full h-full bg-center bg-cover"
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-white text-[1.7rem] font-jakarta font-[700] leading-[150%] -tracking-[0.05113rem]">
                  {i?.data?.name}
                </h5>
                <span className="text-secondary-13 font-jakarta leading-[150%] -tracking-[0.0265rem]">
                  {i?.data?.works}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PeopleSayCarousel;
