// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const windowWidth = window.innerWidth;

window.addEventListener("resize", () => {
  if (windowWidth > 525) {
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  }
});

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const scrollTop = window.scrollY;
  if (scrollTop > 250) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Mapping Data
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

function mappingData() {
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
window.onload = mappingData();
