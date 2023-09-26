import Property1Default from "./Property1Default";
import Property1Frame8 from "./Property1Frame8";

const Navbar = () => {
  return (
    <nav className="m-0 absolute top-[0px] left-[calc(50%_-_720px)] bg-gray-500 w-[1440px] h-[98px] overflow-hidden text-left text-15xl text-white font-cabinet-grotesk-variable">
      <div className="absolute top-[calc(50%_-_33px)] left-[calc(50%_-_673px)] w-[1346px] h-[66px]">
        <div className="absolute top-[18px] left-[450px] w-[467px] h-[30px]">
          <Property1Default
            swap="Product"
            property1DefaultWidth="98px"
            property1DefaultHeight="30px"
            property1DefaultPosition="absolute"
            property1DefaultTop="0px"
            property1DefaultLeft="0px"
            swapFontSize="24px"
            swapFontWeight="unset"
          />
          <Property1Default
            swap="Resources"
            property1DefaultWidth="117px"
            property1DefaultHeight="30px"
            property1DefaultPosition="absolute"
            property1DefaultTop="0px"
            property1DefaultLeft="162px"
            swapFontSize="24px"
            swapFontWeight="unset"
          />
          <Property1Default
            swap="Bridge Hub"
            property1DefaultWidth="124px"
            property1DefaultHeight="30px"
            property1DefaultPosition="absolute"
            property1DefaultTop="0px"
            property1DefaultLeft="343px"
            swapFontSize="24px"
            swapFontWeight="unset"
          />
        </div>
        <div className="absolute top-[calc(50%_-_21px)] left-[0px] flex flex-row items-center justify-start gap-[12px]">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="relative rounded-[50%] bg-gainsboro w-6 h-6" />
            <img className="relative w-6 h-6" alt="" src="/polygon-2.svg" />
            <div className="relative rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none bg-gainsboro w-6 h-6" />
          </div>
          <div className="relative font-extrabold">Bridge</div>
        </div>
        <Property1Frame8
          connectWallet="Connect Wallet"
          property1Frame8Position="absolute"
          property1Frame8Top="0px"
          property1Frame8Left="1041px"
          property1Frame8BackgroundColor="rgba(61, 63, 82, 0.63)"
          property1Frame8BorderRadius="12px"
          property1Frame8Padding="18px 24px"
        />
        <img
          className="absolute top-[calc(50%_-_24px)] left-[1295px] rounded w-12 h-12 overflow-hidden"
          alt=""
          src="/component-2.svg"
        />
      </div>
      <div className="absolute top-[110px] left-[13px] w-[1408px] h-[858px] overflow-hidden" />
    </nav>
  );
};

export default Navbar;
