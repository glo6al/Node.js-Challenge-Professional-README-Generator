// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
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
  renderLicenseBadge, }