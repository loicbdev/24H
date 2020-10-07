let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let togg3 = document.getElementById("togg3");

let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");

togg1.addEventListener("click", () => {
  if(getComputedStyle(d1).display != "none"){
    d1.style.display = "none";
  } else {
    d1.style.display = "block";
  }
});

togg2.addEventListener("click", () => {
  if(getComputedStyle(d2).display != "none"){
    d2.style.display = "none";
  } else {
    d2.style.display = "block";
  }
});

togg3.addEventListener("click", () => {
  if(getComputedStyle(d3).display != "none"){
    d3.style.display = "none";
  } else {
    d3.style.display = "block";
  }
});



togg1.addEventListener("click", updateBtn1);

function updateBtn1() {
  if (togg1.value === 'Voir plus') {
    togg1.value = 'Voir moins';
    
  } else {
    togg1.value = 'Voir plus';
    
  }
};

togg2.addEventListener("click", updateBtn2);

function updateBtn2() {
  if (togg2.value === 'Voir plus') {
    togg2.value = 'Voir moins';
    
  } else {
    togg2.value = 'Voir plus';
    
  }
};

togg3.addEventListener("click", updateBtn3);

function updateBtn3() {
  if (togg3.value === 'Voir plus') {
    togg3.value = 'Voir moins';
    
  } else {
    togg3.value = 'Voir plus';
    
  }
};
