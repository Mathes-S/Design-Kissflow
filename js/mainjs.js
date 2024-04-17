
  document.addEventListener('mousemove', function(e) {
    let width = window.innerWidth / 2;
    let height = window.innerHeight / 2;
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let depth1 = `${50 - (mouseX - width) * 0.05}% ${50 - (mouseY - height) * 0.1}%`;
    let depth2 = `${50 - (mouseX - width) * 0.02}% ${50 - (mouseY - height) * 0.02}%`;
    let container = document.getElementById('container');
    
    // Reduced sensitivity by adjusting the multiplier for rotation degrees
    container.style.transform = `translate(-50%, -50%) rotateX(${(mouseY - height) * 0.04}deg) rotateY(${(mouseX - width) * -0.02}deg)`;
  });


  const container = document.getElementById('container');
  const customCursor = document.getElementById('customCursor');

  container.addEventListener('mousemove', e => {
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; // x position within the element.
    const mouseY = e.clientY - rect.top;  // y position within the element.
    customCursor.style.left = `${mouseX}px`;
    customCursor.style.top = `${mouseY}px`;
    customCursor.style.display = 'block'; // Show custom cursor
  });

  container.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none'; // Hide custom cursor
  });

  $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



gsap.registerPlugin(ScrollTrigger)

        const splitTypes = document.querySelectorAll('.reveal-type')

        splitTypes.forEach((char,i) => {


            const text = new SplitType(char, { types: 'chars'})

            gsap.fromTo(text.chars, 
                {
                    scaleY: 0,
                    transformOrgin: 'top'
                },
                {
                    scaleY:1,
                    Y: 5,
                    duration: 0.3,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: char,
                        start: 'top bottom',
                        end: 'top 40%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
            })
        })

