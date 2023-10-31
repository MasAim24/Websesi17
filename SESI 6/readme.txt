

step 1 :
// dokumen write
var hello = "Hello World YAL";
var in_hello = "<h2>" + hello + "</h2>";
document.write(hello);
document.write(in_hello);

var head = document.head;
//cek tipe data
console.log(head);
document.write("tipe objek head : " + typeof head);

document.write("<br>");

var body = document.body;
console.log(body);
document.write(body.innerText);

document.write("<br>");

var title = document.title;
document.write("panjang judul : " + title.length);
document.write("<br>");

step 2:
// document
var p_hello = (document.createElement("p").textContent = "Hello World");
document.body.append("dicetak dengan document element : " + p_hello);

paragraf("belajar js");
document.write("<br>");

function paragraf(kata) {
  var paragraf = (document.createElement("p").textContent = kata);
  document.write("<br>");
  document.body.append(paragraf);
  document.write("<br>");
}

==================== BATAS ====================
html (body):
<h2 id="judul_saya">Delete Saya!</h2>

script:
var judul_saya = document.getElementById("judul_saya");
//   tampilkan
console.log("Sebelum dihapus : " + judul_saya.innerHTML);

//   untuk remove;
//   judul_saya.remove();
console.log("Sesudaj dihapus : " + judul_saya.innerHTML);
==================== BATAS ====================
html (body):
<h3>Aplikasi Ubah Warna</h3>

<div class="form-group">
  <label for="warna_latas">Warna Latar</label>
  <input id="warna_latar" type="color" />
</div>
<div class="form-group">
  <label for="warna_teks">Warna Teks</label>
  <input id="warna_teks" type="color" />
</div>

script:
// get data warna latar
var warna_latar = document.getElementById("warna_latar");
// get data warna teks
var warna_teks = document.getElementById("warna_teks");

//event warna latar
warna_latar.addEventListener("change", function () {
  document.body.style.backgroundColor = warna_latar.value;
  console.log(warna_latar.value);
});
//event warna teks
warna_teks.addEventListener("change", function () {
  document.body.style.color = warna_teks.value;
  console.log(warna_teks.value);
});

//event reset
var reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  resetbg();
});

resetbg();

function resetbg() {
  // nilai bawaan
  var bodi = document.body.style;
  bodi.backgroundColor = "beige";
  bodi.color = "darkblue";

  // change color input
  warna_latar.value = "beige";
  warna_teks.value = "#00008b";
==================== BATAS ====================
<h3>Belajar Regex</h3>

<script>
    var foo = /ab+c/
    var foo2 = new RegExp("ab+c")

    console.log(foo)
    console.log(typeof foo)
    console.log(foo2)
    console.log(typeof foo2)

    // batas
    console.log('=======================')
    var str = "Belajar JavaScript"
    var pola = /Java/
    console.log(pola.test(str)) //true/false
    console.log(/Belajar/.test(str)) //true/false
    console.log(/belajar/.test(str)) //true/false
    console.log(/JavaScript/.test(str)) //true/false
    console.log(/Javascript/.test(str)) //true/false
</script>

//tambahan / percobaan ke dua
// batas
console.log("=======================");
var polawaktu = "1 jam sama dengan 60 menit, juga sama dengan 3600 detik";
var pola = /\d+/g;
//   pencarian 1
console.log(pola.exec(polawaktu));
//   pencarian 2
console.log(pola.exec(polawaktu));
//   pencarian 3
console.log(pola.exec(polawaktu));
//   pencarian 4
console.log(pola.exec(polawaktu)); //undefined

//tambahan / percobaan ke tiga
// batas
console.log("=======================");
var polaabjad = /[abcde]../
console.log(polaabjad.test("abaa"))
console.log(polaabjad.test("fba")) // false
console.log(polaabjad.test("1dd")) // false
console.log(polaabjad.test("add"))
console.log(polaabjad.test(" dd")) // false
console.log(polaabjad.test("belajar"))
==================== BATAS ====================
//   var, let, const
var hello = /Hello/; //regex
var hello_ = "Hello"; //string
console.log(hello.test("ello"));

//sama kita repleace dengan kata hallo
console.log(hello_.replace("Hello", "Hallo"));
==================== BATAS ====================
<h1 style="text-align: center">Membuat Animasi Warna</h1>

<h3 class="teks" style="padding: 20px; border-radius: 2%">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil enim iste
  esse neque laudantium qui odit perspiciatis eius a consequatur maxime
  dolores temporibus tempore illo, aliquid, unde aut voluptates numquam!
</h3>

<h3 class="teks" style="padding: 20px; border-radius: 2%">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil enim iste
  esse neque laudantium qui odit perspiciatis eius a consequatur maxime
  dolores temporibus tempore illo, aliquid, unde aut voluptates numquam!
</h3>

<h3 class="teks" style="padding: 20px; border-radius: 2%">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil enim iste
  esse neque laudantium qui odit perspiciatis eius a consequatur maxime
  dolores temporibus tempore illo, aliquid, unde aut voluptates numquam!
</h3>

<script>
  var tekt = document.getElementsByClassName("teks")[0];
  tekt.style.backgroundColor = "aquamarine";

  // 0 - 5 (6 data)
  var warna = ["red", "green", "blue", "yellow", "pink", "purple"];
  //saat habis waktu (reset)
  setTimeout(() => {
    tekt.style.color = warna[0];
  }, 2000);
  //set interval
  var i = 0;
  setInterval(() => {
    tekt.style.color = warna[i];
    i++;
    if (i == warna.length) {
      //panjang
      i = 0;
    }
  }, 1000);
</script>

==================== BATAS ====================
==================== BATAS ====================
