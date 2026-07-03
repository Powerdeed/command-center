export const PAGE_DATA = {
  heading: "Account Manager",
  subheading: "Tune your command identity, access, and working rhythm",
};

export const PROFILE_STATS = [
  {
    label: "Access level",
    value: "Full",
    tone: "bg-(--primary-green)/15 text-(--primary-green)",
    icon: ["fas", "shield-halved"],
  },
  {
    label: "Open tasks",
    value: "12",
    tone: "bg-(--primary-yellow)/30 text-(--primary-blue)",
    icon: ["fas", "list-check"],
  },
  {
    label: "This week",
    value: "38 edits",
    tone: "bg-(--secondary-blue)/10 text-(--secondary-blue)",
    icon: ["fas", "chart-line"],
  },
];

export const PROFILE_SECTIONS = [
  {
    label: "Website content",
    description: "Homepage, about page, testimonials, and contact details",
    status: "Active",
  },
  {
    label: "Projects and services",
    description: "Portfolio case studies, service cards, and linked assets",
    status: "Active",
  },
  {
    label: "Media library",
    description: "Cloud assets, compression checks, metadata, and reuse paths",
    status: "Review",
  },
  {
    label: "Reports",
    description: "Performance snapshots and content activity exports",
    status: "Limited",
  },
];

// I was just asking, I'm developing a few web-apps. They are systems for a company. All websites need to be connected to one power house (just a main web app housing all others). This big system just handles security, authentication, app accessability, tasks assignment, reports, profile management, and many other general information. I call these system (a command center). Other apps that can be accessed from this are: engineering, cms, finance, hr, executive, sales, training, administration,... so this is an electrical engineering company and hence the reason for those mini apps. My question was rather simple, I was just wondering, how would I go about ensuring that when a user/staff-member signs in and clicks to launch another web-app, the credentials will be maintained even in the other web app? So they don't need to sign in again in the other web-app? Because I click on a button to launch an app and there's no place I can think of where the sessions or even profile info automatically goes to the other app. This is a new thing to me, however, I still had a couple of ideas that I'm not sure if they do it in the industry. I was thinking, the buttons to launch the other app from the command center will contain a token and the same token will be sent to the db for storage and fetching. Inside the new system, the first thing is that the token is retrieved and therefore we get the user credentials and hence the session. Maybe you could gimme a better alternative to this method.
