// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const windowWidth = window.innerWidth;

// Toggle Navbar
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Hapus class show ketika window resize
window.addEventListener("resize", () => {
  if (windowWidth > 525) {
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }
});

// Tambahkan class active ketika scroll melebihi 250
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const scrollTop = window.scrollY;
  if (scrollTop > 250) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

// Show more
const showMoreBtn = document.getElementById("show-more");

showMoreBtn.addEventListener("click", () => {
  window.scrollBy({
    top: 250,
    behavior: "smooth",
  });
});

// Mapping Data Wisata
const dataDestinasi = [
  {
    judul: "Pantai Bali",
    image: "/assets/img/pantai-bali.jpg",
  },
  {
    judul: "Borobudur",
    image: "/assets/img/candi-yogya.jpg",
  },
  {
    judul: "Labuan Bajo",
    image: "/assets/img/labuan-bajo.jpeg",
  },
  {
    judul: "Morotai",
    image: "/assets/img/morotai.png",
  },
  {
    judul: "Raja Ampat",
    image: "/assets/img/raja-ampat.jpg",
  },
];

function mappingDataDestinasi() {
  const content = document.getElementById("contentDestinasi");
  dataDestinasi.forEach((e) => {
    const card = document.createElement("div");
    const img_destination = document.createElement("img");
    const h5 = document.createElement("h5");

    card.classList.add("card");
    img_destination.classList.add("img_destination");
    img_destination.src = e.image;
    h5.textContent = e.judul;

    card.appendChild(img_destination);
    card.appendChild(h5);
    content.appendChild(card);
  });
}
window.onload = mappingDataDestinasi();

// Mapping Data Wisata
const dataWisata = [
  {
    judul: "Keindahan Bali",
    desc: "Bali terkenal dengan pantainya yang indah, budaya yang kaya, dan kehidupan malam yang meriah. Pulau ini menawarkan berbagai aktivitas mulai dari berselancar di pantai Kuta, menikmati matahari terbenam di Tanah Lot, hingga menjelajahi keindahan bawah laut di Nusa Penida. Selain itu, Bali juga dikenal dengan seni dan budayanya yang unik, seperti tari Kecak dan upacara keagamaan di Pura Besakih. Temukan lebih banyak tentang Bali",
    link: "https://bali.com/id/",
    image: "/assets/img/pantai-bali.jpg",
  },
  {
    judul: "Pesona Yogyakarta",
    desc: "Yogyakarta menawarkan pengalaman budaya yang unik dengan candi-candi bersejarah dan seni tradisional. Kota ini adalah rumah bagi Candi Borobudur, salah satu situs warisan dunia UNESCO, dan Candi Prambanan yang megah. Selain itu, Yogyakarta juga dikenal dengan kerajinan batiknya yang indah dan kuliner khas seperti gudeg. Jangan lewatkan kesempatan untuk mengunjungi Keraton Yogyakarta dan merasakan suasana kerajaan yang masih kental. Baca lebih lanjut tentang Yogyakarta",
    link: "https://www.indonesia.travel/id/en/destinations/java/yogyakarta.html",
    image: "/assets/img/candi-yogya.jpg",
  },
];

function mappingDataWisata() {
  const content = document.getElementById("content");
  dataWisata.forEach((e) => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const a = document.createElement("a");

    div.classList.add("container");
    h2.textContent = e.judul;
    img.alt = "Pantai di Bali";
    img.width = "350";
    img.src = e.image;
    p.textContent = e.desc;
    a.href = e.link;
    a.target = "_blank";
    a.textContent = " di sini";

    div.appendChild(img);
    article.appendChild(h2);
    div.appendChild(p);
    p.appendChild(a);
    article.appendChild(div);
    content.appendChild(article);
  });
}
window.onload = mappingDataWisata();
