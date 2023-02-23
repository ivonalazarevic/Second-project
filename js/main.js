$(document).ready(function(){
  //ddw menu
    $('#more').hover(function(){
        $(this).find('#more-ul').stop(true,true).slideDown('slow');
    },function(){
        $(this).find('#more-ul').stop(true,true).css('display','none');
    });

    $('#mockImg').hover(
      function(){
        $(this).attr('src','img/mockpic1.png');
    },
      function(){
        $(this).attr('src','img/mockpic.png');
    });
    //showmore btn
    $('#about-social').hide();
    $('#show-more').click(function(){
      if($('#about-social').is(':visible')){
        $('#about-social').fadeOut('slow');
        $(this).val('Prikazi Vise');
      }else{
        $('#about-social').fadeIn('slow');
        $(this).val('Prikazi Manje');
      }
    });
    //show border bottom on selected tab
    $('#tab div:not(:first)').removeClass('tab-border');
    $('.tab-item').click(function(){
      $('.tab-item').removeClass('tab-border');
      $(this).addClass('tab-border');
    })

    $('#coffee').show();
    $('#donut').hide();
    $('#iceCream').hide();

    $('#tab-1').click(function(){
      $('#donut').hide();
      $('#iceCream').hide();
      $('#coffee').show();
    });
    $('#tab-2').click(function(){
      $('#iceCream').hide();
      $('#coffee').hide();
      $('#donut').show();
    });
    $('#tab-3').click(function(){
      $('#donut').hide();
      $('#coffee').hide();
      $('#iceCream').show();
    });
});
//ham menu
document.querySelector('.menu-ham').addEventListener('click',function(){
  document.querySelector('#menu-nav').classList.toggle('showw');
})
// slider
var bgImg = ['img/11.jpg','img/123.jpg'];
var sec = 3;
function bgSlider(){
  window.clearTimeout();
  var x = 0;
  for(let i = 0; i < bgImg.length; i++){
    setTimeout(function(){
      document.getElementById('showcase').style.background = "url(" + bgImg[x] + ") center center / cover no-repeat";
      if((x + 1) == bgImg.length){
        setTimeout(bgSlider,sec*2000);
      }
      else{
        x++;
      }
    },(sec*2000)*i)
  }
}
bgSlider();
//locations
var arrSrc = ['img/local1.jpg','img/local2.jpg','img/local3.jpg','img/local4.jpg','img/local5.jpg','img/local6.jpg'];
var arrAlt = ['Kafeterija lokal 1','Kafeterija lokal 2','Kafeterija lokal 3','Kafeterija lokal 4','Kafeterija lokal 5','Kafeterija lokal 6'];
var citys = ['Beograd','Novi Sad','Novi Beograd','Niš','Beograd','Kragujevac'];
var locations =  ['Cvijićeva 33','Kralja Mihaila 2','Novosadska 112','Žarka Zrenjanina 246','Ruzveltova 11b','Sarajevska 122'];

var phone = '';
for(let i = 0;i < locations.length; i++){
    phone +=`
    <div class="card text-center">
        <div class="card-img">
            <img src="${arrSrc[i]}" alt="${arrAlt[i]}">
        </div>
        <div class="card-content">
            <p>${citys[i]}</p>
            <p class="price">${locations[i]}</p> 
    </div>
 </div>`
}
 document.getElementById('action').innerHTML = phone;
