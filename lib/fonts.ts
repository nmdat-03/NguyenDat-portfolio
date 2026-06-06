import { Audiowide, Poppins } from "next/font/google";

export const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});