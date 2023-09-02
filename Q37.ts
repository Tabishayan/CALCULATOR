function make_shirt(size: string = 'large', message: string = 'I love Plane Shirts'): void {
    console.log(`You've ordered a ${size}-sized shirt with the message: "${message}".`);
  }
  
  // Large shirt with default message
  make_shirt();
  
  // Medium shirt with default message
  make_shirt('medium');
  
  // Small shirt with custom message
  make_shirt('small', 'Hello, World!');
  