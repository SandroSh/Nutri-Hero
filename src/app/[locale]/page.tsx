import { Button } from "@/components/atoms/ButtonField";
import { Navbar } from "@/components/organisms/Navbarr";
import LandingPage from "@/components/pages/LandingPage/LandingPage";
import { useTranslations } from "next-intl";




export default function Home() {
  return (
    <div >
      <Navbar/>
      <LandingPage/>
    </div>
  );
}
