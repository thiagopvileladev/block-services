/* =========================================================
   CONFIGURAÇÃO — troque pelo SEU número de WhatsApp
   Formato: código do país + DDD + número, só dígitos.
   Ex.: 55 11 98765-4321  ->  "5511987654321"
   ========================================================= */
const WHATSAPP_NUMBER = "5561983791418";

/* =========================================================
   SERVIÇOS — edite preços, nomes e descrições aqui
   block: textura do ícone (grass, iron, gold, diamond, stone,
          sand, wood, obsidian, cane, bamboo, xp, creeper,
          enchant, beacon, sculk, eye, chest, planks, brick)
   ========================================================= */
const SERVICES = [
  // ---- Farms
  { cat: "Farms", name: "Farm de ferro", price: 130, block: "iron", desc: "Farm automática de ferro com golems. Ferro infinito pro seu mundo.", hot: true },
  { cat: "Farms", name: "Farm de ouro", price: 165, block: "gold", desc: "Farm de ouro de alta produção. Ouro e XP de sobra." },
  { cat: "Farms", name: "Farm de raids", price: 175, block: "emerald", desc: "Farm de raids: esmeraldas, totens e muito loot automático.", hot: true },
  { cat: "Farms", name: "Farm de XP / mobs", price: 90, block: "xp", desc: "Farm de mobs com drops e XP para encantar à vontade." },
  { cat: "Farms", name: "Farm de XP", price: 65, block: "xp", desc: "Farm de XP compacta e eficiente para subir de nível rápido." },
  { cat: "Farms", name: "Farm de creeper", price: 85, block: "creeper", desc: "Pólvora infinita para foguetes, TNT e muito mais." },
  { cat: "Farms", name: "Farm de cana-de-açúcar", price: 40, block: "cane", desc: "Farm automática de cana. Papel e açúcar garantidos." },
  { cat: "Farms", name: "Farm de bambu", price: 40, block: "bamboo", desc: "Farm automática de bambu, ótima como combustível." },

  // ---- Mineração & Coleta
  { cat: "Recursos", name: "Mineração de diamantes - 10 DIAMANTES", price: 15, block: "diamond", desc: "10 diamantes minerados e entregues no seu baú." },
  { cat: "Recursos", name: "Mineração de diamantes - 20 DIAMANTES", price: 25, block: "diamond", desc: "20 diamantes minerados e entregues no seu baú.", hot: true },
  { cat: "Recursos", name: "Mineração de pedra - 35 PACKS", price: 15, block: "stone", desc: "35 packs de pedra para suas construções." },
  { cat: "Recursos", name: "Mineração de pedra - 70 PACKS", price: 20, block: "stone", desc: "70 packs de pedra — o melhor custo-benefício." },
  { cat: "Recursos", name: "Coleta de areia - 35 PACKS", price: 20, block: "sand", desc: "35 packs de areia, perfeito para vidro." },
  { cat: "Recursos", name: "Coleta de areia - 70 PACKS", price: 30, block: "sand", desc: "70 packs de areia para projetos grandes." },
  { cat: "Recursos", name: "Coleta de madeira - 35 PACKS de tronco", price: 50, block: "wood", desc: "35 packs de troncos coletados para você." },
  { cat: "Recursos", name: "Coleta de madeira - 70 PACKS de tronco", price: 90, block: "wood", desc: "70 packs de troncos para construir sem limites." },
  { cat: "Recursos", name: "Coleta de obsidiana - 10 PACKS", price: 25, block: "obsidian", desc: "10 packs de obsidiana para portais e construções." },
  { cat: "Recursos", name: "Coleta de obsidiana - 20 PACKS", price: 45, block: "obsidian", desc: "20 packs de obsidiana para projetos grandes." },

  // ---- Exploração
  { cat: "Exploração", name: "Encontrar uma Ancient City", price: 18, block: "sculk", desc: "Localizo uma Ancient City no seu mundo e te passo as coordenadas." },
  { cat: "Exploração", name: "Encontrar uma Stronghold", price: 18, block: "eye", desc: "Encontro a Stronghold com o portal do End pra você." },
  { cat: "Exploração", name: "Conseguir 1 Beacon completo", price: 60, block: "beacon", desc: "Beacon montado e ativo, com pirâmide completa." },

  // ---- Construções
  { cat: "Construções", name: "Casa inicial", price: 20, block: "planks", desc: "Casa aconchegante pra começar bem o seu survival." },
  { cat: "Construções", name: "Casa Média", price: 50, block: "brick", desc: "Casa espaçosa e bonita, com quartos e área de trabalho." },
  { cat: "Construções", name: "Casa Grande", price: 110, block: "grass", desc: "Casa grande e detalhada pra impressionar todo mundo.", hot: true },

  // ---- Extras
  { cat: "Extras", name: "Encantar armadura completa", price: 20, block: "enchant", desc: "Armadura completa com os melhores encantamentos." },
  { cat: "Extras", name: "Organizar inventário e baús", price: 20, block: "chest", desc: "Seus baús organizados e etiquetados. Adeus bagunça!" },
];

