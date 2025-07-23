import logo from "../assets/flipkartlogo.svg";
import shortcuticon from "../assets/shortcuticon.svg";
import baricon from "../assets/baricon.svg";
import usericon from "../assets/usericon.svg";
import arrowupicon from "../assets/arrowupicon.svg";
import arrowdownicon from "../assets/arrowdownicon.svg";
import userwhiteicon from "../assets/userwhiteicon.svg";
import storeicon from "../assets/storeicon.svg";
import carticon from "../assets/carticon.svg";
import eclipsedoticon from "../assets/eclipsedoticon.svg";
import fkplus from "../assets/dropdown icons/fkplus.svg";
import orde from "../assets/dropdown icons/orde.svg";
import heart from "../assets/dropdown icons/heart.svg";
import rewards from "../assets/dropdown icons/rewards.svg";
import giftCard from "../assets/dropdown icons/giftCard.svg";
import helpcenter from "../assets/dropdown icons/helpcenter.svg";
import download from "../assets/dropdown icons/download.svg";
import advertise from "../assets/dropdown icons/advertise.svg";
import notificationPreferences from "../assets/dropdown icons/notificationPreferences.svg";

import topoffers from "../assets/category items/topoffers.webp";
import goatsaleoppo from "../assets/homeslider/goatsaleoppo.webp";
import homeutilitiessale from "../assets/homeslider/homeutilitiessale.webp";
import leathersale from "../assets/homeslider/leathersale.jpg";
import motorologoatsale from "../assets/homeslider/motorologoatsale.webp";
import opposale from "../assets/homeslider/opposale.webp";
import phone3a from "../assets/homeslider/phone3a.webp";
import saleislive from "../assets/homeslider/saleislive.webp";
import samsungsale from "../assets/homeslider/samsungsale.webp";
import smarttv from "../assets/homeslider/smarttv.webp";
import beauty from "../assets/category items/beauty.png";
import appliances from "../assets/category items/appliances.webp";
import electronics from "../assets/category items/electronics.png";
import fashion from "../assets/category items/fashion.webp";
import flight from "../assets/category items/flight.webp";
import furnitures from "../assets/category items/furnitures.webp";
import grocery from "../assets/category items/grocery.webp";
import homedecor from "../assets/category items/homedecor.webp";
import mobilephones from "../assets/category items/mobilephones.webp";
import babybedding from "../assets/beauty/babybedding.webp";
import health from "../assets/beauty/health.webp";
import instruments from "../assets/beauty/instruments.webp";
import lipsticks from "../assets/beauty/lipsticks.webp";
import pens from "../assets/beauty/pens.webp";
import ponds from "../assets/beauty/ponds.webp";
import petessentials from "../assets/beauty/petessentials.webp";
import toys from "../assets/beauty/toys.webp";
import laptopstands from "../assets/electronics/laptopstands.webp";
import headphone from "../assets/electronics/headphone.webp";
import mirrorlesscamera from "../assets/electronics/mirrorlesscamera.webp";
import keyboards from "../assets/electronics/keyboards.webp";
import mouse from "../assets/electronics/mouse.webp";
import powerbanks from "../assets/electronics/powerbanks.webp";
import printers from "../assets/electronics/printers.webp";
import projector from "../assets/electronics/projector.webp";
import smartwatch from "../assets/electronics/smartwatch.webp";
export const loginmenuItems = [
  { icon: usericon, label: "My Profile", href: "/myprofile" },
  { icon: fkplus, label: "Flipkart Plus Zone", href: "/flipkartpluszone" },
  { icon: orde, label: "Orders", href: "/orders" },
  { icon: heart, label: "Wishlist", href: "/wishlist" },
  { icon: rewards, label: "Rewards", href: "/rewards" },
  { icon: giftCard, label: "Giftcards", href: "/giftcards" },
];

