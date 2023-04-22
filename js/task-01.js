const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.firstElementChild.textContent;
  const count = item.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
});