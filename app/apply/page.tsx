import { Metadata } from "next";
import { redirect } from "next/navigation";

import {
  isRecruitmentOpen,
  redirectTime,
  formLink,
} from "@/config/applications";
import { AnimatedTitle } from "@/components/ui/animated-sections";
import { metadata as metadataConfig } from "@/config/metadata";

export const generateMetadata = (): Metadata => {
  return {
    title: `Apply | ${metadataConfig.shortName}`,
    description: "Join Finova by applying through our recruitment process.",
  };
};

export default async function ApplyPage() {
  if (isRecruitmentOpen) {
    await new Promise((resolve) => setTimeout(resolve, redirectTime * 1000));
    redirect(formLink);
  }

  return (
    <main className="">
      <AnimatedTitle
        title="APPLICATIONS CLOSED"
        description="Applications for the current recruitment cycle have closed. Please check back later for updates."
      />
    </main>
  );
}
