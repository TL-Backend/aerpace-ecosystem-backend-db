const { defaultValues } = require("./constant");

exports.getPaginationQuery = ({ pageLimit, pageNumber }) => {
  return `OFFSET((${parseInt(
    pageNumber || defaultValues.DEFAULT_PAGE_NUMBER
  )}-1)*${parseInt(
    pageLimit || defaultValues.DEFAULT_PAGE_LIMIT
  )}) ROWS LIMIT ${pageLimit || defaultValues.DEFAULT_PAGE_LIMIT}`;
};
