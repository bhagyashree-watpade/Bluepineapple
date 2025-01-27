/**
 * A Custom Web Component for a dynamic table.
 * Attributes:
 *   - columns: A comma-separated list of column names.
 *   - selectable: Makes the rows selectable if set.
 * Properties:
 *   - rows: A 2D array containing the table data.
 * Events:
 *   - row-select: Emitted when a row is selected (only if selectable is true).
 */

class CustomTableElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.rows = [];
  
      // Basic styling for the component
      const style = document.createElement('style');
      style.textContent = `
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f4f4f4;
          cursor: pointer;
        }
        tr:hover {
          background-color: #f1f1f1;
        }
        tr.selected {
          background-color: #c3e6cb;
        }
      `;
  
      this.shadowRoot.appendChild(style);
      this.table = document.createElement('table');
      this.shadowRoot.appendChild(this.table);
    }
  
    static get observedAttributes() {
      return ['columns', 'selectable'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'columns') {
        this.renderTable();
      }
      if (name === 'selectable') {
        this.renderTable();
      }
    }
  
    set rowsData(data) {
      this.rows = data;
      this.renderTable();
    }
  
    get rowsData() {
      return this.rows;
    }
  
    renderTable() {
      const columns = (this.getAttribute('columns') || '').split(',').map(col => col.trim());
      const selectable = this.hasAttribute('selectable');
  
      this.table.innerHTML = '';
  
      // Render table headers
      if (columns.length > 0) {
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        columns.forEach(column => {
          const th = document.createElement('th');
          th.textContent = column;
          tr.appendChild(th);
        });
        thead.appendChild(tr);
        this.table.appendChild(thead);
      }
  
      // Render table rows
      const tbody = document.createElement('tbody');
      this.rows.forEach((row, rowIndex) => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
          const td = document.createElement('td');
          td.textContent = cell;
          tr.appendChild(td);
        });
  
        if (selectable) {
          tr.addEventListener('click', () => this.selectRow(tr, rowIndex));
        }
        tbody.appendChild(tr);
      });
      this.table.appendChild(tbody);
    }
  
    selectRow(rowElement, index) {
      const previouslySelected = this.shadowRoot.querySelector('tr.selected');
      if (previouslySelected) {
        previouslySelected.classList.remove('selected');
      }
      rowElement.classList.add('selected');
  
      const event = new CustomEvent('row-select', {
        detail: { index, row: this.rows[index] },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
    }
  }
  
  customElements.define('custom-table', CustomTableElement);
  