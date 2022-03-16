import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import React from "react";

export const links = [
  {
    id: 1,
    url: "/",
    text: "HOME",
  },
  {
    id: 2,
    url: "/about",
    text: "ABOUT US",
  },
  {
    id: 3,
    url: "/work",
    text: "OUR WORK",
  },
  {
    id: 4,
    url: "/contact",
    text: "CONTACT",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/pages/Wireless-Media/212359128929310",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    url: "https://twitter.com/?lang=sr",
    icon: <BsTwitter />,
  },
  {
    id: 3,
    url: "https://support.google.com/mail/answer/56256?hl=en",
    icon: <IoIosMail />,
  },
];
