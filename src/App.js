import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="navigation" class="mb-40 w-full bg-gray-800">
  <ul id="desktop-nav" class="hidden md:flex">
    <li class="relative">
      <a id="current" href="#" class="block bg-blue-600 px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Home</a>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Features</a>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Shortcodes</a>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Portfolio</a>
      <ul class="absolute left-0 hidden hover:opacity-100">
        <li class="relative">
          <a href="#" class="block w-40 border-gray-800 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white">2 Columns</a>
        </li>
        <li class="relative">
          <a href="#" class="block w-40 border-gray-800 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white">3 Columns</a>
        </li>
        <li class="relative">
          <a href="#" class="block w-40 border-gray-800 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white">4 Columns</a>
        </li>
        <li class="relative">
          <a href="#" class="block w-40 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white">Single Project</a>
        </li>
      </ul>
    </li>

    <li class="relative">
      <a href="#" class="block w-40 px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Shop</a>
    
      <ul class="absolute left-0 w-40 bg-gray-800 hover:opacity-100">
        <li class="relative">
          <a href="#" class="block border-gray-800 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white">Shop</a>
        </li>
        <li class="relative">
          <a href="#" class="block px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white">Product Page</a>
        </li>
      </ul>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Blog</a>
    </li>
    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Contact</a>
    </li>
  </ul>

  <ul id="mobile-nav" class="flex flex-col md:hidden">
    <li class="relative">
      <a id="current" href="#" class="block bg-blue-600 px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Home</a>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Features</a>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Shortcodes</a>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Portfolio</a>
      <ul class="absolute left-0 hidden hover:opacity-100">
        <li class="">
          <a href="#" class="block w-40 border-gray-800 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white">2 Columns</a>
        </li>
        <li class="">
          <a href="#" class="block w-40 border-gray-800 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white">3 Columns</a>
        </li>
        <li class="">
          <a href="#" class="block w-40 border-gray-800 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white">4 Columns</a>
        </li>
        <li class="">
          <a href="#" class="block w-40 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white">Single Project</a>
        </li>
      </ul>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Shop</a>
     
      <ul class="ml-5 flex flex-col bg-gray-800 hover:opacity-100">
        <li class="relative">
          <a href="#" class="block w-40 border-gray-800 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white">Shop</a>
        </li>
        <li class="relative">
          <a href="#" class="block w-40 px-4 py-2 font-sans text-xs text-gray-500 hover:bg-blue-600 hover:text-white">Product Page</a>
        </li>
      </ul>
    </li>

    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Blog</a>
    </li>
    <li class="relative">
      <a href="#" class="block px-6 py-4 text-sm font-semibold text-white hover:bg-blue-600 hover:text-white">Contact</a>
    </li>
  </ul>
</div>

  );
}

export default App;
