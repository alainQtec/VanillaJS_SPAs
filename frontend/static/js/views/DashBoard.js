import abstractView from "./abstractView";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("DashBoard");
  }
  async getHtml() {
    return `
        <h1>Welcome to Our Dashboard</h1></br>
        <p>lorem Ipsum djfdjfhdjfhdjfsdjfnv jv</p></br>
        <p>lorem Ipsum djfdjfhdjfhdjfsdjfnv jv</p></br>
        <p>lorem Ipsum djfdjfhdjfhdjfsdjfnv jv</p>
        `;
  }
}
