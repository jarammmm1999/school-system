<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?=COMPANY?></title>
    <link rel="shortcut icon" href="<?= SERVERURL ?>/Views/assets/images/logo.png" type="image/x-icon">
    <script src="https://kit.fontawesome.com/9b2b8e0f24.js" crossorigin="anonymous"></script>
    <?php include "./Views/inc/Css.php"?>
</head>
<body>
    <?php

    require_once "./Controller/VistaControlador.php";

    $IVC = new VistaControlador();

    $vistasPaginas = $IVC->obtener_vista_controlador();

    if($vistasPaginas == "login" || $vistasPaginas == "404"){

        require_once "./Views/content/".$vistasPaginas."-view.php";

    }else{

       include $vistasPaginas;
    }

    ?>
 <?php include "./Views/inc/Scripts.php"?>
</body>
</html>