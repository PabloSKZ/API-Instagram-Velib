const main = document.getElementById("main");
const url =
  "https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&rows=100&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes";

const showVelibStation = (
  selector,
  name,
  numberClassicalVelibs,
  numberElectricVelibs
) => {
  selector.innerHTML += `
      <div class="card">
          <h2>Station : ${name}</h2>
          <p>${numberClassicalVelibs} classical Velibs</p>
          <p>${numberElectricVelibs} electric Velibs</p>
      </div>
  `;
};

const getVelibStation = (url, selector) => {
  selector.innerHTML = "";
  fetch(url)
    .then((response) => response.json())
    .then((response2) =>
      response2.records.forEach((elem) => {
        showVelibStation(
          main,
          elem.fields.name,
          elem.fields.numbikesavailable,
          elem.fields.ebike
        );
      })
    );
};

getVelibStation(url, main)
setInterval(function () { getVelibStation(url, main) }, 60000)



