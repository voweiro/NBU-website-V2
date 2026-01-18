import { LucideIcon, GraduationCap, Network, Zap, ShieldCheck, Users, Book } from "lucide-react";

export interface Resource {
  name: string;
  desc: string;
  link: string;
}

export interface StaffMember {
  name: string;
  title: string;
  degree?: string;
  subtitle?: string;
  image: string;
}

export interface Value {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const subscribedResources: Resource[] = [
  { name: "Research4Life", desc: "Global access to health, agriculture, and environment research.", link: "https://www.research4life.org/" },
  { name: "ScienceDirect", desc: "Leading platform of peer-reviewed scholarly literature.", link: "https://www.sciencedirect.com/" },
  { name: "Law Pavilion", desc: "Africa's leading legal research and analytics platform.", link: "https://lawpavilion.com/" },
  { name: "LexisNexis", desc: "Comprehensive legal, regulatory, and business information.", link: "https://www.lexisnexis.com/" },
  { name: "OPAC", desc: "Online Public Access Catalog for our physical collection.", link: "#" },
  { name: "Legalpedia", desc: "Advanced legal research tool for law professionals.", link: "https://legalpediaonline.com/" },
  { name: "e-Library", desc: "Digital portal for university-wide electronic resources.", link: "#" },
];

export const openAccessResources: Resource[] = [
  { name: "PubMed Central", desc: "Biomedical & life sciences journal articles.", link: "https://www.ncbi.nlm.nih.gov/pmc/" },
  { name: "OMIICS International", desc: "Science & medical research publications.", link: "https://www.omicsonline.org/" },
  { name: "AJOL", desc: "African Journals Online - African-published research.", link: "https://www.ajol.info/" },
  { name: "MDPI", desc: "Multidisciplinary Open Access journals.", link: "https://www.mdpi.com/" },
  { name: "Oxford Academic", desc: "Scholarly journals across all disciplines.", link: "https://academic.oup.com/" },
  { name: "Archives of Medicine", desc: "Peer-reviewed medical research articles.", link: "https://www.archivesofmedicine.com/" },
  { name: "Taylor & Francis Online", desc: "Multidisciplinary peer-reviewed journals.", link: "https://www.tandfonline.com/" },
  { name: "DOAB", desc: "Directory of Open Access Books.", link: "https://www.doabooks.org/" },
  { name: "DOAJ", desc: "Directory of Open Access Journals.", link: "https://doaj.org/" },
  { name: "RePEc", desc: "Research Papers in Economics.", link: "http://repec.org/" },
  { name: "SSRN", desc: "Social Science Research Network.", link: "https://www.ssrn.com/" },
  { name: "AERC", desc: "African Economic Research Consortium.", link: "https://aercafrica.org/" },
  { name: "PEP", desc: "Partnership for Economic Policy.", link: "https://www.pep-net.org/" },
];

export const values: Value[] = [
  { title: "Excellence", desc: "Delivering world-class resources and services.", icon: GraduationCap },
  { title: "Accessibility", desc: "Providing equitable access to information to all.", icon: Network },
  { title: "Innovation", desc: "Leveraging technology to advance learning and research.", icon: Zap },
  { title: "Integrity", desc: "Maintaining ethical, transparent and professional practices.", icon: ShieldCheck },
  { title: "Collaboration", desc: "Building strong partnership with students and faculty.", icon: Users },
  { title: "Lifelong Learning", desc: "Supporting continuous education and growth.", icon: Book },
];

export const services: string[] = [
  "Library Use Instruction/ Orientation Program",
  "Information literacy training",
  "Circulation services",
  "Reference and research assistance",
  "Current awareness & Information dissemination",
  "Hands-on training on online databases",
];

export const libraryStaff: StaffMember[] = [
  { name: "DR. HARRIET U. IGBO", title: "UNIVERSITY LIBRARIAN", degree: "Ph.D, MNLA, CLN", image: "/images/staff/librarian.jpg" },
  { name: "Mr. Chinua Prince Nwokeoma", title: "Head Cataloguing and Classification", image: "/images/staff/cataloger.jpg" },
  { name: "Mrs Obiageri Onyema", title: "Head Branch Library", subtitle: "Faculty of Computing & IT", image: "/images/staff/branch_head.jpg" },
  // Placeholders for remaining 9 staff members
  { name: "Dr. Adebayo Olufemi", title: "Deputy University Librarian", degree: "Ph.D", image: "/images/staff/placeholder_staff.jpg" },
  { name: "Ms. Chika Okoro", title: "Head of Digital Literacy", degree: "M.Sc", image: "/images/staff/placeholder_staff.jpg" },
  { name: "Mr. Ibrahim Musa", title: "Systems Administrator", degree: "B.Tech", image: "/images/staff/placeholder_staff.jpg" },
  { name: "Mrs. Nkechi Eze", title: "Acquisitions Librarian", degree: "MLS", image: "/images/staff/placeholder_staff.jpg" },
  { name: "Mr. Samuel Johnson", title: "Reference Librarian", degree: "BLS", image: "/images/staff/placeholder_staff.jpg" },
  { name: "Ms. Grace Aminu", title: "Serials Librarian", degree: "MLS", image: "/images/staff/placeholder_staff.jpg" },
  { name: "Mr. Daniel Akpan", title: "Archives & Records Manager", degree: "M.Inf.Sci", image: "/images/staff/placeholder_staff.jpg" },
  { name: "Mrs. Fatima Bello", title: "User Services Librarian", degree: "BLS", image: "/images/staff/placeholder_staff.jpg" },
  { name: "Mr. Victor Okafor", title: "Institutional Repository Manager", degree: "M.Sc", image: "/images/staff/placeholder_staff.jpg" },
];
