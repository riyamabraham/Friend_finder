
// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var userData = [
    {
      name: "Aruhi",
      photo: "https://www.biography.com/.image/t_share/MTQzMzAxODc2MTU3MjYxMzgz/emma-watson_gettyimages-619546914jpg.jpg",
      "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
    },
    {
      name: "Neha",
      photo: "http://www.infonfacts.com/wp-content/uploads/2018/03/Disha-Patani-1-1900x-1000x500-990x495.jpg",
      "scores":[
        1,
        1,
        3,
        4,
        5,
        5,
        2,
        4,
        4,
        1
      ]
    }
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = userData;
  