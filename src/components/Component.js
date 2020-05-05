export const Paragraph = ( text) => {
  // console.log(text);
  const main = document.getElementsByTagName("main")[0];
  console.log(main);
  const createdParagraph = document.createElement("p");
  const paragraphInDOM = main.appendChild(createdParagraph);

  paragraphInDOM.innerText = text;

  return paragraphInDOM;
};
