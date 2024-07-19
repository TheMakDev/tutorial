function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
}
function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "none"
}
//for the first section where the image will slide
 const ImageList = ["mak.jpg", "data3.jpg", "data.jpg"];
  const SlideHeader = [
    "WEB HOSTING",
    "DATA SCIENCE",
    "TECHNOLOGY SIMPLIFIED",
  ];
  const SlideContent = [
    "We are in partnership with highly reliable service provides across the globe to render super efficient web hosting and domain services.",
    "We know that data is life to businesses and corporations. This is why we are at the fare front in providing data related service.",
    "Our job is to bring tecnology closer to you by offering you simple, smart solution.",
  ];
  
const hero = document.getElementById("hero");
  const header = document.getElementById("header");
  const text = document.getElementById("text");
  
  function ImageSlide() {
    const slide = [];
    let currentImageIndex = 0;
  
    for (let i = 0; i < ImageList.length; i++) {
      if (i < ImageList.length) {
        const interval = setInterval(() => {
          hero.style.backgroundImage = `url('${ImageList[currentImageIndex]}')`;
          header.innerText = `${SlideHeader[currentImageIndex]}`;
          text.innerText = `${SlideContent[currentImageIndex]}`;
          i++;
          currentImageIndex = (currentImageIndex + i) % ImageList.length;
  
          slide.push(interval[i]);
        }, 6000);
      } else {
        clearInterval(interval);
      }
    }
  }
  
  ImageSlide();
  

  const headerContainer = document.getElementById("custom_header");
  const headerContainer2 = document.getElementById("custom_header2");
  const headerDiv = document.createElement("div");
  
  function createCustomHeader(header) {
    headerDiv.innerText = header;
    headerDiv.className = "main_custom_header";
    headerContainer.appendChild(headerDiv);
  }
  createCustomHeader("Welcome PETERPAN IT SOLUTIONS");
  createCustomHeader("Welcome PETERPAN IT SOLUTIONS");
  
  
  
  const workShopList = [
    "Server, Nextwork & cyber Security",
    "Databases & Data Science",
    "Website, Software & Forencies",
    "Content writing & Digital Marketing"
  ];
  const listContainer = document.getElementById("workshop_list");
  const listUl = document.createElement("ul");
  listUl.className = "workshop_list_container";
  listContainer.appendChild(listUl);
  function handleCreateList() {
    for (let i = 0; i < workShopList.length; i++) {
      const listLi = document.createElement("li");
      listLi.innerText = workShopList[i];
      listUl.appendChild(listLi);
    }
  }
  handleCreateList();



  const serviceCard = [
    {
      id: 100,
      header: "We Research",
      image: "research.jpg",
    },
    {
      id: 101,
      header: "We Brainstorm",
      image: "brainstorm.jpg",
    },
    {
      id: 102,
      header: "We Identify Problems",
      image: "problem.jpg",
    },
  
    {
      id: 103,
      header: "We Develop Solutions",
      image: "solution.jpg",
    },
  ];
  
  const card = document.getElementById("card");
  
  serviceCard.map((item) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";
    const title = document.createElement("p");
    const a = document.createElement("a");
    const header = document.createElement("p");
    title.className = "card_title";
    header.className = "card_header";
    title.innerText = "HOW WE WORK";
    a.href = "#";
    a.innerText = "Read More";
    header.innerText = item.header;
    cardContainer.setAttribute[("key", item.id)];
    cardContainer.appendChild(title);
    cardContainer.appendChild(header);
    cardContainer.appendChild(a);
    card.appendChild(cardContainer);
  
    cardContainer.classList.add("hover");
    const handleMouseEnter = (index) => {
      cardContainer.style.backgroundImage = `url("${item.image}")`
      cardContainer.style.backgroundSize = "cover"
      cardContainer.style.transition = "all .2s ease-in-out"
      cardContainer.style.position = "center"
      header.style.color = "navyBlue"
      title.style.color = "#f1f1f1"
    };
    const handleMouseLeave = (index) => {
      cardContainer.style.background = "white"
      header.style.color = "blue"
      title.style.color = "#8a8a8a"
    };
    cardContainer.addEventListener("mouseenter", handleMouseEnter);
    cardContainer.addEventListener("mouseleave", handleMouseLeave)
  });
  
  //Why choose Us
  
  const WhyChooseUs = [
    "Creative People",
    "Awesome Customer Support",
    "Affordable Charges",
    "Innovative Ideas"
  ]
  const AdditionalList = [
    "General Auto Repair & Maintenance",
    "Transmission Repair & Replacement",
    "Tire Repair and Replacement",
    "Break Job / Break Services",
    "Electrical Diagnostics",
    "Fuel System Repairs",
    "Starting and Charging Repair",
    "Steering and Suspension Work",
    "Emission Repair Facility",
    "Wheel Alignment",
    "Computer Diagaonstic Testing",
    "Fuel System Repair",
    "Exhaust System Repair",
  ]
  const mainContainer = document.getElementById("choose")
  mainContainer.style.background = `url("back1.jpg")`
  mainContainer.style.backgroundRepeat = "no-repeat"
  // mainContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  mainContainer.style.backgroundSize = "cover"

  // mainContainer.style.background = 'linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)';
  // mainContainer.style.background = `
  //   linear-gradient(
  //       90deg,
  //       rgba(255, 255, 255, 0.5) 0%,
  //       rgba(255, 255, 255, 0.5) 100%
  //   ),
  //   url("back1.jpg")`;
  
  const tab = document.getElementById("link-tab")
  const tab1 = document.createElement("div")
  const tab2 = document.createElement("div")
  tab.appendChild(tab1)
  tab.appendChild(tab2)
  
  tab1.innerHTML = "Why Choose Us"
  tab1.className = "tab-1"
  tab2.className = "tab-1"
  // tab2.innerHTML = "Additional Services"
  
  const chooseContainer = document.getElementById("choose-us")
  const chooseImage = document.createElement("img")
  chooseImage.src = "clients.jpg"
  chooseImage.alt = "choose-img"
  const chooseLeft = document.createElement("div")
  const chooseRight = document.createElement("div")
  chooseLeft.className = "choose_left"
  chooseRight.className = "choose_right"
  chooseContainer.appendChild(chooseLeft)
  chooseContainer.appendChild(chooseRight)
  chooseLeft.appendChild(chooseImage)
  
  //text
  const chooseText = document.createElement("h3")
  chooseText.innerText = "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward."
  chooseRight.appendChild(chooseText)
  
  const chooseList = document.createElement("div")
  const ListUl = document.createElement("ul")
  for(let i = 0; i < WhyChooseUs.length; i++){
  const chooseLi  = document.createElement("li")
  chooseLi.innerText = WhyChooseUs[i]
  ListUl.appendChild(chooseLi)
  chooseList.appendChild(ListUl)
  chooseRight.appendChild(chooseList)
  }
  
  
  function Additional(){
    const additionalContainer = document.getElementById("additional")
    const additionalImage = document.createElement("img")
    additionalImage.src = "image-3.jpg"
    additionalImage.alt = "additional-img"
    const additionalLeft = document.createElement("div")
    const additionalRight = document.createElement("div")
    additionalLeft.className = "additional_left"
    additionalRight.className = "additional_right"
    additionalContainer.appendChild(additionalLeft)
    additionalContainer.appendChild(additionalRight)
    additionalLeft.appendChild(additionalImage)
    const chooseList = document.createElement("div")
    const ListUl = document.createElement("ul")
    for(let i = 0; i < AdditionalList.length; i++){
    const chooseLi  = document.createElement("li")
    chooseLi.innerText = AdditionalList[i]
    ListUl.appendChild(chooseLi)
    chooseList.appendChild(ListUl)
    additionalRight.appendChild(chooseList)
    }
  }
  const isSelected = false
  function tabSelector(){
    isSelected === true ? ChooseUs() : Additional()
  }
  const handleClick = () =>{
    isSelected = true
  }
  // tab1.addEventListener("click", handleClick)
  
  
  tab2.addEventListener('click', () => {
    chooseUsContainer.style.display = 'none';
    additionalContainer.style.display = 'block';
  });
  tab1.addEventListener('click', () => {
    chooseUsContainer.style.display = 'none';
    additionalContainer.style.display = 'block';
  });



  const FooterLinks = {
    useful:[
      {id: 1, link: "Home", route:'/'},
      {id: 12, link: "Who We Are", route:'/'},
      {id: 13, link: "Tech Blog", route:'/'},
      {id: 14, link: "Contact", route:'/'},
      {id: 15, link: "Portfilio", route:'/'},
    ],
    services:[
      {id: 1, link: "Server, Nextwork & cyber Security", route:'/'},
      {id: 12, link: "Databases & Data Science", route:'/'},
      {id: 13, link: "Website, Software & Forencies", route:'/'},
      {id: 14, link: "Content writing & Digital Marketing", route:'/'},
      {id: 15, link: "Website Development", route:'/'},
    ],
    contact:[
      {id: 1, link: "Call us on :+234 703 823 7226", route:'/'},
      {id: 12, link: "Email us :info@peterpang1.com", route:'/'},
    ],
  }
  
  const footer = document.getElementById("footerLink")
  const useful = document.getElementById("useful")
  const service = document.getElementById("service")
  const contact = document.getElementById("contact")
  const footerUl = document.createElement("ul")
  const footerUl2 = document.createElement("ul")
  const footerUl3 = document.createElement("ul")
  footer.appendChild(useful)
  footer.appendChild(service)
  footer.appendChild(contact)
  FooterLinks.useful.map((item) => {
    const footerLi = document.createElement("li")
    footerLi.innerText = item.link
    footerUl.appendChild(footerLi)
    useful.appendChild(footerUl)
  })
  FooterLinks.services.map((item) => {
    const footerLi = document.createElement("li")
    footerLi.innerText = item.link
    footerUl2.appendChild(footerLi)
    service.appendChild(footerUl2)
  })
  FooterLinks.contact.map((item) => {
    const footerLi = document.createElement("li")
    footerLi.innerText = item.link
    footerUl3.appendChild(footerLi)
    contact.appendChild(footerUl3)
  })

