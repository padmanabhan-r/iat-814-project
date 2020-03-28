module.exports = {
  labels: ['Admissions', 'Discharges', 'Transfers'],
  datasets: [
    {
      label: '1N',
      data: [14, 4, 2],
      backgroundColor: 'red',
      borderWidth: 1,
      borderColor: 'black'
    },
	{
      label: '1S',
      data: [8, 2, 0],  
      backgroundColor: 'orange',
      borderWidth: 1,
      borderColor: 'black'
    },
	{
      label: '1W',
      data: [14, 5, 1],
      backgroundColor: 'yellow',
      borderWidth: 1,
      borderColor: 'black'
    },
    {
      label: '1E',
      data: [2, 0, 0],
      backgroundColor: 'green',
      borderWidth: 1,
      borderColor: 'black'
    },
    {
      label: 'BP',
      data: [0, 0, 0],
      backgroundColor: 'blue',
      borderWidth: 1,
      borderColor: 'black'
    },
    {
      label: 'SCU',
      data: [2, 0, 0],
      backgroundColor: 'violet',
      borderWidth: 1,
      borderColor: 'black'
    }
  ]
}