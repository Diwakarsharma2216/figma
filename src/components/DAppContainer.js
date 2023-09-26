import { useMemo } from "react";

const DAppContainer = ({
  componentName,
  routeName,
  propTop,
  propLeft,
  propLeft1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const routerStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className="absolute top-[calc(50%_-_111px)] left-[calc(50%_-_554px)] bg-gray-300 box-border w-[250px] h-[211px] overflow-hidden text-left text-xl text-white font-cabinet-grotesk-variable border-[1px] border-dashed border-gray-100"
      style={frameDivStyle}
    >
      <img
        className="absolute top-[calc(50%_-_29.5px)] left-[calc(50%_-_87px)] w-[60px] h-[60px] overflow-hidden"
        alt=""
        src="/basildocumentsolid1.svg"
      />
      <img
        className="absolute h-[11.69%] w-[26.19%] top-[46.75%] right-[38%] bottom-[41.57%] left-[35.81%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/arrow-1.svg"
      />
      <img
        className="absolute top-[calc(50%_-_29.5px)] left-[calc(50%_+_27px)] w-[60px] h-[60px] overflow-hidden"
        alt=""
        src="/basildocumentsolid1.svg"
      />
      <b className="absolute top-[166px] left-[43px]">{componentName}</b>
      <b className="absolute top-[166px] left-[154px]" style={routerStyle}>
        {routeName}
      </b>
    </div>
  );
};

export default DAppContainer;