/* =========================================================
   Pixel-art textures (geradas por código, 8x8)
   ========================================================= */
const PALETTES = {
  grass:    { base: ["#5a3e22", "#6b4a2a", "#4d3420", "#7a5533"], top: ["#5bbd3c", "#4aa52f", "#6fd24a", "#3e8f27"], topRows: 3 },
  iron:     { base: ["#8a8a8a", "#7a7a7a", "#949494", "#6e6e6e"], ore: ["#e3c2a8", "#d8af8f", "#f0d8c4"] },
  gold:     { base: ["#8a8a8a", "#7a7a7a", "#949494", "#6e6e6e"], ore: ["#ffd83a", "#f2c31b", "#fff27a"] },
  diamond:  { base: ["#8a8a8a", "#7a7a7a", "#949494", "#6e6e6e"], ore: ["#5ef0e6", "#33d1c8", "#b4fff9"] },
  emerald:  { base: ["#8a8a8a", "#7a7a7a", "#949494", "#6e6e6e"], ore: ["#2fe06a", "#17b84e", "#8dffb2"] },
  stone:    { base: ["#8a8a8a", "#7a7a7a", "#949494", "#6e6e6e", "#a0a0a0"] },
  sand:     { base: ["#e0d39a", "#d8c98b", "#ebdfaa", "#cfbf7f"] },
  wood:     { stripes: ["#6b5232", "#5a4428", "#7b6040", "#4c3a22"] },
  planks:   { planks: ["#b8945f", "#a8844f", "#c7a26b", "#97763f"] },
  obsidian: { base: ["#140c1f", "#1d1230", "#0e0817", "#2c1d4a", "#3b2463"] },
  cane:     { base: ["#5a9a2c", "#6fb83b", "#8fd65a", "#4a8424"], vertical: true },
  bamboo:   { base: ["#7fae3a", "#94c84a", "#6a9630", "#b1db66"], vertical: true },
  xp:       { orb: ["#c6ff3a", "#8de21b", "#f1ff9e", "#5fae0e"], bg: ["#1b3a12", "#22471a"] },
  creeper:  { creeper: true },
  enchant:  { base: ["#5a2fa8", "#6e3bc9", "#8a5cf0", "#3d1f7a", "#b993ff"] },
  beacon:   { beacon: true },
  sculk:    { base: ["#0b2a33", "#0f3540", "#06191f", "#145060"], ore: ["#29dfeb", "#59f2fa"] },
  eye:      { eye: true },
  chest:    { chest: true },
  brick:    { brick: true },
};

