const render = employees => {
  const html = [];
console.log(employees)
  html.push(...employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );
console.log(html)
  return html.join("");

};

const renderManager = ({name, id, email, officeNumber}) => {
  return`<div class="tile column is-parent">
  <article class="tile is-child box">
    <div class="card">
      <div class="card-content">
          <div class="media-content">
            <p class="title is-4">${name}</p>
            <p class="subtitle is-6">Manager</p>
          </div>
        </div>
        <div class="content">
        <p class="subtitle is-6">Office Number: ${officeNumber}</p>
          <p class="subtitle is-6">Email: ${email}</p>
          <p class="subtitle is-6">ID: ${id}</p>
        </div>
      </div>
      </article>
    </div>
  

`};

const renderEngineer = ({name, id, email, github}) => {
  return` <div class="tile column is-parent">
  <article class="tile is-child box">
    <div class="card">
      <div class="card-content">
          <div class="media-content">
            <p class="title is-4">${name}</p>
            <p class="subtitle is-6">Engineer</p>
          </div>
        </div>
        <div class="content">
        <p class="subtitle is-6">Office Number: ${github}</p>
          <p class="subtitle is-6">Email: ${email}</p>
          <p class="subtitle is-6">ID: ${id}</p>
        </div>
      </div>
      </article>
    </div>
  
`};

const renderIntern = ({name, id, email, school}) => {
  return`  <div class="tile column is-parent">
  <article class="tile is-child box">
    <div class="card">
      <div class="card-content">
        <div class="media-content">
          <p class="title is-4">${name}</p>
          <p class="subtitle is-6">Intern</p>
        </div>
      </div>
      <div class="content">
        <p class="subtitle is-6">Office Number: ${school}</p>
        <p class="subtitle is-6">Email: ${email}</p>
        <p class="subtitle is-6">ID: ${id}</p>
      </div>
    </div>
  </article>
</div>
`};


module.exports = employees=>{
  return`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"/>
    <title>Team Profile Generator</title>
  </head>

  <body>
    <section class="hero is-small">
      <div class="teamprobg">
       <div class="hero-head">
          <nav class="navbar is-transparent">
            <div class="container">
              <div id="navbarMenuHeroA" class="navbar-menu">
                <div class="navbar-end">
                </div>
                </div>
              </div>
            </nav>
          </div>
        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
          <div class="teampro">
            <a>
              <img src="Team Pro.png" alt="Logo" />
            </a>
          </div>
          <div class="container is-fluid has-text-centered">
            <p class="title">Welcome</p>
            <p class="subtitle has-text-white">Team Profile Generator</p>
          </div>
        </div>
    </section>
    
    <div class="container">
    <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
${render(employees)}
    </div>
    </div>
  </body>
</html>
`};