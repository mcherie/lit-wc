import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("user-card")
export class UserCard extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      border: 1px solid black;
      border-radius: 5px;
      display: block;
      background-color: aliceblue;
      padding: 10px;
      margin: 10px;
      width: fit-content;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = "World";

  // Render the UI as a function of component state
  render() {
    return html`<div>
        <h2>Hello, ${this.name}!</h2>
        <p>This is a custom component.</p>
        </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'user-card': UserCard;
  }
}