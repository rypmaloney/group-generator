const fishiesTeamList = [
  'Anne',
  'Alliyah',
  'Faith',
  //'Griffin',
  //'Shawn',
  //'Zach',
  'Ryan',
  //'Ebony',
  'Claire',
  'Maggie',
  'Sarah',
  'Chelsea',
  'Sam',
  //'Christopher',
  'Caroline',
  'Jami',
  'Rachel',
  'Martin'
];

const fishiesTeamList_attr = [
  {
    name: 'Anne',
    attributes: {
      'dept.': 'ela'
    }
  },
  {
    name: 'Alliyah',
    attributes: {
      'dept.': 'ela'
    }
  },
  {
    name: 'Ryan',
    attributes: {
      title: 'dept.',
      'dept.': 'dev'
    }
  },
  {
    name: 'Faith',
    attributes: {
      'dept.': 'math'
    }
  },
  {
    name: 'Claire',
    attributes: {
      'dept.': 'mgmt'
    }
  },
  {
    name: 'Maggie',
    attributes: {
      'dept.': 'ela'
    }
  },
  {
    name: 'Sarah',
    attributes: {
      'dept.': 'math'
    }
  },
  {
    name: 'Chelsea',
    attributes: {
      'dept.': 'marketing'
    }
  },
  {
    name: 'Sam',
    attributes: {
      'dept.': 'ela'
    }
  },
  {
    name: 'Caroline',
    attributes: {
      'dept.': 'ela'
    }
  },
  {
    name: 'Jami',
    attributes: {
      'dept.': 'math'
    }
  },
  {
    name: 'Rachel',
    attributes: {
      'dept.': 'marketing'
    }
  },
  {
    name: 'Martin',
    attributes: {
      'dept.': 'math'
    }
  }
];

const attributes = [
  {
    title: 'dept.',
    weight: 5
  }
];
const presetAttributes = [
  {
    title: 'dept.',
    weight: 3
  }
];

const testGroups = [
  ['Zach', 'Ebony', 'Jami', 'Chelsea', 'Christopher'],
  ['Shawn', 'Maggie', 'Ryan', 'Sam', 'Sarah'],
  ['Alliyah', 'Sarah', 'Faith', 'Caroline', 'Claire', 'Anne'],
  ['Faith', 'Maggie', 'Jami', 'Chelsea', 'Christopher'],
  ['Shawn', 'Ebony', 'Ryan', 'Sarah', 'Claire'],
  ['Alliyah', 'Sarah', 'Zach', 'Caroline', 'Griffin', 'Anne'],
  ['Faith', 'Maggie', 'Jami', 'Chelsea', 'Christopher'],
  ['Shawn', 'Ebony', 'Ryan', 'Sam', 'Claire'],
  ['Alliyah', 'Sarah', 'Zach', 'Caroline', 'Sarah', 'Anne']
];

const smallGroups = [
  ['Anne', 'Alliyah', 'Faith', 'Griffin', 'Shawn'],
  ['Ryan', 'Ebony', 'Claire', 'Maggie', 'Sarah'],
  ['Chelsea', 'Sam', 'Christopher', 'Caroline', 'Jami'],
  ['Anne', 'Ryan', 'Shawn', 'Sarah', 'Caroline'],
  ['Faith', 'Christopher', 'Alliyah', 'Ebony', 'Griffin'],
  ['Anne', 'Jami', 'Christopher', 'Zach'],
  ['Chelsea', 'Claire', 'Zach', 'Maggie', 'Jami'],
  ['Faith', 'Ebony', 'Chelsea', 'Caroline', 'Ryan'],
  ['Sarah', 'Claire', 'Shawn', 'Alliyah'],
  ['Anne', 'Alliyah', 'Faith', 'Chelsea', 'Claire'],
  ['Ryan', 'Ebony', 'Sarah', 'Zach'],
  ['Jami', 'Shawn', 'Christopher', 'Caroline'],
  ['Anne', 'Ryan', 'Shawn', 'Sarah'],
  ['Alliyah', 'Ebony', 'Jami', 'Chelsea'],
  ['Faith', 'Zach', 'Caroline', 'Claire', 'Christopher']
];

export {
  testGroups,
  fishiesTeamList,
  smallGroups,
  fishiesTeamList_attr,
  attributes,
  presetAttributes
};
