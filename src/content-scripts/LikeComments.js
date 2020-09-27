waitForDOMToCallButton("M9sTE")
chrome.runtime.sendMessage({ isActivated: true }, function (response) {
  if (response.activeStatus == true) {
    console.log("Like Comment content script is active.")
    waitForDOMToCallButton("M9sTE")
  }
  else {
    console.log("Extension is off!")
  }
});


function createLikeComments() {
  var svgNS = "http://www.w3.org/2000/svg";
  //Check if the user of extension viewing the his/her own pics or not.
  var bolImgOwnerUser = isImgOwnerUser();
  var headerDivSelect;

  if (bolImgOwnerUser) {
    headerDivSelect = "RqtMr";
  }
  else {
    headerDivSelect = "o-MQd";
  }

  var divLikeCom = document.createElement("div");
  divLikeCom.className = "_divLikeComment";
  divLikeCom.style.marginLeft = "15px"

  var btnLikeCom = document.createElement("button");
  btnLikeCom.style.backgroundColor = "white";
  btnLikeCom.style.border = "white";
  btnLikeCom.style.cursor = "pointer";

  //Create SVG
  var svgLikeCom = document.createElementNS(svgNS, "svg");
  svgLikeCom.setAttributeNS(null, "class", "_svgLikeComment");
  svgLikeCom.setAttributeNS(null, "width", "27.02px")
  svgLikeCom.setAttributeNS(null, "height", "27.02px")
  svgLikeCom.setAttributeNS(null, "viewBox", "0 0 381.2 381.2")

  var gPath = document.createElementNS(svgNS, "g")
  gPath.setAttributeNS(null, "transform", "scale(8, 8)")

  //Svg path Comment
  var svgPathCom = document.createElementNS(svgNS, "path");
  svgPathCom.setAttributeNS(null, "class", "_svgComment");
  svgPathCom.setAttributeNS(null, "d", "M42,45.3l-13.3-3.7C27.3,41.9,25.8,42,24,42C11.3,42,2,33.6,2,22c0-5.4,1.9-10.1,5.6-13.8C11.7,4.2,17.6,2,24,2   c12.7,0,22,8.4,22,20c0,4.3-1.4,8.5-4,11.8V45.3z M28.7,39.6L40,42.7v-9.5l0.2-0.3C42.7,29.8,44,26,44,22c0-10.4-8.4-18-20-18   C18,4,12.7,6,9,9.6C5.7,12.9,4,17.2,4,22c0,10.4,8.4,18,20,18c1.8,0,3.2-0.1,4.5-0.4L28.7,39.6z");
  /*
  svgPathCom.setAttributeNS(null,"d", "M324.56,75.313c-34.36-25.32-81.76-41-133.96-41c-52.2,0-99.6,15.68-133.96,41c-35,25.8-56.64,61.6-56.64,101.28 c0.06,17.945,4.466,35.609,12.84,51.48c8.169,15.405,19.128,29.158,32.32,40.56h0l-32.88,68.28 c-1.686,3.43-0.273,7.577,3.156,9.263c2.15,1.057,4.693,0.927,6.724-0.343l73.96-45.6c14.084,5.969,28.73,10.511,43.72,13.56 c16.705,3.401,33.712,5.103,50.76,5.08c52.2,0,99.6-15.68,133.96-41c35-25.8,56.64-61.6,56.64-101.28 S359.56,101.113,324.56,75.313z M316.36,266.593c-32,23.64-76.56,38.28-125.76,38.28c-16.121,0.023-32.203-1.585-48-4.8 c-15.129-3.066-29.881-7.76-44-14c-2.174-0.976-4.698-0.765-6.68,0.56l-56.84,34.96L60,269.833c1.422-2.994,0.535-6.576-2.12-8.56 c-13.464-10.855-24.605-24.309-32.76-39.56c-7.334-13.912-11.191-29.393-11.24-45.12c0-35.04,19.48-66.92,50.96-90 c32-23.64,76.56-38.28,125.76-38.28s93.68,14.56,125.76,38.28c31.48,23.2,50.92,55.04,50.92,90.08 C367.28,211.713,347.84,243.513,316.36,266.593z");
  */
  //Svg Path Heart
  var svgPathHrt = document.createElementNS(svgNS, "path")
  svgPathHrt.setAttributeNS(null, "class", "_svgHeart");
  svgPathHrt.setAttributeNS(null, "d", "M272.4,117.353l-3.04-3.04l-0.36-0.36c-18.9-18.821-49.46-18.821-68.36,0l-10.04,10.04l-10.04-10.04 c-18.9-18.821-49.46-18.821-68.36,0l-3.04,3.04l-0.36,0.36c-18.683,18.759-18.844,49.044-0.36,68l0.32,0.36l14.96,14.96 l61.96,61.92c2.718,2.716,7.122,2.716,9.84,0l61.92-61.92l14.96-14.96C291.221,166.813,291.221,136.254,272.4,117.353z");
  svgPathHrt.setAttributeNS(null, "fill", "white");
  svgPathHrt.setAttributeNS(null, "stroke-width", "6");
  svgPathHrt.setAttributeNS(null, "stroke", "#262626");

  //Append button to div
  divLikeCom.append(btnLikeCom);
  btnLikeCom.append(svgLikeCom)
  svgLikeCom.append(gPath)
  gPath.append(svgPathCom)
  svgLikeCom.append(svgPathHrt)


  //Event listener of the button
  divLikeCom.addEventListener("click", function () {
    actionLikeComment();
  });

  //After deciding the user pic identity, likeComments div & button created.
  var headerDiv = document.getElementsByClassName(headerDivSelect)[0]

  //Check if headerDiv available to appended an element and check if element is not there
  //Or wait for element in DOM to insert button
  if (headerDiv && headerDiv.firstChild.lastChild.className != divLikeCom.className) {
    headerDiv.firstChild.append(divLikeCom)
  }
  else {
    //console.log("DOM Not Loaded yet.")
  }
}





function isImgOwnerUser() {

  var hasImgFolBtn = document.querySelector(".bY2yH")

  if (hasImgFolBtn) {
    return false;
  }
  else {
    return true;
  }

}


function waitForDOMToCallButton(selector, time) {
  if (document.getElementsByClassName(selector)[0]) {
    //console.log("DOM Is loaded.")
    createLikeComments();
    return;
  }
  else {
    setTimeout(function () {
      waitForDOMToCallButton(selector, time);
    }, time);
  }
}

//Reminder
// "#ed4956" is already liked comment
// "#8e8e8e" is null comment, not liked yet.
function actionLikeComment() {

  var likeCommentBtns = document.querySelectorAll('.jdtwu');
  var btnLikeComments = null;

  for (var i = 0; i < likeCommentBtns.length; i++) {
    btnLikeComments = likeCommentBtns[i].querySelector(".wpO6b");
    if (btnLikeComments != null &&
      btnLikeComments.querySelector('._8-yf5 ').getAttribute("fill") != "#ed4956") {
      btnLikeComments.click();
      document.querySelector("._svgHeart").setAttributeNS(null, "fill", "#ed4956");
    }

  }
}