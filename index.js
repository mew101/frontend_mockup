
document.querySelectorAll('.card').forEach((e) => {
  e.addEventListener("mouseover", function () {
      e.classList.remove("hidden-text")
  })
  e.addEventListener("mouseout", function () {
      e.classList.add("hidden-text")
  })
})


