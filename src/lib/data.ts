export interface Officer {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string[];
  appointments?: string[];
}

export const officers: Officer[] = [
  {
    id: 1,
    name: "Prof Hakeem Fawehinmi",
    title: "President/ Vice Chancellor",
    image: "/images/vc.jpg",
    bio: [
      "Prof Hakeem Fawehinmi is a Professor of Clinical Anatomy and Biomedical Anthropology. He is well rooted in the finest academic traditions and has a wealth of experience in Institutional Administration having been Two-time Head of Department of Anatomy (2005 – 2007; 2007 – 2009 Niger Delta University), Associate Dean (2010 – 2012) and Dean (2012 – 2014) Faculty of Basic Medical Sciences and two terms Deputy Vice-Chancellor (Academic) (2016 – 2020) of the University of Port Harcourt. He has served in several Statutory and Ad–hoc Committees and Boards, attributes which have equipped him with the requisite skills to provide leadership to a well-informed, articulate and growing academic community. ",
    ],
    appointments: ["Niger Delta University"],
  },
  {
    id: 2,
    name: "Professor Ruth Ashford",
    title: "Deputy Vice Chancellor (DVC) ",
    image: "/images/dvc.jpeg",
    bio: [
      "Professor Ruth Ashford has more than 28 years’ experience in Higher Education management within UK University Business Schools – previously as Pro Vice-Chancellor and Dean of the Faculty of Business and Law at Manchester Metropolitan University (MMU) and Executive Dean at University of Chester Business and Management Faculty. She has a wealth of experience in developing and leading large complex Business Schools. As the former Chief Examiner of the Chartered Institute of Marketing (CIM) and CIM Senator, Professor Ashford was involved with the international launch of the CIM Professional undergraduate and postgraduate new syllabus in 90 countries. Prof Ashford is currently a CIM Level Verifier.",
      "She was also the prime mover behind the development and launch of the UK National Foundation Degree in Retailing. She is also the former Chair of the Academy of Marketing (AM), which is the international learned society for marketing academics. Professor Ashford was a former Board Member of the Association of Business Schools (now CABS), and working with other stakeholders, she enjoys promoting the voice of diversity within Business Schools nationally",
      "With research interests in Management Competencies and the positioning of UK Business Schools, Professor Ashford was previously invited and completed national level work on the Quality Assurance Agency (QAA) for Higher Education Review Panel for the UK Benchmark Standards in the teaching of Business and Management for both undergraduate and postgraduate levels.She holds a PhD from Lancaster University, where her research focuses on Consumer Behaviour; and during her career, she has been decorated with leadership awards in the HE sector, including the prestigious National Teaching Fellowship Award (NTF) in 2010.",
      "Professor Ashford has co-authored over 30 journal articles and 8 books on Strategic Marketing/Management. She has also written on diverse subjects including: Women in Leadership; Developing Entrepreneurial Skills in Adolescents; Marketing Secondary Schools and Sixth Form Colleges; Planning Supply Chain Production in Manufacturing Small Businesses; Female Career Progression and Users’ Perspectives of Online Kiosks",
    ],
    appointments: [
      "Pro Vice-Chancellor, Manchester Metropolitan University (2018-2020)",
      "Dean, Faculty of Business and Law, University of Chester (2020-2022)",
    ],
  },
  {
    id: 3,
    name: "Rev. Fr. Professor Innocent Ebere Uwah",
    title: "Deputy Vice Chancellor (DVC) Academic Affairs",
    image: "/images/dvca.jpg",
    bio: [
      "Rev. Fr. Professor Innocent Ebere Uwah is a distinguished scholar, administrator, and Catholic priest with a strong background in Film Studies, Ethics, and Theology. He holds a PhD from Dublin City University, Ireland, and is a fellow of both the Africa House Fellowship at the University of Cape Town, South Africa, and the Combe Trust Fellowship at the Institute for Advanced Studies in the Humanities, University of Edinburgh, Scotland, United Kingdom.",
      "enowned for his visionary leadership and commitment to holistic human development, Professor Uwah integrates gospel values into both Church and academic life. As Director of Social Communications in his home Diocese, he has demonstrated a deep commitment to research, communication, and ethical engagement in society. His scholarly interests lie at the intersection of Ethics, Theology, and Film in Society.",
    ],
    appointments: [
      "Director, Social Communications, Catholic Diocese of Umuahia (2018-Present)",
      "Director, Africa House Fellowship, University of Cape Town (2016-2017)",
    ],
  },
  {
    id: 4,
    name: "Mr. Leonard Khama",
    title: "Registrar",
    image: "/images/Regis.jpg",
    bio: [
      "Mr. Leonard Khama holds a Bachelor of Science in Political Science, from the Anambra State University of Technology, ASUTECH, and Master of Science, Political Science, from Enugu State University of Science and Technology, ESUT. He is a Member of the Association of Nigeria Universities Professional Administrators, ANUPA and a Fellow of the Institute of Corporate Administration, ICA. He has attended many National and International Conferences. He has had a proven track record of service in the University system and was the Registrar of Enugu State University of Science and Technology between May 2015 and May 2020. He is happily married to Vivien Anayo Khama and the marriage is blessed with children. Mr Khama was appointed the pioneer Registrar of the Nigerian British University on 5th May, 2023.",
    ],
    appointments: [
      "Registrar of Enugu State University of Science and Technology (2015-2020)",
      "Registrar of Nigerian British University (2023-Present)",
      "Member, Association of Nigerian University Professional Administrators",
    ],
  },
  {
    id: 5,
    name: "Mr. Chukwuemerie C. Nnamdi",
    title: "Bursar",
    image: "/images/bursar.jpg",
    bio: [
      "Mr. Chukwuemerie Chukwujamunma Nnamdi is an Accountant with nearly 20 years of post-graduation experience in the discipline. He obtained his Bachelor’s degrees in Accounting from the University of Nigeria Nsukka in 2003. His work experiences in Accounting range from Construction Industry to Interior Decoration and then to ICT. He was instrumental in either setting up or consolidating the various Accounting Departments of the establishments he had worked in.",
      "He is a Member of the Institute of Chartered Accountants of Nigeria (ICAN) and has participated in some of the Conferences, Workshops and Seminars organized by the Institute. Mr. Chukwuemerie Nnamdi hails from Oboro in Ikwuano Local Government Area of Abia State. He is an ordained Minister of the Gospel and is married to Mrs. Peace Ifeyinwa Nnamdi (Nee Obionu). The marriage is blessed with two children.",
    ],
    appointments: [
      "Bursar, Nigerian British University (2023-Present)",
      "Accountant, Various Industries (2003-2023)",
      "Member, Institute of Chartered Accountants of Nigeria (ICAN)",
    ],
  },
];
