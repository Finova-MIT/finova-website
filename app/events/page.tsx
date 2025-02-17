import { Metadata } from "next";
import { metadata as metadataConfig } from "@/config/metadata";
import { AnimatedTitle } from "@/components/ui/animated-sections";

export const generateMetadata = (): Metadata => {
  return {
    title: `Events | ${metadataConfig.shortName}`,
    description: "Events that Finova conducts are displayed on this webpage.",
  };
};

export default function Home() {
  return (
    <main className="">
      <AnimatedTitle
        title="EVENTS"
        description="We host a dynamic range of events, workshops, and talks designed to
        inspire and empower students. Our events aim to foster innovation and
        skill development in finance, technology, and beyond."
      />

      <div className="text-center p-16 bg-muted/30 text-muted-foreground">
        Stay tuned for opportunities to learn, connect, and grow with us!
      </div>
    </main>
  );
}
