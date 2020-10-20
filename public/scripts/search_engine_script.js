var main_search_btn = document.getElementById("main_search_btn");
var main_search_input_fld = document.getElementById("main_search_input_fld");

main_search_btn.addEventListener("click", (evnt)=> {
    
   let search_query = main_search_input_fld.value;

   if(search_query === ''){
      window.location.replace("./search_engine");
   }else{
        window.location.replace("./search_engine/"+search_query);
        /*$.ajax({
            type: "GET",
            url: "",
            data: "",
            success: result =>{

            }
        })*/
    }
});

main_search_input_fld.addEventListener("keypress", (evnt)=>{
    if(evnt.key === "Enter"){
        let search_query = main_search_input_fld.value;
        if(search_query === ''){
            window.location.replace("./search_engine");
        }else{
            window.location.replace("./search_engine/"+search_query);
        }
    }
});