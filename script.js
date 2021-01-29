// $('.form').click( function() {
//   let data = { }
//   data.fname = document.querySelector('[name="fname"]').value;
//   data.thing = document.querySelector('[name="thing"]').value;
//   data.shoes = document.querySelector('[name="shoes"]').value;
//   console.log(nameGenerator(myvar))
// })

var formData = new FormData("form");

for (var p of formData) {
    let gender = p[0]
    let name = p[1];
    let thing = p[2];
    let shoes = p[3]

    console.log(nameGenerator(gender, name, thing, shoes))
}
  function nameGenerator(gender, name, thing, shoes) {
    let pronouns = ''
      if (gender === 'male') {
        pronouns = 'Lord'
      } else if (gender === 'female') {
        pronouns = 'Lady'
      }
    let generateName = `${pronouns} ${name} ${thing}ton of ${shoes}`
    return generateName
  }
  
  // console.log(nameGenerator({gender: 'female', fname:'Milea', thing: 'concealer', shoes: 'Ilora'}));
  // console.log(nameGenerator({gender: 'male', fname:'Dilan', thing: 'jeans', shoes: 'Ventela'}));