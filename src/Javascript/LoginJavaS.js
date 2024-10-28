export function handleMouseMove(e, image) {
    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
  
    //
    const rotateX = ((y - centerY) / centerY) * 10; // Tilt vertically
    const rotateY = ((centerX - x) / centerX) * 10; // Tilt horizontally
  
    // Apply rotation transform
    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
  
  export function handleMouseLeave(image) {
    // Reset the transform on mouse leave
    image.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }
  