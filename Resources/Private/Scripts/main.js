const initializeDataToggle = () => {
  const dataToggles = document.querySelectorAll('[data-toggle]');
  if (!dataToggles) return;

  dataToggles.forEach(dataToggle => {
    dataToggle.addEventListener('click', () => {
      const target = document.querySelector(`[data-identifier=${dataToggle.dataset.toggle}]`);
      if (!target) return;
      target.classList.toggle('is-active');
    });
  });
};

const initializeDataClose = () => {
  const dataClosers = document.querySelectorAll('[data-close]');
  if (!dataClosers) return;

  dataClosers.forEach(dataCloser => {
    dataCloser.addEventListener('click', () => {
      dataCloser.parentElement.remove();
    });
  });
};

const initializeDataImages = () => {
  const dataImages = document.querySelectorAll('[data-image]');
  if (!dataImages) return;

  dataImages.forEach(dataImage => {
    dataImage.style.backgroundImage = `url(${dataImage.dataset.image})`;
  });
};

feather.replace();
initializeDataImages();
initializeDataToggle();
initializeDataClose();

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


if (document.querySelector('#disqus_thread') && document.querySelector('#disqus_thread').dataset.identifier && document.querySelector('#disqus_thread').dataset.embed) {
  var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = document.querySelector('#disqus_thread').dataset.identifier;
  };
  (function () {
    var d = document, s = d.createElement('script');
    s.src = document.querySelector('#disqus_thread').dataset.embed;
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
}
