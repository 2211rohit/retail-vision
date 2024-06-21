import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/samslcub.webp";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Join the Retail Revolution - Embrace Retail Vision Today!",
  desc: "Tracking customer behavior in-store can be complex. Retail Vision simplifies this by leveraging computer vision to map out the entire shopping journey. Understand not just what customers buy, but what leads them to the purchase.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Deep Customer Insights",
      desc: "Understand customer interactions at every stage.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Data-Driven Strategies",
      desc: "Implement strategies based on precise drop-off data.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Improved Assortments",
      desc: "Enhance your product offerings with accurate feedback.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Boosted Sales",
      desc: "Optimize the shopping experience to increase conversions.",
      icon: <PresentationChartLineIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Boosted Sales",
      desc: "Optimize the shopping experience to increase conversions.",
      icon: <PresentationChartLineIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
