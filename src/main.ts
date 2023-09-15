import { mockdata } from './mockdata.ts';

document.addEventListener('DOMContentLoaded', () => {
    const sidebarElement = document.getElementById('mySidebar') as any;
    if (sidebarElement) {
      sidebarElement.items = mockdata;
    }
});
