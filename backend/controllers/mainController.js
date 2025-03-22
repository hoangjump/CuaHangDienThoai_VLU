const homePage = (req, res) => {
  res.send('Welcome to the Home Page');
};

const aboutPage = (req, res) => {
  res.send('About Us');
};

const contactPage = (req, res) => {
  res.send('Contact Us');
};

module.exports = {
  homePage,
  aboutPage,
  contactPage,
};
