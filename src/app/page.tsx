import s from "./page.module.scss";

import { Header } from "@/app/components/shared";
import { Section1 } from "@/app/components/shared/sections/Section1";
import { Section2 } from "@/app/components/shared/sections/Section2";
import { Section3 } from "@/app/components/shared/sections/Section3";
import { Section4 } from "@/app/components/shared/sections/Section4";
import { Section6 } from "@/app/components/shared/sections/Section6";
import { Section5 } from "@/app/components/shared/sections/Section5";
import { Contacts } from "@/app/components/shared/sections/Contacts";
import { Footer } from "@/app/components/shared/Footer";

export default function Home() {
  return (
    <div className={s.wrapper}>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}