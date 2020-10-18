var main_search_input_fld = document.getElementById("main_search_input_fld");
var mainsearch_area_suggestions_div = document.getElementById("mainsearch_area_suggestions_div");
var registration_top_link = document.getElementById("registration_top_link");
var registration_top_link_submenu = document.getElementById("registration_top_link_submenu");
var help_and_support_top_link_submenu = document.getElementById("help_and_support_top_link_submenu");
var help_and_support_top_link = document.getElementById("help_and_support_top_link");

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