import reservation from "../materials/res.png";
import recipe from "../materials/reci.png";
import flashcard from "../materials/fla.png";
import decoder from "../materials/dec.png";

function projectExamples() {
  const projectLinks = {
    reservation: "https://reservationapp.adamtsaidev.com/",
    flashcard: "https://flashcardapp.adamtsaidev.com/",
    decoder: "https://decoderapp.adamtsaidev.com/",
    recipe: "https://recipeapp.adamtsaidev.com/",
  };

  return (
    <div>
      <div>React Projects</div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 border border-dark btn-secondary">
            <div role="button">
              <img
                src={reservation}
                alt=""
                title="Restautant Revervation App"
                class="col-md-auto my-3"
                onClick={() => {
                  window.open(projectLinks.reservation);
                }}
              ></img>
            </div>
          </div>
          <div class="col-lg-6 border border-dark btn-secondary">
            <div role="button">
              <img
                src={flashcard}
                alt=""
                title="Flashcard App"
                class="col-md-auto my-3"
                onClick={() => {
                  window.open(projectLinks.flashcard);
                }}
              ></img>
            </div>
          </div>
          <div class="w-100"></div>
          <div class="col-lg-6 border border-dark btn-secondary">
            <div role="button">
              <img
                src={decoder}
                alt=""
                title="Decoder App"
                class="col-md-auto my-3"
                onClick={() => {
                  window.open(projectLinks.decoder);
                }}
              ></img>
            </div>
          </div>
          <div class="col-lg-6 border border-dark btn-secondary">
            <div role="button">
              <img
                src={recipe}
                alt=""
                title="Recipe App"
                class="col-md-auto my-3"
                onClick={() => {
                  window.open(projectLinks.recipe);
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default projectExamples;