function rng(seed) {
  let s = 0;
  for (const c of seed) s = (s * 31 + c.charCodeAt(0)) >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

function blockSVG(type, seed = type) {
  const p = PALETTES[type] || PALETTES.stone;
  const r = rng(seed);
  const pick = (arr) => arr[Math.floor(r() * arr.length)];
  const px = [];
  const N = 8;
  const set = (x, y, c) => (px[y * N + x] = c);

  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    let c;
    if (p.top) c = y < p.topRows || (y === p.topRows && r() > 0.5) ? pick(p.top) : pick(p.base);
    else if (p.stripes) c = p.stripes[(x + (r() > 0.8 ? 1 : 0)) % p.stripes.length];
    else if (p.planks) c = y % 4 === 3 ? "#7a5c30" : (x === (y < 4 ? 5 : 2) ? "#8a6a38" : pick(p.planks));
    else if (p.vertical) c = x % 3 === 2 ? "#3c6b1c" : pick(p.base);
    else if (p.bg) c = pick(p.bg);
    else if (p.base) c = pick(p.base);
    else c = "#555";
    set(x, y, c);
  }

  if (p.ore) {
    const spots = 5 + Math.floor(r() * 3);
    for (let i = 0; i < spots; i++) {
      const x = Math.floor(r() * 7), y = Math.floor(r() * 7);
      set(x, y, pick(p.ore)); if (r() > 0.4) set(x + 1, y, pick(p.ore)); if (r() > 0.5) set(x, y + 1, pick(p.ore));
    }
  }
  if (p.orb) {
    [[3,2],[4,2],[2,3],[3,3],[4,3],[5,3],[2,4],[3,4],[4,4],[5,4],[3,5],[4,5]].forEach(([x,y]) => set(x, y, pick(p.orb)));
    set(3, 3, "#ffffff");
  }
  if (p.creeper) {
    for (let i = 0; i < 64; i++) px[i] = pick(["#5ec24a", "#4aa83a", "#72d65e", "#3d9230", "#8ee07a"]);
    const k = "#0b1a08";
    [[1,2],[2,2],[1,3],[2,3],[5,2],[6,2],[5,3],[6,3],[3,4],[4,4],[2,5],[3,5],[4,5],[5,5],[2,6],[5,6]].forEach(([x,y]) => set(x, y, k));
  }
  if (p.beacon) {
    for (let i = 0; i < 64; i++) px[i] = pick(["#b9f4f2", "#9fe8e6", "#d6fffd"]);
    for (let y = 2; y < 6; y++) for (let x = 2; x < 6; x++) set(x, y, pick(["#3fe0d8", "#71f0ea", "#ffffff"]));
    for (let x = 0; x < 8; x++) set(x, 7, "#1d1230");
  }
  if (p.eye) {
    for (let i = 0; i < 64; i++) px[i] = pick(["#2a5e4e", "#1f4a3c", "#33705c"]);
    [[2,2],[3,2],[4,2],[5,2],[1,3],[2,3],[5,3],[6,3],[1,4],[2,4],[5,4],[6,4],[2,5],[3,5],[4,5],[5,5]].forEach(([x,y]) => set(x, y, "#7fd6a8"));
    [[3,3],[4,3],[3,4],[4,4]].forEach(([x,y]) => set(x, y, "#0a1a14"));
  }
  if (p.chest) {
    for (let i = 0; i < 64; i++) px[i] = pick(["#a8742e", "#b9833a", "#94652a"]);
    for (let x = 0; x < 8; x++) { set(x, 0, "#4a3016"); set(x, 3, "#4a3016"); set(x, 7, "#4a3016"); }
    for (let y = 0; y < 8; y++) { set(0, y, "#4a3016"); set(7, y, "#4a3016"); }
    set(3, 3, "#d8d8d8"); set(4, 3, "#d8d8d8"); set(3, 4, "#a0a0a0"); set(4, 4, "#a0a0a0");
  }
  if (p.brick) {
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
      const mortar = y % 2 === 1 || (x === ((Math.floor(y / 2) % 2) ? 1 : 5));
      set(x, y, mortar ? "#c9bfb5" : pick(["#9c4a37", "#8a3f2e", "#b0573f"]));
    }
  }

  let rects = "";
  px.forEach((c, i) => (rects += `<rect x="${i % N}" y="${Math.floor(i / N)}" width="1.02" height="1.02" fill="${c}"/>`));
  return `<svg viewBox="0 0 8 8" shape-rendering="crispEdges" preserveAspectRatio="none">${rects}</svg>`;
}

function svgDataURI(svg) {
  return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" '))}")`;
}

/* =========================================================
   WhatsApp helpers
   ========================================================= */
const BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

function wppLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function serviceMessage(s) {
  return `Olá! Vim pelo site e quero contratar:\n\n*${s.name}*\nValor: ${BRL.format(s.price)}\n\nPodemos combinar os detalhes?`;
}

/* =========================================================
   Render
   ========================================================= */
const grid = document.getElementById("grid");
const filtersEl = document.getElementById("filters");
const searchEl = document.getElementById("search");
const emptyEl = document.getElementById("empty");
let activeCat = "Todos";

const ICON_PATHS = {
  Todos: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  Farms: '<path d="M12 21V10"/><path d="M12 10c0-3 2-5 5-5 0 3-2 5-5 5z"/><path d="M12 14c0-3-2-5-5-5 0 3 2 5 5 5z"/><path d="M5 21h14"/>',
  Recursos: '<path d="M14.5 4.5c2.5-1 5 0 6 1-3 0-6 1.5-8 3.5"/><path d="M14.5 4.5 4 15l-1 4 4-1L17.5 7.5"/>',
  Exploração: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
  Construções: '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
  Extras: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
};
const icon = (k) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON_PATHS[k] || ""}</svg>`;
const CAT_ICONS = Object.fromEntries(Object.keys(ICON_PATHS).map((k) => [k, icon(k)]));

function renderFilters() {
  const cats = ["Todos", ...new Set(SERVICES.map((s) => s.cat))];
  filtersEl.innerHTML = cats.map((c) => {
    const n = c === "Todos" ? SERVICES.length : SERVICES.filter((s) => s.cat === c).length;
    return `<button class="chip ${c === activeCat ? "active" : ""}" data-cat="${c}">${CAT_ICONS[c] || ""}${c}<span class="count">${n}</span></button>`;
  }).join("");
}

