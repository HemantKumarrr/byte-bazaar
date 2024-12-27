import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";

const FeaturesProvide = () => {
  return (
    <section className="w-full px-4 py-8 md:py-[5rem] font-Popins">
      <div className="w-[100%] justify-center text-blue-700 h-[15rem] flex gap-2 md:gap-5">
        <div className="bg-[#eee] rounded-md flex md:px-4 flex-col items-center justify-center">
          <TbTruckDelivery className="text-2xl" />
          <p className="text-center text-sm p-1">
            {" "}
            Super Fast and Free Delivery
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 justify-center">
          <div className="bg-[#eee] w-full rounded-md h-full flex flex-col items-center justify-center">
            <MdOutlineSecurity className="text-2xl" />
            <p className="text-center text-sm p-1"> Non-contact Shipping</p>
          </div>
          <div className="bg-[#eee] w-full rounded-md h-full flex flex-col items-center justify-center">
            <GiReceiveMoney className="text-2xl" />
            <p className="text-center text-sm p-1"> Money-back Guaranteed</p>
          </div>
        </div>
        <div className="bg-[#eee] md:px-4 rounded-md flex flex-col items-center justify-center">
          <RiSecurePaymentLine className="text-2xl" />
          <p className="text-center text-sm p-1">
            {" "}
            Super Secure Payment System
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesProvide;
