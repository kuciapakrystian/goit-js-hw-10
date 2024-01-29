import { breedSelect } from './index';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

//A function that generates markup for a drop-down list
const renderBreedsSelect = breeds => {
  const markup = breeds
    .map(breed => {
      return `<option value="${breed.reference_image_id}">${breed.name}</option>`;
    })
    .join('');
  breedSelect.insertAdjacentHTML('beforeend', markup);
  //Initializing the 'slim-select' library to generate select
  new SlimSelect({
    select: '#single',
  });
};

export { renderBreedsSelect };