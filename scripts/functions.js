const Id = (el) => document.getElementById(el);
const Query = (el) => document.querySelector(el);

const AddClass = (el,classes) => Query(el).classList.add(classes);
const RemoveClass = (el,classes) => Query(el).classList.remove(classes);
const ToggleClass = (el,classes) => Query(el).classList.toggle(classes);
const ContainsClass = (el,classes) => Query(el).classList.contains(classes);

const AddEvent = function(el,evt,func,bool=false){
return Query(el).addEventListener(evt,func,bool);
}
