
function show_tool_tip(name, number){
    //let elem_name_btn = "attendants_meeting_" + number;
    //let attendants_meeting = document.getElementById(elem_name_btn);

    let elem_name_tp = name + "_" + number + "_tp";
    let attendants_meeting_tp = document.getElementById(elem_name_tp);

    attendants_meeting_tp.style.display = "block";
    
}

function hide_tool_tip(name, number){
    //let elem_name_btn = "attendants_meeting_" + number;
    //let attendants_meeting = document.getElementById(elem_name_btn);

    let elem_name_tp = name + "_" + number + "_tp";
    let attendants_meeting_tp = document.getElementById(elem_name_tp);

    attendants_meeting_tp.style.display = "none";
    
}