function normalize(t) {
  return t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function renderGrid() {
  const q = normalize(searchEl.value.trim());
  const list = SERVICES.filter((s) =>
    (activeCat === "Todos" || s.cat === activeCat) &&
    (!q || normalize(s.name + " " + s.desc + " " + s.cat).includes(q))
  );

  grid.innerHTML = list.map((s, i) => `
    <a class="card" href="${wppLink(serviceMessage(s))}" target="_blank" rel="noopener"
       data-name="${s.name}" style="animation-delay:${Math.min(i * 40, 600)}ms">
      <div class="card-top">
        <div class="card-icon">${blockSVG(s.block, s.name)}</div>
        <span class="tag">${CAT_ICONS[s.cat] || ""}${s.cat}</span>
      </div>
      <h3>${s.name}${s.hot ? '<span class="badge">Mais pedido</span>' : ""}</h3>
      <p class="desc">${s.desc}</p>
      <div class="card-bottom">
        <div class="price"><small>por apenas</small><strong>${BRL.format(s.price)}</strong></div>
        <span class="buy"><svg viewBox="0 0 24 24"><use href="#ico-wpp"/></svg>Pedir</span>
      </div>
    </a>`).join("") + `
    <a class="card card-custom" href="${wppLink("Olá! Vim pelo site e quero um serviço personalizado que não está na lista. Preciso de:")}"
       target="_blank" rel="noopener" data-name="Serviço personalizado">
      <div class="card-top">
        <div class="card-icon custom-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></div>
        <span class="tag">Sob medida</span>
      </div>
      <h3>Serviço personalizado</h3>
      <p class="desc">Precisa de algo que não está na lista? Me conta o que você quer no WhatsApp e eu monto um orçamento sob medida.</p>
      <div class="card-bottom">
        <div class="price"><small>valor</small><strong>A combinar</strong></div>
        <span class="buy"><svg viewBox="0 0 24 24"><use href="#ico-wpp"/></svg>Falar</span>
      </div>
    </a>`;

  emptyEl.hidden = list.length > 0;
}

filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  activeCat = btn.dataset.cat;
  renderFilters();
  renderGrid();
});
searchEl.addEventListener("input", renderGrid);

// spotlight follow effect
grid.addEventListener("mousemove", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${e.clientX - r.left}px`);
  card.style.setProperty("--my", `${e.clientY - r.top}px`);
});

// toast on click
const toast = document.getElementById("toast");
let toastTimer;
grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card) return;
  toast.textContent = `Abrindo WhatsApp: ${card.dataset.name}`;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
});

/* =========================================================
   Static pieces
   ========================================================= */
document.querySelectorAll("[data-wpp]").forEach((a) => (a.href = wppLink(a.dataset.wpp)));
document.querySelectorAll("[data-block]").forEach((el) => (el.innerHTML = blockSVG(el.dataset.block, el.dataset.block + "x")));

// hero cube faces
const grassTop = blockSVG("grass", "cube");
const topOnly = svgDataURI(blockSVG("grass", "cube-top").replace(/fill="#(5a3e22|6b4a2a|4d3420|7a5533)"/g, 'fill="#5bbd3c"'));
document.querySelector(".cube .top").style.backgroundImage = topOnly;
document.querySelector(".cube .left").style.backgroundImage = svgDataURI(grassTop);
document.querySelector(".cube .right").style.backgroundImage = svgDataURI(blockSVG("grass", "cube-r"));

document.getElementById("stat-count").textContent = SERVICES.length;
document.getElementById("year").textContent = new Date().getFullYear();

// reveal on scroll
document.querySelectorAll(".section-head, .step, .faq, .cta-box").forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* =========================================================
   Background: floating pixel particles
   ========================================================= */
(function particles() {
  const c = document.getElementById("bg-particles");
  const ctx = c.getContext("2d");
  const colors = ["#5ee35e", "#3ba7ff", "#ffcc33", "#5ef0e6", "#8a5cf0"];
  let W, H, parts;
  function resize() {
    W = c.width = innerWidth; H = c.height = innerHeight;
    parts = Array.from({ length: Math.min(50, Math.floor(W / 30)) }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      s: 2 + Math.floor(Math.random() * 4),
      v: 0.15 + Math.random() * 0.4,
      c: colors[Math.floor(Math.random() * colors.length)],
      a: 0.15 + Math.random() * 0.35,
    }));
  }
  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (const p of parts) {
      p.y -= p.v; if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
      ctx.globalAlpha = p.a; ctx.fillStyle = p.c;
      ctx.fillRect(Math.round(p.x), Math.round(p.y), p.s, p.s);
    }
    requestAnimationFrame(tick);
  }
  addEventListener("resize", resize);
  resize();
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) tick();
})();

/* =========================================================
   Tema claro / escuro
   ========================================================= */
document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

renderFilters();
renderGrid();
