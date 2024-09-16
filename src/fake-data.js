import * as models from "./models";
import defaultProfilePicture from "./images/image.png";

export const fakeData = {
  profilePicture: defaultProfilePicture,
  personal: {
    firstName: "John",
    lastName: "Doe",
    profession: "Software Engineer",
    address: "new road",
    linkedIn: "https://www.linkedin.com/in/john-doe/",
    portfolio: "https://github.com/john-doe",
    email: "XlT5I@example.com",
    phoneNumber: "555-555-5555",
    aboutMe:
      "I'm a passionate and driven web developer with experience in front-end development, back-end development, and database design, I'm always looking for new challanges and opportunities to grop my skills and expand my knowledge of the latest web technologies. In my free time, you can find me tinkering with new web projects, playing guitar, or exploring the beautiful San Francisco Bayar Area.",
  },
  education: [
    {
      ...models.createEducationEntry(),
      school: "University of San Francisco",
      degree: "Bachelor of Science",
      from: "2018",
      to: "2022",
    },
    {
      ...models.createEducationEntry(),
      school: "University of San Francisco",
      degree: "Bachelor of Science",
      from: "2018",
      to: "2022",
    },
    {
      ...models.createEducationEntry(),
      school: "University of San Francisco",
      degree: "Bachelor of Science",
      from: "2018",
      to: "2022",
    },
  ],
  work: [
    {
      ...models.createExperienceEntry(),
      position: "Barista",
      company: "Starbucks",
      location: "San Francisco",
      from: "2018",
      to: "2022",
      details:
        "Starbucks is the best coffee shop ever. I love the coffee and the food.",
    },
  ],
  skills: [
    { ...models.createSkill(), name: "HTML" },
    { ...models.createSkill(), name: "CSS" },
    { ...models.createSkill(), name: "JavaScript" },
    { ...models.createSkill(), name: "React" },
    { ...models.createSkill(), name: "Node.js" },
    { ...models.createSkill(), name: "MongoDB" },
    { ...models.createSkill(), name: "AWS" },
  ],
  languages: [
    { ...models.createLanguage(), name: "English", proficiency: "Native" },
    { ...models.createLanguage(), name: "Spanish", proficiency: "Fluent" },
  ],
  interest: [
    { ...models.createInterest(), iconId: "✈️", name: "Traveling" },
    { ...models.createInterest(), iconId: "📕", name: "Reading" },
    { ...models.createInterest(), iconId: "🏀", name: "Basketball" },
    { ...models.createInterest(), iconId: "🎶", name: "Music" },
    { ...models.createInterest(), iconId: "🎨", name: "Art" },
    { ...models.createInterest(), iconId: "✍️", name: "Writing" },
    { ...models.createInterest(), iconId: "⛑️", name: "Volunteer work" },
    { ...models.createInterest(), iconId: "📷", name: "Photography" },
  ],
};
