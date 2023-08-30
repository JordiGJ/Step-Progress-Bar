// get elements
const secondCir = document.querySelector("#secondCir");
const thirdCir = document.querySelector("#thirdCir");
const fourthCir = document.querySelector("#fourthCir");
const finalCir = document.querySelector("#finalCir");
const leftButton = document.querySelector("#left-button");
const rightButton = document.querySelector("#right-button");
const ps = document.querySelectorAll("p");
const ics = document.querySelectorAll("i");
const lines = document.querySelectorAll(".line");

// variables
let step = 0;
const max = 80;
let width0 = 0;
let width1 = 0;
let width2 = 0;
let width3 = 0;
let timer;

// functions
function left() {
  if (step > 0) {
    step--;
    updaterLeft();
  }
}
function right() {
  if (step < 4) {
    step++;
    updaterRight();
  }
}

function updateText(step) {
  ps.forEach((p, index) => {
    if (index <= step) {
      p.textContent = `Step ${index}`;
    } else {
      p.textContent = ``;
    }
    ps[0].textContent = "Start";
  });
}

function updateIcons(step) {
  ics.forEach((i, index) => {
    if (index > 0 && index < 5) {
      if (index <= step) {
        i.classList.add("fa-check");
        i.classList.remove("fa-xmark");
      } else {
        i.classList.remove("fa-check");
        i.classList.add("fa-xmark");
      }
    }
  });
}

function addWidth() {
  lines[0].style.width = `${width0}px`;
  width0 += 4;
  if (width0 >= max) {
    clearInterval(timer);
  }
}

function subtractWidth() {
  lines[0].style.width = `${width0}px`;
  width0 -= 4;
  if (width0 <= -10) {
    clearInterval(timer);
  }
}

// logic

function updaterLeft() {
  if (step === 0) {
    timer = setInterval(() => {
      lines[0].style.width = `${width0}px`;
      width0 -= 4;
      if (width0 <= -10) {
        clearInterval(timer);
      }
    }, 10);
    updateText(step);

    //circles
    secondCir.classList.remove("green-circle");
    secondCir.classList.add("grey-circle");

    ics.forEach((i, index) => {
      if (index > 0 && index < 5) {
        if (index >= 1) {
          i.classList.remove("fa-check");
          i.classList.add("fa-xmark");
        } else {
          i.classList.add("fa-check");
          i.classList.remove("fa-xmark");
        }
      }
    });
    // p text color
    ps.forEach((p, index) => {
      if (index >= 0) {
        p.classList.remove("green");
        p.classList.add("grey");
      }
    });
  }

  if (step === 1) {
    timer = setInterval(() => {
      lines[1].style.width = `${width1}px`;
      width1 -= 4;
      if (width1 <= -10) {
        clearInterval(timer);
      }
    }, 10);

    updateText(step);

    //circles
    thirdCir.classList.remove("green-circle");
    thirdCir.classList.add("grey-circle");
    updateIcons(step);
    ps.forEach((p, index) => {
      if (index > 1) {
        p.classList.remove("green");
        p.classList.add("grey");
      } else {
        p.classList.add("green");
      }
    });
    ps[0].classList.add("green");
  }

  if (step === 2) {
    timer = setInterval(() => {
      lines[2].style.width = `${width2}px`;
      width2 -= 4;
      if (width2 <= -10) {
        clearInterval(timer);
      }
    }, 10);

    updateText(step);

    fourthCir.classList.remove("green-circle");
    fourthCir.classList.add("grey-circle");
    updateIcons(step);
  }

  if (step === 3) {
    timer = setInterval(() => {
      lines[3].style.width = `${width3}px`;
      width3 -= 4;
      if (width3 <= -10) {
        clearInterval(timer);
      }
    }, 10);
    updateText(step);
    //circles

    finalCir.classList.remove("green-circle");
    finalCir.classList.add("grey-circle");
    updateIcons(step);
    ps.forEach((p, index) => {
      if (index > 3) {
        p.classList.remove("green");
        p.classList.add("grey");
      }
    });
  }
}