export const helpmenuItems = [
  {
    icon: notificationPreferences,
    label: "Notification Preferences",
    href: "/notificationPreferences",
  },
  { icon: helpcenter, label: "24 x 7 Support Care", href: "/support" },
  { icon: advertise, label: "Advertise", href: "/advertise" },
  { icon: download, label: "Download App", href: "/download" },
]
export const categoryItems = [
  { id: crypto.randomUUID(), icon: topoffers, label: "Top Offers" },
  { id: crypto.randomUUID(), icon: mobilephones, label: "Mobiles & Tablet" },
  { id: crypto.randomUUID(), icon: appliances, label: "TV's & Appliances" },
  { id: crypto.randomUUID(), icon: electronics, label: "Electronics" },
  { id: crypto.randomUUID(), icon: fashion, label: "Fashion" },
  { id: crypto.randomUUID(), icon: beauty, label: "Beauty,Food" },
  { id: crypto.randomUUID(), icon: homedecor, label: "Home Kitchen" },
  { id: crypto.randomUUID(), icon: furnitures, label: "Furniture" },
  { id: crypto.randomUUID(), icon: flight, label: "flight Bookings" },
  { id: crypto.randomUUID(), icon: grocery, label: "Grocery" },
];
export const homeSliderItems = [
  { id: crypto.randomUUID(), icon: goatsaleoppo },
  { id: crypto.randomUUID(), icon: homeutilitiessale },
  { id: crypto.randomUUID(), icon: leathersale },
  { id: crypto.randomUUID(), icon: motorologoatsale },
  { id: crypto.randomUUID(), icon: opposale },
  { id: crypto.randomUUID(), icon: phone3a },
  { id: crypto.randomUUID(), icon: saleislive },
  { id: crypto.randomUUID(), icon: samsungsale },
  { id: crypto.randomUUID(), icon: smarttv },
];
export const beautyFoodToys = [
  {
    id: crypto.randomUUID(),
    icon: babybedding,
    label: "Baby Bedding",
    sublabel: "Upto 40% Off",
  },
  {
    id: crypto.randomUUID(),
    icon: health,
    label: "Health",
    sublabel: "Shop Now",
  },
  {
    id: crypto.randomUUID(),
    icon: instruments,
    label: "Instruments",
    sublabel: "From 399",
  },
  {
    id: crypto.randomUUID(),
    icon: lipsticks,
    label: "Lipsticks",
    sublabel: "Upto 40% Off",
  },
  {
    id: crypto.randomUUID(),
    icon: pens,
    label: "Pens",
    sublabel: "Upto 60% Off",
  },
  {
    id: crypto.randomUUID(),
    icon: petessentials,
    label: "Pet Essentials",
    sublabel: "Upto 40% Off",
  },
  {
    id: crypto.randomUUID(),
    icon: ponds,
    label: "Ponds",
    sublabel: "Upto 80% Off",
  },
  {
    id: crypto.randomUUID(),
    icon: toys,
    label: "Toys",
    sublabel: "Upto 700% Off",
  },
];
export const electronicSlidesItem = [
  {
    id: crypto.randomUUID(),
    icon: laptopstands,
    label: "Laptop Stands",
    sublabel: "Grab Now",
  },
  {
    id: crypto.randomUUID(),
    icon: headphone,
    label: "Headphones",
    sublabel: "Grab Now",
  },
  {
    id: crypto.randomUUID(),
    icon: mirrorlesscamera,
    label: "Mirrorless Camera",
    sublabel: "Shop Now",
  },
  {
    id: crypto.randomUUID(),
    icon: keyboards,
    label: "Keyboard",
    sublabel: "Shop Now",
  },
  {
    id: crypto.randomUUID(),
    icon: mouse,
    label: "Mouse",
    sublabel: "Shop Now",
  },
  {
    id: crypto.randomUUID(),
    icon: powerbanks,
    label: "Power Banks",
    sublabel: "Grab Now",
  },
  {
    id: crypto.randomUUID(),
    icon: printers,
    label: "Printers",
    sublabel: "From ₹10999",
  },
  {
    id: crypto.randomUUID(),
    icon: projector,
    label: "Projector",
    sublabel: "From ₹4599",
  },
  {
    id: crypto.randomUUID(),
    icon: smartwatch,
    label: "Smart Watch",
    sublabel: "From ₹1399",
  },
];