// dinamicko ispisivanje tabova
var arrProducts = ['kafe','krofne','sladoledi'];
var tabs = '';
var x = 1;
for(let i = 0; i < arrProducts.length; i++){
  tabs += `<div class="tab-item tab-border" id="tab-${x}" >
                    <p>${arrProducts[i]}</p>
                </div>
               `
               x++;
}
tab.innerHTML = tabs;
 //Jquery plug-in
 $('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//dinamicko ispisivanje svih proizvoda
var arrSrcCoffee = ['img/americano.png','img/coffee.png','img/coldbrew.png','img/espresso.png','img/icecoffee.png','img/icedcappuccino.png','img/icelatte.png','img/latte.png','img/macchiato.png','img/cappuccino.png'];
var arrNameCoffee = ['Americka kafa','Kafa','Hladna americka kafa','Espreso kafa','Hladna kafa','Hladni Kapucino','Hladni latte','Latte','Makiato',"Kapucino"];
var arrPriceCoffee = [230 , 175 , 230 , 190, 175 ,190, 210, 210 ,220 ,230];
var output1 = '';
for(let i = 0;i < arrPriceCoffee.length; i++){
  output1 +=`
    <div class="card text-center">
        <div class="card-img">
            <img src="${arrSrcCoffee[i]}" alt="${arrNameCoffee[i]}">
        </div>
        <div class="card-content">
            <p class="btn text-bold link-item">${arrNameCoffee[i]}</p>
            <p class="price">${arrPriceCoffee[i]} RSD</p> 
    </div>
 </div>`

}
document.getElementById('coffee').innerHTML = output1;

var arrSrcDonuts = ['img/donuts.png','img/munchkins.png','img/muffins.png'];
var arrAltDonuts = ['donuts','munchkins','muffins'];
var arrOPriceDonuts = [120 , 260 ,150];
var output2 = '';
for(let i = 0;i < arrSrcDonuts.length; i++){
  output2 +=`
    <div class="card text-center">
      <div class="card-img">
        <img src="${arrSrcDonuts[i]}" alt="${arrAltDonuts[i]}">
      </div>
    <div class="card-content">
        <p class="btn text-bold link-item">${arrAltDonuts[i]}</p>
        <p class="price">${arrOPriceDonuts[i]} RSD</p> 
    </div>
  </div>`

}
document.getElementById('donut').innerHTML  = output2;

var arrSrcIceCream = ['img/icecream.png','img/icecream1.png','img/icecream3.png','img/icecream4.png'];
var arrAltIceCream = ['Sladoled karamela','Sladoled stracatela','Sladoled jagoda','Sladoled kivi'];
var arrPriceIceCream = [240 , 250 , 240 , 230];
var output3 = '';
for(let i = 0; i < arrPriceIceCream.length; i++){
  output3 +=`
    <div class="card text-center">
      <div class="card-img">
        <img src="${arrSrcIceCream[i]}" alt="${arrAltIceCream[i]}">
      </div>
    <div class="card-content">
       <p class="btn text-bold link-item">${arrAltIceCream[i]}</p>
       <p class="price">${arrPriceIceCream[i]} RSD</p> 
    </div>
  </div>`

}
document.getElementById('iceCream').innerHTML = output3;

//forma
var formName = ['name','mail','adres','phone'];
var formId = ['imePrezime','email','adress','number'];
var formPH = ['Ime i prezime','Email','Adresa','Broj telefona'];
var formErr = ['Ime i prezime moraju početi velikim slovom i sadržati minimalno po 3 karaktera','Niste uneli validnu email adresu','Niste uneli validnu adresu','Niste uneli validan broj telefona'];
var forma = document.createElement('form');
forma.setAttribute('method','POST');
forma.setAttribute('id','order');
forma.setAttribute('name','form1');
var naslov = document.createElement('h2');
naslov.appendChild(document.createTextNode('Primaj naše nove promocije'));
forma.appendChild(naslov)
for(let p = 0; p < formName.length; p++){
  var divContol = document.createElement('div');
  divContol.setAttribute('class','form-contol');
  var ulaz = document.createElement('input');
  ulaz.setAttribute('type','text');
  ulaz.setAttribute('name',formName[p]);
  ulaz.setAttribute('id',formId[p]);
  ulaz.setAttribute('placeholder',formPH[p]);
  ulaz.setAttribute('class','provera');
  var greska = document.createElement('p')
  greska.appendChild(document.createTextNode(formErr[p]))
  greska.setAttribute('class','show-err')
  divContol.appendChild(ulaz)
  forma.appendChild(divContol);
  forma.appendChild(greska)
}
var btnSubmit = document.createElement('input');
btnSubmit.setAttribute('type','button');
btnSubmit.setAttribute('value','Potvrdi');
btnSubmit.setAttribute('id','orderNow');
btnSubmit.setAttribute('class','btn');
forma.appendChild(btnSubmit);
var result = document.createElement('p');
result.setAttribute('id','res');
result.setAttribute('class','hide');
result.appendChild(document.createTextNode('Uspesno ste se prijavili na nas newsletter!'))
forma.appendChild(result);
document.getElementById("contactContent").appendChild(forma);

//form events
document.getElementById('imePrezime').addEventListener('blur',validateName);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('adress').addEventListener('blur',validateAdress);
document.getElementById('number').addEventListener('blur',validateNumber);
var err;
function validateName(){
  let name = document.getElementById('imePrezime');
  let re = /^[A-ZŠĐĆČŽ][a-zšđčćž]{2,11}(\s[A-ZŠĐĆČŽ][a-zšđčćž]{2,15})+$/
  err=0;
  if(!re.test(name.value)){
    name.classList.add('border-err')
    name.parentElement.nextElementSibling.classList.add('show2');
    name.classList.remove('good');
    err++;
  }else{
    name.classList.remove('border-err');
    name.parentElement.nextElementSibling.classList.remove('show2');
    name.classList.add('good');
  }
}
function validateEmail(){
  let email = document.getElementById('email');
  let re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  err= 0;
  if(!re.test(email.value)){
    email.classList.remove('good');
    email.classList.add('border-err');
    email.parentElement.nextElementSibling.classList.add('show2');
    err++
  }else{
    email.classList.remove('border-err');
    email.parentElement.nextElementSibling.classList.remove('show2');
    email.classList.add('good');
  }
}
function validateAdress(){
  let adress = document.getElementById('adress');
  let re = /^([A-ZŠĐĆČŽ][a-zšđčćž]{2,15}|[0-9])+(\s[A-ZŠĐĆČŽ[a-zšđčćž0-9\.\-]{2,20})+$/;
  err=0
  if(!re.test(adress.value)){
    adress.classList.remove('good');
    adress.classList.add('border-err');
    adress.parentElement.nextElementSibling.classList.add('show2');
    err++
  }else{
    adress.classList.remove('border-err');
    adress.parentElement.nextElementSibling.classList.remove('show2');
    adress.classList.add('good');
  }
}
function validateNumber(){
  let number = document.getElementById('number');
  let re =  /^(\+381[0-9]{8,9}|(06|01)[0-9]{7,8})$/;
  err=0
  if(!re.test(number.value)){
    number.classList.remove('good');
    number.classList.add('border-err');
    number.parentElement.nextElementSibling.classList.add('show2');
    err++
  }else{
    number.classList.remove('border-err');
    number.parentElement.nextElementSibling.classList.remove('show2');
    number.classList.add('good');
  }
}
//provera da li je ostavio sva polja prazna i resetovanje forme 
document.getElementById('orderNow').addEventListener('click',function(){
  if(document.getElementById('imePrezime').value == '' || document.getElementById('email').value == '' || document.getElementById('adress').value == '' || document.getElementById('number').value == ''){
    document.getElementById('imePrezime').classList.add('border-err');
    document.getElementById('email').classList.add('border-err');
    document.getElementById('adress').classList.add('border-err');
    document.getElementById('number').classList.add('border-err');
  }
  document.querySelectorAll('.provera').forEach(function(item){
    if(item.classList.contains('border-err')){
      document.getElementById('res').innerHTML = '';
    }
    else{
      document.getElementById('res').innerHTML = 'Uspesno ste se prijavili na nas newsletter!';
      setTimeout(function(){
        document.getElementById('res').innerHTML = '';
    },3000)
    }
  });
  if(err==0){
    document.getElementById('imePrezime').value = '';
    document.getElementById('imePrezime').classList.remove('good');
    document.getElementById('email').value = '';
    document.getElementById('email').classList.remove('good');
    document.getElementById('adress').value = '';
    document.getElementById('adress').classList.remove('good');
    document.getElementById('number').value = '';
    document.getElementById('number').classList.remove('good');
    document.getElementById('res').classList.add('show2');
  }
});
//dinamicko ispisivanje linkova u futeru
var linksName = ['Sitemap','JS','Dokumentacija'];
var linksHref = ['xml/sitemap.xml','js/main.js','dokumentacija_kafeterija.pdf'];
var navVal = ['Početna','Lokacije','O nama','Proizvodi','Autor'];
var navHref = ['index.html','#section-locations','#about','#all-products','#autor'];
var socialName =['Facebook','Instagram'];
var socialHref = ['https://www.facebook.com/ivonaa.lazarevic','https://www.instagram.com'];

var foterOutput = '<ul><h2>Navigacija</h2>';
for(let i = 0; i < navVal.length; i++){
  foterOutput +=`
            <li><a target="_blank" href="${navHref[i]}">${navVal[i]}</a></li>
  `
}
  foterOutput += '</ul>'
document.getElementById('navigacija').innerHTML = foterOutput;

var foterOutput1 = '<ul><h2>Mreže</h2>';
for(let i = 0; i < socialName.length; i++){
  foterOutput1 +=`
            <li><a target="_blank" href="${socialHref[i]}">${socialName[i]}</a></li>
  `
}
  foterOutput1 += '</ul>'
document.getElementById('mreze').innerHTML = foterOutput1;

var foterOutput2 = '<ul><h2>Korisni Linkovi</h2>';
for(let i = 0; i < linksName.length; i++){
  foterOutput2 +=`
            <li><a target="_blank" href="${linksHref[i]}">${linksName[i]}</a></li>
  `
}
  foterOutput2 += '</ul>';
document.getElementById('links').innerHTML = foterOutput2;