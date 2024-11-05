function hogwartsCodeCipher(message, shift) {
  let decipheredMessage = '';

  for (let i = 0; i < message.length; i++) {
    let symbol =  message[i];
    let asciiCod = symbol.charCodeAt(0);
    let decipheredAsciiCode = asciiCod - shift;

    if (decipheredAsciiCode <= 31) {
      decipheredAsciiCode = 127 - 32 + decipheredAsciiCode; // 127 - (shift - (asciiCod - 31))
    } 

    let decipheredSymbol = String.fromCharCode(decipheredAsciiCode);

    decipheredMessage += decipheredSymbol;
  }

  console.log(decipheredMessage);
}

hogwartsCodeCipher('Uifsf!jt!b!tfdsfu"', 1); // There is a secret!
hogwartsCodeCipher('vvhhdkdvkkdvvhh$', 3); // sseeahashhassee!
hogwartsCodeCipher('Ibssz!Qpuufs', 1); // Harry Potter
hogwartsCodeCipher(`b9z'9z9!,~z.9}~0~&)*~,:`, 25); // I am a great developer!

// function encryptionProgram(message, shift) {
//   let encryptedMessage = '';

//   for (let i = 0; i < message.length; i++) {
//     let symbol =  message[i];
//     let asciiCod = symbol.charCodeAt(0);
//     let encryptedAsciiCode = asciiCod + shift;
   
//     if (encryptedAsciiCode >= 127) {
//       encryptedAsciiCode = encryptedAsciiCode - 127 + 32;
//     } 

//     let encryptedSymbol = String.fromCharCode(encryptedAsciiCode);

//     encryptedMessage += encryptedSymbol;
//   }

//   console.log(encryptedMessage);
// }
