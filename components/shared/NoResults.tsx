import Image from "next/image";
import React from "react";

const NoResults = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center ">
      <Image
        src="/assets/images/light-illustration.png"
        alt="no results illustrations"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="./assets/images/dark-illustration.png"
        alt="no results illustrations"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />
    </div>
  );
};

export default NoResults;
