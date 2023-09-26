import Property1Default from "./Property1Default";
import Property1Frame55 from "./Property1Frame55";
import Property1Frame54 from "./Property1Frame54";
import Property1Frame56 from "./Property1Frame56";
import Property1Frame8 from "./Property1Frame8";

const Footer = () => {
  return (
    <footer className="absolute top-[8599px] left-[calc(50%_-_720px)] bg-gray-400 w-[1440px] h-[746px] overflow-hidden text-left text-15xl text-gray-100 font-cabinet-grotesk-variable">
      <div className="absolute top-[70px] left-[764px] flex flex-col items-start justify-start gap-[23px]">
        <b className="relative">Company</b>
        <Property1Default
          swap="Docs"
          property1DefaultWidth="59px"
          property1DefaultHeight="29px"
          property1DefaultPosition="relative"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          swapFontSize="24px"
          swapFontWeight="unset"
        />
        <Property1Default
          swap="Roadmap"
          property1DefaultWidth="95px"
          property1DefaultHeight="29px"
          property1DefaultPosition="relative"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          swapFontSize="24px"
          swapFontWeight="unset"
        />
        <Property1Default
          swap="Github"
          property1DefaultWidth="67px"
          property1DefaultHeight="29px"
          property1DefaultPosition="relative"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          swapFontSize="24px"
          swapFontWeight="unset"
        />
      </div>
      <div className="absolute top-[70px] left-[990px] flex flex-col items-start justify-start gap-[22px]">
        <b className="relative">Support</b>
        <Property1Default
          swap="Introduction"
          property1DefaultWidth="124px"
          property1DefaultHeight="29px"
          property1DefaultPosition="relative"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          swapFontSize="24px"
          swapFontWeight="unset"
        />
        <Property1Default
          swap="Guide"
          property1DefaultWidth="99px"
          property1DefaultHeight="29px"
          property1DefaultPosition="relative"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          swapFontSize="24px"
          swapFontWeight="unset"
        />
        <Property1Default
          swap="Security"
          property1DefaultWidth="99px"
          property1DefaultHeight="29px"
          property1DefaultPosition="relative"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          swapFontSize="24px"
          swapFontWeight="unset"
        />
        <Property1Default
          swap="FAQs"
          property1DefaultWidth="99px"
          property1DefaultHeight="29px"
          property1DefaultPosition="relative"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          swapFontSize="24px"
          swapFontWeight="unset"
        />
      </div>
      <div className="absolute top-[70px] left-[522px] flex flex-col items-start justify-start gap-[22px]">
        <b className="relative">Resources</b>
        <Property1Default
          swap="Swap"
          property1DefaultWidth="59px"
          property1DefaultHeight="29px"
          property1DefaultPosition="relative"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          swapFontSize="24px"
          swapFontWeight="unset"
        />
        <Property1Default
          swap="Bridge"
          property1DefaultWidth="67px"
          property1DefaultHeight="29px"
          property1DefaultPosition="relative"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          swapFontSize="24px"
          swapFontWeight="unset"
        />
        <Property1Default
          swap="Stake"
          property1DefaultWidth="67px"
          property1DefaultHeight="29px"
          property1DefaultPosition="relative"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          swapFontSize="24px"
          swapFontWeight="unset"
        />
        <Property1Default
          swap="Pools"
          property1DefaultWidth="67px"
          property1DefaultHeight="29px"
          property1DefaultPosition="relative"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          swapFontSize="24px"
          swapFontWeight="unset"
        />
      </div>
      <div className="absolute top-[70px] left-[1199px] flex flex-col items-start justify-start gap-[23px]">
        <b className="relative">Community</b>
        <Property1Frame55 akarIconsdiscordFill="/akariconsdiscordfill1.svg" />
        <Property1Frame54 />
        <Property1Frame56 mditwitter="/mditwitter1.svg" />
      </div>
      <div className="absolute top-[calc(50%_-_303px)] left-[68px] flex flex-row items-center justify-start gap-[12px]">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
          <img className="relative w-6 h-6" alt="" src="/polygon-2.svg" />
          <div className="relative rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none bg-gainsboro w-6 h-6" />
        </div>
        <div className="relative font-extrabold">Bridge</div>
      </div>
      <div className="absolute top-[176px] left-[68px] text-29xl font-extrabold">
        Subscribe
      </div>
      <div className="absolute top-[254px] left-[68px] text-lg">
        Subscribe to the Atlas DEX Newsletter
      </div>
      <div className="absolute top-[318px] left-[68px] rounded-lg box-border w-[369px] h-[63px] overflow-hidden text-lg text-dimgray border-[1px] border-solid border-gray-100">
        <div className="absolute top-[calc(50%_-_10.5px)] left-[20px]">
          Input Email Address
        </div>
      </div>
      <Property1Frame8
        connectWallet="Subscribe"
        property1Frame8Position="absolute"
        property1Frame8Top="413px"
        property1Frame8Left="68px"
        property1Frame8BackgroundColor="#3d3f52"
        property1Frame8BorderRadius="12px"
        property1Frame8Padding="18px 24px"
      />
      <div className="absolute top-[551.5px] left-[calc(50%_-_640.5px)] box-border w-[1281px] h-px border-t-[1px] border-solid border-gray-600" />
      <div className="absolute top-[594px] left-[80px] text-5xl text-white">
        Copyright © 2023 Bridge. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
