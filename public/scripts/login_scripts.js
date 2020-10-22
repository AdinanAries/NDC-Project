var login_area_login_btn = document.getElementById("login_area_login_btn")

login_area_login_btn.addEventListener("click", evnt => {
    show_login_btn.style.display = "none";
    page_profile_avatar_and_menu.style.display = "block";
    $("#login_form_container").animate({width: "toggle"});
    pop_up_page_cover.style.display = "none";
    alert("login successful");

});