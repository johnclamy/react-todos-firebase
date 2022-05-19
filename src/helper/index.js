const getIndexOf = (list, itemId) =>
  list.findIndex((item) => item.id === itemId);

const getListItem = (list, itemIndex) =>
  Object.assign({}, list[itemIndex])

const getList = list => Object.assign([], list)

const replaceItemFrom = (list, itemIndex, item) =>
  list.splice(itemIndex, 1, item);

const removeItemFrom = (list, itemIndex) => list.splice(itemIndex, 1) 

export {
  getIndexOf,
  getListItem,
  getList,
  replaceItemFrom,
  removeItemFrom,
};
