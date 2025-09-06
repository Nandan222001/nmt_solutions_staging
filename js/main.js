AOS.init({
  once: true,
  disable: 'phone',
  duration: 750,
  easing: 'ease-out-quart',
});

const carouselEl = document.querySelectorAll('.carousel');
if (carouselEl.length > 0) {
  const carousel = new Swiper('.carousel', {
    slidesPerView: 'auto',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    initialSlide: 1,
    spaceBetween: 24,
    autoplay: {
      delay: 7000,
    },
    navigation: {
      nextEl: '.carousel-next',
      prevEl: '.carousel-prev',
    },
  });
}

// Light switcher
const lightSwitches = document.querySelectorAll('.light-switch');
if (lightSwitches.length > 0) {
  lightSwitches.forEach((lightSwitch, i) => {
    if (localStorage.getItem('dark-mode') === 'true' || !('dark-mode' in localStorage)) {
      // eslint-disable-next-line no-param-reassign
      lightSwitch.checked = true;
    }
    lightSwitch.addEventListener('change', () => {
      const { checked } = lightSwitch;
      lightSwitches.forEach((el, n) => {
        if (n !== i) {
          // eslint-disable-next-line no-param-reassign
          el.checked = checked;
        }
      });
      if (lightSwitch.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', true);
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', false);
      }
    });
  });
}



   const canvas = document.getElementById("fluidCursor");
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2 };
    let blobs = [];

    // Create blobs
    for (let i = 0; i < 25; i++) {
      blobs.push({
        x: mouse.x,
        y: mouse.y,
        size: 120 - i * 4
      });
    }

    // Hide/show cursor + trail
    let hideTimeout;
    window.addEventListener("mousemove", e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Hide arrow, show neon trail
      document.body.classList.add("hide-cursor");

      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        // Show arrow again, trail fades out gradually
        document.body.classList.remove("hide-cursor");
      }, 400); // adjust delay before arrow returns
    });

function animate() {
  // Draw a transparent overlay instead of clearing completely
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; 
  ctx.globalCompositeOperation = "destination-in"; 
  ctx.fillRect(0, 0, width, height);
  ctx.globalCompositeOperation = "source-over";

  let prev = { x: mouse.x, y: mouse.y };
  blobs.forEach((b, i) => {
    b.x += (prev.x - b.x) * (0.15 - i * 0.002);
    b.y += (prev.y - b.y) * (0.15 - i * 0.002);
    prev = b;

    let gradient = ctx.createRadialGradient(
      b.x, b.y, b.size * 0.2,
      b.x, b.y, b.size
    );
    gradient.addColorStop(0, "rgba(5, 82, 141, 0.9)");
    gradient.addColorStop(0.5, "rgba(73, 133, 176, 0.6)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}


    animate();

    // Resize
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  