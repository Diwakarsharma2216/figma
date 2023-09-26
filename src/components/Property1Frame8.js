import { useMemo } from "react";

const Property1Frame8 = ({
  connectWallet,
  property1Frame8Position,
  property1Frame8Top,
  property1Frame8Left,
  property1Frame8BackgroundColor,
  property1Frame8BorderRadius,
  property1Frame8Padding,
}) => {
  const property1Frame8Style = useMemo(() => {
    return {
      position: property1Frame8Position,
      top: property1Frame8Top,
      left: property1Frame8Left,
      backgroundColor: property1Frame8BackgroundColor,
      borderRadius: property1Frame8BorderRadius,
      padding: property1Frame8Padding,
    };
  }, [
    property1Frame8Position,
    property1Frame8Top,
    property1Frame8Left,
    property1Frame8BackgroundColor,
    property1Frame8BorderRadius,
    property1Frame8Padding,
  ]);

  return (
    <div
      className="rounded-xl bg-darkslategray-400 flex flex-row items-center justify-center py-[18px] px-6 text-left text-5xl text-gray-100 font-cabinet-grotesk-variable"
      style={property1Frame8Style}
    >
      <b className="relative">{connectWallet}</b>
    </div>
  );
};

export default Property1Frame8;
