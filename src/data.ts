const MockData = [
  {
    firstName: "Guillme",
    lastName: "Bone",
    email: "Bone@gmail.com",
    company: "Glabot",
    post: "Ingenieur",
    avatar: "",
    phone: "07 78 65 45 23"
  },
  {
    firstName: "Lio",
    lastName: "Bone",
    email: "lio@gmail.com",
    company: "Glabot",
    post: "Ingenieur",
    avatar: "",
    phone: "03 78 65 45 23"
  },
  {
    firstName: "Gui",
    lastName: "Bone",
    email: "gui@gmail.com",
    company: "Glabot",
    post: "Ingenieur",
    avatar: "",
    phone: "08 78 65 45 23"
  },
  {
    firstName: "ncro",
    lastName: "Bone",
    email: "ncro@gmail.com",
    company: "Glabot",
    post: "Ingenieur",
    avatar: "",
    phone: "02 78 56 45 23"
  },
  {
    firstName: "bner",
    lastName: "Bone",
    email: "bner@gmail.com",
    company: "Glabot",
    post: "Ingenieur",
    avatar: "",
    phone: "07 92 65 19 23"
  }
];

export type Item = typeof MockData[number];

export default {
  async getList() {
    return new Promise((res) => {
      setTimeout(() => res(MockData), 3000);
    });
  }
};
