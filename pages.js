const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/b0rke-mborina/b0rke-mborina.github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "build",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
