export const paginate = (data, itemsPerPage) => {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    pages.push(data.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage));
  }
  return pages;
};
