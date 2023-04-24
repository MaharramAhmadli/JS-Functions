// alert()

//a. Toplama çıxma, toplama, vurma, bölməyə uyğun funksiya yaradirsiz 2 eded ve 1 operator('+','-','*','/') qebul edir. Qebul etdiyi operatora uygun a və b ədədləri üzərində hesablama aparib alinan deyeri qaytarır.


// var plus = (m,n) => m+n;
// var plusMethod = function (m,n){
//     return m+n;
// }
// var p = plus (8,4);
// alert(p);


// var minus = (m,n) => m-n;
// var minusMethod = function (m,n){
//     return m-n;
// }
// var p = minus = (8,4);
// alert(p);


// function multiplication (m,n){
//     var m,n;
//     return m*n;
// }
// var u=multiplication(8,4);
// alert(u);


// function division (m,n){
//     var m,n;
//     return m/n;
// }
// var u=division(8,4);
// alert(u);







//b.Methodlar yaradirsiz. Methoda ad gonderende adi ekrana cixardir(Sabir), ad ve soyad gonderende soyadi adi ekrana cixardir(Guliyev Sabir), ad,soyad ve ata adı göndərildikdə adin baş hərfi nöqtə soyad ata adi ekrana cixardirsiz(S.Guliyev Mehti). Methodlarin adi eyni olmalıdır.


// prompt();

// var people = [
//     {
//     name: "Zamin",
//     surname : "Memmedova",
//     fatherName : "Senan",
//     },

//     {
//     name: "Sebine",
//     surname: "Eliyeva",
//     fatherName: "Geray",
//     },

//     {
//     name: "Fidan",
//     surname: "Novruzova",
//     fatherName: "Natiq",
//     }
// ];

// for (var i = 0; i < people.length; i++)

// console.log(people[0,1,2].name);
// console.log(people[0,1,2].surname);
// console.log(people[0,1,2].fatherName);





// c. 1 eded daxil edin. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.



var a=prompt("enter number")

    if(a<50){
       say=a/3;
       alert(say);
    }
    
    else if(a>50 && a<100){
        say=a/5
        alert(say)
    }
    else{
        say=a/8
        alert(say)
    }


