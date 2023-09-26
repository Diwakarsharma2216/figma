import Property1Frame8 from "./Property1Frame8";

const MainHeroCard = () => {
  return (
    <main className="absolute top-[148px] left-[calc(50%_-_707px)] bg-gray-500 w-[1440px] h-[869px] overflow-hidden text-center text-9xl text-gray-100 font-cabinet-grotesk-variable">
      <img
        className="absolute top-[212px] left-[1292px] w-[71.15px] h-[63.63px] overflow-hidden"
        alt=""
        src="/logosbitcoin.svg"
      />
      <img
        className="absolute top-[calc(50%_-_276.5px)] left-[calc(50%_+_195px)] w-[65.03px] h-[45.42px] overflow-hidden"
        alt=""
        src="/cryptocurrencycolorusdt.svg"
      />
      <img
        className="absolute top-[calc(50%_+_210.5px)] left-[calc(50%_+_554px)] w-[88.51px] h-[55.12px] overflow-hidden"
        alt=""
        src="/mdiethereum.svg"
      />
      <div className="absolute top-[243px] left-[calc(50%_-_219px)] font-medium text-left">
        Every DApp, Every Asset, Every User
      </div>
      <div className="absolute top-[610px] left-[calc(50%_-_220px)] flex flex-row items-start justify-start gap-[65px]">
        <Property1Frame8
          connectWallet="Enter Bridge"
          property1Frame8Position="unset"
          property1Frame8Top="unset"
          property1Frame8Left="unset"
          property1Frame8BackgroundColor="rgba(61, 63, 82, 0.63)"
          property1Frame8BorderRadius="12px"
          property1Frame8Padding="18px 24px"
        />
        <Property1Frame8
          connectWallet="Start Building"
          property1Frame8Position="unset"
          property1Frame8Top="unset"
          property1Frame8Left="unset"
          property1Frame8BackgroundColor="rgba(34, 34, 37, 0.69)"
          property1Frame8BorderRadius="12px"
          property1Frame8Padding="18px 24px"
        />
      </div>
      <div className="absolute top-[508px] left-[calc(50%_-_430px)] text-5xl font-medium text-gray-900 inline-block w-[860px]">
        Bridge is the most widely used, extensible, secure cross-chain
        communications network. Build truly croschain applications using the
        Bridge Protocol.
      </div>
      <div className="absolute top-[822px] left-[-277px] rounded-[50%] bg-gainsboro [filter:blur(600px)] w-[400px] h-[400px]" />
      <b className="absolute top-[312px] left-[calc(50%_-_500px)] text-45xl inline-block text-white w-[1000px]">
        Few-Taps Exchanges In Your Pocket With Bridge Bot
      </b>
      <img
        className="absolute top-[470px] left-[37px] w-[100px] h-[100px] object-cover mix-blend-luminosity"
        alt=""
        src="/image-3@2x.png"
      />
      <img
        className="absolute top-[700px] left-[967px] w-[100px] h-[100px] object-cover mix-blend-luminosity"
        alt=""
        src="/image-4@2x.png"
      />
      <img
        className="absolute top-[420px] left-[1292px] w-20 h-20 object-cover mix-blend-luminosity"
        alt=""
        src="/image-5@2x.png"
      />
      <img
        className="absolute top-[226px] left-[69px] w-20 h-20 object-cover mix-blend-luminosity"
        alt=""
        src="/image-6@2x.png"
      />
    </main>
  );
};

export default MainHeroCard;
