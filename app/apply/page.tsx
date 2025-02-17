import { Metadata } from "next";
import { redirect } from "next/navigation";

import {
  isRecruitmentOpen,
  redirectTime,
  formLink,
} from "@/config/applications";
import { AnimatedTitle } from "@/components/ui/animated-sections";

export const generateMetadata = (): Metadata => {
  return {
    title: isRecruitmentOpen
      ? "Apply Now | Finova"
      : "Applications Closed | Finova",
    description: isRecruitmentOpen
      ? "Join Finova by applying through our recruitment process."
      : "Recruitment is currently closed. Check back later.",
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
