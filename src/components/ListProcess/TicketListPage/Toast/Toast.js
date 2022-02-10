let removeToast;

const toast = string => {
  const toast2 = document.getElementById('toast2');

  if (toast2.classList.contains('reveal')) {
    clearTimeout(removeToast);
    removeToast = setTimeout(function () {
      document.getElementById('toast2').classList.remove('reveal');
    }, 1000);
  } else {
    removeToast = setTimeout(function () {
      document.getElementById('toast2').classList.remove('reveal');
    }, 1000);
  }

  toast2.classList.add('reveal');
  toast2.innerText = string;
};

export default toast;
