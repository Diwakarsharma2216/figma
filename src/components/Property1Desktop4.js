import { useMemo } from "react";

const Property1Desktop4 = ({
  property1Desktop4BackgroundColor,
  property1Desktop4Overflow,
  property1Desktop4Position,
  property1Desktop4Top,
  property1Desktop4Left,
  streamlineinterfaceArrowsPosition,
  streamlineinterfaceArrowsTop,
  streamlineinterfaceArrowsLeft,
  streamlineinterfaceArrowsWidth,
  streamlineinterfaceArrowsHeight,
  streamlineinterfaceArrowsOverflow,
  streamlineinterfaceArrowsPosition1,
  streamlineinterfaceArrowsTop1,
  streamlineinterfaceArrowsLeft1,
  streamlineinterfaceArrowsWidth1,
  streamlineinterfaceArrowsHeight1,
  streamlineinterfaceArrowsOverflow1,
}) => {
  const property1Desktop4Style = useMemo(() => {
    return {
      backgroundColor: property1Desktop4BackgroundColor,
      overflow: property1Desktop4Overflow,
      position: property1Desktop4Position,
      top: property1Desktop4Top,
      left: property1Desktop4Left,
    };
  }, [
    property1Desktop4BackgroundColor,
    property1Desktop4Overflow,
    property1Desktop4Position,
    property1Desktop4Top,
    property1Desktop4Left,
  ]);

  const streamlineinterfaceArrowsUpIconStyle = useMemo(() => {
    return {
      position: streamlineinterfaceArrowsPosition,
      top: streamlineinterfaceArrowsTop,
      left: streamlineinterfaceArrowsLeft,
      width: streamlineinterfaceArrowsWidth,
      height: streamlineinterfaceArrowsHeight,
      overflow: streamlineinterfaceArrowsOverflow,
    };
  }, [
    streamlineinterfaceArrowsPosition,
    streamlineinterfaceArrowsTop,
    streamlineinterfaceArrowsLeft,
    streamlineinterfaceArrowsWidth,
    streamlineinterfaceArrowsHeight,
    streamlineinterfaceArrowsOverflow,
  ]);

  const streamlineinterfaceArrowsUpIcon1Style = useMemo(() => {
    return {
      position: streamlineinterfaceArrowsPosition1,
      top: streamlineinterfaceArrowsTop1,
      left: streamlineinterfaceArrowsLeft1,
      width: streamlineinterfaceArrowsWidth1,
      height: streamlineinterfaceArrowsHeight1,
      overflow: streamlineinterfaceArrowsOverflow1,
    };
  }, [
    streamlineinterfaceArrowsPosition1,
    streamlineinterfaceArrowsTop1,
    streamlineinterfaceArrowsLeft1,
    streamlineinterfaceArrowsWidth1,
    streamlineinterfaceArrowsHeight1,
    streamlineinterfaceArrowsOverflow1,
  ]);

  return (
    <div
      className="bg-gray-400 overflow-hidden text-center text-13xl text-white font-cabinet-grotesk-variable"
      style={property1Desktop4Style}
    >
      <img
        className="absolute top-[83px] left-[1342px] w-12 h-12 overflow-hidden"
        alt=""
        src="/streamlineinterfacearrowsupleftcornerarrowcornerupleftupleft.svg"
        style={streamlineinterfaceArrowsUpIconStyle}
      />
      <img
        className="absolute top-[1200.36px] left-[125.36px] w-12 h-12 overflow-hidden"
        alt=""
        src="/streamlineinterfacearrowsuprightcornerarrowuprightuprightcorner.svg"
        style={streamlineinterfaceArrowsUpIcon1Style}
      />
      <img
        className="absolute top-[502.43px] left-[calc(50%_-_720px)] w-[1440px] h-[893.57px]"
        alt=""
        src="/ellipse-5.svg"
      />
      <b className="absolute top-[136px] left-[calc(50%_-_75px)] text-45xl text-left">
        FAQs
      </b>
      <div className="absolute top-[301px] left-[calc(50%_-_613px)] rounded-lg bg-darkslategray-200 w-[1226px] h-[101px] overflow-hidden">
        <div className="absolute top-[31px] left-[42px] font-medium">
          What Do Bridge Swap do?
        </div>
        <img
          className="absolute top-[calc(50%_-_16.5px)] left-[1144px] w-[34px] h-[34px] overflow-hidden"
          alt=""
          src="/mingcutedownfill.svg"
        />
      </div>
      <div className="absolute top-[434px] left-[calc(50%_-_613px)] rounded-lg bg-darkslategray-200 w-[1226px] h-[101px]">
        <div className="absolute top-[31px] left-[42px] font-medium">
          What Do Bridge Swap do?
        </div>
        <img
          className="absolute top-[calc(50%_-_16.5px)] left-[1144px] w-[34px] h-[34px] overflow-hidden"
          alt=""
          src="/mingcutedownfill.svg"
        />
      </div>
      <div className="absolute top-[567px] left-[calc(50%_-_613px)] rounded-lg bg-darkslategray-200 w-[1226px] h-[101px] overflow-hidden">
        <div className="absolute top-[31px] left-[42px] font-medium">
          What Do Bridge Swap do?
        </div>
        <img
          className="absolute top-[calc(50%_-_16.5px)] left-[1144px] w-[34px] h-[34px] overflow-hidden"
          alt=""
          src="/mingcutedownfill.svg"
        />
      </div>
      <div className="absolute top-[700px] left-[calc(50%_-_613px)] rounded-lg bg-darkslategray-200 w-[1226px] h-[101px] overflow-hidden">
        <div className="absolute top-[31px] left-[42px] font-medium">
          What Do Bridge Swap do?
        </div>
        <img
          className="absolute top-[calc(50%_-_16.5px)] left-[1144px] w-[34px] h-[34px] overflow-hidden"
          alt=""
          src="/mingcutedownfill.svg"
        />
      </div>
    </div>
  );
};

export default Property1Desktop4;
