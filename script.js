const title = document.getElementById("title");
const text = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");

const proposal = document.getElementById("proposal");
const yesBtn = document.getElementById("yesBtn");
const thinkBtn = document.getElementById("thinkBtn");
const thinkMessage = document.getElementById("thinkMessage");

const finalBox = document.getElementById("final");
const flowersBox = document.getElementById("flowers");

let step = 0;
let thinkCount = 0;
let yesScale = 1;

const texts = [
  {
    title: "Azra, bunu normal mesajla söylemek istemedim.",
    text: "Çünkü bu benim için sıradan bir şey değil."
  },
  {
    title: "Seninle konuşmak bana iyi geliyor.",
    text: "Bazen küçük bir mesajın bile günümü güzelleştirebiliyor."
  },
  {
    title: "Bunu söylemeye biraz çekindim.",
    text: "Ama içimde tutmak da istemedim."
  },
  {
    title: "O yüzden direkt söylüyorum...",
    text: "Hazırsan son kısmı açalım."
  }
];

const thinkMessages = [
  "Emin misin? Bir kere daha düşün bence 🌸",
  "Bak bu sayfa biraz umutlu açıldı...",
  "Tamam tamam, seni zorlamıyorum 🤍",
  "Ama kalbim şu an baya heyecanlandı...",
  "Peki... bu buton birazdan pes edecek gibi duruyor 😅"
];

nextBtn.addEventListener("click", () => {
  if (step < texts.length) {
    title.classList.remove("fade");
    text.classList.remove("fade");

    setTimeout(() => {
      title.textContent = texts[step].title;
      text.textContent = texts[step].text;

      title.classList.add("fade");
      text.classList.add("fade");

      step++;

      if (step === texts.length) {
        nextBtn.textContent = "Son kısmı aç 💗";
      }
    }, 100);

    return;
  }

  title.style.display = "none";
  text.style.display = "none";
  nextBtn.style.display = "none";

  proposal.classList.remove("hidden");
  proposal.classList.add("fade");
});

yesBtn.addEventListener("click", () => {
  proposal.classList.add("hidden");

  finalBox.classList.remove("hidden");
  finalBox.classList.add("fade");

  createHearts();
});

thinkBtn.addEventListener("click", () => {
  thinkMessage.textContent = thinkMessages[thinkCount] || "Cevabını rahatça söyleyebilirsin 🤍";

  thinkMessage.classList.remove("fade");

  setTimeout(() => {
    thinkMessage.classList.add("fade");
  }, 50);

  yesScale += 0.12;
  yesBtn.style.transform = `scale(${yesScale})`;

  thinkBtn.style.transform = `translate(${randomMove()}px, ${randomMove()}px)`;

  createMiniFlowers();

  thinkCount++;

  if (thinkCount >= thinkMessages.length) {
    thinkBtn.classList.add("pop-away");

    setTimeout(() => {
      thinkBtn.style.display = "none";
      thinkMessage.textContent = "Şaka bir yana, cevabın ne olursa olsun saygım değişmez Azra 🤍";
      yesBtn.textContent = "Ben de isterim 💗";
      createHearts();
    }, 550);
  }
});

function randomMove() {
  return Math.floor(Math.random() * 30) - 15;
}

function createFlower() {
  const flowers = ["🌸", "🌺", "🌷", "💮", "🌹"];

  const flower = document.createElement("div");

  flower.className = "flower";
  flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.fontSize = 18 + Math.random() * 24 + "px";
  flower.style.animationDuration = 4 + Math.random() * 5 + "s";
  flower.style.opacity = 0.5 + Math.random() * 0.5;

  flowersBox.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 9000);
}

function createMiniFlowers() {
  for (let i = 0; i < 8; i++) {
    setTimeout(createFlower, i * 80);
  }
}

function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 18 + Math.random() * 30 + "px";
    heart.style.animationDuration = 2 + Math.random() * 1.5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3500);
  }
}

setInterval(createFlower, 350);
