const data = [
  {
    DateTime: "2019-11-22T00:00:00",
    Title: "UMKM Berkah Mandiri sesuai dengan kriteria anda, ayo modalin mereka"
  },
  {
    DateTime: "2019-11-22T00:00:00",
    Title:
      "UMKM Dwiyasa Mandiri sesuai dengan kriteria anda, ayo modalin mereka"
  },
  {
    DateTime: "2019-11-22T00:00:00",
    Title: "UMKM Aulia Mandiri sesuai dengan kriteria anda, ayo modalin mereka"
  },
  {
    DateTime: "2019-11-23T00:00:00",
    Title: "UMKM Kusuma Mandiri sesuai dengan kriteria anda, ayo modalin mereka"
  },
  {
    DateTime: "2019-11-23T00:00:00",
    Title: "UMKM Afriza Mandiri sesuai dengan kriteria anda, ayo modalin mereka"
  },
  {
    DateTime: "2019-11-24T00:00:00",
    Title: "UMKM  Mandiri sesuai dengan kriteria anda, ayo modalin mereka"
  }
];
// this gives an object with dates as keys
const groups = data.reduce((groups, game) => {
  const date = game.DateTime.split("T")[0];
  if (!groups[date]) {
    groups[date] = [];
  }
  groups[date].push(game);
  return groups;
}, {});

// Edit: to add it in the array format instead
export const groupArrays = Object.keys(groups).map(date => {
  return {
    date,
    item: groups[date]
  };
});

// export const testData = async data => {
//   let abc = await groups(data);
//   let xyz = Object.keys(abc).map(date => {
//     return {
//       date,
//       item: groups[date]
//     };
//   });
//   return xyz;
// };
