import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Retail Vision Benefits"
        title=" Why should you use this tool"
      >
        Understanding the entire shopping journey is key to making better
        merchandising decisions. Retail Vision uses cutting-edge computer vision
        technology to analyze customer behavior throughout their journey, from
        Awareness to Action.
      </SectionTitle>

      <Benefits data={benefitOne} />

      <SectionTitle
        preTitle="Watch a demo"
        title="Real-Time Customer Journey Tracking"
      >
        Discover how Retail Vision revolutionizes the in-store shopping
        experience with cutting-edge computer vision. Watch our video to see
        real-time tracking and analysis of customer behavior. From Awareness to
        Action, get detailed insights to make data-driven decisions and enhance
        your product assortments. See the future of retail with Retail Vision!
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />
    </Container>
  );
}
