import React from "react";
import { Verse } from "./Verse";
const window = global.window as any;

export const Ads: React.FC = () => {
  React.useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);

  const adsProps = {
    className: "adsbygoogle",
    style: { display: "block" },
    "data-ad-client": "ca-pub-9843638658537683",
    "data-ad-slot": "4615075119",
    "data-ad-format": "auto",
    "data-full-width-responsive": "true",
  };

  return (
    <Verse isAds={true}>
      <ins {...adsProps}></ins>
    </Verse>
  );
};
