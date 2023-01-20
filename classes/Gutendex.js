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
}

export { Gutendex }
