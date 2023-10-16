const {AssetFinder} = require('enkanetwork.js');

const finder = new AssetFinder();

/** options:
 * language: string -> optional.
 * English is the default language.
 * All in-game languages supported.
 */

function getCharacter(characterId) {
    const assets = finder.character(characterId).assets;
    const name = finder.character(characterId).name;
    console.log(assets, name);// Output: Hu Tao assets and name.
}

function getNameByHash(nameTextMapHash) {
    console.log(nameTextMapHash);
    const name = finder.hash(nameTextMapHash).value;
    console.log(name) // Output: Hu Tao (depends on the language)
}

getCharacter(10000046); // Hu Tao ID.
getNameByHash(1940919994); // Hu Tao name hash.
