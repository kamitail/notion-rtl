const changeTextDir = (block, align) =>
  [...block.getElementsByClassName("notranslate")].forEach(
    (x) => x.style.textAlign !== "" && (x.style.textAlign = align)
  );

setInterval(() => {
  if (document.getElementsByClassName("layout")[0] === undefined) return;

  document.getElementsByClassName("layout")[0].dir = "rtl";

  document.getElementsByClassName("layout")[0]?.dir &&
    changeTextDir(document.getElementsByClassName("layout")[0], "right");

  [...document.getElementsByClassName("notion-code-block")].forEach((block) => {
    block.dir = "ltr";
    changeTextDir(block, "left");
  });
}, 500);
