import SpeechKit from '@mastashake08/speech-kit'
class Gutendex {
  /*
  * Returns a new instance of Gutendex.
  * @params {string} baseUrl - the base URL for gutendex API. Defaults to cloud instance
  * @returns {Gutendex} - a new instance of Gutendex
  */

  constructor ({
    baseUrl = 'https://gutendex.com/books'
  }) {
    this.baseUrl = baseUrl
  }

  /*
  * Returns a new book by ID from Gutenberg database.
  * @params {string} baseUrl - the base URL for gutendex API. Defaults to cloud instance
  * @returns {object} - ebook metadata JSON object
  */

  async getBook (id) {
    try {
      const res = await fetch(this.baseUrl + `/${id}`)
      return res
    } catch (e) {
      alert(`${e.name} - ${e.message}`)
    }
  }

  /*
  * Returns a collection of books by ID from Gutenberg database.
  * @params {string} baseUrl - the base URL for gutendex API. Defaults to cloud instance
  * @returns {array | null} - ebook metadata JSON collection
  */

  async getBooksByIds (ids) {
    try {
      const res = await fetch(this.baseUrl + `?ids=${ids}`)
      return res
    } catch (e) {
      alert(`${e.name} - ${e.message}`)
    }
  }

  async getBooksByTopic (topic) {
    try {
      const res = await fetch(this.baseUrl + `?topic=${topic}`)
      return res
    } catch (e) {
      alert(`${e.name} - ${e.message}`)
    }
  }

  async getBooksByTerm (term) {
    try {
      const res = await fetch(this.baseUrl + `?search=${topic}`)
      return res
    } catch (e) {
      alert(`${e.name} - ${e.message}`)
    }
  }

  async getBooksByMimeType (type) {
    try {
      const res = await fetch(this.baseUrl + `?mime_type=${type}`)
      return res
    } catch (e) {
      alert(`${e.name} - ${e.message}`)
    }
  }

  async readBook (id) {
    try {
      const res = await fetch(this.baseUrl + `/${id}?mime_type=text%2F`)
      return res
    } catch (e) {
      alert(`${e.name} - ${e.message}`)
    }
  }
}

export { Gutendex }
