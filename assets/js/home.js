document.addEventListener("DOMContentLoaded", function(){
    console.log("Doc loaded");

    const hero = document.getElementById("hero");

    hero.addEventListener("click", heroClicked);

    function heroClicked(){
        console.log("Hero clicked");
    }
});