const saveAndRender = (renderer, fileName, data) => {
  renderer(data)
  localStorage.setItem(fileName, JSON.stringify(data));
}

export { saveAndRender }