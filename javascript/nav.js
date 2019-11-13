// JavaScript Document
let page="";

function accOpen(page) {
  document.getElementById("navModal").style.width = "100%";
  document.getElementById("navModal").style.display = "grid";
  
  if (page = "team"){
    document.getElementById("modal-team").style.backgroundColor="rgba(80, 128, 61, 0.5)";
  }
 else if(page = "about"){
  document.getElementsByClassName("modal-about").style.backgroundColor="004883";
 }
 else if(page = "download"){
  document.getElementsByClassName("modal-download").style.background="rgba(80, 128, 61, 0.5)";
 }
 else if(page = "contact"){
  document.getElementsByClassName("modal-contact").style.background="004883";
 }
 else if(page = "case"){
  document.getElementsByClassName("modal-case").style.background="004883";
 }
 else if(page = "faq"){
  document.getElementsByClassName("modal-about").style.background="rgba(80, 128, 61, 0.5)";
 }
};

function accClose() {
  document.getElementById("navModal").style.display = "none";
}


