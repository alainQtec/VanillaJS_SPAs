class Pageabstact {
  constructor() {
    this.title = `Learning | Html and CSS`;
    this.description = `Description`;
  }
  render() {
    if (process.browser) {
      console.log(process.browser && window.location.pathname);
    } else {
      console.log("No browser window");
    }
  }
}
export default Pageabstact;
