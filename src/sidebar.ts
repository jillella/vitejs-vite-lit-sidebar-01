import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface SidebarItem {
  label: string;
  icon: any;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
}

@customElement('studs-sidebar')
export class StudsSidebar extends LitElement {
  @property({ type: Array }) items: SidebarItem[] = [];

  static styles = css`
  :host {
    display: block;
    width: 200px;
    height: 100vh;
    padding: 0.5rem;
    background-color: #f0f0f0;
    overflow: auto;
  }

  div.nav-group {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  div.nav-item {
    padding-left: 1.5rem;
  }

  a {
    display: block;
    color: #333;
    text-decoration: none;
    padding: 5px 0;
  }

  a:hover {
    color: #646cff;
  }

  .arrow {
    cursor: pointer;
    display: inline-block;
    margin-left: 5px;
    transition: transform 0.3s ease;
  }

  .arrow.open {
    transform: rotate(90deg);
  }
`;

toggleLinks(item: SidebarItem) {
  item.initiallyOpened = !item.initiallyOpened;
  this.requestUpdate();
}

render() {
  return html`
    <div>
      ${this.items.map(
        (item) => html`
          <div class='nav-group'>
            ${item.icon} ${item.label}
            ${item.links
              ? html`
                  <span class="arrow ${item.initiallyOpened ? 'open' : ''}" @click=${() => this.toggleLinks(item)}>
                    >
                  </span>
                  <div class='nav-item' ?hidden=${!item.initiallyOpened}>
                    ${item.links.map(
                      (link) =>
                        html` <a href="${link.link}">${link.label}</a> `
                    )}
                  </div>
                `
              : ''}
          </div>
        `
      )}
    </div>
  `;
}
}
