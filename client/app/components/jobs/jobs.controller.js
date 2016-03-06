class JobsController {

  /**
   * @param (Cats) Cats
   */
  constructor(Cats) {
    "ngInject";
    this.name = 'jobs';
    this.catName = Cats.getName();
    this.jobList = [];
    /*Cats.getCategory().then(function(data){
      this.jobList = data;
      console.log('Job list', this.jobList);
    });*/
    this.cats = Cats;
  }

  getJobList() {
    this.cats.getCategory().then(result => this.jobList = result.data.books);
  }
}

export default JobsController;
