const menuItems = document.querySelectorAll(".menu-item");
const messagesNotifications = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// NOTIFICATION POPUP
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    })
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");
        if(item.id !== "notifications") {
            document.querySelector(".notifications-popup").style.display = "none";
        } else{
            document.querySelector(".notifications-popup").style.display = "block";
            document.querySelector(".notification-count").style.display = "none";
        }
    })
})

messagesNotifications.addEventListener("click", () => {
    messages.style.boxShadow = " 0 0 1rem var(--color-primary)";
    messagesNotifications.querySelector(".notification-count").style.display = "none";
    setTimeout(() => {
        messages.style.boxShadow = "none";
    }, 2000);
})

// SEARCH MESSAGE
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector("h5").textContent.toLowerCase();
        if(name.includes(val)) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    })
}
messageSearch.addEventListener("keyup", searchMessage);

// THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

theme.addEventListener("click", () => {
    themeModal.style.display = "grid";
})

themeModal.addEventListener("click", (e) => {
    if(e.target.classList.contains("customize-theme")){
        themeModal.style.display = "none";
    }
})

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}

fontSizes.forEach(size => {
    
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");

        if(size.classList.contains("font-size-1")){
            fontSize = ".625rem";
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains("font-size-2")){
            fontSize = ".8125rem";
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if(size.classList.contains("font-size-3")){
            fontSize = "1rem";
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if(size.classList.contains("font-size-4")){
            fontSize = "1.1875rem";
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if(size.classList.contains("font-size-5")){
            fontSize = "1.375rem";
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        document.querySelector("html").style.fontSize = fontSize;
    })

})

// COLOR
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove("active");
    })
}

colorPalette.forEach(color => {
    color.addEventListener("click", () => {
        changeActiveColorClass();
        if(color.classList.contains("color-1")){
            primaryHue = 252;
        } else if(color.classList.contains("color-2")){
            primaryHue = 52;
        } else if(color.classList.contains("color-3")){
            primaryHue = 352;
        } else if(color.classList.contains("color-4")){
            primaryHue = 152;
        } else if(color.classList.contains("color-5")){
            primaryHue = 202;
        }
        color.classList.add("active");
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// BACKGROUND COLOR
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener("click", () => {

    Bg1.classList.add("active");
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");
    window.location.reload();
})

Bg2.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    Bg2.classList.add("active");
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
})

Bg3.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    Bg2.classList.add("active");
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
})

// HEART ANIMATION

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".photo");

  cards.forEach(function (card) {
    card.addEventListener("dblclick", function (e) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      const cardRect = card.getBoundingClientRect();
      const offsetX = e.clientX - cardRect.left;
      const offsetY = e.clientY - cardRect.top;
      heart.style.top = offsetY + "px";
      heart.style.left = offsetX + "px";
      card.appendChild(heart);

      setTimeout(function () {
        heart.remove();
      }, 1000);
    });
  });
});
  
  
  
  