@php $url = url()->current();@endphp

<title>Poonam Shah</title>

<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="NEXGENO">

<meta name="title" content="Poonam Shah">
<meta name="description" content="Poonam Shah">

<meta content="telephone=no" name="format-detection" />
<meta name="HandheldFriendly" content="true" />

<!----------------- og tag ------------------->

<meta property="og:url" content="{{ $url }}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="{{ url('') }}">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="Poonam Shah">
<meta property="og:description" content="Poonam Shah">
<meta property="og:image" content="{{ asset('assets/frontend/image/Logo_1.png') }}">
<meta property="og:image:width" content="500">
<meta property="og:image:height" content="500">
<meta property="og:image:type" content="image/png" />

<!----------------- og tag ------------------->

<meta name="theme-color" content="#ffffff" />
<link rel="icon" type="image/png" href="image/Logo_1.png" sizes="16x16">
<!----------------- canonical ------------------->

<link rel="canonical" href="{{ url()->current() }}">

<!----------------- canonical ------------------->

<base id="baseUrl" href="{{url('')}}">