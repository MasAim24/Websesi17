<h3 id="judul">Belajar JS</h3>
<p id="hasil" style="background-color: aqua"></p>

<span id="nama"></span>
<!-- kasih jarak -->
<br>
<span id="lokasi"></span>

<br />
<br />
<script>
  // deklarasi variabel
  document.getElementById("judul").innerHTML = "Belajar Java Script";

  var hasil = document.getElementById("hasil");
  var nama = document.getElementById("nama");
  var lokasi = document.getElementById("lokasi");

  //   variabel numeric
  var nilai1 = 10;
  var nilai2 = 10;
  var hasilNilai = nilai1 + nilai2;

  console.log("hasil : " + hasilNilai);

  var output =
    "<p style='background-color: yellow; style: block-inline'>Hasil : " +
    hasilNilai +
    "</p>";
  hasil.innerHTML = "Hasil : " + hasilNilai;
  hasil.innerHTML += output;
  document.write(
    "Hasil : <span style='background-color: yellow;'>" +
      hasilNilai +
      "</span>"
  );

  var batas = "===".repeat(10);
  document.write("<br>" + batas + "<br>");

  //variabel string
  var namaStr = "Workshop 4 Days";
  var lokasiStr = "Online";
  nama.innerHTML = namaStr;
  lokasi.innerHTML = lokasiStr;
  
  // yang baru
  // variabel (integer/number, string, boolean, object)
  var nilaiBaru = 25;
  // string "Hello Arif" / all karakter
  // char 'A' / 1 karakter
  // boolean true/false

  //   menggunakan .nama // arif
  //   menggunakan .lokasi // jakarta
  // object {nama: "Arif", umur: 25, lokasi: "Jakarta"}

  // menggunakan [0] // arif
  // menggunakan [1] // 25
  // array ["Arif", 25, 2.5, 'A', true]
  var nilaiLama = ["Arif", 25, 2.5, "A", true];
  var outputVariabel = `nilai lama : ${nilaiLama[0]} <br> dengan tipe 
  data "${typeof nilaiLama}"`;

  //   gak pake variabel
  document.write(
    `nilai baru : ${nilaiBaru} <br> dengan tipe data "${typeof nilaiBaru}"`
  );
  document.write("<br>" + batas + "<br>");
  //   cetak dengan variabel
  document.write(outputVariabel);
</script>

======================== BATAS ========================

<h1>Belajar Kalkulator</h1>
<div id="hasil"></div>
<script>
  var nilai1 = 10;
  var nilai2 = 20;

  // statis
  var hasilTambah = nilai1 + nilai2;
  var hasilKurang = nilai1 - nilai2;
  var hasilKali = nilai1 * nilai2;
  var hasilBagi = nilai1 / nilai2;

  var output = document.getElementById("hasil");
  output.innerHTML = hitung(nilai1, nilai2, "tambah");
  //   output.innerHTML = hasilTambah;

  function hitung(nilai1, nilai2, status) {
    // loigc > + - * /
    var hasil = 0;
    if (status == "tambah") {
      hasil = nilai1 + nilai2;
    } else if (status == "kurang") {
      hasil = nilai1 - nilai2;
    } else if (status == "kali") {
      hasil = nilai1 * nilai2;
    } else if (status == "bagi") {
      hasil = nilai1 / nilai2;
    } else {
      hasil = "Status tidak dikenali";
    }
    var outputFunc = `${nilai1} ${status} ${nilai2} <br> hasil : ${hasil}`;
    // output.innerHTML = outputFunc;
    return outputFunc;
  }
  
  // yang baru
  //   alert('hei')
    cetakNamaNoParameter();
    document.write("<br>");
    //   gk pake parameter
    function cetakNamaNoParameter() {
      console.log("Arif 1");
      document.write("Arif 1");
    }
    //   pake parameter
    function cetakNama(nama) {
      console.log(nama);
      document.write(nama);
    }
    //   cetakNama("Arif") tidak dijadikan variabel
    cetakNama(nama("Arif 2"));
    document.write("<br>");

    var hasilNama = nama("Arif 3");
    cetakNama(hasilNama);

    function nama(a) {
      return a;
    }

    let nilaiku = 85;
    document.write("<br>");
    document.write(`Grade : ${hitungGrade(nilaiku)}`);
    function hitungGrade(nilai) {
      let grade = "";
      if (nilai >= 80 && nilai <= 100) {
        grade = "A";
      } else if (nilai >= 70 && nilai < 80) {
        grade = "B";
      } else if (nilai >= 60 && nilai < 70) {
        grade = "C";
      } else if (nilai >= 45 && nilai < 60) {
        grade = "D";
      } else if (nilai >= 0 && nilai < 45) {
        grade = "E";
      } else {
        grade = "Nilai tidak dikenali";
      }
      return grade;
    }  
</script>

======================== BATAS ========================
<h1>Halo Yal (saat diklik ganti)</h1>

<button id="klik" onclick="ubahText()">Klik aku</button>
<h1>Hitung Maju Mundur</h1>
<button onclick="mundur()">Mundur</button>
<button onclick="maju()">Maju</button>
<p id="hasil">0</p>

function ubahText() {
  var text = document.getElementById("klik");
  if (text.innerHTML == "Klik aku") {
    text.innerHTML = "Halo Yal";
  } else {
    text.innerHTML = "Klik aku";
  }
}

var angka = 0;
var hasil = document.getElementById("hasil");
function mundur() {
  angka--;
  hasil.innerHTML = angka;
}
function maju() {
  angka++;
  hasil.innerHTML = angka;
}