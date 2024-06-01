//       🚀 Day 14 Challenge: Start Coding! 🚀

//Question 40
//Album: Create objects for music albums.

function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title, tracks };
    return album;
  }
  
  console.log(make_album("Artist One", "The First Album"));
  console.log(make_album("Artist Two", "The Second Album"));
  console.log(make_album("Artist Three", "The Third Album", 12));


//Question 41
//Magicians: Display magician names from an array.

let magicians: string[] = ["Bruce", "Clark", "Peter", "Logan", "Wade"];

function show_magic(Magicians:string[]) {
    Magicians.forEach(Magician => {
        console.log(Magician);
    });
}
show_magic(magicians);


//Question 42
//Great Magicians: Add "the Great" to magician names.
function the_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

the_great(magicians); // Modifies the original array
show_magic(magicians); // Shows modified names of magician

