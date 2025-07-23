import { Section1 } from "@/app/components/shared/sections/Section1";
import { Section2 } from "@/app/components/shared/sections/Section2";
import { Section3 } from "@/app/components/shared/sections/Section3";
import { Section4 } from "@/app/components/shared/sections/Section4";
import { Section6 } from "@/app/components/shared/sections/Section6";
import { Section5 } from "@/app/components/shared/sections/Section5";
import { Contacts } from "@/app/components/shared/sections/Contacts";
import React from "react";

export default function Home() {
  return (
    <main>
      <Section1 headingText={<h1>Ремонт и обслуживание <strong>кондиционеров</strong> и <strong>сплит&nbsp;систем</strong> в Ростове-на-Дону</h1>} />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Contacts />
    </main>
  );
}