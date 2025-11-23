let maincolor = document.querySelectorAll('.color-swatch')
const recipeList = document.getElementById("recipeList")
let openModalBtn = document.getElementById('openModalBtn')
let detailsModal = document.getElementById('detailsModal')
const ingredients = document.querySelector('#Ingredients');
const ingredientBtn = document.querySelector('#ingredientsBtn');
const searchBtn = document.querySelector("#searchBtn")
const contactUsBtn = document.querySelector("#contactUsBtn")
const recipeItem = document.querySelectorAll(".recipe-box")
let nameInput = document.querySelector("#nameInput")
let emailInput = document.querySelector("#emailinput")
let phoneInput = document.querySelector("#phoneInput")
let ageInput = document.querySelector("#ageInput")
let passwordInput = document.querySelector("#passwordInput")
let rePasswordInput = document.querySelector("#rePasswordInput")
let nameRegex = /^[A-Za-z ]{3,}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let phoneRegex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/;
let ageRegex = /^(1[89]|[2-7][0-9]|80)$/
let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const areaBtn = document.querySelector("#areaBtn")

let recipesBtn = document.querySelector('#recipesBtn')


recipesBtn.addEventListener('click', () => {
  contactContainer.classList.replace('d-block', 'd-none');
  getData(``)
  closeOpenNav()
})

async function getData(input) {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
    if (res.status === 200) {
      const recipeData = await res.json();
      console.log(recipeData);
      displayrecipes(recipeData)
    }
  } catch (error) {
    console.log("⚠️ Network Error:", error);
  }
}
getData(``)
function displayrecipes(data) {
  let str = '';

  for (let i = 0; i < data.meals.length; i++) {
    str += `
      <div class="col-md-4 col-sm-6 col-xl-3 recipe-item" data-index="${i}" id="recipeBox-${i}">
        <div class="recipe-box">
          <div class="img position-relative">
            <div class="layer position-absolute d-flex justify-content-center align-items-center flex-column">
              <h3 class="mb-4">${data.meals[i].strMeal}</h3>
              <button class="custom-button"><span>Get Recipe!</span></button>
            </div>
            <div class="img">
              <img src="${data.meals[i].strMealThumb}" alt="recipe image" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    `;
  }


  document.getElementById('recipeList').innerHTML = str;
  // select all recipe (div)
  let recipeBoxes = document.querySelectorAll('.recipe-item');
  // loop adding evet listner for every recipe 

  // GSAP animation
  gsap.utils.toArray('.recipe-item').forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 40%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 70,
      duration: 1.1,
      ease: "power3.out",
      delay: index * 0.05,
      stagger: 0.05,
    });
  });
}
function closeOpenNav() {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open")
    barsIcon.classList.replace("d-none", "d-block")
    xIcon.classList.replace("d-block", "d-none")
  } else {
    sidebar.classList.add("open")
    barsIcon.classList.replace("d-block", "d-none")
    xIcon.classList.replace("d-none", "d-block")


  }
}

