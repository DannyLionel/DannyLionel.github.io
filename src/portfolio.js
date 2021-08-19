/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Danny Lionel",
  title: "Hi all, I'm Danny",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1QxuoSNbaqxFM6UftwVAudKb9PW7wVVkY/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/DannyLionel",
  linkedin: "https://www.linkedin.com/in/dannylionel/",
  gmail: "dhanushga.lionel@ontariotechu.net",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  //medium: "https://medium.com/@davidrakosi",
  //stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/danny.lionel1/',
  twitter: 'https://twitter.com/Dhanush134',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ontario Tech University",
      logo: require("./assets/images/otulogo.png"),
      subHeader: "Bachelor of Engineering in Software Engineering",
      duration: "September 2016 - April 2021",
      desc: "Took courses about Web & Mobile App Development, Software Security, Distributed Systems, Machine Learning and Artifical Intelligence",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    //{
     // schoolName: "Stanford University",
     // logo: require("./assets/images/stanfordLogo.png"),
    //  subHeader: "Bachelor of Science in Computer Science",
     // duration: "September 2013 - April 2017",
     // desc:
      //  "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
     // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    //}
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML/CSS", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript",
      progressPercentage: "70%"
    },
    {
      Stack: "Python",
      progressPercentage: "75%"
    },
    {
      Stack: "Java",
      progressPercentage: "80%"
    },
    {
      Stack: "SQL",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Clever Programmer",
      companylogo: require("./assets/images/cpLogo.png"),
      date: "September 2020 – Present",
      desc:
        "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building applications",
        "Coaching",
        "Streaming live on YouTube",
        "Creating tutorials"
      ]
    },
    {
      role: "Product Owner (PSD2)",
      company: "Erste Bank",
      companylogo: require("./assets/images/ersteLogo.jpg"),
      date: "July 2019 – September 2020",
      desc:
        "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
    },
    {
      role: "Junior Information Security & Systems Representative",
      company: "Vodafone",
      companylogo: require("./assets/images/vodafoneLogo.png"),
      date: "November 2018 – July 2019",
      desc:
        "I've conducted internal audit making sure the organization is compliant with the GDPR."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "dannylionel", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME Projects that I'm proud of...",
  projects: [
    {
      image: require("./assets/images/capstone.jpg"),
      projectName: "Capstone Project",
      projectDesc: "Advancing reminiscence therapy for Dementia patients through an intuitive web app.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sites.google.com/view/artcapstoneproject/home?authuser=1"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/react1.png"),
      projectName: "React Phone Store",
      projectDesc: "E-commerce react website for phones",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://phonebookstore.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/GPUStore.jpg"),
      projectName: "GPU Store",
      projectDesc: "E-commerce website to buy gaming equipment",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gpuandphone.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/mytrack3.jpg"),
      projectName: "MyTrack",
      projectDesc: "Vehicle Tracking Software for Android application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sites.google.com/view/mytrackproject/home?authuser=1"
        }
      ]
    },
    {
      image: require("./assets/images/car4u2.jpg"),
      projectName: "Car4U",
      projectDesc: "Car Rental App for Android",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sites.google.com/view/car4uproject/home?authuser=1"
        }
      ]
    },
    {
      image: require("./assets/images/comfyhouse.jfif"),
      projectName: "Furniture Store",
      projectDesc: "Online furniture store",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://dl-comfyhouse.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/stan.jfif"),
      projectName: "Stan Lee Comic",
      projectDesc: "Stan Lee Tribute page in Comic form",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://stanleecomic.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(647) 913 8011",
  email_address: "dhanushga.lionel@ontariotechu.net"
};

// Twitter Section

const twitterDetails = {
  userName: "Dhanush134", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
