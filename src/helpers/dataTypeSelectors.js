import moment from 'moment';

function dataTypeSelectors({ type, value, defaultValue }) {
  switch (type) {
    case String:
      return value.toString();
    case Number:
      return parseInt(value);
    case Date:
      return moment(value).format('DD MMMM YYYY');
    default:
      return defaultValue.toString();
  }
}

export default dataTypeSelectors;
