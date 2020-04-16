const main = document.getElementById("main");
const url = "https://www.instagram.com/metroboomin/?__a=1";


const showInstagramPost = (selector, URL, descriptionText = "yoo") => {
  selector.innerHTML += `
    <div class="col-4">
    <div class="card">  
        <img src='${URL}' alt='' class="img-fluid" />
        <div class="card-body">
        <p>${descriptionText}</p>
    </div>
    </div>
`;
  
};

fetch(url)
  .then((response) => response.json())
  .then((response2) =>
    response2.graphql.user.edge_owner_to_timeline_media.edges.forEach(
      (element) => {
        showInstagramPost(
          main,
          element.node.display_url,
          element.node.edge_media_to_caption.edges[0].node.text
        );
      }
    )
  );
