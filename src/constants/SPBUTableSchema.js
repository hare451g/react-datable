import { BASE_SPBU_API } from './services';

const SPBUTableSchema = {
  tableName: 'SPBU Table',
  fetchURL: BASE_SPBU_API,
  responseFieldArray: ['data'],
  columns: [
    {
      label: 'Code',
      field: ['spbuCode'],
      type: String,
      defaultValue: '-'
    },
    {
      label: 'Street',
      field: ['street'],
      type: String,
      defaultValue: '-'
    },
    {
      label: 'Region',
      field: ['region'],
      type: String,
      defaultValue: '-'
    },
    {
      label: 'Image',
      field: ['spbuImage'],
      type: String,
      defaultValue: '-'
    },
    {
      label: 'Created At',
      field: ['createdAt'],
      type: Date,
      defaultValue: '-'
    },
    {
      label: 'Updated At',
      field: ['updatedAt'],
      type: Date,
      defaultValue: '-'
    }
  ]
};

export default SPBUTableSchema;
