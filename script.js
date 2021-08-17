// Exercise 1
let singa = {
    nama : "Panther",
    kaki : 4,
    warna : ["Orange", "Black"],
    spesies: "Mamalia",
    makanan : ["Kijang", "Zebra"],
    keahlian : function(){
        return "Berburu"
    }
}
console.log("Nama :", singa.nama);
console.log("Kaki :", singa.kaki);
console.log("Warna :", singa.warna[0], ",", singa.warna[1]);
console.log("Spesies :", singa.spesies);
console.log("Makanan :", singa.makanan[0], "," ,singa.makanan[1]);
console.log("Keahlian :", singa.keahlian())

// Exercise 2
const data = [
    {
        name :"Alpha",
        class : "Dragon",
        club : ["Bola", "Bulutangkis"]
    },
    {
        name: "Beta",
        class : "Lizard",
        club : ["Membaca", "Bulutangkis"]
    },
]
console.log(data[0].name ,"ada di kelas", data[0].class,", dia mengikuti club", data[0].club[0],",",data[0].club[1] )
console.log(data[1].name ,"ada di kelas", data[1].class,", dia mengikuti club", data[1].club[0],",",data[1].club[1] )

//Exercise 3
// a. printAll()
let todos = [
    {id : 38, todo: "Belajar coding"},
    {id : 87, todo: "Nanti tidur"},
]
function printAll() {
    for (let i = 0; i < todos.length; i++){
        console.log(todos[i]);
    }
}
//b. printById()
function printById(id) {
    return todos[id =0]; 
}
// 3. add()
function add(newTodo) {
    todos.push ({
        id : todos.length + 86,
        todo : newTodo,
    });
    return todos;
}
 // c. deleteByID()
function deleteByID(id) {
    todos.splice(id - 1, 1)

    return todos
}
// d. updateByID
function updateByID(id, newTodo){
    for(let i in todos){
        if (todos[i].id == id) {
          todos[i].todo = newTodo;
          break;
        }
      }
      return todos;
}
 


printAll()
console.log(printById(1))
console.log("Add : ", add ("Ngerjain Tugas"))
console.log("Delete  :", deleteByID(2))
console.log("UpdateById :", updateByID( 38, "Belajar CRUSD"))

// Exercise 4
let buah = [
    {
        nama : "Apple",
        warna : "Red",
        namaLatin : "Malus Sylvestris",
        tipeBiji : "Single Sead",
        gambar : "./gambar-apel.png",
    },
    {
        nama : "Banana",
        warna : "Yellow",
        namaLatin : "Musa Paradisiaca",
        tipeBiji : "Double Sead",
        gambar : "./gambar-pisang.png",
    },
    {
        nama : "Bluebery",
        warna : "Blue",
        namaLatin : "Vaccinium Corymbosum",
        tipeBiji : "Single Sead",
        gambar : "./gambar-bluebery.png",
    },
    {
        nama : "Cherry",
        warna : "Red",
        namaLatin : "Prunus Apetala",
        tipeBiji : "Double Sead",
        gambar : "./gambar-chery.png",
    },
    {
        nama : "Lemon",
        warna : "Yellow",
        namaLatin : "Citrus Lemon",
        tipeBiji : "Single Sead",
        gambar : "./lemon.png",
    },
    {
        nama : "Mango",
        warna : "Green",
        namaLatin : "Citrus Reticulata",
        tipeBiji : "Double Sead",
        gambar : "./gambar-mangga.png",
    },
    {
        nama : "Orange",
        warna : "Orange",
        namaLatin : "Malus Sylvestris",
        tipeBiji : "Single Sead",
        gambar : "./orange.png",
    },
    {
        nama : "Pear",
        warna : "Yellow",
        namaLatin : "Pyrus Caucasica",
        tipeBiji : "Double Sead",
        gambar : "./pear.png",
    },

]
console.log(buah)
let daftarBuah = document.getElementById("daftar-buah")

for (let i = 0; i <= buah.length; i++){

        daftarBuah.innerHTML += `
        <section style= "padding-top: 20px ; display : flex; justify-content: space-around">
        <div id="buah"> 
        <div class = " container">
        <div class= "row" >
        <div class= "col-md-6" >
         <div class="card" style="width: 18rem; padding-left : 20px">
         <img class="card-img-top" src="${buah[i].gambar}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title" style = "text-align : center">${buah[i].nama}</h5>
    <p class="card-text">Color: ${buah[i].warna}</p>
    <p class="card-text">Latin Name :${buah[i].namaLatin}</p>
    <p class="card-text">Seed Type : ${buah[i].tipeBiji}</p>
  </div>
</div>
</div>
</div>
</div>
</section>`

    
}

