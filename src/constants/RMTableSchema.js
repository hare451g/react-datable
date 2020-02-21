import { BASE_RM_API } from './services';

const RMTableSchema = {
  tableName: 'Rick & Morty Characters',
  fetchURL: BASE_RM_API,
  responseFieldArray: ['data', 'results'],
  initialRequestParams: { results: 10, seed: 'jakarta' },
  columns: [
    {
      label: 'Photo',
      field: ['image'],
      type: 'Image',
      defaultValue: '-'
    },
    {
      label: 'Name',
      field: ['name'],
      type: String,
      defaultValue: '-'
    },
    {
      label: 'Species',
      field: ['species'],
      type: String,
      defaultValue: '-'
    },
    {
      label: 'Gender',
      field: ['gender'],
      type: String,
      defaultValue: '-'
    },
    {
      label: 'Status',
      field: ['status'],
      type: String,
      defaultValue: '-'
    },
    {
      label: 'Origin',
      field: ['origin', 'name'],
      type: String,
      defaultValue: '-'
    }
  ]
};

export default RMTableSchema;
