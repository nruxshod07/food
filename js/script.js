let modalBtns = document.querySelectorAll("[data-modal");
let modalClose = document.querySelector(".modal__close");
let modal = document.querySelector(".modal");
let forms = document.forms;
let foodNames = document.querySelectorAll(".tabheader__item");
let foodImgs = document.querySelectorAll(".tabcontent");
let sliderImgs = document.querySelectorAll(".offer__slider-wrapper div");
let next = document.querySelector(".offer__slider-next");
let prev = document.querySelector(".offer__slider-prev");
let total = document.getElementById("total");
let current = document.getElementById("current");
let i = 0;
sliderImgs.forEach((sliderImg) => {
  i = 0;

  next.onclick = () => {
    i++;
    if (i === sliderImgs.length) {
      i = 0;
    }
    current.innerHTML = `0${i+1}`;
    sliderImgs.forEach((sliderImg) => {
      sliderImg.classList.add("hide");
    });
    sliderImgs[i].classList.remove("hide");
  };
  prev.onclick = () => {
    i--;
    if (i === -1) {
      i = 3;
    }
    current.innerHTML = `0${i+1}`;
    sliderImgs.forEach((sliderImg) => {
      sliderImg.classList.add("hide");
    });
    sliderImgs[i].classList.remove("hide");
  };
});
total.innerHTML = `0${sliderImgs.length}`

foodNames.forEach((foodName) => {
  foodName.onclick = () => {
    if (foodName.innerHTML === foodNames[0].innerHTML) {
      foodImgs.forEach((foodImg) => {
        foodImg.classList.add("hide");
      });
      foodImgs[0].classList.remove("hide");
    } else if (foodName.innerHTML === foodNames[1].innerHTML) {
      foodImgs.forEach((foodImg) => {
        foodImg.classList.add("hide");
      });
      foodImgs[1].classList.remove("hide");
    } else if (foodName.innerHTML === foodNames[2].innerHTML) {
      foodImgs.forEach((foodImg) => {
        foodImg.classList.add("hide");
      });
      foodImgs[2].classList.remove("hide");
    } else if (foodName.innerHTML === foodNames[3].innerHTML) {
      foodImgs.forEach((foodImg) => {
        foodImg.classList.add("hide");
      });
      foodImgs[3].classList.remove("hide");
    }
    foodNames.forEach((foodName) => {
      foodName.classList.remove("tabheader__item_active");
    });
    foodName.classList.add("tabheader__item_active");
  };
});

let patterns = {
  text: /^[a-z ,.'-]+$/i,
  phone: /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/,
};
let inps = document.querySelectorAll("input");
inps.forEach((inp) => {
  let names = inp.getAttribute("type");
  inp.onkeyup = () => {
    let pattern = patterns[names];
    if (pattern.test(inp.value) === false) {
      inp.style.border = "1px solid red";
    } else {
      inp.style.border = "1px solid green";
    }
  };
});
for (let form of forms) {
  console.log(form);
  form.onsubmit = (event) => {
    let error = false;
    event.preventDefault();
    inps.forEach((inp) => {
      if (
        (inp.value.length === 0 && inp.style.border === "1px solid red") ||
        (inp.value.length > 1 && inp.style.border === "1px solid red")
      ) {
        error = true;
      } else if (
        inp.value.length > 1 &&
        inp.style.border === "1px solid green"
      ) {
      }
    });

    if (error) {
    } else {
      submit();
    }
  };
  function submit() {
    let user = {};
    let fm = new FormData(form);
    fm.forEach((value, key) => {
      user[key] = value;
    });
    console.log(user);
  }
}
modalBtns.forEach((modalbtn) => {
  modalbtn.onclick = () => {
    modal.style.display = "block";
  };
  modalClose.onclick = () => {
    modal.style.display = "none";
  };
});
