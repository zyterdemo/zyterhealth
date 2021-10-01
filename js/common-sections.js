$(document).ready(  
    function(){
      // alert("ok ok");
       $("#mainHeader").load("main-header.html");
       $("#publicPortalHeader").load("publicportalheader.html");
       $("#mainRightSection").load("main-right-section.html");
       $("#mainRightSection1").load("main-right-section.html");
       $("#mainRightSection2").load("main-right-section.html");
       $("#mainRightSection3").load("main-right-section.html");
       $("#mainRightSection4").load("main-right-section.html");
       $("#mainRightSection5").load("main-right-section.html");
       $("#mainFooter").load("main-footer.html");
       $("#chooseTopic").show();
      // alert(location.pathname.search('my-claims.html'));
     
    }  
    
);

function goNext(selectedValue,classRemove,classAdd){
  // Show Hide
  $("#chooseTopic").hide();
  $("#customizeEstimate").hide();
  $("#viewEstimate").hide(); 
  $('#'+selectedValue).show();
  // Show Hide end
  // Color Class Removing
  $('#'+classRemove).removeClass("btn-success");
  // Color Class Adding
  $('#'+classAdd).addClass("btn-success");  
}

function goNext_plans(selectedValue,classRemove,classAdd){
 // Show Hide
 $("body").css("height", "100%");  
 $("#personalDetails").hide();
 $("#healthCareNeeds").hide();
 $("#viewEstimate").hide(); 
 $("#viewEstimatedup1").hide(); 
 $("#viewEstimatedup2").hide(); 
 $("#viewPlans").hide(); 
 $('#'+selectedValue).show();
 // Show Hide end
 // Color Class Removing
 $('#'+classRemove).removeClass("btn-success");
 // Color Class Adding
 $('#'+classAdd).addClass("btn-success");
}


