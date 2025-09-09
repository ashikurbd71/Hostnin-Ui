import ControlPanel from "@/components/home/ControlPanel";
import HappyCustomer from "@/components/home/HappyCustomer";
import HaveQuestions from "@/components/home/HaveQuestions";
import Hero from "@/components/home/hero";
import Hostingplan from "@/components/home/Hostingplan";
import OntherHost from "@/components/home/OntherHost";
import SearchDomain from "@/components/home/SearchDomain";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  return (
    <div>
      <Hero />
      <Hostingplan />
      <OntherHost />
      <SearchDomain />
      <ControlPanel />
      <HaveQuestions />

    </div>
  );
}
