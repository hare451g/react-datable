const tableSchema = [
  {
    label: 'First Name',
    field: ['name', 'first'],
    type: String,
    defaultValue: '-'
  },
  {
    label: 'Last Name',
    field: ['name', 'last'],
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
    label: 'Date of Birth',
    field: ['dob', 'date'],
    type: Date,
    defaultValue: '-'
  },
  {
    label: 'Phone Number',
    field: ['phone'],
    type: String,
    defaultValue: '-'
  },
  {
    label: 'Email',
    field: ['email'],
    type: String,
    defaultValue: '-'
  },

  {
    label: 'Country',
    field: ['location', 'country'],
    type: String,
    defaultValue: '-'
  },
  {
    label: 'City',
    field: ['location', 'city'],
    type: String,
    defaultValue: '-'
  }
];

export default tableSchema;
