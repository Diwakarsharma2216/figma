import { useMemo } from "react";

const Property1Default = ({
  swap,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  swapFontSize,
  swapFontWeight,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const swapStyle = useMemo(() => {
    return {
      fontSize: swapFontSize,
      fontWeight: swapFontWeight,
    };
  }, [swapFontSize, swapFontWeight]);

  return (
    <div
      className="w-[82px] h-[42px] text-left text-15xl text-gray-900 font-cabinet-grotesk-variable"
      style={property1DefaultStyle}
    >
      <b className="absolute top-[0%] left-[0%]" style={swapStyle}>
        {swap}
      </b>
    </div>
  );
};

export default Property1Default;
