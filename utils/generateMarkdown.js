// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  else if (license === 'MIT') {
    return `![License: ${license}](https://img.shields.io/badge/license-MIT-orange)`;
  }
  else if (license === 'GNU') {
    return `![License: ${license}](https://img.shields.io/badge/license-GNU%20AGPLv3-orange)`;
  }
  else if (license === 'Apache') {
    return `![License: ${license}](https://img.shields.io/badge/license-Apache%202.0-orange)`;
  }
  else if (license === 'MPL') {
    return `![License: ${license}](https://img.shields.io/badge/license-Mozilla%20PL%202.0-orange)`;
  }
  else if (license === 'Other') {
    return `This project is licensed elsewhere.`
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  else if (license === 'MIT') {
    return `[${license}](https://spdx.org/licenses/MIT.html)`;
  }
  else if (license === 'GNU') {
    return `[${license}](https://spdx.org/licenses/AGPL-3.0-or-later.html)`;
  }
  else if (license === 'Apache') {
    return `[${license}](https://spdx.org/licenses/Apache-2.0.html)`;
  }
  else if (license === 'MPL') {
    return `[${license}](https://spdx.org/licenses/MPL-2.0.html)`;
  }
  else if (license === 'Other') {
    return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  else if (license) {
    return `Licensed with ${renderLicenseSection(data.license)}`;
  }
}

const renderSection = renderLicenseSection();
const renderLink = renderLicenseLink ();
const renderBadge = renderLicenseBadge ();

module.exports = {
  renderSection: renderSection,
  renderLink: renderLink,
  renderBadge: renderBadge,
}






// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

//module.exports = generateMarkdown;
