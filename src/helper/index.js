const saveAndRender = (renderer, fileName, data) => {
  renderer(data)
  localStorage.setItem(fileName, JSON.stringify(data));
}

const isSearched = term => item =>
  !term || item.task.toLowerCase().includes(term.toLowerCase())

export {
  saveAndRender,
  isSearched,
}