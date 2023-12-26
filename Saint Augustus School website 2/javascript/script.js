// show menu links
const menuIcon = document.querySelector(".fa-bars")
const cancel = document.querySelector(".cancel")
const navigationLinks = document.querySelector(".navigation-links")
menuIcon.addEventListener("click", ()=>{
  
        navigationLinks.style.display="block"
    } 
)

cancel.addEventListener("click", ()=>{
  
    navigationLinks.style.display="none"
})



let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 8000); // Change image every 2 seconds
}






function showImage(img) {
    // Set the source of the pop-up image
    document.getElementById("popup-img").src = img.src;

    // Show the pop-up
    document.getElementById("popup").style.display = "flex";
   
}

function hideImage() {
    // Hide the pop-up
    document.getElementById("popup").style.display = "none";
}


document.addEventListener("DOMContentLoaded", ()=>{
    const addmissionpopup = document.querySelector(".addmission-popup")
    const removeBtn = document.querySelector(".remove-button")

    setTimeout(() => {
        addmissionpopup.style.display="flex"; 
    }, 5000);

    removeBtn.addEventListener("click",()=>{
        addmissionpopup.style.display="none"; 
      })
})
 