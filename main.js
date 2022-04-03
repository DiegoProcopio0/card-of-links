const linksSocialMedia = {
  github: "diegoprocopio0",
  youtube: "/channel/UCY-SydAI5mP03RRKdZIoajg",
  instagram: "diego__procopio",
  facebook: "diego.procopio.7140",
  twitter: "twitter",
};

function changeSocialMediaLinks() {
  for (const li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`;
  }
}
changeSocialMediaLinks();

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userImage.src = data.avatar_url;
      userName.textContent = data.name;
      nameUserGithubLogin.textContent = data.login;
      nameUserGithub.href = data.html_url;
      userBio.textContent = data.bio;
    })
    .catch((error) => console.error(error));
}
getGithubProfileInfo();
