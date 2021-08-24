<template>
  <div class="container">
    <div class="container-lg">
      <div class="pt-5 justify-content-center">
        <h2 class="display-4">1. Review Content</h2>
        <p>The links on this page will open a new tab. You can switch back to this tab to review the task instructions.</p>
        <ol>
            <li>Visit the Earthdata Pub Overview <router-link to="/beta" target="_blank">Content</router-link>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
              </svg>.
            </li>
            <li>Read the sections "What is a NASA DAAC?" and "Data Scope and Acceptance Policy", which have completed their first draft.</li>
            <li>Consider what information you would need that is not provided or mentioned as in draft.</li>
            <li>Provide feedback using the form below.</li>
            <li>Return to <router-link to="/instructions">How to Test</router-link> instructions.</li>
        </ol>
        <hr />
        <p>Please reflect on your experience with Earthdata Pub during this task and use the form below to submit your feedback.</p>
        <p>You may submit an unlimited number of responses (i.e. to describe separate issues, requests, suggestions, etc.). The form will refresh after each submission.</p>
        <iframe width="900" height="1000" src="https://app.smartsheet.com/b/form/7cf41c2ef4844930a38bea121474c193"></iframe>
      </div>
    </div>
  </div>
</template>
