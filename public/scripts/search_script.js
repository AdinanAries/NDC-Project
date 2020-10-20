//-------------------- globals --------------------//
var urlParams = new URLSearchParams(window.location.search);

var q = urlParams.get("q");

//onload functions
function init_page (){
    main_search_input_fld.value = q;
}

$(document).ready(()=>{
    init_page();
})



//page event methods
function show_tool_tip(name, number){
    let elem_name_tp = name + "_" + number + "_tp";
    document.getElementById(elem_name_tp).style.display = "block";
    
}

function hide_tool_tip(name, number){
    let elem_name_tp = name + "_" + number + "_tp";
    document.getElementById(elem_name_tp).style.display = "none";
    
}

function show_submenu(name, number){
    let elem;

    if(number === ''){
        elem = name;
    }
    else{
        elem = name + number;
    }
    $("#"+ elem).slideDown("fast");
    
}
function hide_submenu(name, number){
    let elem;

    if(number === ''){
        elem = name;
    }
    else{
        elem = name + number;
    }
    $("#"+ elem).slideUp("fast");
}

//page event handlers