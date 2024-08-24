import React from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function Model() {

const savechanges=()=>{

  toast.success('Successfully added')
}
  return (
    <div>
      <ToastContainer/>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Choose your size:</p>
              <form action="/action_page.php">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                <label for="html">SMALL</label>
                <br />
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css">MEDIUM</label>
                <br />
                <input
                  type="radio"
                  id="javascript"
                  name="fav_language"
                  value="JavaScript"
                />
                <label for="javascript">LARGE</label>
               
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button   type="button" onClick={savechanges}
               
                data-bs-dismiss="modal" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
