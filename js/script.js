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
const formElem = document.querySelector(".member-form")
const nameInput = document.getElementById("full-name");
const roleInput = document.getElementById("role");
const emailInput = document.getElementById("email");
const imgInput = document.getElementById("user-img");

////////////////
// FUNCTIONS //
//////////////
const createCard = (member) => {
  const {name, role, email, img} = member;
  return `
      <div class="col-12 col-md-6 col-lg-6 col-xl-4">  
        <div class="card mb-5 bg-black">
            <div class="row g-0">
                <div class="col-4">
                    <img src="./${img}" class="w-100 h-100 rounded-start" alt="${name}" />
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h2 class="card-title text-light text-uppercase fs-5 fw-bold">${name}</h2>
                        <p class="card-text text-light">${role}</p>
                        <a class="card-text text-decoration-none link-info">${email}</a>
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

const handleSubmit = (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const role = roleInput.value.trim();
  const email = emailInput.value.trim();
  const img = imgInput.value.trim();  


  const newMember = {
    name,
    role,
    email,
    img
  }

  teamMembers.push(newMember);

  renderTeam();

  formElem.reset();
};

// Output
renderTeam();

formElem.addEventListener("submit", handleSubmit);