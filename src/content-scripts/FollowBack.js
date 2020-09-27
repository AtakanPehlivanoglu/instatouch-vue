window.$ = window.jQuery = require('jquery');
console.log("Follow Back test here")
followBack();

chrome.runtime.sendMessage({isActivated: true}, function(response) {
  if(response.activeStatus == true){
    console.log("content script is active.")
    followBack();
  }
  else{
    console.log("Extension is off!")
  }
});



function followBack(){

  createFollowBackButton();

  //New Dynamic AJAX Request Responsive Activity Listener with Jquery
  $(document).ready(function(){
    $('body').on('click','._0ZPOP',function(){

      //If Ajax request happened, listener has to recreate button in to DOM.
      var divFb =  $('._FollowBack')[0];
      if(divFb == null) 
        {
          console.log("Div_FB is gone!");
          $(document).ready(function(){
            createFollowBackButton();
            divFb =  $('._FollowBack')[0];
          });
          console.log("Div_FB re-created.")
        }

        var invisibleDiv;
        $(document).ready(function(){
          invisibleDiv = document.getElementsByClassName("wgVJm")[0]
          //InvisDiv Catcher, this means activity button is on
          if(invisibleDiv)
          {
            
            divFb.style.display = "inline-block";
            invisibleDiv.style.display = "none";
          }
          //Else activity button should be closed
          else
          {
            divFb.style.display = "none";
            console.log("Button disable")
          }
            
        });  

        console.log("Click received on activity tab");
    });
  });

}


function createFollowBackButton(){
  
  var svgNS = "http://www.w3.org/2000/svg"; 
  //Creating div and injecting
  //var divfB = document.createElement("div");
  var divFb = document.createElement("div");
  divFb.className = '_FollowBack';
  
  //Insert divfollowBack to top-right nav bar start  
  var body = document.getElementsByClassName("ctQZg")[0];
  body.insertBefore(divFb, body.firstChild);  

  //Creating button inside divfollowBack
  var btnFb = document.createElement("button");
  btnFb.style.backgroundColor = "white";
  btnFb.style.border = "white";
  btnFb.style.cursor = "pointer";
  
  //Creating svg inside button
  var svgFb = document.createElementNS(svgNS, "svg");
  svgFb.setAttributeNS(null, "width", "27.02px")
  svgFb.setAttributeNS(null, "height", "27.02px")

  //Svg path
  var svgPath = document.createElementNS(svgNS, "path");
  svgPath.setAttributeNS(null,"class", "_svgFollowBack");
  svgPath.setAttributeNS(null,"d", "M26.968,7.91c-0.791-7.657-9.34-7.539-13.459-3.843C9.39,0.371,0.845,0.253,0.052,7.91   c-1.023,9.857,13.457,17.495,13.457,17.495S27.988,17.769,26.968,7.91z M17.701,17.451l-6.826-3.94v3.94H9.318V9.569h1.557v3.941   l6.826-3.941V17.451z");

  //Insert btnfollowBack inside divfollowBack
  body = document.getElementsByTagName("body")[0];
  divFb.appendChild(btnFb);
  btnFb.appendChild(svgFb);
  svgFb.appendChild(svgPath);

  //Hide element at first injection
  divFb.style.display = "none";


  //Activity Listener of the added FollowBackButton
  divFb.addEventListener ("click", function() {
    actionFollowBackButton();
  });

}

function actionFollowBackButton(){
  var followBtns = document.querySelectorAll(".iTMfC");

  for (var i = 0; i <  followBtns.length; i++){
    if(followBtns[i].querySelector(".y3zKF") != null )
    {
    var targetFb = followBtns[i].querySelector(".y3zKF") 
    targetFb.click();
    
    //This part will be expended to count each user daily followback
    //For enterprise SaaS scenario 

    }
  }
}

