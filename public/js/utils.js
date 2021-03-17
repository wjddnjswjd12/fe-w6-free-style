function JennySelector(name) {
  return searchChildren(document.body, name)[0];
}

function searchChildren(node, name, list = []) {
  if (!node) return;
  if (node.classList.contains(name)) {
    list.push(node);
    return;
  }
  for (let x of node.children) {
    searchChildren(x, name, list);
  }
  return list;
}

export { JennySelector, searchChildren };
