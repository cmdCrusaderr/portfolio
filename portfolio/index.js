//adding event listeners using js 
//to make the links more responsive
//update the links
function link_open(){
  window.open(url,'_blank')
}

const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const coffee = document.getElementById('coffee');

linkedin.addEventListener('click', function() {
  openLink(linkedin.href);
});

github.addEventListener('click', function() {
  openLink(github.href);
});

coffee.addEventListener('click', function() {
 openLink(coffeeButton.href);
});