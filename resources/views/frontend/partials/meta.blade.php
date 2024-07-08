@php

$url = url()->current();

@endphp


<title>Adonia offshore</title>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="NEXGENO">

<meta name="title" content="Adonia offshore">
<meta name="description" content="Adonia offshore">

<meta property="og:url" content="{{ $url }}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{{ url('') }}">
<meta property="og:locale" content="en_US">

<meta property="og:title" content="Adonia offshore">
<meta property="og:description" content="Adonia offshore">

<!----------------- og tag ------------------->

<meta property="og:image" content="{{ asset('assets/frontend/images/Logo1.png') }}">
<meta property="og:image:width" content="500">
<meta property="og:image:height" content="500">
<meta property="og:image:type" content="image/png" />

<!----------------- og tag ------------------->

<!----------------- twitter ------------------->

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Adonia offshore">
<meta name="twitter:description" content="Adonia offshore">
<meta name="twitter:image" content="{{ asset('assets/frontend/images/Logo1.png') }}">
<meta name="twitter:site" content="" />
<link rel="shortcut icon" href="{{ asset('/assets/frontend/images/Logo1.png') }}">

<!----------------- twitter ------------------->

<!----------------- canonical ------------------->

<link rel="canonical" href="{{ url()->current() }}">

<!----------------- canonical ------------------->

  


<base id="baseUrl" href="{{url('')}}">