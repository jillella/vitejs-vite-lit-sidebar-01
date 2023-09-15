import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type SidebarItem = {
  label: string;
  icon: any;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
};

@customElement('studs-sidebar')
export class StudsSidebar extends LitElement {
  @property({ type: Array }) items: SidebarItem[] = [];

  static styles = css`
    /* Your CSS styling here */
  `;

  render() {
    return html`
      <div>
        ${this.items.map(
          (item) => html`
            <div>
              ${item.icon} ${item.label}
              ${
                item.links
                  ? html`
                    <div ?hidden=${!item.initiallyOpened}>
                      ${item.links.map(
                        (link) =>
                          html` <a href="${link.link}">${link.label}</a> `
                      )}
                    </div>
                  `
                  : ''
              }
            </div>
          `
        )}
      </div>
    `;
  }
}