function btn(){
  const hiddenText = document.getElementById("hiddenText")
  const btn = document.getElementById('btn')
  const showbtn = document.getElementById('show-btn')
 
    hiddenText.style.display = 'flex'
    hiddenText.style.transition = 'ease-in 2s'
    btn.style.display = 'none'
    showbtn.style.display = 'flex'
  
}
function showBtn(){
  const hiddenText = document.getElementById('hiddenText')
  const btn = document.getElementById('btn')
  const showbtn = document.getElementById('show-btn')

  hiddenText.style.display = 'none'
  btn.style.display = 'flex'
  showbtn.style.display = 'none'
}
function showBtns(){
  const hiddenTexts = document.getElementById('hiddenTexts')
  const btns = document.getElementById('btns')
  const showbtns = document.getElementById('show-btns')

  hiddenTexts.style.display = 'none'
  btns.style.display = 'flex'
  showbtns.style.display = 'none'
}
function btns(){
  const hiddenTexts = document.getElementById("hiddenTexts")
  const btns = document.getElementById('btns')
  const showbtns = document.getElementById('show-btns')
 
    hiddenTexts.style.display = 'flex'
    hiddenTexts.style.transition = 'ease-in 2s'
    btns.style.display = 'none'
    showbtns.style.display = 'flex'
  
}

function errorbtn(){
  const mydiv = document.getElementById("mydiv")
  const errorEl = document.getElementById("error")
  errorEl.innerHTML = "<h4>Something Went wrong.......!<span>Go To Contact</span></h4>"
}