import "./style.scss"
import { initTimer } from "./counter"
// Установка даты, до которой считаем таймер

document.addEventListener("DOMContentLoaded", () => {
  initTimer()

  const elems = document.querySelectorAll(".hidden")

  elems.forEach((elem) => {
    document.addEventListener("scroll", () => {
      if (elem.getBoundingClientRect().top  < window.outerHeight)
        elem.classList.add("shown")
      else
        elem.classList.remove("shown")
    })
  })
})
