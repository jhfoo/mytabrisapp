import { contentView, TextView, Button} from 'tabris';

// This is a simple Tabris.js app you can run immediately by following the
// instructions on the right of this editor. Changes are saved immediately
// and will be visible on your device after a reload via the developer
// console you can swipe in from the right.

new Button({layoutData:'center', text: 'Tap here'})
  .onSelect(showText)
  .appendTo(contentView);

new TextView({centerX: true, padding: 16, bottom: 'prev() 10', font: '24px'})
  .appendTo(contentView);

function showText() {
    $(TextView).only().text = 'Tabris.js rocks!';
}
