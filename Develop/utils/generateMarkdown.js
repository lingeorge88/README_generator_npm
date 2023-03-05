// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none'){
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none'){
    return `![Link to license]https://opensource.org/license/${license})`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = "";
  // if a license has been selected, create License section
  // with link to license information
  if (license != "none") {
    licenseSect += "Please see " + renderLicenseLink(license) + "to get detailed information for this license\n";
  }

  return licenseSect;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Deployed Application URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Installation] (#installation)
* [Dependencies]
* [Usage] (#usage)
* [License] (#license)
* [Contributors] (#contributors)
* [Tests] (*tests)
* [Questions] (*questions)
## Installation
${data.installation}
## Dependencies
${data.dependencies}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributors
${data.contributors}
## Tests
${data.test}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
