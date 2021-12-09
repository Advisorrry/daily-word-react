


export const useMobileAlert = () => {
    if (localStorage.getItem('mobileAlert') !== '1') {
      alert(`Сайт адаптирован только под мобильное разрешение.
            Чтобы его включить нажмите: F12 -> Shift + Ctrl + m `)
    }
    localStorage.setItem('mobileAlert', '1')
  }
