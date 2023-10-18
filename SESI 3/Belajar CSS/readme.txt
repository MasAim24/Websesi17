


css (pembelajaran sesi 3)

struktur koding :

belajar css. (folder)
---- index_css.html (dokumen)
---- external file style.css //tahap 1 (file diluar / menggunakan tahap 1)
---- assets //tahap 2 (include folder)
-------- style.css


======================== BATAS ========================

    <!-- external file -->
    <link rel="styleseet" href="style.css" />

    <!-- internal file -->
    <style>
      body {
        /* force  */
        background-color: black!important;
        padding: 0px;
        margin: 0px;
      }
      h1 {
        color: aquamarine;
        font-size: 50px;
        font-family: sans-serif;
      }
    </style>
    
     <body style="background-color: azure;">
    <!-- inline -->
    <h1
      style="
        background-color: beige;
        color: darkblue;
        border-radius: 10px;
        margin: 25px;
        padding: 10px;
        text-align: center;
      "
    >
      Belajar CSS
    </h1>
  </body>
  
======================== BATAS ========================

external file style.css :
h1 {
  color: aquamarine;
  font-size: 50px;
  font-family: sans-serif;
}
