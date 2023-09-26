import { useMemo } from "react";
import Property1Frame8 from "./Property1Frame8";

const Property1Desktop42 = ({
  streamlineinterfaceArrows,
  streamlineinterfaceArrows1,
  property1Desktop4Position,
  property1Desktop4Top,
  property1Desktop4Left,
}) => {
  const property1Desktop42Style = useMemo(() => {
    return {
      position: property1Desktop4Position,
      top: property1Desktop4Top,
      left: property1Desktop4Left,
    };
  }, [property1Desktop4Position, property1Desktop4Top, property1Desktop4Left]);

  return (
    <div
      className="bg-gray-400 w-[1440px] h-[1396px] overflow-hidden text-left text-inherit text-white font-inherit"
      style={property1Desktop42Style}
    >
      <img
        className="absolute top-[calc(50%_-_142px)] left-[calc(50%_-_510px)] w-[1020px] h-[477px] object-cover opacity-[0.8] mix-blend-normal"
        alt=""
        src="/black-on-white-dotted-world-map-vector-1@2x.png"
      />
      <img
        className="absolute top-[83px] left-[1342px] w-12 h-12 overflow-hidden"
        alt=""
        src={streamlineinterfaceArrows}
      />
      <img
        className="absolute top-[1216px] left-[1339px] w-[48.71px] h-[48.71px] overflow-hidden"
        alt=""
        src={streamlineinterfaceArrows1}
      />
      <img
        className="absolute top-[502.43px] left-[calc(50%_-_720px)] w-[1440px] h-[893.57px]"
        alt=""
        src="/ellipse-5.svg"
      />
      <b className="absolute top-[136px] left-[calc(50%_-_315px)] text-45xl font-cabinet-grotesk-variable">
        Bridge Swap Roadmap
      </b>
      <div className="absolute top-[247px] left-[calc(50%_-_306px)] text-13xl font-cabinet-grotesk-variable text-center inline-block w-[613px]">
        We are building the next cross chain swap platform fo all integration
      </div>
      <div className="absolute top-[909.5px] left-[calc(50%_-_556.5px)] box-border w-[1113px] h-px border-t-[1px] border-dashed border-gray-100" />
      <img
        className="absolute top-[564px] left-[207px] w-6 h-[338px]"
        alt=""
        src="/group-8.svg"
      />
      <img
        className="absolute top-[912px] left-[497px] w-6 h-[329px]"
        alt=""
        src="/group-10.svg"
      />
      <img
        className="absolute top-[566px] left-[928px] w-6 h-[338px]"
        alt=""
        src="/group-9.svg"
      />
      <Property1Frame8
        connectWallet="2023"
        property1Frame8Position="absolute"
        property1Frame8Top="367px"
        property1Frame8Left="602px"
        property1Frame8BackgroundColor="#282828"
        property1Frame8BorderRadius="4px"
        property1Frame8Padding="14px 24px"
      />
      <Property1Frame8
        connectWallet="2024"
        property1Frame8Position="absolute"
        property1Frame8Top="367px"
        property1Frame8Left="733px"
        property1Frame8BackgroundColor="#3d3f52"
        property1Frame8BorderRadius="4px"
        property1Frame8Padding="14px 24px"
      />
      <b className="absolute top-[574px] left-[231px] text-15xl font-cabinet-grotesk-variable">
        Q1 2023
      </b>
      <b className="absolute top-[1000px] left-[521px] text-15xl font-cabinet-grotesk-variable">
        Q2 2023
      </b>
      <b className="absolute top-[638px] left-[956px] text-15xl font-cabinet-grotesk-variable">
        Q3 2023
      </b>
      <div className="absolute top-[654px] left-[231px] font-medium inline-block w-[298px]">
        <ul className="m-0 pl-6">{` Launch of V 1.0 cross chain swaps (Solana & BSC, Polygon`}</ul>
      </div>
      <div className="absolute top-[1080px] left-[521px] font-medium inline-block w-[298px]">
        <ul className="m-0 pl-6">{` Launch of V 1.0 cross chain swaps (Solana & BSC, Polygon`}</ul>
      </div>
      <div className="absolute top-[696px] left-[954px] font-medium inline-block w-[298px]">
        <ul className="m-0 pl-6">{` Launch of V 1.0 cross chain swaps (Solana & BSC, Polygon`}</ul>
      </div>
      <div className="absolute top-[716px] left-[233px] font-medium inline-block w-[221px]">
        <ul className="m-0 pl-6">Initial DEX offering (IDO)</ul>
      </div>
      <div className="absolute top-[1142px] left-[523px] font-medium inline-block w-[221px]">
        <ul className="m-0 pl-6">Initial DEX offering (IDO)</ul>
      </div>
      <div className="absolute top-[758px] left-[956px] font-medium inline-block w-[221px]">
        <ul className="m-0 pl-6">Initial DEX offering (IDO)</ul>
      </div>
      <div className="absolute top-[756px] left-[233px] font-medium inline-block w-[260px]">
        <ul className="m-0 pl-6">Initial Exchange offering (IDO)</ul>
      </div>
      <div className="absolute top-[1182px] left-[523px] font-medium inline-block w-[260px]">
        <ul className="m-0 pl-6">Initial Exchange offering (IDO)</ul>
      </div>
      <div className="absolute top-[798px] left-[956px] font-medium inline-block w-[260px]">
        <ul className="m-0 pl-6">Initial Exchange offering (IDO)</ul>
      </div>
      <div className="absolute top-[796px] left-[233px] font-medium inline-block w-[155px]">
        <ul className="m-0 pl-6">$ token staking</ul>
      </div>
      <div className="absolute top-[1222px] left-[523px] font-medium inline-block w-[155px]">
        <ul className="m-0 pl-6">$ token staking</ul>
      </div>
      <div className="absolute top-[838px] left-[956px] font-medium inline-block w-[155px]">
        <ul className="m-0 pl-6">$ token staking</ul>
      </div>
      <Property1Frame8
        connectWallet="Current Quarter"
        property1Frame8Position="absolute"
        property1Frame8Top="544px"
        property1Frame8Left="954px"
        property1Frame8BackgroundColor="#373b64"
        property1Frame8BorderRadius="12px"
        property1Frame8Padding="12px 24px"
      />
    </div>
  );
};

export default Property1Desktop42;
