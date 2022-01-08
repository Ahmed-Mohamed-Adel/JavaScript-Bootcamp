let theTitle = "Elzero",
  theDesc = "Elzero Web School",
  theDate = 25 / 10;

let content = `
<div class="card">
<h3>Hello ${theTitle}</h3>
<p>${theDesc}</p>
<span>${theDate}</span>
</div>`;

document.write(content.repeat(4));
