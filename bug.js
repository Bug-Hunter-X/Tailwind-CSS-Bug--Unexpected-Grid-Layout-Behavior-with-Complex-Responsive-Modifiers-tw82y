```javascript
// Example of an uncommon Tailwind CSS bug: unexpected behavior with complex responsive modifiers

<div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4">
    Div 1
  </div>
  <div class="bg-red-500 p-4">
    Div 2
  </div>
  <div class="bg-green-500 p-4">
    Div 3
  </div>
</div>
```