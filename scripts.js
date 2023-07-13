const helloText = document.getElementById('helloText');
const imageContainer = document.querySelector('.image-container');
const wipe = document.querySelector('.wipe');

gsap.set(helloText, { perspective: 800, scale: 0.2, rotationX: -90 });
gsap.set(imageContainer, { opacity: 0 });
gsap.set(wipe, { height: '100vh' });

gsap.to([helloText, imageContainer], {
  duration: 1,
  opacity: 1,
  scale: 1,
  rotationX: 0,
  ease: 'elastic.out(1, 0.5)',
  delay: 0.5
});

gsap.to(wipe, {
  duration: 0.9,
  height: 0,
  ease: 'power2.inOut',
  oncomplete: animateLetters,
});


function animateLetters() {
  const letters = helloText.textContent.split('');
  helloText.textContent = '';

  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.display = 'inline-block';
    span.style.transformOrigin = 'center center';
    span.style.transformStyle = 'preserve-3d';
    span.style.opacity = 0;

    gsap.fromTo(
      span,
      {
        opacity: 0,
        scale: 0,
        rotationY: gsap.utils.random(-90, 90),
        rotationX: gsap.utils.random(-90, 90),
        rotationZ: gsap.utils.random(-180, 180),
        transformOrigin: 'center center'
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        rotationZ: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)',
        delay: index * 0.1
      }
    );

    helloText.appendChild(span);
  });
}





