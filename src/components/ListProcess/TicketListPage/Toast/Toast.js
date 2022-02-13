let removeToast;

const toast = (string, time = 1000) => {
  const toast2 = document.getElementById('toast2');

  if (toast2.classList.contains('reveal')) {
    clearTimeout(removeToast);
    removeToast = setTimeout(function () {
      document.getElementById('toast2').classList.remove('reveal');
    }, time);
  } else {
    removeToast = setTimeout(function () {
      document.getElementById('toast2').classList.remove('reveal');
    }, time);
  }

  toast2.classList.add('reveal');
  toast2.innerText = string;
};

export default toast;
