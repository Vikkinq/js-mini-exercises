const profiles = {
  profileData: [],

  addProfile(name, age, location, imgURL) {
    const userProfile = {
      name,
      age,
      location,
      imgURL,
    };

    this.profileData.push(userProfile);
  },

  renderProfiles() {
    for (let i = 0; i < this.profileData.length; i++) {
      const profile = this.profileData[i];
      const card = document.querySelector("#profile-stack");
      const cardCreation = document.createElement("div");
      cardCreation.classList.add("profile-card");

      const image = document.createElement("img");
      image.setAttribute("src", profile.imgURL);

      const h3 = document.createElement("h3");
      const pAge = document.createElement("p");
      const pLocation = document.createElement("p");

      h3.textContent = `${profile.name}`;
      pAge.textContent = `${profile.age}`;
      pLocation.textContent = `${profile.location}`;

      cardCreation.appendChild(h3);
      cardCreation.appendChild(image);
      cardCreation.appendChild(pAge);
      cardCreation.appendChild(pLocation);
      card.appendChild(cardCreation);
    }
  },
};
