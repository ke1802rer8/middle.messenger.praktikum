import Handlebars from 'handlebars';
import * as Components from './components';

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