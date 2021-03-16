function JennySelector(name) {
  return searchChildren(document.body, name);
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
//수정중...뜨긴뜨지만 매우 과도한 작업을 함..
export { JennySelector, searchChildren };
