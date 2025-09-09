import ControlPanel from "@/components/home/ControlPanel";
import HappyCustomer from "@/components/home/HappyCustomer";
import HaveQuestions from "@/components/home/HaveQuestions";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <div>
      <Hero />

      <ControlPanel />
      <HaveQuestions/>
      <HappyCustomer/>
    </div>
  );
}
