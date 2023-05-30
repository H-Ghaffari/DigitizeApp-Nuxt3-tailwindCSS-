import getImageAbsolutePath from "~/helpers/getImageAbsolutePath";

const productInstance1 = {
  colors: ["#4f46e5", "#facc15", "#fb923c", "#0f172a"],
  selectedColor: "#0f172a",
  imgSrc: getImageAbsolutePath("apple-watch-7.png"),
  // imgSrc: "assets/images/apple-watch-7.png",
  tag: "اپل",
  title: "ساعت هوشمند اپل سری 6",
  price: 14863265,
  qty: 0,
};

const productInstance2 = {
  colors: ["#4f46e5", "#facc15", "#fb923c"],
  selectedColor: "#4f46e5",
  imgSrc: getImageAbsolutePath("iphone-13.png"),
  // imgSrc: "assets/images/iphone-13.png",
  tag: "اپل",
  title: "گوشی آیفون 13 pro max",
  price: 48250000,
  qty: 0,
};

const productsArray = [
  { id: 1, ...productInstance1 },
  { id: 2, ...productInstance2 },
  { id: 3, ...productInstance1 },
  { id: 4, ...productInstance2 },
  { id: 5, ...productInstance1 },
  { id: 6, ...productInstance2 },
  { id: 7, ...productInstance1 },
];

export default productsArray;
