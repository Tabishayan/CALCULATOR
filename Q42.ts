function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
      console.log(magician);
    });
  }
  
  const magicianNames: string[] = ['Moin', 'Rehan',];
  
  make_great(magicianNames);
  show_magicians(magicianNames);
  