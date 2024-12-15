```javascript
// Solution: using more specific and granular class names for responsive control

<div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4 md:col-span-1 lg:col-span-1">
    Div 1
  </div>
  <div class="bg-red-500 p-4 md:col-span-1 lg:col-span-1">
    Div 2
  </div>
  <div class="bg-green-500 p-4 md:col-span-2 lg:col-span-1">
    Div 3
  </div>
</div>
```