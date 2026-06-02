import process from "process";
import { prisma } from "./prisma";

async function main() {
  const categories = [
    {
      name: "Information Technology & Software",
      slug: "information-technology-software",
      description:
        "Simulate interviews for Fullstack, Frontend, Backend, Mobile Developer, DevOps, and AI/Data Engineer positions.",
    },
    {
      name: "Business & Entrepreneurship",
      slug: "business-entrepreneurship",
      description:
        "Interview for Business Administration, Business Development, Account Executive, and Project Setup roles.",
    },
    {
      name: "Electrical & Electronics Engineering",
      slug: "electrical-electronics-engineering",
      description:
        "IC design, embedded systems, industrial electrical engineering, automation, and signal processing.",
    },
    {
      name: "Marketing & Communications",
      slug: "marketing-communications",
      description:
        "Challenge skills in Content Strategy, SEO, Digital Marketing, Brand Management, and Content Creation.",
    },
    {
      name: "Finance & Accounting",
      slug: "finance-accounting",
      description:
        "Simulate corporate financial analysis, auditing, general accounting, and risk management interviews.",
    },
    {
      name: "Human Resource Management",
      slug: "human-resource-management",
      description:
        "Roles including HR Generalist, Talent Acquisition, C&B (Compensation & Benefits), and Internal Training & Development.",
    },
    {
      name: "Graphic Design & UI/UX",
      slug: "graphic-design-ui-ux",
      description:
        "Evaluate aesthetic thinking, Design System workflows, User Experience design for Web/App, and Product Design.",
    },
    {
      name: "Logistics & Supply Chain Management",
      slug: "logistics-supply-chain-management",
      description:
        "In-depth interviews on transportation coordination, warehouse management, procurement, and logistics cost optimization.",
    },
    {
      name: "Healthcare & Medical Services",
      slug: "healthcare-medical-services",
      description:
        "Simulate medical scenarios, health consulting, pharmacist duties, and medical equipment management.",
    },
    {
      name: "Languages & Translation",
      slug: "languages-translation",
      description:
        "Test pedagogical capacity, translation/interpretation for English, Chinese, Japanese, Korean, and international communication skills.",
    },
  ];

  console.log("Start seeding industry categories...");

  for (const category of categories) {
    await prisma.industryCategory.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
