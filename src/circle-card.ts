import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "./user-card";

@customElement("circle-card")
export class CircleCard extends LitElement {
  static styles = css`
    :host {
      border: 1px solid black;
      border-radius: 50%;
      display: block;
      background-color: pink;
      padding: 30px;
      margin: 10px;
      width: fit-content;
      text-align: center;
    }
  `;


  // Declare reactive properties
  @property()
  name?: string = "Hermione";

  template = html`
    <div>
      And I'm,
      <h2>${this.name}!</h2>
      <p>I will be using Harry's own custom component card below.</p>
        <user-card name="Harry"></user-card>
    </div>`;

  // Render the UI as a function of component state
  render() {
    return this.template;
  }
}
