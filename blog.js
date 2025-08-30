// Blog posts data - easy to add new posts
const blogPosts = [
  {
    id: 1,
    title: "Kako započeti s treningom snage",
    excerpt: "Vodič za početnike koji žele graditi snagu i mišićnu masu. Naučite osnove pravilnog treninga i kako izgraditi održivu rutinu.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    date: "2024-01-15",
    content: `
      <p>Trening snage je jedan od najefikasnijih načina za poboljšanje općeg zdravlja i fizičke kondicije. Bez obzira na vašu dob ili trenutnu razinu kondicije, uvijek je pravo vrijeme za započeti.</p>
      
      <h2>Zašto je trening snage važan?</h2>
      <p>Trening snage ne pomaže samo u izgradnji mišića, već također:</p>
      <ul>
        <li>Poboljšava gustoću kostiju</li>
        <li>Povećava metabolizam</li>
        <li>Poboljšava posturu</li>
        <li>Smanjuje rizik od ozljeda</li>
      </ul>
      
      <h2>Kako započeti</h2>
      <p>Početak s treningom snage može biti zastrašujuć, ali ne mora biti. Evo nekoliko koraka za siguran početak:</p>
      
      <h3>1. Postavite realne ciljeve</h3>
      <p>Počnite s malim, postignutim ciljevima. Umjesto da ciljate na "postati snažan", ciljajte na "trenirati 3 puta tjedno".</p>
      
      <h3>2. Naučite osnovne pokrete</h3>
      <p>Fokusirajte se na složene pokrete koji angažiraju više mišićnih grupa:</p>
      <ul>
        <li>Čučnjevi (squats)</li>
        <li>Mrtvo dizanje (deadlifts)</li>
        <li>Bench press</li>
        <li>Overhead press</li>
      </ul>
      
      <h3>3. Počnite s težinama</h3>
      <p>Počnite s težinama koje možete podići 10-12 puta s dobrim oblikom. Kvaliteta je važnija od količine.</p>
      
      <h2>Česti greške početnika</h2>
      <p>Izbjegavajte ove česte greške:</p>
      <ul>
        <li>Prebrzo povećavanje težine</li>
        <li>Ignoriranje pravilne tehnike</li>
        <li>Nedovoljno odmaranja</li>
        <li>Ignoriranje zagrijavanja</li>
      </ul>
      
      <h2>Zaključak</h2>
      <p>Trening snage je investicija u vaše zdravlje i budućnost. Počnite polako, budite konzistentni i ne bojte se tražiti pomoć od stručnjaka.</p>
    `
  },
  {
    id: 2,
    title: "Prehrana za izgradnju mišića",
    excerpt: "Otkrivamo tajne pravilne prehrane za maksimalnu izgradnju mišića. Naučite što jesti, kada i koliko za optimalne rezultate.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    date: "2024-01-10",
    content: `
      <p>Prehrana je ključni faktor u izgradnji mišića. Bez obzira na to koliko dobro trenirate, bez pravilne prehrane nećete vidjeti željene rezultate.</p>
      
      <h2>Osnove prehrane za izgradnju mišića</h2>
      
      <h3>Proteini - građevni blokovi mišića</h3>
      <p>Proteini su esencijalni za izgradnju i popravak mišića. Preporučuje se 1.6-2.2g proteina po kg tjelesne težine dnevno.</p>
      
      <h4>Najbolji izvori proteina:</h4>
      <ul>
        <li>Pileća prsa</li>
        <li>Riba (losos, tuna)</li>
        <li>Jaja</li>
        <li>Govedina</li>
        <li>Mliječni proizvodi</li>
        <li>Mahunarke</li>
      </ul>
      
      <h3>Ugljikohidrati - gorivo za trening</h3>
      <p>Ugljikohidrati su važni za energiju tijekom treninga i oporavak nakon njega.</p>
      
      <h3>Masti - važne za hormonu</h3>
      <p>Zdrave masti su važne za proizvodnju testosterona i opće zdravlje.</p>
      
      <h2>Timing obroka</h2>
      <p>Kada jedete može biti jednako važno kao i što jedete:</p>
      
      <h3>Prije treninga (2-3 sata)</h3>
      <p>Obrok s ugljikohidratima i proteinima</p>
      
      <h3>Nakon treninga (30 minuta)</h3>
      <p>Protein shake ili obrok s proteinima i ugljikohidratima</p>
      
      <h2>Suplementi</h2>
      <p>Iako nisu nužni, neki suplementi mogu pomoći:</p>
      <ul>
        <li>Whey protein</li>
        <li>Kreatin</li>
        <li>BCAA</li>
        <li>Vitamin D</li>
      </ul>
      
      <h2>Praktični savjeti</h2>
      <ul>
        <li>Planirajte obroke unaprijed</li>
        <li>Pripremite hranu za tjedan</li>
        <li>Pratite unos kalorija</li>
        <li>Pijte dovoljno vode</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Mentalna priprema za trening",
    excerpt: "Otkrijte kako mentalna priprema može značajno poboljšati vaše rezultate u teretani. Tehnike za fokus i motivaciju.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    date: "2024-01-05",
    content: `
      <p>Mentalna priprema je često zanemareni aspekt treninga, ali može biti razlika između prosječnog i izvrsnog treninga.</p>
      
      <h2>Zašto je mentalna priprema važna?</h2>
      <p>Vaš um kontrolira vaše tijelo. Bez pravilne mentalne pripreme, čak i najbolji trening plan neće dati optimalne rezultate.</p>
      
      <h2>Tehnike mentalne pripreme</h2>
      
      <h3>1. Vizualizacija</h3>
      <p>Prije treninga, zatvorite oči i vizualizirajte sebe kako uspješno izvršavate svaki pokret. Ovo pomaže u poboljšanju performansi.</p>
      
      <h3>2. Postavljanje ciljeva</h3>
      <p>Postavite jasne, specifične ciljeve za svaki trening. Umjesto "trening nogu", ciljajte "3 seta čučnjeva s 80kg".</p>
      
      <h3>3. Rituali prije treninga</h3>
      <p>Razvijte rituale koji vas pripremaju mentalno za trening:</p>
      <ul>
        <li>Slaganje sportske torbe</li>
        <li>Slaganje playliste</li>
        <li>5 minuta meditacije</li>
        <li>Čitanje motivacijskog citata</li>
      </ul>
      
      <h2>Upravljanje stresom</h2>
      <p>Stres može značajno utjecati na vaše performanse u teretani. Evo kako ga kontrolirati:</p>
      
      <h3>Tehnike opuštanja</h3>
      <ul>
        <li>Duboko disanje</li>
        <li>Progresivna relaksacija mišića</li>
        <li>Meditacija</li>
        <li>Joga</li>
      </ul>
      
      <h2>Motivacija</h2>
      <p>Motivacija može varirati, ali možete je održati:</p>
      
      <h3>Kako održati motivaciju</h3>
      <ul>
        <li>Pratite napredak</li>
        <li>Postavite kratkoročne ciljeve</li>
        <li>Pronađite trening partnera</li>
        <li>Nagradite se za postignuća</li>
      </ul>
      
      <h2>Fokus tijekom treninga</h2>
      <p>Održavanje fokusa tijekom treninga je ključno:</p>
      <ul>
        <li>Isključite telefon</li>
        <li>Koristite timer</li>
        <li>Fokusirajte se na tehniku</li>
        <li>Pratite broj ponavljanja</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "Oporavak i regeneracija",
    excerpt: "Naučite zašto je oporavak jednako važan kao i trening. Tehnike za brži oporavak i sprječavanje prekomjernog treninga.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    date: "2024-01-01",
    content: `
      <p>Oporavak je često zanemareni aspekt treninga, ali je ključan za dugoročni napredak i sprječavanje ozljeda.</p>
      
      <h2>Zašto je oporavak važan?</h2>
      <p>Tijekom treninga, vaši mišići se mikroskopski oštećuju. Oporavak je vrijeme kada se ti mišići popravljaju i postaju jači.</p>
      
      <h2>Faktori oporavka</h2>
      
      <h3>1. Spavanje</h3>
      <p>Spavanje je najvažniji faktor oporavka. Tijekom dubokog sna:</p>
      <ul>
        <li>Proizvodi se hormon rasta</li>
        <li>Mišići se popravljaju</li>
        <li>Regenerira se centralni živčani sustav</li>
      </ul>
      
      <h4>Preporučeno: 7-9 sati sna dnevno</h4>
      
      <h3>2. Prehrana</h3>
      <p>Pravilna prehrana nakon treninga je ključna za oporavak:</p>
      <ul>
        <li>Proteini za popravak mišića</li>
        <li>Ugljikohidrati za obnavljanje glikogena</li>
        <li>Antioksidansi za smanjenje upale</li>
      </ul>
      
      <h3>3. Hidratacija</h3>
      <p>Voda je esencijalna za sve procese u tijelu, uključujući oporavak.</p>
      
      <h2>Tehnike oporavka</h2>
      
      <h3>1. Stretching</h3>
      <p>Stretching poboljšava fleksibilnost i cirkulaciju:</p>
      <ul>
        <li>Dinamički stretching prije treninga</li>
        <li>Statički stretching nakon treninga</li>
        <li>Yoga za opću fleksibilnost</li>
      </ul>
      
      <h3>2. Masiranje</h3>
      <p>Masiranje može pomoći u:</p>
      <ul>
        <li>Smanjenju napetosti mišića</li>
        <li>Poboljšanju cirkulacije</li>
        <li>Ubrzavanju oporavka</li>
      </ul>
      
      <h3>3. Kontrastna terapija</h3>
      <p>Izmjenjivanje toplih i hladnih tretmana može poboljšati cirkulaciju i oporavak.</p>
      
      <h2>Prekomjerni trening</h2>
      <p>Znakovi prekomjernog treninga:</p>
      <ul>
        <li>Kronični umor</li>
        <li>Smanjenje performansi</li>
        <li>Povećana podložnost bolestima</li>
        <li>Promjene raspoloženja</li>
        <li>Problemi sa spavanjem</li>
      </ul>
      
      <h2>Planiranje oporavka</h2>
      <p>Uključite dane oporavka u svoj trening plan:</p>
      <ul>
        <li>1-2 dana tjedno potpuno odmaranja</li>
        <li>Aktivni oporavak (lagano kretanje)</li>
        <li>Planiranje lakših tjedana</li>
      </ul>
    `
  }
];

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('hr-HR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Create blog card HTML
function createBlogCard(post) {
  return `
    <article class="blog-card reveal" data-post-id="${post.id}">
      <div class="blog-card-media">
        <img src="${post.image}" alt="${post.title}" loading="lazy" />
      </div>
      <div class="blog-card-body">
        <p class="blog-card-date">${formatDate(post.date)}</p>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
      </div>
    </article>
  `;
}

// Load blog posts
function loadBlogPosts() {
  console.log('loadBlogPosts function called');
  const blogGrid = document.getElementById('blogGrid');
  if (!blogGrid) {
    console.error('Blog grid element not found');
    return;
  }
  
  console.log('Found blog grid, loading posts...');
  const postsHTML = blogPosts.map(post => createBlogCard(post)).join('');
  console.log('Generated HTML:', postsHTML);
  blogGrid.innerHTML = postsHTML;
  console.log('Blog grid innerHTML after update:', blogGrid.innerHTML);
  
  // Add click handlers
  const blogCards = document.querySelectorAll('.blog-card');
  console.log('Found blog cards:', blogCards.length);
  
  blogCards.forEach(card => {
    card.addEventListener('click', () => {
      const postId = parseInt(card.dataset.postId);
      openBlogPost(postId);
    });
  });
  
  console.log('Blog posts loaded successfully');
}

// Open individual blog post
function openBlogPost(postId) {
  const post = blogPosts.find(p => p.id === postId);
  if (!post) return;
  
  // Create blog post page
  const postHTML = `
    <!doctype html>
    <html lang="hr">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${post.title} - Art of Fitness</title>
        <meta name="description" content="${post.excerpt}">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="blog.css" />
        <link rel="stylesheet" href="blog-post.css" />
      </head>
      <body>
        <!-- Header -->
        <header class="site-header">
          <div class="container header-inner">
            <div class="brand glitch" data-text="Art of fitness" style="font-size: 36px;">Art of Fitness</div>
            <nav class="nav">
              <button class="nav-toggle" aria-label="Otvori navigaciju" aria-expanded="false">
                <span></span><span></span><span></span>
              </button>
              <ul class="nav-list">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html#pricing">Cjenik</a></li>
                <li><a href="index.html#trainers">Treneri</a></li>
                <li><a href="index.html#faq">FAQ</a></li>
                <li><a href="blog.html" class="active">Blog</a></li>
                <li><a href="index.html#contact">Kontakt</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <!-- Blog Post -->
        <article class="blog-post">
          <div class="blog-post-hero">
            <img src="${post.image}" alt="${post.title}" class="blog-post-image" />
            <div class="blog-post-overlay">
              <div class="container">
                <p class="blog-post-date">${formatDate(post.date)}</p>
                <h1 class="blog-post-title">${post.title}</h1>
              </div>
            </div>
          </div>
          
          <div class="container">
            <div class="blog-post-content">
              ${post.content}
            </div>
            
            <div class="blog-post-footer">
              <div class="share-buttons">
                <h4>Podijeli članak:</h4>
                <div class="share-links">
                  <a href="#" class="share-btn" aria-label="Podijeli na Facebooku">FB</a>
                  <a href="#" class="share-btn" aria-label="Podijeli na Twitteru">TW</a>
                  <a href="#" class="share-btn" aria-label="Podijeli na LinkedInu">IN</a>
                </div>
              </div>
              
              <a href="blog.html" class="btn btn-outline">← Povratak na blog</a>
            </div>
          </div>
        </article>

        <!-- Footer -->
        <footer class="footer">
          <div class="container footer-grid">
            <div>
              <h3 class="footer-brand">Art of Fitness</h3>
              <p class="muted">Zagorska ul. 42A, 42220, Novi Marof</p>
              <p class="muted">info@artoffitness.hr · +385 91 123 4567</p>
            </div>
            <div>
              <h4>Linkovi</h4>
              <ul class="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html#pricing">Cjenik</a></li>
                <li><a href="index.html#trainers">Treneri</a></li>
                <li><a href="index.html#faq">FAQ</a></li>
                <li><a href="blog.html">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4>Društvene mreže</h4>
              <div class="socials">
                <a href="#" aria-label="Instagram" class="social">IG</a>
                <a href="#" aria-label="Facebook" class="social">FB</a>
                <a href="#" aria-label="TikTok" class="social">TT</a>
              </div>
            </div>
          </div>
          <div class="container copyright">
            <p class="muted">© <span id="year"></span> Art of Fitness. Sva prava pridržana.</p>
          </div>
        </footer>

        <!-- Scripts -->
        <script src="https://unpkg.com/@studio-freight/lenis@1.0.42/bundled/lenis.min.js"></script>
        <script src="scripts.js"></script>
      </body>
    </html>
  `;
  
  // Open in new window/tab
  const newWindow = window.open('', '_blank');
  newWindow.document.write(postHTML);
  newWindow.document.close();
}

// Initialize blog
document.addEventListener('DOMContentLoaded', () => {
  console.log('Blog.js loaded successfully');
  loadBlogPosts();
  
  // Set current year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Fallback: If DOMContentLoaded already fired, run immediately
if (document.readyState === 'loading') {
  // Still loading, wait for DOMContentLoaded
} else {
  // DOM already loaded, run immediately
  console.log('Blog.js running immediately (DOM already loaded)');
  loadBlogPosts();
  
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
