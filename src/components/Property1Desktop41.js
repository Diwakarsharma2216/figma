import { useMemo } from "react";

const Property1Desktop41 = ({
  streamlineinterfaceArrows,
  streamlineinterfaceArrows1,
  property1Desktop4Position,
  property1Desktop4Top,
  property1Desktop4Left,
  heresAPreviewFontWeight,
}) => {
  const property1Desktop41Style = useMemo(() => {
    return {
      position: property1Desktop4Position,
      top: property1Desktop4Top,
      left: property1Desktop4Left,
    };
  }, [property1Desktop4Position, property1Desktop4Top, property1Desktop4Left]);

  const heresAPreviewStyle = useMemo(() => {
    return {
      fontWeight: heresAPreviewFontWeight,
    };
  }, [heresAPreviewFontWeight]);

  return (
    <div
      className="bg-gray-400 w-[1440px] h-[1396px] overflow-hidden text-left text-15xl text-white font-cabinet-grotesk-variable"
      style={property1Desktop41Style}
    >
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
      <b className="absolute top-[136px] left-[calc(50%_-_144px)] text-45xl">
        Use Cases
      </b>
      <div
        className="absolute top-[239px] left-[calc(50%_-_320px)] font-medium text-center inline-block w-[641px]"
        style={heresAPreviewStyle}
      >
        Here’s a preview of what you can do using Bridge
      </div>
      <div className="absolute top-[490px] left-[1046px] rounded-xl bg-darkslategray-200 w-[418px] h-[507px] overflow-hidden">
        <div className="absolute top-[calc(50%_-_211.5px)] left-[calc(50%_-_179px)] rounded-lg [background:linear-gradient(115.44deg,_#16161f,_rgba(75,_75,_144,_0.92))] w-[359px] h-[227px] overflow-hidden">
          <div className="absolute top-[110px] left-[-49px] box-border w-[195px] h-[165px] overflow-hidden border-[1px] border-solid border-gray-800" />
          <div className="absolute top-[74px] left-[-15px] box-border w-[195px] h-[165px] overflow-hidden border-[1px] border-solid border-gray-800" />
          <div className="absolute top-[31px] left-[-2px] box-border w-[300px] h-[253.85px] overflow-hidden border-[1px] border-solid border-gray-800" />
          <div className="absolute top-[51px] left-[-58px] box-border w-[300px] h-[253.85px] overflow-hidden border-[1px] border-solid border-gray-800" />
        </div>
        <b className="absolute top-[303px] left-[28px] inline-block w-[326px] h-[46px]">
          <p className="m-0">Multi-chain Exchange</p>
        </b>
        <div className="absolute top-[369px] left-[30px] text-lg font-medium inline-block w-[310px]">
          Swap any asset on any blockchain using Bridge’s token swaps
        </div>
      </div>
      <div className="absolute top-[490px] left-[82px] rounded-xl bg-darkslategray-200 w-[418px] h-[507px] overflow-hidden">
        <div className="absolute top-[42px] left-[calc(50%_-_179px)] rounded-lg [background:linear-gradient(115.44deg,_#16161f,_rgba(75,_75,_144,_0.92))] w-[359px] h-[227px] overflow-hidden">
          <div className="absolute top-[23px] left-[35px] box-border w-[293px] h-[173px] overflow-hidden border-[1px] border-solid border-gray-800" />
          <div className="absolute top-[calc(50%_-_56.5px)] left-[calc(50%_-_96.5px)] box-border w-[193px] h-[113.96px] overflow-hidden border-[1px] border-solid border-gray-800" />
          <div className="absolute top-[calc(50%_-_27.5px)] left-[calc(50%_-_46.5px)] box-border w-[93px] h-[54.91px] overflow-hidden border-[1px] border-solid border-gray-800" />
        </div>
        <b className="absolute top-[303px] left-[30px]">Cross-chain exchange</b>
        <div className="absolute top-[365px] left-[30px] text-lg font-medium inline-block w-[321px]">
          Swap any asset on any blockchain using Bridge’s token swaps
        </div>
      </div>
      <div className="absolute top-[490px] left-[564px] rounded-xl bg-darkslategray-200 w-[418px] h-[507px] overflow-hidden">
        <img
          className="absolute top-[calc(50%_-_211.5px)] left-[calc(50%_-_179px)] rounded-lg w-[359px] h-[227px] overflow-hidden"
          alt=""
          src="/frame-72.svg"
        />
        <b className="absolute top-[303px] left-[30px] inline-block w-[275px] h-[84px]">
          <p className="m-0">Universal money markets</p>
        </b>
        <div className="absolute top-[407px] left-[30px] text-lg font-medium inline-block w-[310px]">
          Swap any asset on any blockchain using Bridge’s token swaps
        </div>
      </div>
      <img
        className="absolute top-[371px] left-[1207px] w-12 h-12 overflow-hidden"
        alt=""
        src="/iconparksolidleftc.svg"
      />
      <img
        className="absolute top-[371px] left-[1302px] w-12 h-12 overflow-hidden"
        alt=""
        src="/iconparksolidrightc.svg"
      />
    </div>
  );
};

export default Property1Desktop41;
