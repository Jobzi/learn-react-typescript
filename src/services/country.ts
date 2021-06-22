import axios from 'axios'
import { CountryResponseFromApi, Information } from '../interfaces/types'
const apiCountry = 'https://cryptic-temple-10060.herokuapp.com/api/country'

export const getAllCountry = () => {
  // fetchCountry()
  //   .then(apiCountries => {
  //     const countries = mapFormApiToItems(apiCountries)
  //     console.log(countries)
  //     setItems(countries)
  //   })
  return fetchCountryAxios()
    .then(mapFormApiToItems)
}

// eslint-disable-next-line no-unused-vars
const fetchCountry = ():Promise<Array<CountryResponseFromApi>> => {
  return fetch(apiCountry).then(res => res.json())
}

const fetchCountryAxios = async ():Promise<Array<CountryResponseFromApi>> => {
  const response = await axios.get(apiCountry)
  return response.data
}

const mapFormApiToItems = (apiRes:Array<CountryResponseFromApi>): Array<Information> => {
  return apiRes.map(countryFromApi => {
    const {
      image: avatar,
      city: name,
      population: age,
      country: description
    } = countryFromApi
    return {
      avatar,
      name,
      age,
      description
    }
  })
}
