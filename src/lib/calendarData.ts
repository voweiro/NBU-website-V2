export type CalendarEvent = {
  date: string;
  event: string;
  category: "Academic" | "Holiday" | "Exam" | "Social" | "Administrative";
};

export type SemesterData = {
  semester: string;
  events: CalendarEvent[];
};

export const academicCalendar: SemesterData[] = [
  {
    semester: "First Semester (2024/2025)",
    events: [
      { date: "Sunday, 20th October, 2024", event: "Arrival of Fresh Students", category: "Administrative" },
      { date: "Monday, 21st October, 2024", event: "Registration of Fresh Students starts", category: "Administrative" },
      { date: "Monday, 28th October, 2024", event: "Arrival of Returning Students", category: "Administrative" },
      { date: "Monday, 28th October, 2024", event: "Lectures Begin for Fresh Students", category: "Academic" },
      { date: "Monday, 4th November, 2024", event: "Lectures Begin for Returning Students", category: "Academic" },
      { date: "Friday, 15th November, 2024", event: "Registration of all Students ends", category: "Administrative" },
      { date: "Friday, 29th November, 2024", event: "Matriculation Ceremony", category: "Academic" },
      { date: "Friday, 20th December, 2024", event: "Christmas Break Begins", category: "Holiday" },
      { date: "Sunday, 5th January, 2025", event: "Students Return from Christmas Break", category: "Administrative" },
      { date: "Monday, 6th January, 2025", event: "Lectures Resume after Christmas Break", category: "Academic" },
      { date: "Friday, 31st January, 2025", event: "First Semester Lectures End", category: "Academic" },
      { date: "Monday, 3rd February - Friday, 7th February, 2025", event: "Revision Week", category: "Academic" },
      { date: "Monday, 10th February - Friday, 21st February, 2025", event: "First Semester Examinations", category: "Exam" },
      { date: "Saturday, 22nd February, 2025", event: "First Semester Break Begins", category: "Administrative" },
    ],
  },
  {
    semester: "Second Semester (2024/2025)",
    events: [
      { date: "Sunday, 9th March, 2025", event: "Arrival of Students for Second Semester", category: "Administrative" },
      { date: "Monday, 10th March, 2025", event: "Lectures Begin for Second Semester", category: "Academic" },
      { date: "Friday, 18th April - Monday, 21st April, 2025", event: "Easter Break", category: "Holiday" },
      { date: "Friday, 13th June, 2025", event: "Second Semester Lectures End", category: "Academic" },
      { date: "Monday, 16th June - Friday, 20th June, 2025", event: "Revision Week / Students Week", category: "Social" },
      { date: "Monday, 23rd June - Friday, 4th July, 2025", event: "Second Semester Examinations", category: "Exam" },
      { date: "Saturday, 5th July, 2025", event: "End of 2024/2025 Academic Session", category: "Administrative" },
    ],
  },
];
