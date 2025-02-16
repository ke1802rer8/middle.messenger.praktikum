import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
const pages = {
  'login': [ Pages.LoginPage ],
  'list': [ Pages.ListPage, {
    cats: [
      {name: 'cat-1', avatar: ""},
      {name: 'cat-2', avatar: "", active: true},
      {name: 'cat-3', avatar: ""},
    ],
    showDialog: true
  }],
  'nav': [ Pages.NavigatePage ]
};

Object.entries(Components).forEach(([ name, template ]) => {
  Handlebars.registerPartial(name, template);
});

function navigate(page: string) {
  // @ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;

  const templatingFunction = Handlebars.compile(source);
  console.log('html', templatingFunction(context));
  container.innerHTML = templatingFunction(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('list'));

document.addEventListener('click', (e) => {
  // @ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});