function updaterRight() {
  if (step === 0) {
    //circles
    secondCir.classList.remove("green-circle");
    secondCir.classList.add("grey-circle");
    thirdCir.classList.remove("green-circle");
    thirdCir.classList.add("grey-circle");
    fourthCir.classList.remove("green-circle");
    fourthCir.classList.add("grey-circle");
    finalCir.classList.remove("green-circle");
    finalCir.classList.add("grey-circle");
    // remove all p textContent but from the first one
    ps.forEach((p, index) => {
      if (index !== 0) {
        p.textContent = ``;
      }
    });
    // remove all fa-xmark icons
    ics.forEach((i, index) => {
      if (index > 0 && index < 5) {
        i.classList.remove("fa-check");
        i.classList.add("fa-xmark");
      }
    });
  }

  if (step === 1) {
    timer = setInterval(addWidth, 10);
    ps.forEach((p, index) => {
      if (index === 1) {
        p.textContent = `Step ${index}`;
      } else {
        p.textContent = ``;
      }
      ps[0].textContent = "Start";
    });
    setTimeout(() => {
      //circles
      secondCir.classList.add("green-circle");
      secondCir.classList.remove("grey-circle");
      thirdCir.classList.remove("green-circle");
      thirdCir.classList.add("grey-circle");
      fourthCir.classList.remove("green-circle");
      fourthCir.classList.add("grey-circle");
      finalCir.classList.remove("green-circle");
      finalCir.classList.add("grey-circle");
      // correct icons in circles
      ics.forEach((i, index) => {
        if (index > 0 && index < 5) {
          if (index === 1) {
            i.classList.add("fa-check");
            i.classList.remove("fa-xmark");
          } else {
            i.classList.remove("fa-check");
            i.classList.add("fa-xmark");
          }
        }
      });
      // p text color
      ps.forEach((p, index) => {
        if (index === 1) {
          p.classList.add("green");
        }
      });
    }, 300);
  }
  if (step === 2) {
    timer = setInterval(() => {
      lines[1].style.width = `${width1}px`;
      width1 += 4;
      if (width1 >= max) {
        clearInterval(timer);
      }
    }, 10);
    ps.forEach((p, index) => {
      if (index <= 1) {
        p.textContent = `Step ${index}`;
      } else {
        p.textContent = ``;
      }
      ps[0].textContent = "Start";
    });

    updateText(step);

    setTimeout(() => {
      //circles
      secondCir.classList.add("green-circle");
      secondCir.classList.remove("grey-circle");
      thirdCir.classList.add("green-circle");
      thirdCir.classList.remove("grey-circle");
      fourthCir.classList.remove("green-circle");
      fourthCir.classList.add("grey-circle");
      finalCir.classList.remove("green-circle");
      finalCir.classList.add("grey-circle");
      updateIcons(step);
      // p text color
      ps.forEach((p, index) => {
        if (index <= 2) {
          p.classList.add("green");
        } else {
          p.classList.add("grey");
        }
      });
    }, 300);
  }
  if (step === 3) {
    timer = setInterval(() => {
      lines[2].style.width = `${width2}px`;
      width2 += 4;
      if (width2 >= max) {
        clearInterval(timer);
      }
    }, 10);
    ps.forEach((p, index) => {
      if (index <= 2) {
        p.textContent = `Step ${index}`;
      } else {
        p.textContent = ``;
      }
      ps[0].textContent = "Start";
    });
    ps[3].classList.add("grey");
    ps[3].classList.remove("green");

    updateText(step);
    setTimeout(() => {
      //circles
      secondCir.classList.add("green-circle");
      secondCir.classList.remove("grey-circle");
      thirdCir.classList.add("green-circle");
      thirdCir.classList.remove("grey-circle");
      fourthCir.classList.add("green-circle");
      fourthCir.classList.remove("grey-circle");
      finalCir.classList.remove("green-circle");
      finalCir.classList.add("grey-circle");
      updateIcons(step);
      ps.forEach((p, index) => {
        if (index <= 3) {
          p.classList.add("green");
        }
      });
    }, 300);
  }
  if (step === 4) {
    timer = setInterval(() => {
      lines[3].style.width = `${width3}px`;
      width3 += 4;
      if (width3 >= max) {
        clearInterval(timer);
      }
    }, 10);
    updateText(step);
    setTimeout(() => {
      //circles
      secondCir.classList.add("green-circle");
      secondCir.classList.remove("grey-circle");
      thirdCir.classList.add("green-circle");
      thirdCir.classList.remove("grey-circle");
      fourthCir.classList.add("green-circle");
      fourthCir.classList.remove("grey-circle");
      finalCir.classList.add("green-circle");
      finalCir.classList.remove("grey-circle");
      updateIcons(step);
      ps.forEach((p, index) => {
        if (index <= 4) {
          p.classList.add("green");
        }
      });
    }, 300);
  }
}

// eventListeners
leftButton.addEventListener("click", left);
rightButton.addEventListener("click", right);
