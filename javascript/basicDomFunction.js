// selector
document.getElementById('')
document.querySelector('')
document.querySelectorAll('')
document.querySelector('').getAttribute('')
document.querySelector('').value
document.querySelector('').innerText
document.querySelector('').innerHTML
document.querySelector('').parentElement//only one immidiate parent
document.querySelector('').parentElement.nodeName//only one immidiate parent with node name like ul
document.querySelector('').children//only immidiate child
document.querySelector('').nextElementSibling //only one immidiate next
document.querySelector('').previousElementSibling //only one immidiate prev
document.querySelector('').classList.contains()//if contain specific class name

//create and set method
document.querySelector('').attributesName == "attributesValue"
document.querySelector('').css({})
document.createElement('tagName')//create HTML tag
document.querySelector('').appendChild('childHere')
document.createTextNode("Water");//create plain text

//add event listener
document.querySelector("").addEventListener("click", function(){});


  //work after dom loaded
  document.addEventListener("DOMContentLoaded", function(){ })

  //work after all content loaded
  window.addEventListener("load", function(){ });

  //add css
    document.querySelectorAll("#myButtom").style.display = "flex";
    document.getElementById("myButtom").style.cssText = "opacity: 1; transform: unset";

  //add,remove,toogle class
  document.getElementById("myButtom").addEventListener('click', function(){
      var element = document.getElementById("myDiv");
      element.classList.add('active');
      element.classList.remove('active');
      element.classList.toggle('active');
  })
  
  //select item in foreach
  items.forEach((el)=>{
    el.querySelector(".element")
  })

//get all child and nested child element
var elem = document.querySelector('.parent');

elem.querySelectorAll(".child").forEach( (elem)=> {
  elem.classList.add('color-blue');
});

//get all sibling
function getAllSiblings(element, parent) {
  const children = [...parent.children];
  return children.filter(child => child !== element);
}
//getAllSiblings(this, this.parentElement)

//Children with tag name
let allChildren = [].slice.call(document.querySelector(".parent").children);

allChildren.forEach((item)=>{
   if(item.tagName && item.tagName.toLowerCase()=="ul"){
      item.classList.add("ul")
   }
})

//get all parent class
var getParents = function (elem, selector) {

  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }

  // Set up a parent array
  var parents = [];

  // Push each parent element to the array
  for ( ; elem && elem !== document; elem = elem.parentNode ) {
    if (selector) {
      if (elem.matches(selector)) {
        parents.push(elem);
      }
      continue;
    }
    parents.push(elem);
  }

  // Return our parent array
  return parents;

};
//var elem = document.querySelector('.some-element');
//var parents = getParents(elem, '.pick-me');

