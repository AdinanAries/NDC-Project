var main_search_input_fld = document.getElementById("main_search_input_fld");
var mainsearch_area_suggestions_div = document.getElementById("mainsearch_area_suggestions_div");
var registration_top_link = document.getElementById("registration_top_link");
var registration_top_link_submenu = document.getElementById("registration_top_link_submenu");
var help_and_support_top_link_submenu = document.getElementById("help_and_support_top_link_submenu");
var help_and_support_top_link = document.getElementById("help_and_support_top_link");
var pop_up_page_cover = document.getElementById("pop_up_page_cover");
var login_form_container = document.getElementById("login_form_container");
var show_login_btn = document.getElementById("show_login_btn");
var hide_login_btn = document.getElementById("hide_login_btn");
var go_to_profile_btn = document.getElementById("go_to_profile_btn");

main_search_input_fld.addEventListener("focus", ()=>{
    mainsearch_area_suggestions_div.style.display = "block";
});

main_search_input_fld.addEventListener("focusout", ()=>{
    mainsearch_area_suggestions_div.style.display = "none";
});

registration_top_link.addEventListener("mouseover", ()=>{
    registration_top_link_submenu.style.display = "block";
});

registration_top_link.addEventListener("mouseout", ()=>{
    registration_top_link_submenu.style.display = "none";
});

help_and_support_top_link.addEventListener("mouseover", ()=>{
    help_and_support_top_link_submenu.style.display = "block";
});

help_and_support_top_link.addEventListener("mouseout", ()=>{
    help_and_support_top_link_submenu.style.display = "none";
});

function show_submenu(name, number){
    let elem = name + number;
    document.getElementById(elem).style.display = "block";

}
function hide_submenu(name, number){
    let elem = name + number;
    document.getElementById(elem).style.display = "none";
    
}

show_login_btn.addEventListener("click", evnt => {
    $("#login_form_container").animate({width: "toggle"});
    pop_up_page_cover.style.display = "block";
})

hide_login_btn.addEventListener("click", evnt => {
    $("#login_form_container").animate({width: "toggle"});
    pop_up_page_cover.style.display = "none";
})

pop_up_page_cover.addEventListener("click", evnt => {
    $("#login_form_container").animate({width: "toggle"});
    pop_up_page_cover.style.display = "none";
})

go_to_profile_btn.addEventListener("click", evnt => {
    window.location.href = "./hub_member_page/tokenid";
})