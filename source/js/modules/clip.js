const textsClip = document.querySelectorAll('.accordion__description');

if(textsClip) {
  textsClip.forEach((textClip) => {
    const text = textClip.textContent;
    const textLength = textClip.textContent.length;
    if(textLength > 356) {
      textClip.textContent = `${text.slice(0,356)} ...`;
    }
  });
}
