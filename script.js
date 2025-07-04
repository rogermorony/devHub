function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add a img light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}

// Função para abrir imagem no lightbox
document.querySelectorAll(".cert-grid img").forEach((img) => {
  img.addEventListener("click", () => {
    const lightbox = document.getElementById("lightbox")
    const lightboxImg = lightbox.querySelector("img")
    lightboxImg.src = img.src
    lightbox.style.display = "flex"
  })
})

function closeLightbox() {
  const lightbox = document.getElementById("lightbox")
  lightbox.style.display = "none"
}
