import React from "react";
import { stats } from "../constants";
import styles from "../stlye";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((ele) => (
      <div
        key={ele.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className="front-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {ele.value}
        </h4>
        <p className="front-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {ele.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
