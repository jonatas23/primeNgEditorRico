import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import {CardModule} from 'primeng/card';
import {ListboxModule} from 'primeng/listbox';
import {DialogModule} from 'primeng/dialog';
import {Button} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {NgFor} from '@angular/common';
import {SplitterModule} from 'primeng/splitter';
import {PanelModule} from 'primeng/panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor,
    CardModule,
    AccordionModule,
    ListboxModule,
    FormsModule,
    DialogModule,
    EditorModule,
    Button,
    SplitterModule,
    PanelModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  summaryElementos = [{
    label: 'Elemento 1',
    itens: [
      {label: 'Item 1', content: '<p>Conteúdo do Item 1</p>'},
      {label: 'Item 2', content: '<p>Conteúdo do Item 2</p>'},
      {label: 'Item 3', content: '<p>Conteúdo do Item 3</p>'}
    ]
  },
    {
      label: 'Elemento 2',
      itens: [
        {label: 'Item 1', content: '<p>Conteúdo do Item 1</p>'},
        {label: 'Item 2', content: '<p>Conteúdo do Item 2</p>'},
        {label: 'Item 3', content: '<p>Conteúdo do Item 3</p>'}
      ]
    }
  ]

  text: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';

  selectedItem: any =  { label: '', content: '<p>Conteúdo do Item 1</p>' };
  displayEditor = false;
  documentContent = '';

  openEditor(item: any) {
    this.selectedItem = { ...item }; // Cria uma cópia do item selecionado
    this.displayEditor = !this.displayEditor;
  }

  saveContent() {
    this.displayEditor = false;
    this.updateDocumentContent();
  }

  updateDocumentContent() {
    this.documentContent += this.selectedItem.content;
    this.selectedItem =  { label: '', content: '' };
  }

}
