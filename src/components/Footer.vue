<template>
  <footer>
    <div class="container">
      <ul>
        <li>NASA Official: Doug Newman</li>
        <li><a href="https://www.nasa.gov/FOIA/index.html">FOIA</a></li>
        <li><a href="https://www.nasa.gov/about/highlights/HP_Privacy.html">NASA Privacy Policy</a></li>
        <li><a href="https://www.usa.gov/">USA.gov</a></li>
        <li><a href="javascript:feedback.showForm();">Feedback</a></li>
        <div style="float: right">Version: <span class="version badge eui-badge--md">V1.0.0</span></div>
      </ul>
    </div>
  </footer>
</template>
<style scoped>
  footer {
    background: #2276ac;
    color: white;
    padding: 1em 2em;
  }
  footer a:link,
  footer a:visited {
    color: white;
    background: #2276ac;
  }
  footer ul {
    margin: 0.25em 0;
    padding: 0;
  }
  footer ul li {
    display: inline;
  }
  footer ul li:not(:first-child):before {
    content: "\b7";
    margin: 0 0.5em;
  }
  footer .badge {
    position: relative;
    font-size:16px;
    font-weight:normal;
    top: -2px;
  }
</style>
