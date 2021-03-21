<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Lara React Admin</title>

        {{-- Admin LTE --}}
        <link rel="stylesheet" href="{{ asset('css/adminlte.min.css') }}">
        <!-- Google Font: Source Sans Pro -->
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    </head>
    <body class="hold-transition sidebar-mini">
        <div id="root"></div>
    </body>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/adminlte.js') }}"></script>
</html>
