const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

/* delete band.drums;
console.log(band.hasOwnProperty("drums")); // false

console.log(Object.keys(band)); // ["vocals", "guitar", "bass", "drums"]
console.log(Object.values(band)); // ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"]

for(let job in band){
    console.log(`On ${job} , its ${band[job]}!`); //job is the key
}
 */

//Destruction objects
/* const {vocals, guitar, bass, drums} = band;
console.log(guitar);
console.log(vocals);
 */
function sings({vocals}) {return `${vocals} sings!`};
console.log(sings(band));
