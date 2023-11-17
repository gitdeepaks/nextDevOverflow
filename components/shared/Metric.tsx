import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuther?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  textStyles,
  isAuther,
  href,
}: MetricProps) => {
  const metricContant = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}

        <span
          className={`small-regular line-clamp-1 ${
            isAuther ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    <Link href={href} className="flex-center gap-1 hover:cursor-pointer">
      {metricContant}
    </Link>;
  }
  return <div className="flex-center flex-wrap gap-1">{metricContant}</div>;
};

export default Metric;
