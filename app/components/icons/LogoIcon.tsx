import React from "react";
// import ImageLogo from "../assets/img/logo.png";
import {
  Image,
} from "@nextui-org/react";
// import Image from 'next/image'

export default function Logo() {
  return (
    <Image
      isZoomed
      width={60}
      height={60}
      alt="Logo Image"
      src="/logo.png"
      loading="eager"
    />
  );
}
