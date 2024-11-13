const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamContainerElem = document.querySelector(".team-container");

////////////////
// FUNCTIONS //
//////////////
const createCard = (member) => {
  const {name, role, email, img} = member;
  return `
      <div class="col-12 col-lg-4">  
        <div class="card mb-5 bg-black">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${img}" class="img-fluid rounded-start" alt="${name}" />
                </div>
                <div class="col-md-8">
                    <div class="card-body ">
                        <h2 class="card-title text-light text-uppercase fs-5">${name}</h2>
                        <p class="card-text text-light fs-5">${role}</p>
                        <a class="card-text text-decoration-none fs-54">${email}</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
  `;
};

const renderTeam = () => {
  let items = "";

  for(let i = 0; i < teamMembers.length; i++) {
    const card = createCard(teamMembers[i]);
    items += card;
  }

  teamContainerElem.innerHTML = items;
};

// OUTPUT
renderTeam();