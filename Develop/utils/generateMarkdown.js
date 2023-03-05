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
* [Installation](https://github.com/${data.creator}/README_generator_npm/tree/main/Develop/newFile#installation)
* [Dependencies](https://github.com/${data.creator}/README_generator_npm/tree/main/Develop/newFile#dependencies)
* [Usage](https://github.com/${data.creator}/README_generator_npm/tree/main/Develop/newFile#usage)
* [License](https://github.com/${data.creator}/README_generator_npm/tree/main/Develop/newFile#lic)
* [Contributors](https://github.com/${data.contributors}/README_generator_npm/tree/main/Develop/newFile#contributors)
* [Tests](https://github.com/${data.creator}/README_generator_npm/tree/main/Develop/newFile#tests)
* [Questions](https://github.com/${data.questions}/README_generator_npm/tree/main/Develop/newFile#questions)
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
Please send your questions to ${data.email} or visit [github/${data.creator}](https://github.com/${data.creator}).
`;
}

module.exports = generateMarkdown;
