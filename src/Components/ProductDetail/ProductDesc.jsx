import React from "react";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";
import pic3 from "./pic3.png";
import pic4 from "./pic4.png";
const productDecs = () => {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-3xl font-semibold">Product Description </span>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum suscipit
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quis sunt
        at non quisquam atque aut alias, ratione culpa nostrum asperiores Lorem
        ipsum, adipisicing elit. Rerum odio labore eveniet odit nihil. eos a
        accusamus, ipsum officia repellendus aperiam, dolores laudantium itaque
        ab porro tempora! esse modi nostrum aliquid. Ratione, at. Similique
        facere beatae ea, vero deleniti et aliquam!
      </span>
      <br />
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing Lorem,Lorem ;Lorem
        ipsum dolor sit amet. ipsum dolor sit amet.
      </span>
      <br />
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:flex-wrap">
        <div className="  md:w-[50%]">
          <img src={pic1} className="h-[100%]" alt="" />
        </div>
        <div className=" md:w-[50%]">
          <img src={pic2} className="h-[100%]" alt="" />
        </div>
        <div className=" md:w-[50%]">
          <img src={pic3} className="h-[100%]" alt="" />
        </div>
        <div className="bg-white md:w-[50%] flex flex-col gap-6 justify-center p-4 md:p-24">
          <div className="flex flex-col">
            <span className="text-xl   font-semibold">
              Lorem, ipsum dolor.
            </span>
            <span className="">
              Lorem, ipsum dolor Lorem ipsum dolor sit am Lorem, ipsum dolor.
              sit amet consectetu nemo? Recusandae a
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl   font-semibold">
             Lorem ipsum dolor sit.
            </span>
            <span className="">
              Lorem, i Lorem ipsum dolor sit. Lorem, ipsum dolor.
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl   font-semibold">
             Lorem ipsum dolor sit amet consectetur.
            </span>
            <span className="">
              Lorem, ipsum dolor Lorem ipsum dolor sit am Lorem, ipsum dolor.
              sit ame 
            </span>
          </div>
        </div>
        <div className="bg-white md:w-[50%] flex flex-col gap-5 justify-center p-4  md:p-28">
          <span className="text-xl   font-semibold">
            More about the Product
          </span>
          <span className="">
            Lorem, ipsum dolor Lorem ipsum dolor sit am Lorem, ipsum dolor. sit
            amet consectetur adipisicing elit. Dolorum, earum nemo? Recusandae a
            neque doloremque quisquam quam distinctio unde rerum, assumenda
            similique saepe adipisci veniam?
          </span>
        </div>
        <div className=" md:w-[50%]">
          <img src={pic4} className="h-[100%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default productDecs;
