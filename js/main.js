const elPerson = document.querySelector(".person__task");
const elPost = document.querySelector(".post__task");
const elComment = document.querySelector(".comment__task");

function renderUsers(arr , node){
    const fragment = document.createDocumentFragment();

    arr.forEach(element => {
      const personItem = document.createElement("li");
      const personUsername = document.createElement("strong");
      const personBox = document.createElement("div");
      const personName = document.createElement("strong");
      const personNumber = document.createElement("span"); 
      const personAddressBox = document.createElement("div");
      const personStreet = document.createElement("span"); 
      const personSuite = document.createElement("span"); 
      const personcity = document.createElement("span"); 
      const personZipCode = document.createElement("span"); 
      const personOfficialBox = document.createElement("div");
      const personCompanyName = document.createElement("p");
      const personCompanyCatchParse = document.createElement("p"); 
      const personCompanyBs = document.createElement("p")
      const personContactBox = document.createElement("div");
      const personPhoneNumber= document.createElement("span"); 
      const personContactLink = document.createElement("span"); 
      const personWebsite = document.createElement("span"); 
      const personEmail = document.createElement("span"); 

      personUsername.setAttribute("class" , "person__username");
      personUsername.textContent = element.username;
      personBox.setAttribute("class" , "person__box");
      personName.setAttribute("class" , "person__Name");
      personName.textContent = element.name;
      personNumber.setAttribute("class" , "person__number");
      personNumber.textContent = element.id;
      personAddressBox.setAttribute("class" , "person__address-box");
      personStreet.setAttribute("class" , "person__street");
      personStreet.textContent = element.address.street;
      personSuite.setAttribute("class" , "person__suite");
      personSuite.textContent = element.address.suite;
      personcity.setAttribute("class" , "person__city");
      personcity.textContent = element.address.city;
      personZipCode.setAttribute("class" , "person__zipcode");
      personZipCode.textContent = element.address.zipcode;
      personOfficialBox.setAttribute("class" , "person__official-box");

      personUsername.appendChild(personItem);
      personBox.appendChild(personItem);
      personName.appendChild(personBox);
      personNumber.appendChild(personBox);
      personAddressBox.appendChild(personItem);
      personStreet.appendChild(personAddressBox);
      personSuite.appendChild(personAddressBox);
      personcity.appendChild(personAddressBox);
      personZipCode.appendChild(personAddressBox);
      personOfficialBox.appendChild(personItem);
      personCompanyName.appendChild(personOfficialBox);
      personCompanyCatchParse.appendChild(personOfficialBox);
      personCompanyBs.appendChild(personOfficialBox);
      personContactBox.appendChild(personOfficialBox);
      personPhoneNumber.appendChild(personContactBox);
      personContactLink.appendChild(personContactBox);
      personWebsite.appendChild(personContactLink);
      personEmail.appendChild(personContactLink);

      fragment.appendChild(personItem)
    });

    node.appendChild(fragment);
}

async function users(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    renderUsers(data , elPerson)
}

users()

async function posts(){
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
}

async function comments(){
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data =await response.json();
}