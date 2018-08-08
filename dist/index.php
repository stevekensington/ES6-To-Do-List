<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <meta name="description" content="Front end web developer and UI designer.">
    <meta name="keywords" content="Front End Web Developer,UI Developer,UI Design,HTML5,CSS3,Sass,BEM,JavaScript">
    <meta name="author" content="Steve Kensington">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#61146e">
    <meta name="msapplication-TileColor" content="#61146e">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="css/main.css">
    <link href='https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800' rel='stylesheet' type='text/css'>
  </head>
  <body>
    <div class="parralax parralax--subpage1">
      <div class="logo logo--parralax">
        <span class="logo__surround">SK</span>
      </div>
    </div>
    <section class="section section--light">
      <h1>To-Do List</h1>
      <p>A filterable To-Do List using JavaScript ES6 with local storage.</p>

      <div class="to-do">
        <div class="to-do__section">
          <form id="task-form">
            <div class="to-do__input-container">
              <label for="task">New Task</label>
              <input type="text" placeholder="New task name" class="to-do__input to-do__input--animated" name="task" id="task">
            </div>
            <a href="#" class="button button--small button--theme-color right-align" id="add-task">Add Task</a>
            <div class="clear"></div>
          </form>
        </div>
        <div class="to-do__section" id="task-list">
          <div class="to-do__input-container">
            <label for="filter">Filter Tasks</label>
            <input type="text" placeholder="Filter your tasks" class="to-do__input to-do__input--small right-align" name="filter" id="filter">
            <h2 id="task-title">Tasks</h2>
            <div class="clear"></div>
          </div>
          <ul class="to-do-tasks"></ul>
          <a href="#" class="button button--small button--warning right-align" id="clear-tasks">Clear All Tasks</a>
          <div class="clear"></div>
        </div>
      </div>

    </section>
    <div class="parralax parralax--subpage2"><!-- --></div>
    <?php include("includes/_footer.php");?>
    <script type="text/javascript" src="js/todo.js"></script>
  </body>
</html>
