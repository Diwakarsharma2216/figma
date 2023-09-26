import DAppContainer from "./DAppContainer";

const ContainerCard = () => {
  return (
    <section className="absolute top-[3015px] left-[calc(50%_-_720px)] bg-gray-400 w-[1440px] h-[1396px] overflow-hidden text-left text-5xl text-white font-cabinet-grotesk-variable">
      <img
        className="absolute top-[83px] left-[1342px] w-12 h-12 overflow-hidden"
        alt=""
        src="/streamlineinterfacearrowsupleftcornerarrowcornerupleftupleft3.svg"
      />
      <img
        className="absolute top-[1216px] left-[1339px] w-[48.71px] h-[48.71px] overflow-hidden"
        alt=""
        src="/streamlineinterfacearrowsuprightcornerarrowuprightuprightcorner4.svg"
      />
      <img
        className="absolute top-[502.43px] left-[calc(50%_-_720px)] w-[1440px] h-[893.57px]"
        alt=""
        src="/ellipse-5.svg"
      />
      <b className="absolute top-[136px] left-[calc(50%_-_219px)] text-45xl">
        How it all works
      </b>
      <div className="absolute top-[295px] left-[calc(50%_-_444px)] text-center inline-block w-[888px]">
        {" "}
        From one chain use the bridge platform to send tokens to the destination
        chain, where a corresponding dApp Router sends it to the destination.
        Transactions are optimistically verified to ensure security and trust.
      </div>
      <div className="absolute top-[calc(50%_-_175px)] left-[calc(50%_-_554px)] w-[1108px] h-[528px]">
        <div className="absolute top-[calc(50%_-_176px)] left-[calc(50%_-_198px)] [background:linear-gradient(134.79deg,_rgba(16,_20,_46,_0.21),_rgba(120,_134,_231,_0.21))] box-border w-[400px] h-[338.65px] overflow-hidden text-15xl border-[1px] border-dashed border-gray-100">
          <img
            className="absolute top-[calc(50%_-_80.33px)] left-[calc(50%_-_80px)] w-40 h-40 overflow-hidden"
            alt=""
            src="/basildocumentsolid.svg"
          />
          <b className="absolute top-[23px] left-[calc(50%_-_68px)]">
            Executor
          </b>
        </div>
        <DAppContainer componentName="dApp" routeName="Router" />
        <div className="absolute top-[calc(50%_-_112px)] left-[calc(50%_+_304px)] w-[250px] h-[211px]">
          <DAppContainer
            componentName="Router"
            routeName="dApp"
            propTop="calc(50% - 105.5px)"
            propLeft="calc(50% - 125px)"
            propLeft1="158px"
          />
        </div>
        <div className="absolute top-[64px] left-[78px] rounded bg-darkslategray-300 flex flex-row items-center justify-center py-2.5 px-6">
          <div className="relative">Send</div>
        </div>
        <div className="absolute top-[416px] left-[26px] rounded bg-darkslategray-300 flex flex-row items-center justify-center py-2.5 px-6">
          <div className="relative">Original Chain</div>
        </div>
        <div className="absolute top-[478px] left-[485px] rounded bg-darkslategray-300 flex flex-row items-center justify-center py-2.5 px-6">
          <div className="relative">Windows</div>
        </div>
        <div className="absolute top-[398px] left-[871px] rounded bg-darkslategray-300 flex flex-row items-center justify-center py-2.5 px-6">
          <div className="relative">Destination Chain</div>
        </div>
        <div className="absolute top-[64px] left-[918px] rounded bg-darkslategray-300 flex flex-row items-center justify-center py-2.5 px-6">
          <div className="relative">Receive</div>
        </div>
        <div className="absolute top-[0px] left-[473px] rounded bg-darkslategray-300 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-2.5 px-6">
          <div className="relative">Verification</div>
        </div>
        <img
          className="absolute top-[245.95px] left-[254px] w-[96.5px] h-[22.09px]"
          alt=""
          src="/arrow-2.svg"
        />
        <img
          className="absolute top-[245.95px] left-[763px] w-[96.5px] h-[22.09px]"
          alt=""
          src="/arrow-2.svg"
        />
      </div>
    </section>
  );
};

export default ContainerCard;
