function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
  
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push(`the Great ${magicians[i]}`);
    }
  
    return greatMagicians;
  }
  
  function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
      console.log(magician);
    });
  }
  
  const magicianNames: string[] = ['Moin', 'Rehan',];
  
  const greatMagicianNames: string[] = make_great(magicianNames);
  
  console.log("Original Magicians:");
  show_magicians(magicianNames);
  
  console.log("\nGreat Magicians:");
  show_magicians(greatMagicianNames);
  