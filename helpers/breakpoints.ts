/* 
https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/

- 0-550px — Mobile
- 550-1100px — Tablet
- 1100-1500px — Laptop
- 1500+px — Desktop
*/

// Desktop first approach
export const BREAKPOINTS = {
  laptopMax: 1500,
  laptopMin: 1024,
  tabletMax: 1100,
  mobileMax: 550,
};

export const QUERIES = {
  laptopAndBelow: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  laptopMinAndBelow: `(max-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  tabletAndBelow: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  mobileAndBelow: `(max-width: ${BREAKPOINTS.mobileMax / 16}rem)`,
};
