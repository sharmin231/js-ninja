// form ke access kora- class,id dhore access kora jay, form access korar another way holo-  document.forms-  evabe access kora.e khetre jodi onek gulo form thake tahole index dhore access kora jabe-

const form = document.forms[0];


// form er vitore kono data ke access korte chaile input er id/class/attributes jekono kicu diye access kora jabe- abar evabe o jabe.

// console.log(form.name)
console.log(form.elements[1])
// console.log(form.children[1].nextElementSibling)

// input er value access kora-

const names = form.name;
const email = form.email;
console.log(names.value)
console.log(email.value)