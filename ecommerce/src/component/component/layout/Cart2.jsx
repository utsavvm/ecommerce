import SwiperComp2 from "./SwiperComp2";

const Cart2 = () => {
  const productData = [
    {
      name: "HAVIT HV-G92 Gamepad",
      price: "120",
      discount: "40%",
      rating: "88",
      disprc: "165",
      image: "/Assets/Console1.svg",
    },
    {
      name: "AK-900 Wired Keyboard",
      price: "960",
      discount: "35%",
      rating: "75",
      disprc: "1160",
      image: "/Assets/Console2.svg",
    },
    {
      name: "IPS LCD Gaming Monitor",
      price: "370",
      discount: "30%",
      rating: "99",
      disprc: "400",
      image: "/Assets/Console3.svg",
    },
    {
      name: "S-Series Comfort Chair ",
      price: "375",
      discount: "25%",
      rating: "99",
      disprc: "400",
      image: "/Assets/Console4.svg",
    },
    {
      name: "S-Series Comfort Chair ",
      price: "375",
      discount: "25%",
      rating: "99",
      disprc: "400",
      image: "/Assets/Console4.svg",
    },
    {
      name: "S-Series Comfort Chair ",
      price: "375",
      discount: "25%",
      rating: "99",
      disprc: "400",
      image: "/Assets/Console4.svg",
    },
    {
      name: "AK-900 Wired Keyboard",
      price: "960",
      discount: "35%",
      rating: "75",
      disprc: "1160",
      image: "/Assets/Console2.svg",
    },
    {
      name: "AK-900 Wired Keyboard",
      price: "960",
      discount: "35%",
      rating: "75",
      disprc: "1160",
      image: "/Assets/Console2.svg",
    },
    {
      name: "S-Series Comfort Chair ",
      price: "375",
      discount: "25%",
      rating: "99",
      disprc: "400",
      image: "/Assets/Console4.svg",
    },
  ];

  return (
    <div className="w-full max-w-[1470px] mx-auto px-4 md:px-10  flex flex-col gap-6 mt-[116px]">
      {/* Heading */}
      <div className="flex flex-row items-center gap-3 text-[#DB4444]">
        <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]"></div>
        <span className="font-medium text-[16px]">This Month</span>
      </div>

      {/* Title + Timer */}
      <div className="flex flex-row  items-center  gap-215">
        {/* Flash Sale Text */}
        <div className="text-[36px] mt-4 font-semibold">
          <span>Best Selling Products</span>
        </div>
        <button className="text-white bg-[#DB4444] rounded-[6px] text-[16px]  font-semibold px-6 py-3 w-full sm:w-auto">
          View All
        </button>
   
      </div>

      {/* Swiper Product List */}
      <div className="w-full ">
        <SwiperComp2 data={productData} />
      </div>
    </div>
  );
};

export default Cart2;
