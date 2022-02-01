import getCity from './app';

const domFunctions = (() => {
  function citySearch() {
    const citySearchInput = document.getElementById('city-search');

    citySearchInput.addEventListener('search', () => {
      getCity(citySearchInput.value);
    });
  }

  return { citySearch };
})();

export default domFunctions;
