// navbar
// dapatkan elemen navbar dan parent nya
const navbarParent = document.getElementById('navbar-parent');
const navbar = document.getElementById('navbar');

// tambah event ketika di scroll maka ubah posisi navbar parent jadi fixed
window.addEventListener('scroll', () => {
  // menangkap nilai window
  const scrollValue = window.pageYOffset;
  // if (scrollValue >= 100) {
  //   navbar.classList.add('drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]')
  //   navbar.classList.remove('drop-shadow-[0_20px_20px_rgba(0,0,0,0)]')
  // } else {
  //   navbar.classList.add('drop-shadow-[0_20px_20px_rgba(0,0,0,0)]')
  //   navbar.classList.remove('drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]')
  // }
})


// menu
// dapatkan elemen yang diperlukan
const menuBtn = document.querySelector('#menu-btn');
const dropdownItems = document.querySelectorAll('.dropdown-content li');
const parentItems = document.querySelector('.dropdown-content')

// tambahkan event ketika menuBtn checked maka ubah width dropDownItems jadi 100% jika tidak checked maka ubah jadi 0%
menuBtn.addEventListener('change', () => {
  if (menuBtn.checked) {
    // jika menuBtn checked maka ubah visibilitas parent nya jadi visible
    parentItems.classList.add('visible', 'w-screen');
    parentItems.classList.remove('invisible', 'w-0', 'delay-500');
    dropdownItems.forEach(item => {
      item.style.width = '100%'
    });
  } else {
    // jika menuBtn checked maka ubah visibilitas parent nya jadi invisible
    parentItems.classList.remove('visible', 'w-screen');
    parentItems.classList.add('invisible', 'w-0', 'delay-500');
    dropdownItems.forEach(item => {
      item.style.width = '0%'
    });
  }
});


// Dapatkan elemen parent
const parent = document.getElementById('carousel-inner-2');
const carouselParent = document.getElementById('carousel-2')

// Dapatkan elemen card dan simpan pada sebuah array
const cards = Array.from(document.querySelectorAll('.carousel-item'));

// Hitung lebar satu card dan jumlah total lebar card yang ada
const cardWidth = cards[0].offsetWidth;
const totalCardWidth = cardWidth * cards.length;

// Buat variabel untuk menyimpan posisi scroll saat ini, dan inisialisasi dengan nilai 0
let scrollPosition = 0;

// Dapatkan tombol next dan prev
const nextButton = carouselParent.querySelector('.next');
const prevButton = carouselParent.querySelector('.prev');


// Tambahkan event listener untuk tombol next
nextButton.addEventListener('click', () => {
  // Geser posisi scroll sebesar lebar satu card
  scrollPosition += cardWidth + 100;
  // Jika posisi scroll sudah melebihi total lebar card yang ada, kembalikan posisi scroll ke 0
  if (scrollPosition > totalCardWidth) {
    scrollPosition = 0;
  }
  // Geser scroll pada elemen parent
  parent.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
});

// Tambahkan event listener untuk tombol prev
prevButton.addEventListener('click', () => {
  // Geser posisi scroll sebesar lebar satu card ke arah sebaliknya
  scrollPosition -= cardWidth + 100;
  // Jika posisi scroll sudah kurang dari 0, geser posisi scroll ke total lebar card yang ada
  if (scrollPosition < 0) {
    scrollPosition = totalCardWidth - parent.offsetWidth;
  }
  // Geser scroll pada elemen parent
  parent.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
});

// Fungsi untuk menggeser posisi scroll secara otomatis
function autoScroll() {
  // Geser posisi scroll sebesar lebar satu card
  scrollPosition += cardWidth;
  // Batasi posisi scroll agar tidak lebih besar dari total lebar card yang ada
  if (scrollPosition > totalCardWidth) {
    // Jika sudah mencapai ujung, kembalikan posisi scroll ke awal
    scrollPosition = 0;
  }
  // Geser scroll pada elemen parent
  parent.scrollTo({
    left: scrollPosition,
    behavior: 'smooth'
  });
}

// setInterval(() => autoScroll(parent1), 5000);
// setInterval(() => autoScroll(), 7000);

const cardPortfolio = Array.from(document.querySelectorAll('.portfolio')).slice(3,6);
const btnLihat = document.getElementById('btn-lihat');

if(btnLihat) {
  btnLihat.addEventListener('click', () => {
    for (const card of cardPortfolio) {
      card.classList.toggle('hidden');
    }
  })
}




