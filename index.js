const humburger = document.querySelector('.humburger_menu');
const navMenu = document.querySelector('.mobile_menu');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav_link').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

const modalContainer = document.querySelector('#pop_up_window');

const objects = [
  {
    id: 'work_one',
    projectName: 'Tonic',
    detailsOne: 'CANOPY',
    detailsTwo: 'End Dev',
    year: '2015',
    image: 'images/Snapshoot Portfolio.svg',
    alt: 'image',
    paragraphShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tools: ['html', 'css', 'Javascript'],
    toolsTwo: ['github', 'ruby', 'bootstraps'],
    submitButton: 'work_section_buttons',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'work_two',
    projectName: 'Multi-Post',
    detailsOne: 'CANOPY',
    detailsTwo: 'End Dev',
    year: '2015',
    image: 'images/Snapshoot Portfolio_2.svg',
    alt: 'image',
    paragraphShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tools: ['html', 'css', 'Javascript'],
    toolsTwo: ['github', 'ruby', 'bootstraps'],
    submitButton: 'work_section_buttons',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'workThree',
    projectName: 'Tonic',
    detailsOne: 'CANOPY',
    detailsTwo: 'End Dev',
    year: '2015',
    image: 'images/Snapshoot Portfolio_3.svg',
    alt: 'image',
    paragraphShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tools: ['html', 'css', 'Javascript'],
    toolsTwo: ['github', 'ruby', 'bootstraps'],
    submitButton: 'work_section_buttons',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'work_four',
    projectName: 'Multi-Post',
    detailsOne: 'CANOPY',
    detailsTwo: 'End Dev',
    year: '2015',
    image: 'images/Snapshoot Portfolio_4.svg',
    alt: 'image',
    paragraphShort: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    tools: ['html', 'css', 'Javascript'],
    toolsTwo: ['github', 'ruby', 'bootstraps'],
    submitButton: 'work_section_buttons',
    liveLink: '#',
    sourceLink: '#',
  },
];

function getToolsTemplate(tools) {
  let toolsContent = '';

  tools.forEach((tool) => {
    toolsContent += `
     <li>${tool}</li>
     `;
  });
  return toolsContent;
}

function popUpModal(object) {
  const popModalContents = `
    <div class="pop_up_blur_effect"></div>
    
     <div class="popup_card_one">
        <div class="top_container">
          <div class="details_wrapper">
            <h2>${object.projectName}</h2>
          </div>
          <button class="popup_cross_button">
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <div class="card_details">
          <ul>
              <li class="canopy">${object.detailsOne}</li>
              <li>${object.detailsTwo}</li>
              <li>${object.year}</li>
              
          </ul>
        </div>
        <div class="card_image">
            <img src="${object.image}" alt="${object.alt}"> 
        </div>
        <div class="paragraph_buttons">
          <p class="paragraph">
            ${object.paragraph}
          </p>
          <div class="popup_buttons">
            <div class="first_buttons">
              ${getToolsTemplate(object.tools)}
            </div> 
            <div class="extra_buttons">
              ${getToolsTemplate(object.toolsTwo)}
            </div>
            <hr>
            <div class="project_button">
               <button>
                   See live <img src="images/Icon - Export.png" alt="">
               </button>
               <button>
                   <span>
                     see source
                   </span>
                    <img src="images/github in button.png" alt="">

               </button>
            </div>
          </div>
        </div>
          
     </div>`;

  return popModalContents;
}

function loadProjectsCards(objects = []) {
  let cardContent = '';

  objects.forEach((object) => {
    cardContent += `
        <div class="card_container">
          <div class="card_one">
            <div class="card_image">
              <img src="${object.image}" alt="${object.alt}">
            </div>

            <div class="details_wrapper">
              <h2>
                ${object.projectName}
              </h2>
              <div class="card_details">
                <ul>
                  <li class="canopy">${object.detailsOne}</li>
                  <li>${object.detailsTwo}</li>
                  <li>${object.year}</li>
                </ul>
                <p>
                  ${object.paragraphShort}
                </p>
              </div>
              <ul class="first_buttons">
                ${getToolsTemplate(object.tools)}
                   
              </ul>
              <div class="last-button">
                <button data-project-id="${object.id}" id="see-project-button">
                  See Project
                </button>  
              </div>
            </div>
          </div>
        </div>
      `;
  });
  return cardContent;
}

function closePopUp() {
  modalContainer.style.display = 'none';
}

function openPopUp(object) {
  const popUpTemplate = popUpModal(object);
  modalContainer.innerHTML = popUpTemplate;
  modalContainer.style.display = 'block';

  const popUpCloseButton = document.querySelector('.popup_cross_button');

  popUpCloseButton.addEventListener('click', closePopUp);
}

window.addEventListener('load', () => {
  const portfolioSection = document.querySelector('#work');
  modalContainer.style.display = 'none';

  portfolioSection.innerHTML = loadProjectsCards(objects);

  const projectButtons = document.querySelectorAll('#see-project-button');

  Array.from(projectButtons).forEach((element) => {
    element.addEventListener('click', () => {
      const projectID = element.getAttribute('data-project-id');
      const projectObj = objects.find((object) => object.id === projectID);

      openPopUp(projectObj);
    });
  });
});

const email = document.getElementById('email');

document.querySelector('#contact_button').addEventListener('click', (e) => {
  const name = document.getElementById('name');
  if (!name.validity.valid) {
    document.getElementById('alertmessage').innerHTML = 'Name field is empty!';
    e.preventDefault();
    return;
  }
  if (email.validity.typeMismatch) {
    document.getElementById('alertmessage').innerHTML = 'Email field is Empty!';
    e.preventDefault();
    return;
  }
  if (email.validity.patternMismatch) {
    document.getElementById('alertmessage').innerHTML = 'Email should be in lowercase!';
    e.preventDefault();
    return;
  }
  const text = document.getElementById('textarea');
  if (!text.validity.valid) {
    document.getElementById('alertmessage').innerHTML = 'Empty message';
    e.preventDefault();
    return;
  }
  document.getElementById('form').press();
});

const localData = document.querySelectorAll('.input_field');
const localStoreData = {
  name: '',
  email: '',
  message: '',
};
localData.forEach((input) => {
  input.addEventListener('input', () => {
    localStoreData[input.name] = input.value;
    localStoreData[input.email] = input.value;
    localStoreData[input.message] = input.value;
    localStorage.setItem('information', JSON.stringify(localStoreData));
  });
});
const informationStored = JSON.parse(localStorage.getItem('information'));
if (informationStored) {
  localData.forEach((element) => {
     element.value = informationStored[element.name];
  });
}
