/**
 * Function which controls the extra zeros in the formatTime func.
 * @function controlZero
 * @param value  { number }
 * @returns  { number }
 */

const controlZero = value => (value < 10 ? '0' + value : value);

/**
 * Function which helps formatting the time obtained from the audio event
 * @function formatTime
 * @param time  { timestamp }
 * @returns  {string}  in time format 00:00
 */

export const formatTime = time => {
  const mins = controlZero(parseInt((time / 60) % 60));
  const secs = controlZero(parseInt(time % 60));
  return `${mins}:${secs}`;
};

/**
 * Function which controls the accurate value of the percentage in the progress bar
 * @function getPercentage
 * @param value  { number }
 * @returns  { number }
 */

export const getPercentage = (current, total) => (current / total) * 100;

/**
 * Function which takes the percentage of the bar at the point that you clicked
 * @function getWidth {DOM element} to get the size information
 * @param el { DOM element }
 * @param callback  { function } callback that runs when the event was listened
 * @returns  { number } Percentage at the clicked point of the element.
 */

export const getWidth = (el, callback) => {
  const bar = el.getBoundingClientRect();
  el.addEventListener('click', e => {
    e.preventDefault();
    const result = ((e.clientX - bar.left) / bar.width) * 100;
    if (callback !== undefined) {
      callback(result);
    }
  });
};
