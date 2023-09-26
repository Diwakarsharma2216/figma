import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import InteractionForm from "../components/InteractionForm";
import NotificationForm from "../components/NotificationForm";
import ContainerCard from "../components/ContainerCard";
import Property1Desktop42 from "../components/Property1Desktop42";
import Property1Desktop41 from "../components/Property1Desktop41";
import Property1Desktop4 from "../components/Property1Desktop4";
import SubscribeForm from "../components/SubscribeForm";
import MainHeroCard from "../components/MainHeroCard";
import Header from "../components/Header";
import Navbar from "../components/Header";
import Footer from "../components/SubscribeForm";

const Desktop7 = () => {
  return (
    <div className="relative bg-gray-500 w-full h-[9345px] overflow-hidden">
      <InteractionForm />
      <NotificationForm />
      <ContainerCard />
      {/* {/* <Property1Desktop42
        streamlineinterfaceArrows="/streamlineinterfacearrowsupleftcornerarrowcornerupleftupleft3.svg"
        streamlineinterfaceArrows1="/streamlineinterfacearrowsuprightcornerarrowuprightuprightcorner4.svg"
        property1Desktop4Position="absolute"
        property1Desktop4Top="4411px"
        property1Desktop4Left="calc(50% - 720px)"
      /> */}
      {/* <Property1Desktop41
        streamlineinterfaceArrows="/streamlineinterfacearrowsupleftcornerarrowcornerupleftupleft4.svg"
        streamlineinterfaceArrows1="/streamlineinterfacearrowsuprightcornerarrowuprightuprightcorner4.svg"
        property1Desktop4Position="absolute"
        property1Desktop4Top="5807px"
        property1Desktop4Left="calc(50% - 720px)"
        heresAPreviewFontWeight="unset"
      /> */}
      {/* <Property1Desktop4
        property1Desktop4BackgroundColor="unset"
        property1Desktop4Overflow="unset"
        property1Desktop4Position="absolute"
        property1Desktop4Top="6752px"
        property1Desktop4Left="calc(50% - 720px)"
      />  */}
      <Footer />
      <MainHeroCard />
      <Navbar />
    </div>
  );
};

export default Desktop7;
