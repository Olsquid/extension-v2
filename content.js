// content.js
window.onload = function() {
    var sidebar = document.createElement('div');
    sidebar.style.width = '200px';
    sidebar.style.height = '100%';
    sidebar.style.position = 'fixed';
    sidebar.style.top = '0';
    sidebar.style.right = '0';
    sidebar.style.backgroundColor = '#ccc';
    sidebar.innerHTML = '<h1>My Sidebar</h1>';
    document.body.appendChild(sidebar);
  };