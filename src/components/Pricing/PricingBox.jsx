import MainButton from "../MainButton";

function PricingBox({ img, title, price, text }) {
  return (
    <>
      <div className="flex flex-col w-1/3 md1000:w-[40rem] bg-white shadow-xl relative min540:w-[100%]">
        <div
          style={{ transition: "all 0.3s" }}
          className="relative grayscale hover:grayscale-0"
        >
          <img src={img} alt="pricing_img" className="w-full h-full" />
          <div className="absolute bg-white text-[20px] font-bold w-[25rem] text-center py-6 text-[#007FFF] -bottom-[18px] left-0 right-0 mx-auto">
            {title}
          </div>
        </div>
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
          {/* price */}
          <p className="text-center text-[55px] font-bold relative py-[10px] ">
            <span className="text-[15px] text-[#6d6d6d] absolute font-normal top-8 -left-[3rem]">
              Ksh
            </span>
            {price}
            <span className="text-[22px] text-[#6d6d6d] absolute font-normal bottom-[5px] -right-[6rem]">
              p/m
            </span>
          </p>
          {/* text */}
          <div className="flex flex-col text-[16px] font-medium text-center gap-8 text-[#646464] ">
            {text.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <MainButton
            color={`!text-white`}
            bg={`bg-[#007FFF]`}
            text="purchase now"
            arrowColor={`!text-white`}
            cN="pricing-cta"
            goTo="/contact"
          />
        </div>
      </div>
    </>
  );
}

export default PricingBox;