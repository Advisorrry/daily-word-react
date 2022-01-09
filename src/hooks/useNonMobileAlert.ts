export const useNonMobileAlert = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return
  } else {
    if (localStorage.getItem('mobileAlert') !== '1') {
      alert(`Сайт адаптирован только под мобильное разрешение.
            Чтобы его включить нажмите: F12 -> Shift + Ctrl + m `)
    }
    localStorage.setItem('mobileAlert', '1')
  }
}
