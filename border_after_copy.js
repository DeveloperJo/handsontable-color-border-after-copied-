const container = document.querySelector('#example4');

const hot = new Handsontable(container, {
  data: [
    ['', 'Tesla', 'Toyota', 'Honda', 'Ford'],
    ['2018', 10, 11, 12, 13, 15, 16],
    ['2019', 10, 11, 12, 13, 15, 16],
    ['2020', 10, 11, 12, 13, 15, 16],
  ],
  rowHeaders: true,
  colHeaders: true,
  afterCopy: function(data, selection) {
    const startCol = selection['0']['startCol'];
    const startRow = selection['0']['startRow'];
    const endCol = selection['0']['endCol'];
    const endRow = selection['0']['endRow'];

    hot.updateSettings({
      customBorders:[
        {
          range: {
            from: {
              row: startRow,
              col: startCol
            },
            to: {
              row: endRow,
              col: endCol
            }
          },
          top: {
            width: 3,
            color: 'red'
          },
          bottom: {
            width: 3,
            color: 'red'
          },
          start: {
            width: 3,
            color: 'red'
          },
          end: {
            width: 3,
            color: 'red'
          }
        }
      ]
    });
    
  },
  height: 'auto',
  licenseKey: 'non-commercial-and-evaluation'
});
