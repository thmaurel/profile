// Tabs
const tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    })
    tab.classList.add('active');
    document.querySelectorAll('.swap-content').forEach((cnt) => {
      cnt.classList.add('d-none')
    })
    document.getElementById(tab.dataset.target).classList.remove('d-none');
  })
})
