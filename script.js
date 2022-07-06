const pertama = document.querySelector(".pertama");
const kedua = document.querySelector(".kedua");
const ketiga = document.querySelector(".ketiga");

pertama.addEventListener("click", function () {
  pertama.classList.toggle("active");
  const isi = this.nextElementSibling;
  if (isi.style.display === "block") {
    isi.style.display = "none";
  } else {
    setTimeout(() => {
      isi.style.display = "block";
    }, 100);
  }
});

kedua.addEventListener("click", function () {
  kedua.classList.toggle("active");
  const isi = this.nextElementSibling;
  if (isi.style.display === "block") {
    isi.style.display = "none";
  } else {
    setTimeout(() => {
      isi.style.display = "block";
    }, 100);
  }
});

ketiga.addEventListener("click", function () {
  ketiga.classList.toggle("active");
  const isi = this.nextElementSibling;
  if (isi.style.display === "block") {
    isi.style.display = "none";
  } else {
    setTimeout(() => {
      isi.style.display = "block";
    }, 100);
  }
});

const produk = {
  sateAyam: {
    nama: "Sate Ayam",
    desc: "Adalah makanan jenis sate yang terbuat dari bahan dasar daging Ayam yang di olah dengan racikan bumbu khas Madura, Jawa Timur",
    harga: 20000,
  },
  sateKambing: {
    nama: "Sate Kambing",
    desc: "Adalah makanan jenis sate yang terbuat dari bahan dasar daging Kambing yang di olah dengan racikan bumbu khas Madura, Jawa Timur",
    harga: 25000,
  },
  sop: {
    nama: "Sop Sapi",
    desc: "Adalah makanan jenis Sop yang terbuat dari bahan dasar daging Sapi yang di olah dengan racikan bumbu khas Madura, Jawa Timur",
    harga: 20000,
  },
};
const admin = {
  noHp: "+6289600791540",
};
const sateAyam = function () {
  window.open(
    `https://web.whatsapp.com/send?phone=${admin.noHp}?&text=Nama Produk: ${produk.sateAyam.nama}%0ADeskripsi: ${produk.sateAyam.desc}%0AHarga: ${produk.sateAyam.harga}%0A%0AMakasih%20BRO!`
  );
};
const sateKambing = function () {
  window.open(
    `https://web.whatsapp.com/send?phone=${admin.noHp}?&text=Nama Produk: ${produk.sateKambing.nama}%0ADeskripsi: ${produk.sateKambing.desc}%0AHarga: ${produk.sateKambing.harga}%0A%0AMakasih%20BRO!`
  );
};
const sopSapi = function () {
  window.open(
    `https://web.whatsapp.com/send?phone=${admin.noHp}?&text=Nama Produk: ${produk.sop.nama}%0ADeskripsi: ${produk.sop.desc}%0AHarga: ${produk.sop.harga}%0A%0AMakasih%20BRO!`
  );
};

VANTA.TOPOLOGY({
  el: "#beranda",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xfcfcfc,
  backgroundColor: 0x009688,
});

AOS.init();
