import CryptoJS from 'crypto-js';
import moment from 'moment';
import { marvelApi as config } from 'config/config';
import request from 'utils/request';


export default class MarvelAPI {

  static fetchCharacters(origOptions = {}) {
    const URI = '/v1/public/characters';
    const defaultOptions = { page: 0, count: 20, name: '', nameStartsWith: '' };
    const options = { ...defaultOptions, ...origOptions };

    const timeStamp = moment().unix();
    const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey)
      .toString(CryptoJS.enc.Hex);

    const offset = options.page === 1 ? 0 : (options.count * (options.page - 1))

    let params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}&limit=${options.count}&offset=${offset}`

    if (options.name) {
      params = params.concat(`&name=${options.name}`)
    }
    if (options.nameStartsWith) {
      params = params.concat(`&nameStartsWith=${options.nameStartsWith}`)
    }
    const url = `${config.baseUrl}${URI}${params}`

    return request(url)
  }

  static fetchCharacter(characterId) {
    const URI = `/v1/public/characters/${characterId}`

    const timeStamp = moment().unix();
    const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey)
      .toString(CryptoJS.enc.Hex);

    const params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}`
    
    const url = `${config.baseUrl}${URI}${params}`

    return request(url)
  }
}