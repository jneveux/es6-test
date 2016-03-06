export default class Cats {

  /**
   *
   * @param $http
   */
  /*@ngInject*/
  constructor($http) {
    this.name = 'Cats';
//    HTTP.set(this, $http);
    this.$http = $http;
  }

  getName() {
    return 'Jimy';
  }

  getCategory() {
    var url = 'http://librivox.org/api/feed/audiobooks/author/Melville?format=jsonp&callback=JSON_CALLBACK';
    var url2 = 'http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=jsonp_callback';
    return this.$http.jsonp(url);
  }


}
