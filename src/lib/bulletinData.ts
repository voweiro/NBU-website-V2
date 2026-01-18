// lib/bulletinData.ts or data/bulletinData.ts

export type Bulletin = {
  title: string;
  month: string;
  url: string;
  description: string;
  image: string;
};

export const bulletins: Bulletin[] = [
  {
    title: "January Bulletin - Welcome Back",
    month: "January",
    url: "/bulletins/january.pdf",
    description: "Welcome back to a fresh semester! See what’s new this year.",
    image: "/images/jan.png",
  },
  {
    title: "February Bulletin - Academic Updates",
    month: "February",
    url: "/bulletins/february.pdf",
    description:
      "Important academic announcements and schedules for this month.",
    image: "/images/feb.png",
  },
  {
    title: "March Bulletin - Research Highlights",
    month: "March",
    url: "/bulletins/march.pdf",
    description: "Check out the latest faculty research projects.",
    image: "/images/march.png",
  },
  {
    title: "April Bulletin - Easter Events",
    month: "April",
    url: "/bulletins/april.pdf",
    description: "Catch up on all Easter celebrations and student activities.",
    image: "/images/april.png",
  },
  //   {
  //     title: "May Bulletin - Midterm Prep",
  //     month: "May",
  //     url: "/bulletins/may.pdf",
  //     description: "Everything you need to know to prepare for midterms.",
  //     image: "/bulletins/may-image.jpg",
  //   },
  //   {
  //     title: "June Bulletin - Summer Courses",
  //     month: "June",
  //     url: "/bulletins/june.pdf",
  //     description: "Explore available summer courses and registration details.",
  //     image: "/bulletins/june-image.jpg",
  //   },
];
