/**
 * Site variables
 * @type {Object}
 * @example
 *   {{@site.<property>}}
 */
module.exports = {
  /**
   * Site title
   * @type {String}
   * @example
   *   {{@site.title}}
   */
  title: 'Creative',
  /**
   * Site url
   * @type {String}
   * @example
   *   {{@site.url}}
   */
  url: 'http://localhost:2080/',
  /**
   * Exclude list
   * @type {Array}
   */
  exclude: [
    'README.md'
  ]
}