// navbar open && change bars to x
openBtn.addEventListener("click", closeOpenNav)
// primary colors function and local storage call
window.addEventListener('DOMContentLoaded', () => {
  const savedPrimaryColor = localStorage.getItem('primary-color');
  const savedAccentColor = localStorage.getItem('accent-color');
  if (savedPrimaryColor && savedAccentColor) {
    document.documentElement.style.setProperty('--primary-1', savedPrimaryColor);
    document.documentElement.style.setProperty('--primary-2', savedAccentColor);
  }
});
for (let i = 0; i < maincolor.length; i++) {
  maincolor[i].addEventListener("click", function () {
    const c = maincolor[i].dataset.color;
    let accent;
    switch (c) {
      case '#6a5cff':
        accent = '#00eaff';
        break;
      case '#ff6b6b':
        accent = '#ffd86b';
        break;
      case '#28c76f':
        accent = '#8cf5c9';
        break;
      case '#f78ca0':
        accent = '#f97477';
        break;
      case '#2b5876':
        accent = '#4e4376';
        break;
      case '#ff7e5f':
        accent = '#feb47b';
        break;
      case '#2193b0':
        accent = '#6dd5ed';
        break;
      case '#36d1dc':
        accent = '#5b86e5';
        break;
      case '#ff9a8b':
        accent = '#ff6a88';
        break;
      case '#6a11cb':
        accent = '#2575fc';
        break;
      case '#34e89e':
        accent = '#0f3443';
        break;
      case '#fca5e6':
        accent = '#8ec5fc';
        break;
      case '#8a2be2':
        accent = '#ff6f61';
        break;
      case '#ff9a8b':
        accent = '#ffd76c';
        break;
      case '#00c6ff':
        accent = '#0072ff';
        break;
      case '#6a5f7d':
        accent = '#c25d69';
        break;
      case '#fcb69f':
        accent = '#e58e8c';
        break;
      case '#8360c3':
        accent = '#2ebf91';
        break;
      case '#0f4b5f':
        accent = '#87a7b9';
        break;
      case '#abafc4':
        accent = '#3c6e71';
        break;
      case '#ba5370':
        accent = '#f4e2d8';
        break;
      default:
        accent = '#00eaff';
    }
    document.documentElement.style.setProperty('--primary-1', c);
    document.documentElement.style.setProperty('--primary-2', accent);
    localStorage.setItem('primary-color', c);
    localStorage.setItem('accent-color', accent);
  })
}
// search 
const searchInput = document.querySelector("#searchInput")
const searchFLInput = document.querySelector("#searchFLInput")
const searchBox = document.querySelector(".search-box")
searchBtn.addEventListener('click', function search() {
  contactContainer.classList.replace('d-block', 'd-none');

  searchBox.classList.replace("d-none", "d-flex")

  closeOpenNav()
  document.getElementById('recipeList').innerHTML = ``;

  searchInput.addEventListener("input", function () {
    getData(searchInput.value)
  })
  searchFLInput.addEventListener("input", function () {
    let fLInput = searchFLInput.value
    async function getData(input) {
      try {
        const res = await fetch(`https:www.themealdb.com/api/json/v1/1/search.php?f=${input}`);
        if (res.status === 200) {
          const recipeData = await res.json();
          console.log(recipeData);
          displayrecipes(recipeData)
        }
      } catch (error) {
        console.log("⚠️ Network Error:", error);
      }
    }
    getData(fLInput);
  })
})
// contact event
const contactContainer = document.querySelector('#contactContainer');
contactUsBtn.addEventListener('click', () => {
  searchBox.classList.replace("d-flex", "d-none")
  document.getElementById('recipeList').innerHTML = ``
  if (contactContainer.classList.contains('d-none')) {
    contactContainer.classList.replace("d-none", "d-block")
  }
  else {
    contactContainer.classList.replace('d-block', 'd-none')
  }
  closeOpenNav()
})
// category event 
const categoryBtn = document.querySelector("#categoryBtn");
categoryBtn.addEventListener('click', function () {
  searchBox.classList.replace("d-flex", "d-none")
  contactContainer.classList.replace('d-block', 'd-none');
  async function getCategory() {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
      if (res.status === 200) {
        const categoriesData = await res.json();
        console.log(categoriesData);

        document.getElementById('recipeList').innerHTML = ``;
        closeOpenNav();

        let str = ``;
        for (let i = 0; i < categoriesData.categories.length; i++) {
          str += `
            <div class="col-md-4 col-sm-6 col-xl-3  recipe-item">
              <div class="recipe-box">
                <div class="img position-relative">
                  <div class="layer position-absolute d-flex justify-content-center align-items-center flex-column">
                    <h3 class="mb-4">${categoriesData.categories[i].strCategory}</h3>
                    <button class="custom-button"><span>Get category</span></button>
                  </div>
                  <div class="img">
                    <img src="${categoriesData.categories[i].strCategoryThumb}" alt="recipe image" class="img-fluid">
                  </div>
                </div>
              </div>
            </div>
          `;
        }

        document.getElementById('recipeList').innerHTML = str;
        gsap.utils.toArray('.recipe-item').forEach((item, index) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 40%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 70,
            duration: 1.1,
            ease: "power3.out",
            delay: index * 0.05,
            stagger: 0.05,
          });
        });

        let recipeBoxes = document.querySelectorAll('.recipe-item');
        recipeBoxes.forEach((box, index) => {
          box.addEventListener('click', function (e) {
            e.stopPropagation();
            const categoryName = categoriesData.categories[index].strCategory;
            getData(categoryName);
          });
        });
      }
    } catch (error) {
      console.log("⚠️ Network Error:", error);
    }
  }
  getCategory();
});
// area  
areaBtn.addEventListener('click', function () {
  contactContainer.classList.replace('d-block', 'd-none');

  searchBox.classList.replace("d-flex", "d-none")

  async function getArea() {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
      if (res.status === 200) {
        const areaData = await res.json();
        console.log(areaData);

        document.getElementById('recipeList').innerHTML = ``;
        closeOpenNav();

        let str = ``;
        for (let i = 0; i < areaData.meals.length; i++) {
          str += `
            <div class="col-md-4 col-sm-6 col-xl-3  recipe-item">
              <div class="area-box">
                <div class="img position-relative">
                  <div style="opacity=0.9" class="layer position-absolute d-flex justify-content-center align-items-center flex-column">
                    <h3 class="mb-4">${areaData.meals[i].strArea}</h3>
                    <button class="custom-button"><span>Get category</span></button>
                  </div>
                  <div class="img">
                    <img src="./images/area.png" alt="recipe image" class="img-fluid">
                  </div>
                </div>
              </div>
            </div>
          `;

        }

        document.getElementById('recipeList').innerHTML = str;
        gsap.utils.toArray('.recipe-item').forEach((item, index) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "top 40%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 70,
            duration: 1.1,
            ease: "power3.out",
            delay: index * 0.05,
            stagger: 0.05,
          });
        });
        let areaBoxes = document.querySelectorAll('.recipe-item');
        areaBoxes.forEach((box, index) => {
          box.addEventListener('click', function (e) {
            e.stopPropagation();
            const areaName = areaData.meals[index].strArea;
            console.log(areaName)
            async function getAreaData() {
              try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`);
                if (res.status === 200) {
                  const recipeData = await res.json();
                  console.log(recipeData);
                  displayrecipes(recipeData)

                }
              } catch (error) {
                console.log("⚠️ Network Error:", error);
              }
            }
            getAreaData()
          });
        });
      }
    } catch (error) {
      console.log("⚠️ Network Error:", error);
    }
  }
  getArea();
});

contactContainer.classList.replace('d-block', 'd-none');

ingredientBtn.addEventListener("click", () => {
  searchBox.classList.replace("d-flex", "d-none")
  contactContainer.classList.replace('d-block', 'd-none');
  async function getIngredient() {
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
      if (res.status === 200) {
        const ingredientData = await res.json();
        console.log(ingredientData);
        document.getElementById('recipeList').innerHTML = ``;
        closeOpenNav();
        let str = ``;
        for (let i = 0; i < 19; i++) {
          str += `
            <div class="col-md-4 col-sm-6 col-xl-3  recipe-item">
              <div class="area-box">
                <div class="img position-relative">
                  <div style="opacity=0.9" class="layer position-absolute d-flex justify-content-center align-items-center flex-column">
                    <h3 class="mb-4">${ingredientData.meals[i].strIngredient}</h3>
                    <button class="custom-button"><span>Get category</span></button>
                  </div>
                  <div class="img">
                    <img src="${ingredientData.meals[i].strThumb}" alt="recipe image" class="img-fluid">
                  </div>
                </div>
              </div>
            </div>
          `;

        }

        document.getElementById('recipeList').innerHTML = str;
        let ingredientBoxes = document.querySelectorAll('.recipe-item');
        ingredientBoxes.forEach((box, index) => {
          box.addEventListener('click', function (e) {
            e.stopPropagation();
            const ingredientName = ingredientData.meals[index].strIngredient;
            getData(ingredientName)
          });
        });
      }
    } catch (error) {
      console.log("⚠️ Network Error:", error);
    }
  }
  getIngredient();
})

// change modal data for every recipe
recipeList.addEventListener("click", function (e) {
  const recipeBox = e.target.closest(".recipe-item");
  if (!recipeBox) return;
  const h3 = recipeBox.querySelector("h3").innerHTML;
  getModalData(h3)
}
);
async function getModalData(recipeName) {
  try {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      detailsModal.classList.replace('d-none', 'd-block');
      // event listener for close btn 
      document.querySelector(".btn-close-modal").addEventListener("click", function () {
        detailsModal.classList.replace('d-block', 'd-none');
      })
      modalImg.src = data.meals[0].strMealThumb;
      document.getElementById('modalTitle').textContent = data.meals[0].strMeal;
      document.getElementById('modalDesc').textContent = data.meals[0].strInstructions;
      document.getElementById('areaModal').textContent = data.meals[0].strArea;
      document.getElementById('categoryModal').textContent = data.meals[0].strCategory;
      document.getElementById('sourceLink').setAttribute("href", data.meals[0].strSource)
      document.getElementById('youtubeLink').setAttribute("href", data.meals[0].strYoutube)
      // loop for adding ingredients 
      ingredients.innerHTML = "";
      for (let j = 0; j < 20; j++) {
        // get ingredient & measure
        const measure = data.meals[0]['strMeasure' + (j + 1)];
        const ingredient = data.meals[0]['strIngredient' + (j + 1)];
        // be sure the ingredient & measure is not empty 
        if (measure && ingredient) {
          // add span with ingredients & measures
          const mySpan = document.createElement("span")
          mySpan.classList.add("badge-attr")
          mySpan.textContent = measure + " " + ingredient;
          ingredients.append(mySpan)
        }
      }
    }
  } catch (error) {
    console.log("⚠️ Network Error:", error);
  }
}




//-- contact input validation --//
const contactBtn = document.querySelector('#contactBtn')

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("contactBtn");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput");
  const ageInput = document.getElementById("ageInput");
  const passwordInput = document.getElementById("passwordInput");
  const rePasswordInput = document.getElementById("rePasswordInput");
  const nameRegex = /^[A-Za-z\u0600-\u06FF ]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}$/;
  const ageRegex = /^(1[89]|[2-7][0-9]|80)$/;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/; // باسورد قوي

  submitBtn.disabled = true;

  function validateInput(regex, input) {
    const errorMessage = input.nextElementSibling;
    if (regex.test(input.value)) {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      if (errorMessage) errorMessage.classList.replace("d-block", "d-none");
      return true;
    } else {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      if (errorMessage) errorMessage.classList.replace("d-none", "d-block");
      return false;
    }
  }

  function checkAllInputs() {
    const isNameValid = validateInput(nameRegex, nameInput);
    const isEmailValid = validateInput(emailRegex, emailInput);
    const isPhoneValid = validateInput(phoneRegex, phoneInput);
    const isAgeValid = validateInput(ageRegex, ageInput);
    const isPasswordValid = validateInput(passwordRegex, passwordInput);
    const isRePasswordValid = rePasswordInput.value === passwordInput.value && passwordInput.value !== "";

    if (isRePasswordValid) {
      rePasswordInput.classList.add("is-valid");
      rePasswordInput.classList.remove("is-invalid");
      if (rePasswordInput.nextElementSibling)
        rePasswordInput.nextElementSibling.classList.replace("d-block", "d-none");
    } else {
      rePasswordInput.classList.add("is-invalid");
      rePasswordInput.classList.remove("is-valid");
      if (rePasswordInput.nextElementSibling)
        rePasswordInput.nextElementSibling.classList.replace("d-none", "d-block");
    }

    submitBtn.disabled = !(isNameValid && isEmailValid && isPhoneValid && isAgeValid && isPasswordValid && isRePasswordValid);
  }
  [nameInput, emailInput, phoneInput, ageInput, passwordInput, rePasswordInput].forEach(input => {
    input.addEventListener("input", checkAllInputs);
  });
});

