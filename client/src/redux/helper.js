const formatData = (data, tabName) => {
  const newData = [];
  switch (tabName) {
    case 'people':
      data.forEach(item => {
        newData.push({
          "Name": item.name,
          "Height": item.height,
          "Mass": item.mass,
          "Gender": item.gender,
          "Birth Year": item.birth_year,
          "Films": item.films
        })
      })
      return newData;
    case 'planets':
      data.forEach(item => {
        newData.push({
          "Name": item.name,
          "Climate": item.climate,
          "Terrain": item.terrain,
          "Population": item.population,
          "Diameter": item.diameter,
          "Films": item.films
        })
      })
      return newData;
    case 'films':
      data.forEach(item => {
        newData.push({
          "Title": item.title,
          "Director": item.director,
          "Release Date": item.release_date,
          "Episode ID": item.episode_id,
          "Producer": item.producer,
          "Opening Crawl": item.opening_crawl
        })
      })
      return newData;
    case 'species':
      data.forEach(item => {
        newData.push({
          "Name": item.name,
          "Classification": item.classification,
          "Language": item.language,
          "Designation": item.designation,
          "Films": item.films
        })
      })
      return newData;
    case 'vehicles':
      data.forEach(item => {
        newData.push({
          "Name": item.name,
          "Model": item.model,
          "Manufacturer": item.manufacturer,
          "Crew": item.crew,
          "Passengers": item.passengers,
          "Films": item.films
        })
      })
      return newData;
    case 'starships':
      data.forEach(item => {
        newData.push({
          "Name": item.name,
          "Model": item.model,
          "Manufacturer": item.manufacturer,
          "Crew": item.crew,
          "Passengers": item.passengers,
          "Films": item.films
        })
      })
      return newData;
    default:
      return newData;
  }
}
export default formatData;