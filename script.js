// Efecto simple de aparición al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
  const productos = document.querySelectorAll('.producto');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  productos.forEach(producto => {
    producto.style.opacity = 0;
    producto.style.transform = "translateY(20px)";
    producto.style.transition = "all 0.6s ease";
    observer.observe(producto);
  });
});