const isSearched = term => item =>
  !term || item.task.toLowerCase().includes(term.toLowerCase())

export { isSearched, }