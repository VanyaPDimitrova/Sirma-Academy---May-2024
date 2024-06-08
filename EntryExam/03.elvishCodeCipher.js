function deciphersMessage(message, shift) {
  let decryptedMessage = '';

  for (let i = 0; i < message.length; i++) {
    let symbol =  message[i];
    let asciiCod = symbol.charCodeAt(0);
    let decryptedSymbol = String.fromCharCode(asciiCod - shift);

    decryptedMessage += decryptedSymbol;
  }

  console.log(decryptedMessage);
}

deciphersMessage('Uifsf!jt!b!tfdsfu"', 1);
deciphersMessage('Wkurz#lw#lq#wkh#iluh$', 3);
deciphersMessage('Fwfltws', 5);
