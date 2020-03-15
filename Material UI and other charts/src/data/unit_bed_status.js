// module.exports = [
//   {
//     "Floor": 3,
//     "Unit": "3S",
//     "Status": "Occupied",
//     "No of Beds": 14
//   },
//   {
//     "Floor": 3,
//     "Unit": "3S",
//     "Status": "To Be Cleaned",
//     "No of Beds": 2
//   },
//   {
//     "Floor": 3,
//     "Unit": "3S",
//     "Status": "Vacant and Clean",
//     "No of Beds": 4
//   },
//   {
//     "Floor": 3,
//     "Unit": "3S Ortho",
//     "Status": "Occupied",
//     "No of Beds": 4
//   },
//   {
//     "Floor": 3,
//     "Unit": "3S Ortho",
//     "Status": "To Be Cleaned",
//     "No of Beds": 0
//   },
//   {
//     "Floor": 3,
//     "Unit": "3S Ortho",
//     "Status": "Vacant and Clean",
//     "No of Beds": 1
//   },
//   {
//     "Floor": 3,
//     "Unit": "3S Surg",
//     "Status": "Occupied",
//     "No of Beds": 3
//   },
//   {
//     "Floor": 3,
//     "Unit": "3S Surg",
//     "Status": "To Be Cleaned",
//     "No of Beds": 1
//   },
//   {
//     "Floor": 3,
//     "Unit": "3S Surg",
//     "Status": "Vacant and Clean",
//     "No of Beds": 1
//   },
//   {
//     "Floor": 3,
//     "Unit": "3S Thoracic",
//     "Status": "Occupied",
//     "No of Beds": 5
//   },
//   {
//     "Floor": 3,
//     "Unit": "3S Thoracic",
//     "Status": "To Be Cleaned",
//     "No of Beds": 0
//   },
//   {
//     "Floor": 3,
//     "Unit": "3S Thoracic",
//     "Status": "Vacant and Clean",
//     "No of Beds": 0
//   },
//   {
//     "Floor": 3,
//     "Unit": "3W",
//     "Status": "Occupied",
//     "No of Beds": 15
//   },
//   {
//     "Floor": 3,
//     "Unit": "3W",
//     "Status": "To Be Cleaned",
//     "No of Beds": 0
//   },
//   {
//     "Floor": 3,
//     "Unit": "3W",
//     "Status": "Vacant and Clean",
//     "No of Beds": 5
//   },
//   {
//     "Floor": 4,
//     "Unit": "4E",
//     "Status": "Occupied",
//     "No of Beds": 13
//   },
//   {
//     "Floor": 4,
//     "Unit": "4E",
//     "Status": "To Be Cleaned",
//     "No of Beds": 5
//   },
//   {
//     "Floor": 4,
//     "Unit": "4E",
//     "Status": "Vacant and Clean",
//     "No of Beds": 2
//   },
//   {
//     "Floor": 4,
//     "Unit": "4W",
//     "Status": "Occupied",
//     "No of Beds": 17
//   },
//   {
//     "Floor": 4,
//     "Unit": "4W",
//     "Status": "To Be Cleaned",
//     "No of Beds": 2
//   },
//   {
//     "Floor": 4,
//     "Unit": "4W",
//     "Status": "Vacant and Clean",
//     "No of Beds": 1
//   },
//   {
//     "Floor": 5,
//     "Unit": "5E",
//     "Status": "Occupied",
//     "No of Beds": 19
//   },
//   {
//     "Floor": 5,
//     "Unit": "5E",
//     "Status": "To Be Cleaned",
//     "No of Beds": 1
//   },
//   {
//     "Floor": 5,
//     "Unit": "5E",
//     "Status": "Vacant and Clean",
//     "No of Beds": 0
//   },
//   {
//     "Floor": 5,
//     "Unit": "5W",
//     "Status": "Occupied",
//     "No of Beds": 5
//   },
//   {
//     "Floor": 5,
//     "Unit": "5W",
//     "Status": "To Be Cleaned",
//     "No of Beds": 3
//   },
//   {
//     "Floor": 5,
//     "Unit": "5W",
//     "Status": "Vacant and Clean",
//     "No of Beds": 2
//   },
//   {
//     "Floor": 6,
//     "Unit": "CYS",
//     "Status": "Occupied",
//     "No of Beds": 9
//   },
//   {
//     "Floor": 6,
//     "Unit": "CYS",
//     "Status": "To Be Cleaned",
//     "No of Beds": 0
//   },
//   {
//     "Floor": 6,
//     "Unit": "CYS",
//     "Status": "Vacant and Clean",
//     "No of Beds": 1
//   },
//   {
//     "Floor": 6,
//     "Unit": "HAU",
//     "Status": "Occupied",
//     "No of Beds": 8
//   },
//   {
//     "Floor": 6,
//     "Unit": "HAU",
//     "Status": "To Be Cleaned",
//     "No of Beds": 1
//   },
//   {
//     "Floor": 6,
//     "Unit": "HAU",
//     "Status": "Vacant and Clean",
//     "No of Beds": 1
//   }
// ];

module.exports = {
  labels: ['Occupied', 'Vacant', 'To Be Cleaned'],
  datasets: [
    {
      label: '3S',
      data: [14, 4, 2],
      backgroundColor: ['orange',
        'green',
        'red'],
      borderWidth: 1,
      borderColor: 'black'
    },
    {
      label: '3S Ortho',
      data: [4, 1, 0],
      backgroundColor: ['orange',
        'green',
        'red'],
      borderWidth: 1,
      borderColor: 'black'
    },
    {
      label: '3S Surg',
      data: [3, 1, 1],
      backgroundColor: ['orange',
        'green',
        'red'],
      borderWidth: 1,
      borderColor: 'black'
    },
    {
      label: '3S Thoracic',
      data: [5, 0, 0],
      backgroundColor: ['orange',
        'green',
        'red'],
      borderWidth: 1,
      borderColor: 'black'
    },
    {
      label: '3W',
      data: [15, 5, 0],
      backgroundColor: ['orange',
        'green',
        'red'],
      borderWidth: 1,
      borderColor: 'black'
    },
    {
      label: '4E',
      data: [13, 2, 2],
      backgroundColor: ['orange',
        'green',
        'red'],
      borderWidth: 1,
      borderColor: 'black'
    },
    {
      label: '4W',
      data: [17, 1, 2],
      backgroundColor: ['orange',
        'green',
        'red'],
      borderWidth: 1,
      borderColor: 'black'
    }
  ],

}