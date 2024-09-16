import { v4 as uuidv4 } from 'uuid';


const personalData = {
  firstName: "",
  lastName: "",
  profession: "",
  aboutMe: "",
  address: "",
  linkedIn: "",
  portfolio: "",
  email: "",
  phoneNumber: "",
};

function createSkill() {
  return {
    id: uuidv4() ,
    name: "",
  };
}

function createLanguage() {
  return {
    id: uuidv4(),
    name: "",
    proficiency: "null",
  };
}

function createEducationEntry() {
  return {
    id: uuidv4(),
    school: "",
    degree: "",
    from: "",
    to: "",
  };
}

function createExperienceEntry() {
  return {
    id: uuidv4(),
    position: "",
    company: "",
    location: "",
    from: "",
    to: "",
    details: "",
  };
}

function createInterest() {
  return {
    id: uuidv4(),
    iconId: null,
    name: "",
  };
}

export {
  personalData,
  createEducationEntry,
  createExperienceEntry,
  createSkill,
  createLanguage,
  createInterest,
};