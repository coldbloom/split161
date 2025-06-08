import { Carousel } from "@/app/components/shared/sections/Section6/Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import { Layout } from '@/app/components/shared/Layout'

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES = ['/carousel/slide_1.svg', '/carousel/slide_5.jpg', '/carousel/slide_2.svg', '/carousel/slide_3.svg', '/carousel/slide_7.jpg'];

export const Section6 = () => {
  return (
    <Layout>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </Layout>
  );
};