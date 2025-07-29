<?php

return [

    'server' => env('OCTANE_SERVER', 'swoole'),

    'listen' => env('OCTANE_LISTEN', 'tcp://127.0.0.1:8000'),

    'workers' => env('OCTANE_WORKERS', null),

    'max_requests' => env('OCTANE_MAX_REQUESTS', 500),

    'swoole' => [
        'options' => [
            'package_max_length' => 10 * 1024 * 1024,
        ],
    ],

    'watch' => [
        'enabled' => false,
        'paths' => [
            base_path('app'),
            base_path('config'),
            base_path('routes'),
            base_path('resources/views'),
        ],
        'ignore' => [],
    ],

    'garbage' => [
        'enabled' => false,
    ],

    'tables' => [
        // 'example:1000' => [
        //     'name' => 'string',
        //     'data' => 'string',
        // ],
    ],

    'cache' => [
        'enabled' => false,
    ],

];
